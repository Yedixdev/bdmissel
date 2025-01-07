import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface UseHeaderReturn {
  isOpen: boolean;
  isSearchOpen: boolean;
  isScrolled: boolean;
  toggleMenu: () => void;
  setIsSearchOpen: (open: boolean) => void;
  navItems: Array<{ name: string; path: string; }>;
  isActivePath: (path: string) => boolean;
}

export const useHeader = (): UseHeaderReturn => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActivePath = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Colecciones', path: '/colecciones' },
  ];

  return {
    isOpen,
    isSearchOpen,
    isScrolled,
    toggleMenu,
    setIsSearchOpen,
    navItems,
    isActivePath
  };
};
