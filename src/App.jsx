import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import { useTheme } from './hooks/useTheme';

function App() {

  const { theme } = useTheme();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className='bg-white dark:bg-black text-black dark:text-white'
    
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <AppRouter/>
    </div>
  );
}

export default App;