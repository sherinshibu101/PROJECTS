import React from 'react';
import {BrowserRouter as Router , Routes, Route , Link} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import logo from '../../assets/logo.png'; 
import {cn} from '@/lib/utils';
const Header = () => {
return(
    <header className="bg-brown-300 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to ="/" className="text-xl font-bold">
                <img src={logo} alt="Logo" className="h-8 inline-block mr-2" />
            </Link>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-brown-900 transition-colors">
                           <Button variant="ghost" className="text-white hover:bg-white/20">Home</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-brown-900 transition-colors">
                           <Button variant="ghost" className="text-white hover:bg-white/20">About us</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-brown-900 transition-colors">
                           <Button variant="ghost" className="text-white hover:bg-white/20">Contact</Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
};

export default Header;
