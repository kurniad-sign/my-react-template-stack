import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import React from 'react';

interface AspectProps {
  ratio?: number;
  children?: React.ReactNode;
}

const AspectBox = styled('div', {
  overflow: 'hidden',
  width: '100%',
  height: 'auto',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});


export const AspectRatio = ({ children, ratio }: AspectProps) => (
  <AspectBox>
    <AspectRatioPrimitive.Root ratio={ratio}>{children}</AspectRatioPrimitive.Root>
  </AspectBox>
);
