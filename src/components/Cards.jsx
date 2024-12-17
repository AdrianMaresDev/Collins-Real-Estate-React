import Card from './Card';

const Cards = () => {
    return (
        <div className="flex items-center justify-center gap-4 mx-auto max-w-7xl font-medium px-4 py-12">
        <Card>
            <div className="font-Poppins bg-indigo-100 pt-6 pb-8 px-8 rounded-lg">
                <span className="text-lg font-semibold">For Buyers</span>
                <p className="pb-4 pt-2">Connect with our experts and we'll help you find personalized matches.</p>
                <a href="#" className="bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white px-4 py-2 rounded-lg font-medium">Sell Home</a>
            </div>
        </Card>
        <Card>
            <div className="font-Poppins bg-gray-200 pt-6 pb-8 px-8 rounded-lg">
                <span className="text-lg font-semibold">For Sellers</span>
                <p className="pb-4 pt-2">List your home and we'll get a guaranteed cash offer within 30 days.</p>
                <a href="#" className="bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white px-4 py-2 rounded-lg font-medium">View Listings</a>
            </div>
        </Card>
        </div>
    )
};

export default Cards;