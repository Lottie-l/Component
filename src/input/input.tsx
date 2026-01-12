import classNames from 'classnames';
import React from 'react';
import { SizeContext } from '../context';

export interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  size?: 'large' | 'small' | 'middle';
  status?: 'error' | 'warning';
  borderd?: boolean;
  showPassword?: boolean;
}

const Input: React.FC<BasicInputProps> = ({
  placeholder,
  size,
  status,
  borderd,
  onChange,
  onFocus,
  showPassword = true,
}) => {
  const sizeContextValue = React.useContext(SizeContext);
  size = size || sizeContextValue?.size || 'small';
  const classes = classNames('ci-input', {
    'ci-input-large': size === 'large',
    'ci-input-small': size === 'small',
    'ci-input-middle': size === 'middle',
    'ci-input-default': !size,

    'ci-input-warning': status === 'warning',
    'ci-input-error': status === 'error',
    'ci-input-normal': !status,

    'ci-input-no-borderd': borderd === false,
  });
  return (
    <>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        className={classes}
      />
    </>
  );
}

export default Input;
