import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import OrderSummary from '@/components/OrderSummary';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { items, totalItems } = useCart();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <h1 className="section-heading mb-2">My Shopping Cart</h1>
        <p className="text-sm text-muted-foreground mb-12">{totalItems} {totalItems === 1 ? 'Item' : 'Items'}</p>

        {items.length === 0 ?
        <div className="text-center py-20">
            <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-6" />
            <h2 className="font-heading text-2xl font-light mb-4">Your bag is empty</h2>
            <p className="text-sm text-muted-foreground mb-8">Discover our latest collection and find something you love.</p>
            <Link to="/women" className="btn-primary inline-block">Shop Women</Link>
          </div> :

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {items.map((item) =>
            <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
            )}
            </div>
            <div>
              <OrderSummary />
            </div>
          </div>
        }
      </main>
      <Footer />
    </div>);

};

export default Cart;