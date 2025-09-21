"use client";

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface ScriptLoaderProps {
  src: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker';
  onLoad?: () => void;
  onError?: () => void;
  id?: string;
}

const ScriptLoader: React.FC<ScriptLoaderProps> = ({
  src,
  strategy = 'lazyOnload',
  onLoad,
  onError,
  id,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    console.error(`Failed to load script: ${src}`);
    onError?.();
  };

  return (
    <Script
      id={id || `script-${src.split('/').pop()}`}
      src={src}
      strategy={strategy}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

// Preload critical scripts
export const CriticalScripts: React.FC = () => {
  return (
    <>
      {/* Google Analytics */}
      <ScriptLoader
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
        id="google-analytics"
      />
      
      {/* Google Tag Manager */}
      <ScriptLoader
        src="https://www.googletagmanager.com/gtm.js?id=GTM_ID"
        strategy="afterInteractive"
        id="google-tag-manager"
      />
    </>
  );
};

// Lazy load non-critical scripts
export const LazyScripts: React.FC = () => {
  return (
    <>
      {/* Facebook Pixel */}
      <ScriptLoader
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="lazyOnload"
        id="facebook-pixel"
      />
      
      {/* LinkedIn Insight Tag */}
      <ScriptLoader
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        strategy="lazyOnload"
        id="linkedin-insight"
      />
    </>
  );
};

export default ScriptLoader;
