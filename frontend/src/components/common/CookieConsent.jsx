import React, { useState, useEffect } from 'react';
import { ShieldAlert, Check, X, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    advertising: true,
  });

  const loadConsentedScripts = (consents) => {
    // 1. Analytics consent -> Google Analytics and Microsoft Clarity
    if (consents.analytics) {
      // Google Analytics
      if (!window.gtag) {
        const gaScript = document.createElement('script');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y02NWB2TEM';
        gaScript.async = true;
        document.head.appendChild(gaScript);

        const gaInitScript = document.createElement('script');
        gaInitScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y02NWB2TEM');
        `;
        document.head.appendChild(gaInitScript);
      }

      // Microsoft Clarity
      if (!window.clarity) {
        const clarityScript = document.createElement('script');
        clarityScript.type = 'text/javascript';
        clarityScript.innerHTML = `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x05xxn6ja7");
        `;
        document.head.appendChild(clarityScript);
      }
    }

    // 2. Advertising consent -> Google Ads tag
    if (consents.advertising) {
      if (!window.gtagAdLoaded) {
        window.gtagAdLoaded = true;
        const adsScript = document.createElement('script');
        adsScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17905025128';
        adsScript.async = true;
        document.head.appendChild(adsScript);

        const adsInitScript = document.createElement('script');
        adsInitScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17905025128');
        `;
        document.head.appendChild(adsInitScript);
      }
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('alira_cookie_consent');
    if (!consent) {
      // Small timeout to animate banner in
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    } else {
      const parsedConsent = JSON.parse(consent);
      loadConsentedScripts(parsedConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsents = { essential: true, analytics: true, advertising: true };
    localStorage.setItem('alira_cookie_consent', JSON.stringify(allConsents));
    loadConsentedScripts(allConsents);
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const minimalConsents = { essential: true, analytics: false, advertising: false };
    localStorage.setItem('alira_cookie_consent', JSON.stringify(minimalConsents));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('alira_cookie_consent', JSON.stringify(preferences));
    loadConsentedScripts(preferences);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4 sm:px-0 animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-md border border-teal-100/80 shadow-2xl rounded-2xl p-6 relative overflow-hidden">
        {/* Top Glow Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-teal-500 via-emerald-500 to-teal-600"></div>

        {!showSettings ? (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-8 h-8 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold text-gray-950">Cookie Preferences</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-1">
                  We employ cookie identifiers to measure traffic and optimize B2B procurement quotes. Opt in to support us, or customize options. Read our <Link to="/privacy-policy/" className="text-teal-600 hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setShowSettings(true)}
                className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-teal-600 transition-colors gap-1"
              >
                <Settings className="w-3.5 h-3.5" />
                Customize Settings
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={handleDeclineAll}
                  className="px-4 py-2 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-pointer"
                >
                  Decline
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors rounded-lg shadow-md cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2">Granular Preferences</h4>
            
            <div className="space-y-3">
              {/* Essential */}
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-xs font-bold text-gray-800 block">Essential Cookies</span>
                  <span className="text-[10px] text-gray-500">Required for platform stability and quotes.</span>
                </div>
                <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Always On</span>
              </div>

              {/* Analytics */}
              <label className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg hover:bg-gray-100/70 transition-colors cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-gray-800 block">Analytics & Clarity</span>
                  <span className="text-[10px] text-gray-500">Helps us find and fix broken links and 404s.</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 accent-teal-600"
                />
              </label>

              {/* Advertising */}
              <label className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg hover:bg-gray-100/70 transition-colors cursor-pointer">
                <div>
                  <span className="text-xs font-bold text-gray-800 block">Marketing & Ads</span>
                  <span className="text-[10px] text-gray-500">Used for measuring B2B Google Ads ROI.</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 accent-teal-600"
                />
              </label>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <button
                onClick={() => setShowSettings(false)}
                className="text-xs font-semibold text-gray-500 hover:text-teal-600 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors rounded-lg shadow-md cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
