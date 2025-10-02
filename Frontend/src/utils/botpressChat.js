// Botpress Chatbot Integration (v3.3)
export const initBotpressChat = () => {
  let injectScriptLoaded = false;

  // Define paths where chatbot should appear
  const landingPagePaths = [
    '/',
    '/terms',
    '/privacy',
    '/contact',
    '/join-as-interviewer'
  ];

  // Paths where chatbot must be completely removed
  const authPaths = [
    '/auth/signin',
    '/auth/reset-password',
  ];

  // Remove all Botpress elements
  function removeAllBotpressElements() {
    const container = document.getElementById('bp-web-widget-container');
    if (container) container.remove();

    // Remove all Botpress scripts
    document.querySelectorAll('script[src*="botpress"]').forEach(el => el.remove());
    const customScript = document.getElementById('botpress-script');
    if (customScript) customScript.remove();

    // Cleanup global object
    if (window.botpressWebChat) {
      try {
        window.botpressWebChat.sendEvent({ type: 'hide' });
        if (typeof window.botpressWebChat.destroy === 'function') {
          window.botpressWebChat.destroy();
        }
      } catch (e) {
        console.warn("Error cleaning Botpress:", e);
      }
      delete window.botpressWebChat;
    }

    // Remove leftover elements/iframes
    document.querySelectorAll('[class*="bp-"], [id*="bp-"]').forEach(el => el.remove());
    document.querySelectorAll('iframe').forEach(iframe => {
      if (iframe.src && iframe.src.includes('botpress')) {
        iframe.remove();
      }
    });
  }

  // Load Botpress when needed
  function handleBotpressVisibility() {
    const currentPath = window.location.pathname;
    const isLandingPage = landingPagePaths.includes(currentPath);

    if (isLandingPage) {
      if (!document.getElementById('bp-web-widget-container')) {
        // Load inject.js first
        if (!document.getElementById('botpress-inject')) {
          const injectScript = document.createElement('script');
          injectScript.id = 'botpress-inject';
          injectScript.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
          injectScript.defer = true;

          injectScript.onload = function () {
            injectScriptLoaded = true;
            // Load config script
            const configScript = document.createElement('script');
            configScript.id = 'botpress-script';
            configScript.src = "https://files.bpcontent.cloud/2025/10/02/16/20251002164824-GO5EVDOL.js";
            configScript.defer = true;
            document.body.appendChild(configScript);
          };

          document.body.appendChild(injectScript);
        } else if (injectScriptLoaded) {
          // If inject.js already loaded → just reload config
          const configScript = document.createElement('script');
          configScript.id = 'botpress-script';
          configScript.src = "https://files.bpcontent.cloud/2025/10/02/16/20251002164824-GO5EVDOL.js";
          configScript.defer = true;
          document.body.appendChild(configScript);
        }
      }
    } else {
      removeAllBotpressElements();
    }
  }

  // Check if force reload is required
  function shouldForceReload(path) {
    return authPaths.some(authPath => path.startsWith(authPath));
  }

  // Run on page load
  document.addEventListener('DOMContentLoaded', handleBotpressVisibility);

  // Watch for route changes in SPA
  let lastUrl = location.href;
  const observer = new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      const currentPath = new URL(url).pathname;

      if (shouldForceReload(currentPath) && landingPagePaths.includes(new URL(lastUrl).pathname)) {
        sessionStorage.setItem('redirectAfterReload', url);
        window.location.reload();
        return;
      }

      lastUrl = url;
      removeAllBotpressElements();
      setTimeout(handleBotpressVisibility, 100);
    }
  });

  observer.observe(document, { subtree: true, childList: true });

  // Handle redirect after forced reload
  if (sessionStorage.getItem('redirectAfterReload')) {
    const redirectUrl = sessionStorage.getItem('redirectAfterReload');
    sessionStorage.removeItem('redirectAfterReload');
    if (window.location.href !== redirectUrl) {
      window.history.replaceState({}, '', redirectUrl);
    }
  }
};
