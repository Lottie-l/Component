import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark' | 'custom';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  customTheme?: Record<string, string>;
  setCustomTheme: (theme: Record<string, string>) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  setCustomTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
}) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);
  const [customTheme, setCustomTheme] = useState<Record<string, string>>({});

  useEffect(() => {
    // 应用主题到文档根元素
    document.documentElement.setAttribute('data-theme', theme);
    
    // 应用自定义主题变量
    if (theme === 'custom' && customTheme) {
      Object.entries(customTheme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
      });
    }
  }, [theme, customTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customTheme, setCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;