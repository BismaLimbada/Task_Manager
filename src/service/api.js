import { Platform } from 'react-native';

const FALLBACK_QUOTE = { q: 'Stay focused and keep syncing.', a: 'Sync Task' };

// Primary choice: ZenQuotes via open proxy
const fetchZenQuote = async () => {
  // 1. Create a unique timestamp to bust the cache
  const cacheBuster = `?t=${Date.now()}`;
  const zenUrl = `https://zenquotes.io/api/random${cacheBuster}`;
  
  const url =
    Platform.OS === 'web'
      ? `https://api.allorigins.win/raw?url=${encodeURIComponent(zenUrl)}`
      : zenUrl;

  // 2. Add 'cache: no-store' to force the device to ignore local caches
  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`ZenQuotes responded with ${response.status}`);
  }

  const data = await response.json();
  const quote = Array.isArray(data) ? data[0] : data;

  if (!quote?.q) {
    throw new Error('ZenQuotes returned an invalid payload');
  }

  return { q: quote.q, a: quote.a || 'Unknown' };
};

// Secondary choice: Completely open CORS-compliant alternative
const fetchWebFriendlyFallback = async () => {
  // 3. Add the timestamp and cache rules here too, just in case!
  const response = await fetch(`https://dummyjson.com/quotes/random?t=${Date.now()}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Fallback API responded with ${response.status}`);
  }

  const data = await response.json();
  return { q: data.quote, a: data.author };
};

export const fetchQuote = async () => {
  try {
    return await fetchZenQuote();
  } catch (zenError) {
    console.log('ZenQuotes blocked or down; shifting to browser-friendly stream...');
    try {
      return await fetchWebFriendlyFallback();
    } catch (fallbackError) {
      return FALLBACK_QUOTE;
    }
  }
};