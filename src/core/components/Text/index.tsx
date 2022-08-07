import cn from 'classnames';
import './index.scss';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TextWeight = 'light' | 'regular' | 'medium' | 'bold' | 'black';
type TextAlign = 'center' | 'left' | 'right';

interface TextProps {
  align?: TextAlign;
  children: React.ReactNode;
  size?: TextSize;
  underlined?: boolean;
  weight?: TextWeight;
}

export const Text = ({
  align,
  children,
  underlined,
  size,
  weight,
}: TextProps): JSX.Element => {
  const TextClass = cn('Text', {
    'Text--underlined': underlined,
    'Text--x-small': size === 'xs',
    'Text--small': size === 'sm',
    'Text--medium': size === 'md',
    'Text--large': size === 'lg',
    'Text--x-large': size === 'xl',
    'Text--light-w': weight === 'light',
    'Text--regular-w': weight === 'regular',
    'Text--medium-w': weight === 'medium',
    'Text--bold-w': weight === 'bold',
    'Text--black-w': weight === 'black',
    'Text--center': align === 'center',
    'Text--left': align === 'left',
    'Text--right': align === 'right',
  });

  return <p className={TextClass}>{children}</p>;
};
