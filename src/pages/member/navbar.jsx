import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="h-10 flex justify-between bg-[var(--color-mint-600)] items-center">
            <Link to="/about" className="mx-2 sm:mx-6 text-[var(--color-mint-200)] hover:text-[var(--color-mint-400)] hover:font-bold transition-all">Toko Happy</Link>
            <div className="flex">
                <Link to="/products" className="mx-2 sm:mx-6  text-[var(--color-mint-200)] hover:text-[var(--color-mint-400)] hover:font-bold transition-all">Products</Link>
                <Link to="/" className="mx-2 sm:mx-6  text-[var(--color-mint-200)] hover:text-[var(--color-mint-400)] hover:font-bold transition-all">Log Out</Link>
            </div>
        </div>
    )
}

export default Navbar;