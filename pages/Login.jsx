import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import loginHeroImg from '@/assets/login-hero.jpg';
import { toast } from "sonner";
import './Login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Validation Errors
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Check if input is only numbers
    if (value !== '' && !/^[0-9]+$/.test(value)) {
      setPhoneError('Please enter numbers only for phone.');
      toast.error('Phone number accepts only digits.');
    } else {
      setPhoneError('');
      setPhone(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (activeTab === 'login' && (value.toLowerCase() === 'admin' || value.toLowerCase() === 'seller')) {
      setEmailError('');
    } else if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email format.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Strong password: >= 8 chars, 1 uppercase, 1 lowercase, 1 number
    // We only enforce strict password pattern on signup or if they aren't using the demo roles
    if (activeTab === 'signup' && value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) {
      setPasswordError('Password must be 8+ chars and contain uppercase, lowercase, and a number.');
    } else {
      setPasswordError('');
    }
  };

  const handleAuth = (e) => {
    e.preventDefault();

    // Check basic presence
    if (!email || !password || (activeTab === 'signup' && (!fullName || !phone))) {
      toast.error('Please fill out all required fields properly.');
      return;
    }

    if (emailError || passwordError) {
      toast.error('Please fix form errors before proceeding.');
      return;
    }

    if (activeTab === 'login') {
      // Role-based logic
      if (email.toLowerCase() === 'admin' && password === 'admin123') {
        toast.success("Welcome Admin!");
        navigate('/admin');
      } else if (email.toLowerCase() === 'seller' && password === 'seller123') {
        toast.success("Welcome Seller!");
        navigate('/seller');
      } else {
        toast.success("Login successful!");
        navigate('/dashboard');
      }
    } else {
      // Signup logic
      if (phoneError || emailError || passwordError) {
        toast.error("Please fix form errors before signing up.");
        return;
      }
      toast.success("Account created successfully! Please log in.");
      setActiveTab('login');
      setPhone('');
      setFullName('');
      setPassword('');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Form Side */}
        <div className="flex items-center justify-center px-4 py-16 lg:px-16">
          <div className="w-full max-w-md">
            <div className="auth-container">
              <div className="auth-tabs">
                <button
                  type="button"
                  onClick={() => { setActiveTab('login'); setPhoneError(''); setEmailError(''); setPasswordError(''); }}
                  className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('signup'); setPhoneError(''); setEmailError(''); setPasswordError(''); }}
                  className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
                >
                  Sign Up
                </button>
              </div>
              <div className="auth-heading">{activeTab === 'login' ? 'Sign In' : 'Sign Up'}</div>
              <form onSubmit={handleAuth} className="auth-form">
                {activeTab === 'signup' && (
                  <>
                    <input
                      required
                      className="auth-input"
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                      required
                      className="auth-input"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (e.g. 1234567890)"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    {phoneError && <div className="auth-error">{phoneError}</div>}
                  </>
                )}
                <input
                  required
                  className="auth-input"
                  type="text"
                  name="email"
                  placeholder={activeTab === 'login' ? "Username or Email" : "E-mail"}
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <div className="auth-error">{emailError}</div>}
                
                <input
                  required
                  className="auth-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <div className="auth-error">{passwordError}</div>}

                {activeTab === 'login' && (
                  <span className="auth-forgot-password"><Link to="/">Forgot Password ?</Link></span>
                )}
                
                <input className="auth-login-button" type="submit" value={activeTab === 'login' ? 'Sign In' : 'Sign Up'} />
              </form>
              <div className="auth-social-account-container">
                  <span className="auth-title">Or Sign {activeTab === 'login' ? 'in' : 'up'} with</span>
                  <div className="auth-social-accounts">
                    <button className="auth-social-button google" type="button">
                      <svg className="auth-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                      </svg>
                    </button>
                    <button className="auth-social-button apple" type="button">
                      <svg className="auth-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                      </svg>
                    </button>
                    <button className="auth-social-button twitter" type="button">
                      <svg className="auth-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <span className="auth-agreement"><Link to="/">Learn user licence agreement</Link></span>
            </div>
          </div>
        </div>

        {/* Hero Side */}
        <div className="hidden lg:block relative overflow-hidden">
          <img src={loginHeroImg} alt="Atelier Vogue fashion" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="relative h-full flex items-center justify-center p-16 text-center">
            <div>
              <h2 className="font-heading text-5xl text-primary-foreground font-light tracking-wide mb-6">
                Elevate Your Style
              </h2>
              <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-sm mx-auto">
                Welcome to Atelier Vogue. Create your profile for personalized collections and faster checkout.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;