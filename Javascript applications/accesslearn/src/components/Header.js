import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // Replace with a valid icon

export default async function Header(){
    return(
        <header className="bg-brown-300 border-b py-3">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
            <div className="flex items-center gap-6 ">
          <Link href={'/'} className="flex items-center gap-2 text-purple-950">
          <FontAwesomeIcon icon={faCoffee} style={{color: "#4c27b9",}} />
              <span className="font-bold">AccessLearn</span>
          </Link>
          <nav className="flex items-center gap-4 text-slate-400 text-sm">
            <Link href={'/about'}>About Us</Link>
            <Link href={'/pricing'}>FAQs</Link>
            <Link href={'/contact'}>Contact me</Link>
          </nav>
        </div>
        </div>
        </header>
    );

}


