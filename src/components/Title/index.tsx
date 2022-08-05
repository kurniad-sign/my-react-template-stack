import { styled } from '@stitches/react';

interface TitleProps {
  as?: string;
  children?: React.ReactNode;
}

export const Title = ({ as, children }: TitleProps): JSX.Element => {
  if (as === 'h1') return <TitleHeadOne>{children}</TitleHeadOne>;
  if (as === 'h2') return <TitleHeadTwo>{children}</TitleHeadTwo>;
  if (as === 'h3') return <TitleHeadThree>{children}</TitleHeadThree>;
  if (as === 'h4') return <TitleHeadFour>{children}</TitleHeadFour>;
  if (as === 'h5') return <TitleHeadFive>{children}</TitleHeadFive>;
  if (as === 'h6') return <TitleHeadSix>{children}</TitleHeadSix>;

  return <TitleDiv className="Title">{children}</TitleDiv>;
};

const TitleDiv = styled('div', {
  '&.Title': {
    fontSize: 30,
  },
});

const TitleHeadOne = styled('h1', {
  fontSize: 60,
});

const TitleHeadTwo = styled('h2', {
  fontSize: 48,
});

const TitleHeadThree = styled('h3', {
  fontSize: 36,
});

const TitleHeadFour = styled('h4', {
  fontSize: 28,
});

const TitleHeadFive = styled('h5', {
  fontSize: 24,
});

const TitleHeadSix = styled('h6', {
  fontSize: 20,
});
