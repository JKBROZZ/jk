import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ScrollingTextProps {
  text: string;
  index: number;
}

export function ScrollingText({ text, index }: ScrollingTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px',
      }
    );

    const element = document.getElementById(`text-${index}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [index]);

  return (
    <div
      id={`text-${index}`}
      className="min-h-screen flex items-center justify-center px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 50,
        }}
        transition={{
          duration: 1,
          ease: 'easeOut',
        }}
        className="max-w-3xl text-center"
      >
        <p className="text-3xl md:text-4xl lg:text-5xl text-pink-100 leading-relaxed font-serif italic">
          {text}
        </p>
      </motion.div>
    </div>
  );
}
