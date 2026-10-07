

import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm w-full">
            <div className="w-full px-20 container mx-auto flex justify-between items-center py-4">
                <img src={Logo} alt="Logo" className="h-10" />
                <ul className="flex gap-4 items-center cursor-pointer">
                    <li className="text-pink-700 font-medium">Home</li>
                    <li>Technologies</li>
                    <li>projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex items-center gap-4">
                    <li className="cursor-pointer">sign in</li> 
                    <button className="btn btn-error bg-pink-600 text-white px-4 py-2 rounded-full">sign up</button>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;