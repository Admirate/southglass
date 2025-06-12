'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItems, setActiveItems] = useState<Record<string, boolean>>({});

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "/", label: 'Home' },
    { href: "/about", label: 'About Us' },
    { href: "/products", label: 'Our Products' },
    { href: "/projects", label: 'Our Supplies' },
    { href: "/contact", label: 'Contact Us' },
    { href: "/resources", label: 'Resources' },
  ];

  // Function to determine if current route matches the nav item
  const isActivePath = (path: string) => {
    if (typeof window === 'undefined') {
      // We're on the server, return false to ensure server/client initial render matches
      return false;
    }
      const currentPath = window.location.pathname;
      return currentPath === path || (path !== '/' && currentPath.startsWith(path));
  };

  // Update active items on client-side after component mounts
  useEffect(() => {
    const newActiveItems: Record<string, boolean> = {};
    navItems.forEach(item => {
      newActiveItems[item.href] = isActivePath(item.href);
    });
    setActiveItems(newActiveItems);
    
    // Optional: Update active items on route change if using Next.js router events
    // This would require importing useRouter from next/navigation
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-lg' : 'bg-black/70'} backdrop-blur-md border-b border-blue-500/20`} role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo and brand */}
          <div className="flex items-center space-x-3 group">
            <Link href="/" className="flex items-center" aria-label="South Glass Home">
              <img 
                src="/SG-LOGO-01.png" 
                alt="South Glass Logo" 
                className="h-10 sm:h-12 md:h-16 object-contain transition-transform duration-300 group-hover:scale-105" 
                width="176" 
                height="64"
                loading="eager"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-8" aria-label="Main Navigation">
            <ul className="flex items-center space-x-1 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative font-medium text-sm lg:text-base text-blue-100 hover:text-accent px-3 py-2 rounded-md transition-colors duration-300 ${activeItems[item.href] ? 'text-accent' : ''}`}
                    aria-current={activeItems[item.href] ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    <span className={`absolute left-0 bottom-0 h-0.5 bg-accent transition-all duration-300 ${activeItems[item.href] ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-blue-900/20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Background dimmer */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile menu"
        aria-modal="true"
      >
        {/* Mobile Menu Box */}
        <nav 
          className={`mobile-menu-container absolute top-4 right-4 left-4 max-w-md mx-auto bg-[#0a1929] border border-blue-500/30 rounded-lg shadow-xl transform transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
          aria-label="Mobile Navigation"
        >
          <div className="px-5 py-4">
            <div className="flex justify-between items-center mb-6">
              <Link 
                href="/" 
                className="flex items-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="South Glass - Return to homepage"
              >
                <img 
                  src="/SG-LOGO-01.png" 
                  alt="South Glass Logo" 
                  className="h-10 object-contain" 
                  width="112" 
                  height="40"
                  loading="eager"
                />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-blue-900/20 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="h-5 w-5 text-white" aria-hidden="true" />
              </button>
            </div>
            
            <ul className="flex flex-col space-y-1" role="menu">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className={`text-base py-2.5 px-4 rounded-md ${
                      activeItems[item.href]
                        ? 'bg-accent/20 text-accent font-medium' 
                        : 'text-white hover:bg-blue-900/20'
                    } transition-colors duration-200`}
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                    aria-current={activeItems[item.href] ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
} 