import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Women', to: '/women' },
  { label: 'Men', to: '/men' }];


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-heading text-2xl lg:text-3xl tracking-[0.3em] font-semibold text-foreground">
            Atelier Vogue
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link key={link.label} to={link.to} className="nav-link">
                {link.label}
              </Link>
            )}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {isSearchOpen ?
            <form onSubmit={handleSearch} className="hidden lg:flex items-center animate-fade-in relative">
                <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-b border-foreground focus:outline-none text-sm w-48 pr-6 pb-1"
                autoFocus
                onBlur={() => !searchQuery && setIsSearchOpen(false)} />
              
                <button type="button" onClick={() => setIsSearchOpen(false)} className="absolute right-0 top-0 p-1 text-muted-foreground hover:text-foreground">
                  <X size={14} />
                </button>
              </form> :

            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:block p-2 transition-colors duration-200 hover:text-muted-foreground"
              aria-label="Search">
              
                <Search size={18} />
              </button>
            }
            <Link to="/login" className="p-2 transition-colors duration-200 hover:text-muted-foreground" aria-label="Profile">
              <User size={18} />
            </Link>
            <button className="hidden lg:block p-2 transition-colors duration-200 hover:text-muted-foreground" aria-label="Wishlist">
              <Heart size={18} />
            </button>
            <Link to="/cart" className="p-2 transition-colors duration-200 hover:text-muted-foreground relative" aria-label="Cart">
              <ShoppingBag size={18} />
              {totalItems > 0 &&
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              }
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen &&
      <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
          <Link
            key={link.label}
            to={link.to}
            className="nav-link py-2"
            onClick={() => setMobileOpen(false)}>
            
                {link.label}
              </Link>
          )}
          </nav>
        </div>
      }
    </header>);

};

export default Navbar;