import { motion } from 'motion/react';

interface PolaroidImageProps {
  src: string;
  caption?: string;
  rotation?: number;
  delay?: number;
}

export function PolaroidImage({ src, caption, rotation = 0, delay = 0 }: PolaroidImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-white p-4 pb-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="aspect-square bg-gray-200 overflow-hidden">
        <img
          src={src}
          alt={caption || 'Memory'}
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <p className="mt-4 text-center text-gray-700 font-handwriting text-lg">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
