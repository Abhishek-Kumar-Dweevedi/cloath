import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { CreditCard } from 'lucide-react';

const OrderSummary = () => {
  const { subtotal } = useCart();
  const shipping = subtotal > 100 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-card p-6 lg:p-8 border border-border">
      <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-6">Order Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>Rs. {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span>{shipping === 0 ? 'Free' : `Rs. ${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span>Rs. {tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-border pt-3 flex justify-between font-medium">
          <span>Total</span>
          <span>Rs. {total.toFixed(2)}</span>
        </div>
      </div>

      <Link to="/checkout" className="btn-primary w-full text-center block mt-6">
        Proceed to Checkout
      </Link>

      {/* Payment icons */}
      <div className="flex items-center justify-center gap-3 mt-6 text-muted-foreground">
        <CreditCard size={20} />
        <span className="text-xs">UPI</span>
        <span className="text-xs">Card</span>
        <span className="text-xs">Cash</span>
      </div>

      {subtotal > 0 && shipping === 0 &&
      <p className="text-xs text-center text-muted-foreground mt-4">
          ✓ Free shipping on orders over Rs. 100
        </p>
      }
    </div>);

};

export default OrderSummary;