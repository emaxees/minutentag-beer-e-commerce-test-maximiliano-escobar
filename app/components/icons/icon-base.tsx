import { ReactNode } from 'react';

interface IconBaseProps {
  width?: number;
  height?: number;
  color?: string;
  viewBox?: string;
  children?: ReactNode;
}

const IconBase: React.FC<IconBaseProps> = ({
  width = 18,
  height = 18,
  color = 'transparent',
  children,
  viewBox = '0 0 24 24',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    width={width} 
    height={height}
    fill={color}
  >
    {children}
  </svg>
);
export default IconBase;
