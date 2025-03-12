import React, { useEffect } from 'react';
import AOS from "aos";
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider  } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Layout from './Layout';


export default function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []); 
  return (
    <AuthProvider>
      <ThemeProvider>
        <DataProvider>
          <Layout/>
        </DataProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
