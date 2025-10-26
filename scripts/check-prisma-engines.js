#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Location where Prisma writes the generated client and engines
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
  const hasEngine = files.some((f) => f.startsWith('query-engine')) || files.some((f) => f.startsWith('prisma-fmt'));

  if (!hasEngine) {
    // Provide helpful diagnostic output
    console.error('Prisma client folder contents:\n', files.join('\n'));
    fail('No Prisma query engine binary found in the generated client. Ensure `prisma generate` ran and downloaded the engines for your platform.');
  }

  console.log('✅ Prisma query engine found in', clientDir);
  process.exit(0);
} catch (err) {
  fail('Error while checking Prisma engines: ' + String(err));
}
// no-op export to satisfy some bundlers
export {};
