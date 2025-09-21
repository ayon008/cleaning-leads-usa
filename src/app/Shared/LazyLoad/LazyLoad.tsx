"use client";

import { useEffect, useRef, useState } from 'react';
import { useClientGSAP } from '../../lib/gsap-utils';
import gsap from 'gsap';

interface LazyLoadProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  className = '',
  animationType = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useClientGSAP(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  useClientGSAP(() => {
    if (!isVisible || !elementRef.current) return;

    const element = elementRef.current;
    
    // Set initial state based on animation type
    const initialStates = {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, y: 50 },
      slideLeft: { opacity: 0, x: 50 },
      slideRight: { opacity: 0, x: -50 },
      scale: { opacity: 0, scale: 0.8 },
    };

    gsap.set(element, initialStates[animationType]);

    // Animate to final state
    const animationProps = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power2.out',
    };

    gsap.to(element, animationProps);
  }, [isVisible, animationType, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default LazyLoad;
