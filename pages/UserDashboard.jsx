import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrderTracker from '@/components/OrderTracker';

const UserDashboard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Jane Doe',
        email: 'jane@email.com',
        phone: '+1 (555) 000-0000',
        address: '123 Main Street, New York, NY 10001'
    });

    const [trackingId, setTrackingId] = useState('');

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSaveProfile = () => {
        setIsEditing(false);
        // Add save logic here if needed
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 lg:px-8 py-16">
                <h1 className="text-3xl font-heading font-semibold mb-6">My Account</h1>
                <p className="text-muted-foreground mb-8">
                    Welcome to your personal dashboard. View your order history, track orders, and update your profile.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        {/* My Orders Section */}
                        <div className="p-6 border border-border bg-card">
                            <h2 className="text-lg font-medium mb-4">My Orders</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Upcoming Orders</h3>
                                    <div className="p-4 border border-border rounded-md">
                                        <p className="text-sm">Order #ATELIER12345 - Expected Delivery: Tomorrow</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Previous Orders</h3>
                                    <div className="p-4 border border-border rounded-md">
                                        <p className="text-sm">Order #ATELIER98765 - Delivered: Last Week</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Track Order Section */}
                        <div className="p-6 border border-border bg-card">
                            <h2 className="text-lg font-medium mb-4">Track Order</h2>
                            <OrderTracker />
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="p-6 border border-border bg-card h-fit">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">Profile Details</h2>
                            {!isEditing ? (
                                <button onClick={() => setIsEditing(true)} className="text-xs tracking-widest uppercase border-b border-foreground pb-1 hover:text-muted-foreground">Edit</button>
                            ) : (
                                <button onClick={handleSaveProfile} className="text-xs tracking-widest uppercase border-b border-primary text-primary pb-1 hover:text-primary/80">Save</button>
                            )}
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1 text-muted-foreground">Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleProfileChange}
                                    disabled={!isEditing}
                                    className={`w-full text-sm py-1 bg-transparent focus:outline-none ${isEditing ? 'border-b border-border' : ''}`}
                                />
                            </div>
                            <div>
                                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1 text-muted-foreground">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    disabled={!isEditing}
                                    className={`w-full text-sm py-1 bg-transparent focus:outline-none ${isEditing ? 'border-b border-border' : ''}`}
                                />
                            </div>
                            <div>
                                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1 text-muted-foreground">Phone</label>
                                <input 
                                    type="tel"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleProfileChange}
                                    disabled={!isEditing}
                                    className={`w-full text-sm py-1 bg-transparent focus:outline-none ${isEditing ? 'border-b border-border' : ''}`}
                                />
                            </div>
                            <div>
                                <label className="text-xs tracking-[0.15em] uppercase font-medium block mb-1 text-muted-foreground">Address</label>
                                <textarea 
                                    name="address"
                                    value={profile.address}
                                    onChange={handleProfileChange}
                                    disabled={!isEditing}
                                    rows="3"
                                    className={`w-full text-sm py-1 bg-transparent focus:outline-none resize-none ${isEditing ? 'border border-border p-2 mt-1' : ''}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UserDashboard;
