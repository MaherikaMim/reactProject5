import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        
            <nav  >
                <div className=" w-full px-20 container mx-auto flex justify-between">
                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center">
                    <li className="text-pink-700">Home</li>
                    <li>Technologies</li>
                    <li>projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="flex items-center gap-4">
                <li>sign in</li> 
<button className="btn btn-error bg-pink-600 rounded-full">sign up</button>
                    </ul>
              
                </div>
            </nav>
      
    );
};

export default Nav;