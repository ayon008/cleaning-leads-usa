#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Location where Prisma writes the generated client and engines
// __dirname is not available in ES module scope; derive it from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.resolve(__dirname, '..', 'node_modules', '.prisma', 'client');

function fail(msg) {
  console.error('\n\x1b[31m' + msg + '\x1b[0m\n');
  process.exit(1);
}

try {
  if (!fs.existsSync(clientDir)) {
    fail(`Prisma client folder not found at ${clientDir}. Make sure 'prisma generate' ran successfully.`);
  }

  const files = fs.readdirSync(clientDir);
  // Look for multiple types of possible generated artifacts:
  // - legacy query-engine binaries (query-engine*)
  // - prisma-fmt (used by some engine types)
  // - Node-API compiled modules (.node)
  const hasQueryEngine = files.some((f) => f.startsWith('query-engine'));
  const hasPrismaFmt = files.some((f) => f.startsWith('prisma-fmt'));
  const hasNodeModules = files.some((f) => f.endsWith('.node') || f === 'index.node');

  if (hasQueryEngine || hasPrismaFmt || hasNodeModules) {
    console.log('✅ Prisma query engine or Node-API artifact found in', clientDir);
    process.exit(0);
  }

  // Nothing matched — print detailed diagnostics to help debug in CI logs
  console.error('\nPrisma client folder exists but no engine artifacts were detected.\n');
  console.error('Node version:', process.version);
  try {
    const detailed = files.map((f) => {
      try {
        const s = fs.statSync(path.join(clientDir, f));
        return `${f} — ${s.size} bytes — mtime: ${s.mtime.toISOString()}`;
      } catch (e) {
        return `${f} — (stat failed)`;
      }
    });
    console.error('Prisma client folder contents:\n', detailed.join('\n'));
  } catch {
    console.error('Failed to stat files in client folder');
  }

  fail('No Prisma query engine binary or Node-API artifact found in the generated client. Ensure `prisma generate` ran and downloaded the engines for your platform.');
  process.exit(0);
} catch (err) {
  fail('Error while checking Prisma engines: ' + String(err));
}
// no-op export to satisfy some bundlers
export {};
