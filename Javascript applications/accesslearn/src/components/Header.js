import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router , Routes, Route , Link} from 'react-router-dom';

const Header = () => {  
    return(
    <header className="bg-brown-300 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <FontAwesomeIcon icon={faBluesky} style={{color: "#4c27b9",}} /></div>
        </div>
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