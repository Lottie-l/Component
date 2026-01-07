import * as React from 'react';
export type SizeType = 'small' | 'middle' | 'large';

const SizeContext = React.createContext<{ size: SizeType } | null>(null);

export { SizeContext };
