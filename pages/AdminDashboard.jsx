import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 lg:px-8 py-16">
                <h1 className="text-3xl font-heading font-semibold mb-6">Admin Dashboard</h1>
                <p className="text-muted-foreground mb-8">
                    Welcome to the Admin panel. You have full access to manage users, settings, and orders.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-border bg-card">
                        <h2 className="text-lg font-medium mb-2">Total Revenue</h2>
                        <p className="text-2xl font-semibold">$34,250</p>
                    </div>
                    <div className="p-6 border border-border bg-card">
                        <h2 className="text-lg font-medium mb-2">Active Sellers</h2>
                        <p className="text-2xl font-semibold">24</p>
                    </div>
                    <div className="p-6 border border-border bg-card">
                        <h2 className="text-lg font-medium mb-2">Site Visitors</h2>
                        <p className="text-2xl font-semibold">8,204</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
