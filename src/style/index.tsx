import React from 'react';
import ThemeProvider from './ThemeProvider';
import { useTheme } from './ThemeProvider';

export { ThemeProvider, useTheme };

// 主题切换组件示例
export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ display: 'flex', gap: '8px', padding: '16px' }}>
      <button
        onClick={() => setTheme('light')}
        style={{
          background: theme === 'light' ? '#1890ff' : '#f0f0f0',
          color: theme === 'light' ? 'white' : 'black',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        浅色主题
      </button>
      <button
        onClick={() => setTheme('dark')}
        style={{
          background: theme === 'dark' ? '#1890ff' : '#f0f0f0',
          color: theme === 'dark' ? 'white' : 'black',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        深色主题
      </button>
    </div>
  );
};

export default ThemeProvider;