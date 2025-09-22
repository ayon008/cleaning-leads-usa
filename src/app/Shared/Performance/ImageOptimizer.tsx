// "use client";

// import Image, { ImageProps } from 'next/image';
// import { useState } from 'react';

// interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
//   fallback?: string;
//   className?: string;
//   priority?: boolean;
//   quality?: number;
// }

// const OptimizedImage: React.FC<OptimizedImageProps> = ({
//   src,
//   alt,
//   fallback = '/placeholder-image.jpg',
//   className = '',
//   priority = false,
//   quality = 85,
//   ...props
// }) => {
//   const [imgSrc, setImgSrc] = useState(src);
//   const [isLoading, setIsLoading] = useState(true);

//   const handleLoad = () => {
//     setIsLoading(false);
//   };

//   const handleError = () => {
//     setImgSrc(fallback);
//     setIsLoading(false);
//   };

//   return (
//     <div className={`relative overflow-hidden ${className}`}>
//       {isLoading && (
//         <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
//       )}
//       <Image
//         {...props}
//         src={imgSrc}
//         alt={alt}
//         onLoad={handleLoad}
//         onError={handleError}
//         priority={priority}
//         quality={quality}
//         className={`transition-opacity duration-300 ${
//           isLoading ? 'opacity-0' : 'opacity-100'
//         } ${className}`}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       />
//     </div>
//   );
// };

// export default OptimizedImage;
