// CanonicalTag removed — canonical tags are now server-rendered via metadata
// With App Router, prefer `metadata` / `generateMetadata()` to produce
// server-side canonical <link> tags. This file intentionally throws if used
// so accidental client-side injection doesn't happen.

export default function CanonicalTag(): null {
  throw new Error(
    'CanonicalTag is removed. Use server-side metadata (metadata.generateMetadata or metadata.alternates.canonical) for canonical URLs.'
  );
}
