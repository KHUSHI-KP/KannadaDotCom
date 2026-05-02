const store = new Map();

export function getCached(key) {
  const entry = store.get(key);
  if (!entry) return null;
  const { value, expiresAt } = entry;
  if (expiresAt && Date.now() > expiresAt) {
    store.delete(key);
    return null;
  }
  return value;
}

export function setCached(key, value, ttlMs = 5 * 60 * 1000) {
  const expiresAt = ttlMs ? Date.now() + ttlMs : null;
  store.set(key, { value, expiresAt });
}

export function clearCache(key) {
  if (key) store.delete(key);
  else store.clear();
}

export default { getCached, setCached, clearCache };
