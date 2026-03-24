import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, CreditCard, QrCode } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

const steps = ['Shipping', 'Payment', 'Confirmation'];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { subtotal, clearCart } = useCart();
  const shipping = subtotal > 100 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    street: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    email: '',
    phone: '',
  });

  const [shippingErrors, setShippingErrors] = useState({});

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardholderName: '',
  });

  const [paymentErrors, setPaymentErrors] = useState({});
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('UPI');

  const validateShipping = () => {
    const errors = {};

    if (!shippingInfo.fullName.trim()) errors.fullName = 'Full name is required.';
    if (!shippingInfo.street.trim()) errors.street = 'Street address is required.';
    if (!shippingInfo.city.trim()) errors.city = 'City is required.';
    if (!shippingInfo.state.trim()) errors.state = 'State is required.';
    if (!shippingInfo.zip.trim()) errors.zip = 'Zip code is required.';
    if (!shippingInfo.country.trim()) errors.country = 'Country is required.';
    if (!shippingInfo.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingInfo.email)) {
      errors.email = 'Please enter a valid email.';
    }
    if (!shippingInfo.phone.trim()) errors.phone = 'Phone is required.';

    setShippingErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePayment = () => {
    if (selectedPaymentMethod !== 'Card (Credit/Debit)') {
      return true;
    }

    const errors = {};

    if (!paymentInfo.cardNumber.trim()) errors.cardNumber = 'Card number is required.';
    if (!paymentInfo.expiry.trim()) errors.expiry = 'Expiry date is required.';
    if (!paymentInfo.cvv.trim()) errors.cvv = 'CVV is required.';
    if (!paymentInfo.cardholderName.trim()) errors.cardholderName = 'Cardholder name is required.';

    setPaymentErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0) {
      const ok = validateShipping();
      if (!ok) return;
    } else if (currentStep === 1) {
      const ok = validatePayment();
      if (!ok) return;
      clearCart();
    }
    setCurrentStep((prev) => Math.min(prev + 1, 2));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-3xl">
        {/* Progress */}
        <div className="flex items-center justify-center mb-16">
          {steps.map((step, i) =>
          <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${i <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`
              }>
                  {i < currentStep ? <Check size={16} /> : i + 1}
                </div>
                <span className="text-xs tracking-wider uppercase mt-2">{step}</span>
              </div>
              {i < steps.length - 1 &&
            <div className={`w-20 lg:w-32 h-[1px] mx-2 mb-6 ${i < currentStep ? 'bg-primary' : 'bg-border'}`} />
            }
            </div>
          )}
        </div>

        {/* Step 1: Shipping */}
        {currentStep === 0 &&
        <div className="animate-fade-in">
            <h2 className="section-heading text-2xl mb-8">Shipping Information</h2>
            <div className="space-y-6">
              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Full Name</label>
                <input
                  className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                  placeholder="Jane Doe"
                  value={shippingInfo.fullName}
                  onChange={(e) =>
                    setShippingInfo((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                />
                {shippingErrors.fullName &&
                  <p className="text-xs text-destructive mt-1">{shippingErrors.fullName}</p>}
              </div>
              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Street Address</label>
                <input
                  className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                  placeholder="123 Main Street"
                  value={shippingInfo.street}
                  onChange={(e) =>
                    setShippingInfo((prev) => ({ ...prev, street: e.target.value }))
                  }
                />
                {shippingErrors.street &&
                  <p className="text-xs text-destructive mt-1">{shippingErrors.street}</p>}
              </div>
              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Apt / Suite</label>
                <input
                  className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                  placeholder="Optional"
                  value={shippingInfo.apt}
                  onChange={(e) =>
                    setShippingInfo((prev) => ({ ...prev, apt: e.target.value }))
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">City</label>
                  <input
                    className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                    placeholder="New York"
                    value={shippingInfo.city}
                    onChange={(e) =>
                      setShippingInfo((prev) => ({ ...prev, city: e.target.value }))
                    }
                  />
                  {shippingErrors.city &&
                    <p className="text-xs text-destructive mt-1">{shippingErrors.city}</p>}
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">State</label>
                  <input
                    className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                    placeholder="NY"
                    value={shippingInfo.state}
                    onChange={(e) =>
                      setShippingInfo((prev) => ({ ...prev, state: e.target.value }))
                    }
                  />
                  {shippingErrors.state &&
                    <p className="text-xs text-destructive mt-1">{shippingErrors.state}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Zip Code</label>
                  <input
                    className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                    placeholder="10001"
                    value={shippingInfo.zip}
                    onChange={(e) =>
                      setShippingInfo((prev) => ({ ...prev, zip: e.target.value }))
                    }
                  />
                  {shippingErrors.zip &&
                    <p className="text-xs text-destructive mt-1">{shippingErrors.zip}</p>}
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Country</label>
                  <input
                    className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                    placeholder="United States"
                    value={shippingInfo.country}
                    onChange={(e) =>
                      setShippingInfo((prev) => ({ ...prev, country: e.target.value }))
                    }
                  />
                  {shippingErrors.country &&
                    <p className="text-xs text-destructive mt-1">{shippingErrors.country}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Email</label>
                  <input
                    className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                    type="email"
                    placeholder="jane@email.com"
                    value={shippingInfo.email}
                    onChange={(e) =>
                      setShippingInfo((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  {shippingErrors.email &&
                    <p className="text-xs text-destructive mt-1">{shippingErrors.email}</p>}
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Phone</label>
                  <input
                    className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={shippingInfo.phone}
                    onChange={(e) =>
                      setShippingInfo((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                  {shippingErrors.phone &&
                    <p className="text-xs text-destructive mt-1">{shippingErrors.phone}</p>}
                </div>
              </div>
              <button onClick={handleNext} className="btn-primary w-full mt-4">Continue to Payment</button>
            </div>
          </div>
        }

        {/* Step 2: Payment */}
        {currentStep === 1 &&
        <div className="animate-fade-in">
            <h2 className="section-heading text-2xl mb-8">Payment</h2>

            {/* Payment method tabs */}
            <div className="flex gap-4 mb-8">
              {['UPI', 'Card (Credit/Debit)', 'Cash'].map((method) =>
            <button
              key={method}
              onClick={() => setSelectedPaymentMethod(method)}
              className={`px-6 py-3 text-xs tracking-wider uppercase border transition-all duration-200 ${selectedPaymentMethod === method ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-foreground'}`
              }>
              
                  {method}
                </button>
            )}
            </div>

            <div className="space-y-6">
              {selectedPaymentMethod === 'UPI' && (
                <div className="p-8 border border-border bg-card flex flex-col items-center justify-center text-center">
                  <QrCode size={48} className="text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Pay via Stripe UPI</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scan the QR code on the Stripe portal. You will be redirected to the secure Stripe payment gateway to complete your transaction via UPI when you click Proceed.
                  </p>
                </div>
              )}

              {selectedPaymentMethod === 'Cash' && (
                <div className="p-8 border border-border bg-card flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-medium mb-2">Cash on Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    No online payment is required. You can pay in cash to the delivery agent when your order arrives.
                  </p>
                </div>
              )}

              {selectedPaymentMethod === 'Card (Credit/Debit)' && (
                <>
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Card Number</label>
                    <div className="relative">
                      <input
                        className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200 pr-12"
                        placeholder="4242 4242 4242 4242"
                        value={paymentInfo.cardNumber}
                        onChange={(e) =>
                          setPaymentInfo((prev) => ({ ...prev, cardNumber: e.target.value }))
                        }
                      />
                      <CreditCard size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                    {paymentErrors.cardNumber &&
                      <p className="text-xs text-destructive mt-1">{paymentErrors.cardNumber}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Expiry Date</label>
                      <input
                        className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                        placeholder="MM / YY"
                        value={paymentInfo.expiry}
                        onChange={(e) =>
                          setPaymentInfo((prev) => ({ ...prev, expiry: e.target.value }))
                        }
                      />
                      {paymentErrors.expiry &&
                        <p className="text-xs text-destructive mt-1">{paymentErrors.expiry}</p>}
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">CVV</label>
                      <input
                        className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={(e) =>
                          setPaymentInfo((prev) => ({ ...prev, cvv: e.target.value }))
                        }
                      />
                      {paymentErrors.cvv &&
                        <p className="text-xs text-destructive mt-1">{paymentErrors.cvv}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-2">Cardholder Name</label>
                    <input
                      className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors duration-200"
                      placeholder="Jane Doe"
                      value={paymentInfo.cardholderName}
                      onChange={(e) =>
                        setPaymentInfo((prev) => ({ ...prev, cardholderName: e.target.value }))
                      }
                    />
                    {paymentErrors.cardholderName &&
                      <p className="text-xs text-destructive mt-1">{paymentErrors.cardholderName}</p>}
                  </div>
                </>
              )}

              {/* Summary */}
              <div className="bg-card border border-border p-6 mt-8">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>Rs. {subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? 'Free' : `Rs. ${shipping.toFixed(2)}`}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>Rs. {tax.toFixed(2)}</span></div>
                  <div className="border-t border-border pt-2 flex justify-between font-medium"><span>Total</span><span>Rs. {total.toFixed(2)}</span></div>
                </div>
              </div>

              <button onClick={handleNext} className="btn-primary w-full mt-4">
                {selectedPaymentMethod === 'UPI' ? 'Proceed to Stripe Portal — ' : 'Place Order — '} Rs. {total.toFixed(2)}
              </button>
            </div>
          </div>
        }

        {/* Step 3: Confirmation */}
        {currentStep === 2 &&
        <div className="animate-fade-in text-center py-12">
            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={32} />
            </div>
            <h2 className="section-heading text-3xl mb-4">Thank you for your order!</h2>
            <p className="text-sm text-muted-foreground mb-2">Your order has been confirmed and will be shipped soon.</p>
            <p className="text-sm font-medium mb-12">Order ID: <span className="font-heading text-lg">ATELIER12345</span></p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/" className="btn-primary">Return Home</Link>
              <button className="btn-outline" onClick={() => window.print()}>Print Order</button>
            </div>
          </div>
        }
      </main>
      <Footer />
    </div>);

};

export default Checkout;