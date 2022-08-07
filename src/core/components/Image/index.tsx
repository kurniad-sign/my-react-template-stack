import { styled } from '@stitches/react';

type ObjectFitType = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fit?: ObjectFitType;
}

const ImageStyle = styled('img', {});

export const Image = ({ src, alt, width, height, fit }: ImageProps): JSX.Element => (
  <ImageStyle
    src={src}
    alt={alt}
    css={{
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : '100%',
      fit: fit ? fit : 'unset',
    }}
  />
);
