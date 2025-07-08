export async function initMock() {
  if (typeof window === "undefined") return;

  const { worker } = await import("./browser");

  await worker.start({
    serviceWorker: {
      url: "/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass", // or 'warn', 'error'
  });
}
