// "use client";

// import Script from "next/script";
// import { useState } from "react";

// interface ScriptLoaderProps {
//   src: string;
//   strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload" | "worker";
//   onLoad?: () => void;
//   onError?: () => void;
//   id?: string;
// }

// const ScriptLoader: React.FC<ScriptLoaderProps> = ({
//   src,
//   strategy = "lazyOnload",
//   onLoad,
//   onError,
//   id,
// }) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   const handleLoad = () => {
//     setIsLoaded(true);
//     onLoad?.();
//   };

//   const handleError = () => {
//     console.error(`Failed to load script: ${src}`);
//     onError?.();
//   };

//   return (
//     <Script
//       id={id || `script-${src.split("/").pop()}`}
//       src={src}
//       strategy={strategy}
//       onLoad={handleLoad}
//       onError={handleError}
//     />
//   );
// };

// // Preload critical scripts
// export const CriticalScripts: React.FC = () => {
//   return (
//     <>
//       {/* Google Analytics */}
//       <ScriptLoader
//         src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
//         strategy="afterInteractive"
//         id="google-analytics"
//       />

//       {/* Google Tag Manager */}
//       <Script
//         id="google-tag-manager-init"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-MGW7PNJF');
//           `,
//         }}
//       />
//     </>
//   );
// };

// // Lazy load non-critical scripts
// export const LazyScripts: React.FC = () => {
//   return (
//     <>
//       {/* Facebook Pixel */}
//       <ScriptLoader
//         src="https://connect.facebook.net/en_US/fbevents.js"
//         strategy="lazyOnload"
//         id="facebook-pixel"
//       />

//       {/* LinkedIn Insight Tag */}
//       <ScriptLoader
//         src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
//         strategy="lazyOnload"
//         id="linkedin-insight"
//       />
//     </>
//   );
// };

// export default ScriptLoader;


import React from 'react';

const ScriptLoader = () => {
  return (
    <div>
      
    </div>
  );
};

export default ScriptLoader;
