import('temporal-polyfill/global')

export default function Home() {
  const parsed = Temporal.Instant.fromEpochMilliseconds(1767270896000);
  return <>{parsed.toString()}</>;
}
