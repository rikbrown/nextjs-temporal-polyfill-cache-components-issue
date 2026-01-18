import('temporal-polyfill/global')

export default function Home() {
  const parsed = Temporal.Instant.from('2026-01-01T12:34:56Z');
  return <>{parsed.toString()}</>;
}
