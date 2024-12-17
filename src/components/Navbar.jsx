import logo from '../assets/images/andreacollins.png';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mx-auto max-w-7xl py-2 font-medium">
                <div className="font-Poppins flex items-center gap-2">
                    <a href="#">
                        <img className="max-h-14" src={logo} alt="logo image" />
                    </a>
                    <span className="rounded-full px-4 py-1 bg-gradient-to-r from-indigo-800/50 to-blue-800/50 text-white">Get an offer on your home within 30 days</span>
                </div>
                <ul className="font-Poppins flex gap-6">
                    <li className="hover:text-indigo-800 transition-colors duration-300 underline-animation">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-indigo-800 transition-colors duration-300 underline-animation">
                        <a href="#">Listings</a>
                    </li>
                    <li className="hover:text-indigo-800 transition-colors duration-300 underline-animation">
                        <a href="#">Buy</a>
                    </li>
                    <li className="hover:text-indigo-800 transition-colors duration-300 underline-animation">
                        <a href="#">Sell</a>
                    </li>
                    <li className="hover:text-indigo-800 transition-colors duration-300 underline-animation">
                        <a href="#">Financing</a>
                    </li>
                    <li className="hover:text-indigo-800 transition-colors duration-300 underline-animation">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
    )
  };

  export default Navbar;