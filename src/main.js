document.getElementById('app').innerHTML = `
  <h1>Real Formation</h1>
  <p>Application en cours de développement.</p>
`;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.error('Service worker registration failed:', err);
    });
  });
}
