import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [checkout, setCheckout] = useState(false);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            // setProducts(response.data);
            setProducts(response.data.map((product) => {
                return {
                    ...product,
                    quantity: 0
                }
            }))
            console.log(products);
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = (productToAdd) => {
        setProducts(products.map(product => product.id === productToAdd.id? {...product, quantity: product.quantity + 1}: product));
    }

    const removefromCart = (productToRemove) => {
        setProducts(products.map(product => (product.id === productToRemove.id && product.quantity > 0)? {...product, quantity: product.quantity - 1}: product));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    const countTotal = () => {
        var total = 0;
        products.forEach(item => {
            total += item.quantity * item.price;
        });
        return total;
    }

    const pay = () => {
        alert("Successfully paid $" + countTotal());
        navigate("/about");
    }

    return (
        <div className="flex flex-col w-screen min-h-screen">
            {<Navbar/>}
            <div className="flex flex-col bg-[var(--color-mint-800)] w-screen min-h-screen p-4 md:p-16 sm:p-8">
                <h1 className="text-5xl text-[var(--color-mint-200)] font-black text-center mb-2">Our Products</h1>
                {!checkout && <div className="flex flex-wrap border-2 border-[var(--color-mint-200)] bg-[var(--color-mint-600)] p-4 md:p-8 sm:p-6 gap-7 items-center justify-center rounded-2xl">
                    {
                        products.map((product) => (
                            <div key={product.id} className="flex flex-col justify-between h-100 w-70 bg-[var(--color-mint-800)] rounded-lg p-4 gap-1">
                                <div className="flex h-50 w-full">
                                    <img src={product.images[0]} className="object-cover rounded-lg w-full"></img>
                                </div>
                                <h1 className="font-bold text-[var(--color-mint-200)] text-sm">{product.title}</h1>
                                <p className="font-semibold text-[var(--color-mint-200)]  text-sm">$ {product.price}</p>
                                <p className="text-[var(--color-mint-400)] text-sm overflow-auto">{product.description}</p>
                                <div className="flex justify-between bg-[var(--color-mint-600)] p-1 rounded-sm items-center">
                                    <button onClick={() => {addToCart(product)}} className="flex justify-center items-center bg-green-300 w-5 h-5 rounded-sm hover:bg-green-400 transition-all cursor-pointer">+</button>
                                    <p className="text-[var(--color-mint-200)]">{product.quantity}</p>
                                    <button onClick={() => {removefromCart(product)}} className="flex justify-center items-center bg-red-300 w-5 h-5 rounded-sm hover:bg-red-400 transition-all cursor-pointer">-</button>
                                </div>
                            </div>
                        ))
                    }
                    <div className="fixed right-8 bottom-8">
                        <button className="p-2 bg-red-300 hover:bg-red-400 transition rounded-md cursor-pointer" onClick={() => {setCheckout(!checkout)}}>
                            Checkout
                        </button>
                    </div>
                </div>}

                {checkout && <div className="flex flex-col flex-wrap border-2 border-[var(--color-mint-200)] bg-[var(--color-mint-600)] p-4 md:p-8 sm:p-6 gap-7 items-center justify-center rounded-2xl">
                    <h1 className="text-[var(--color-mint-200)] text-2xl font-bold">Checkout</h1>
                    {
                        products.map((product) => product.quantity > 0 && (
                            <div key={product.id} className="flex justify-between h-30 w-full bg-[var(--color-mint-800)] rounded-lg p-4 gap-1 items-center">
                                <div className="flex h-full w-1/5">
                                    <img src={product.images[0]} className="object-cover rounded-lg min-w-32"></img>
                                </div>
                                <h1 className="font-bold text-[var(--color-mint-200)] text-sm w-1/5">{product.title}</h1>
                                
                                <p className="font-semibold text-[var(--color-mint-200)]  text-sm w-1/10">$ {product.price}</p>
                                <div className="flex justify-between bg-[var(--color-mint-600)] p-2 rounded-sm items-center w-1/10">
                                    <button onClick={() => {addToCart(product)}} className="flex justify-center items-center bg-green-300 w-5 h-5 rounded-sm hover:bg-green-400 transition-all cursor-pointer">+</button>
                                    <p className="text-[var(--color-mint-200)]">{product.quantity}</p>
                                    <button onClick={() => {removefromCart(product)}} className="flex justify-center items-center bg-red-300 w-5 h-5 rounded-sm hover:bg-red-400 transition-all cursor-pointer">-</button>
                                </div>
                                <p className="font-semibold text-[var(--color-mint-200)] w-1/10">$ {product.price*product.quantity}</p>
                            </div>
                        ))
                    }
                    <form className="flex flex-col w-full">
                        <label className="font-semibold text-[var(--color-mint-200)] mb-1">Username</label>
                        <input type="text" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-4 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="username"></input>
                        <label className="font-semibold text-[var(--color-mint-200)] mb-1">Full Name</label>
                        <input type="text" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-4 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="full name"></input>
                        <label className="font-semibold text-[var(--color-mint-200)] mb-1">Phone Number</label>
                        <input type="text" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-4 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="phone number"></input>
                        <label className="font-semibold text-[var(--color-mint-200)] mb-1">Email</label>
                        <input type="text" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-4 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="email"></input>
                        <label className="font-semibold text-[var(--color-mint-200)] mb-1">Address</label>
                        <input type="text" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-4 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="address"></input>
                        <label className="font-semibold text-[var(--color-mint-200)] mb-1">Bank Account Number</label>
                        <input type="text" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-4 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="bank account number"></input>
                        <label className="underline font-bold text-[var(--color-mint-200)] mb-1 text-xl">Total: ${countTotal()}</label>
                        <div className="flex justify-center">
                            <input type="button" value="Pay" className="bg-[var(--color-mint-200)] w-fit px-4 py-1 rounded-lg text-[var(--color-mint-800)] hover:bg-[var(--color-mint-400)] transition-all cursor-pointer" onClick={pay}/>
                        </div>
                    </form>
                    <div className="fixed right-8 bottom-8">
                        <button className="p-2 bg-red-300 hover:bg-red-400 transition rounded-md cursor-pointer" onClick={() => {setCheckout(!checkout)}}>
                            Back
                        </button>
                    </div>
                </div>}

                
            </div>
            
        </div>
    )
}

export default Products;