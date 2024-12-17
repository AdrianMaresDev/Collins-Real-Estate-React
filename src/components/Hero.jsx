import heroImg from '../assets/images/hero-home.jpg';

const Hero = () => {
    return (
        <section className="relative bg-[url('/src/assets/images/hero-home.jpg')] bg-cover bg-center h-[90vh]">

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-white pt-36 pl-20">
                <h1 className="text-6xl pb-6 font-medium">Find Your Dream Home</h1>
                <p className="max-w-[45vw] leading-relaxed text-xl pb-16">Looking for the perfect place to call home? Our agents will help you every step of the way with personalized recommendations and unmatched market expertise.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="bg-white hover:bg-gray-200 transition-colors duration-300 text-indigo-800 px-4 py-2 rounded-lg text-lg font-medium">Get Started</a>
                    <a href="#" className="bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white px-4 py-2 rounded-lg text-lg font-medium">Learn More</a>
                </div>
            </div>

        </section>
    )
};

export default Hero;