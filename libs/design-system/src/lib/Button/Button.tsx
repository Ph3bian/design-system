import { ButtonHTMLAttributes, ReactNode, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
  children: ReactNode;
  dataTest?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  className,

  dataTest = 'btn-base',
  ...otherProps
}) => {
  return (
    <button {...otherProps} className={className} data-test={dataTest}>
      {children}
    </button>
  );
};
