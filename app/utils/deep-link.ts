export function useDeepLink(fallbackUrl: string) {
  const gotToDeepLink = (url: string) => {
    try {
      window.location.href = url;
      // fallback to web link
      setTimeout(() => (window.location.href = fallbackUrl), 750);
    } catch (error) {
      window.location.href = fallbackUrl;
    }
  };

  return { gotToDeepLink };
}
