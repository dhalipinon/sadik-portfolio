interface Bucket {
  count: number;
  windowStart: number;
}

// Module-scope, in-memory, per-instance. Resets on cold start and isn't
// shared across concurrent serverless instances — a documented, accepted
// limitation at this traffic scale. Upgrade path if real abuse ever shows
// up: @upstash/ratelimit + a free Upstash Redis instance.
const buckets = new Map<string, Bucket>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    buckets.set(key, { count: 1, windowStart: now });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}
