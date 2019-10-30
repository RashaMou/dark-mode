import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false)

  useEffect(() => {
    const body = document.querySelector('body')
    isDarkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
  },[isDarkMode])

  return [isDarkMode, setIsDarkMode]
}

export default useDarkMode;