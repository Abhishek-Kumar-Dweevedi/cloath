import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';





const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-6 border-b border-border">
      {/* Image */}
      <div className="w-24 h-32 bg-muted shrink-0 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium tracking-wide">{item.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">Size: {item.size} · Color: {item.color}</p>
          </div>
          <button
            onClick={() => removeItem(item.id, item.size, item.color)}
            className="p-1 hover:text-destructive transition-colors duration-200"
            aria-label="Remove item">
            
            <X size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Quantity */}
          <div className="flex items-center border border-border">
            <button
              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
              className="p-2 hover:bg-muted transition-colors duration-200"
              aria-label="Decrease quantity">
              
              <Minus size={12} />
            </button>
            <span className="px-4 text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
              className="p-2 hover:bg-muted transition-colors duration-200"
              aria-label="Increase quantity">
              
              <Plus size={12} />
            </button>
          </div>

          <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>);

};

export default CartItem;