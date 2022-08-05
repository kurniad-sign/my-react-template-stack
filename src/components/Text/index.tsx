import { styled } from '@stitches/react';

export const Text = styled('p', {
  fontSize: 16,
  variants: {
    size: {
      sm: {
        fontSize: 12,
      },
      md: {
        fontSize: 16,
      },
      lg: {
        fontSize: 20,
      },
      xl: {
        fontSize: 24,
      },
    },
    transform: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowerCase: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
    },
    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
    underlined: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
});
