import classNames from 'classnames';
import React, { FC } from 'react';

const isString = (children: React.ReactNode) => {
  if (typeof children === 'string') {
    return <span>{children}</span>;
  }
  return children;
};

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'dashed'
  | 'link'
  | 'text';

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

interface BaseButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

type NativeButtonProps = {
  htmlType?: ButtonHTMLTypes;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;

type AnchorButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = ({
  type = 'default',
  htmlType = 'button' as ButtonProps['htmlType'],
  size = 'md',
  disabled = false,
  block = false,
  className,
  href,
  children,
  ...restProps
}) => {
  const classes = classNames('ci-btn', className, {
    [`ci-btn-${type}`]: type,
    [`ci-btn-${size}`]: size,
    'ci-btn-block': block,
  });

  // 处理test-id属性，转换为data-testid以便Testing Library使用
  const commonProps = {
    ...restProps,
    'data-testid': restProps['test-id'] || restProps['data-testid'],
  };

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  const kids = isString(children);

  return (
    <button
      type={htmlType ?? 'submit'}
      className={classes}
      disabled={disabled}
      {...commonProps}
    >
      {kids}
    </button>
  );
};

export default Button;
