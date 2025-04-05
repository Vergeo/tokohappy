import React from "react";
import superstore from "../../assets/superstore.png";
import Navbar from "./navbar";
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            {<Navbar/>}
            <div className="flex flex-col bg-[var(--color-mint-800)] w-screen h-full justify-center">
                <div className="flex flex-col justify-center xl:px-64 md:px-32 sm:px-16 px-4">
                    <h1 className="font-semibold text-3xl md:text-5xl text-[var(--color-mint-200)] text-center animate-fade-in">Welcome to <span className="font-black text-[var(--color-mint-400)]">TokoHappy</span> – Where Every Purchase Sparks Joy!</h1>
                    <div className="flex items-center flex-col-reverse md:flex-row">
                        <div className="flex flex-col md:w-1/2 items-center">
                            <p className="text-center text-[var(--color-mint-200)] mb-4 animate-fade-in">At TokoHappy, we believe that shopping should be more than just a transaction – it should be an experience that makes you smile! Whether you're hunting for trendy fashion, quirky home decor, unique gadgets, or thoughtful gifts, we've got you covered with handpicked items designed to brighten your day.</p>
                            <p className="text-[var(--color-mint-200)] text-center mb-4 animate-fade-in">Join thousands of happy customers who’ve made TokoHappy their go-to shop for fun, fabulous finds. Go ahead – treat yourself. You deserve a little happy today!</p>
                            <Link className="bg-[var(--color-mint-200)] w-fit px-4 py-1 rounded-lg text-[var(--color-mint-800)] hover:bg-[var(--color-mint-400)] transition-all cursor-pointer animate-fade-in" to="/products">Explore Our Catalogues</Link>
                        </div>
                        <img src={superstore} alt="" className="w-1/2 max-w-screen animate-fade-in"/>
                    </div>
                </div>
            </div>
        </div>
    )
}