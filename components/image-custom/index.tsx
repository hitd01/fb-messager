import Image from 'next/image';

interface ImageProps {
  src: string;
  image_alt: string;
  className?: string;
}

const ImageCustom = ({ src, image_alt, className }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={image_alt}
      className={`w-full h-auto object-cover ${className}`}
      loading="lazy"
      blurDataURL={src}
      placeholder="blur"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default ImageCustom;
