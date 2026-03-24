import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl tracking-[0.3em] font-semibold mb-6">Atelier Vogue</h3>
            <p className="text-sm leading-relaxed opacity-80 font-body">
              Consciously Made. Effortlessly Stylish. We believe in fashion that respects both people and planet.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'FAQ', 'Careers'].map((item) =>
              <li key={item}>
                  <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Terms & Conditions', 'Privacy Policy', 'Shipping Policy', 'Returns'].map((item) =>
              <li key={item}>
                  <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-6">Newsletter</h4>
            <p className="text-sm opacity-80 mb-4">Subscribe for exclusive collections and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/60" />
              
              <button className="border border-primary-foreground/30 border-l-0 px-4 py-2 text-xs tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-60">© 2026 Atelier Vogue. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity duration-200" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity duration-200" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity duration-200" aria-label="X">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;