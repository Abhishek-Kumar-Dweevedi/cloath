import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SellerDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 lg:px-8 py-16">
                <h1 className="text-3xl font-heading font-semibold mb-6">Seller Dashboard</h1>
                <p className="text-muted-foreground mb-8">
                    Welcome back! Manage your products, view your earnings, and fulfill orders here.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-border bg-card">
                        <h2 className="text-lg font-medium mb-2">My Products</h2>
                        <p className="text-2xl font-semibold">12 Active Listings</p>
                    </div>
                    <div className="p-6 border border-border bg-card">
                        <h2 className="text-lg font-medium mb-2">Pending Fulfillment</h2>
                        <p className="text-2xl font-semibold">5 Orders</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SellerDashboard;
