
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'PC Préconfigurés', href: '/prebuilt' },
    { name: 'Configurateur', href: '/configurator' },
    { name: 'Composants', href: '/components' },
    { name: 'Services', href: '/services' },
    { name: 'Suivi', href: '/tracking' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gaming-dark/90 backdrop-blur-md border-b border-gaming-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-neon-gradient bg-clip-text text-transparent">
                GamerPC.fr
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-gaming-cyan transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 w-64 bg-gaming-gray border-gaming-gray-light text-white placeholder-gray-400"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-gaming-cyan">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gaming-cyan text-gaming-dark rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-gaming-cyan">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-gaming-cyan"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gaming-gray animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-gaming-cyan transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-2 pt-4 border-t border-gaming-gray">
                <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-gaming-cyan">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gaming-cyan text-gaming-dark rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                      {cartItems}
                    </span>
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-gaming-cyan">
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
