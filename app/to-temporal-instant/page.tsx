import('temporal-polyfill/global')

export default function Home() {
  const parsed = new Date('2026-01-01T12:34:56Z').toTemporalInstant()
  return <>{parsed.toString()}</>;
}
