import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Admin = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [editedProduct, setEditedProduct] = useState({});

    const [newName, setnewName] = useState("");

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            setProducts(response.data.map((product) => {
                return {
                    ...product,
                    quantity: 0
                }
            }))
            // console.log(products);
        } catch (error) {
            console.log("GET ERROR: " + error);
        }
    }

    useEffect(() => {
            fetchProducts();
        }, [])

    const deleteProduct = async (product) => {
        try {
            const response = await axios.delete(`https://api.escuelajs.co/api/v1/products/${product.id}`);

            fetchProducts();
        } catch(error) {

        }
    }

    const editProduct = async (product) => {
        try {
            const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${product.id}`, product);
            fetchProducts();
            setEditedProduct({});
        } catch (error) {
            console.log("PUT ERROR: " + error);
        }
    }

    const addProduct = async () => {
        try {
            const newProduct = {
                "title": "My New Producta",
                "price": 10,
                "description": "A description",
                "categoryId": 1,
                "images": ["https://placehold.co/600x400"]
            }
            const response = await axios.post(`https://api.escuelajs.co/api/v1/products/`, newProduct);
            console.log(response);
            fetchProducts();
            alert("A new product has been added to the end! Edit the new product to add more!");
            
        } catch (error) {
            console.log(error.response.data);
            console.log("POST ERROR: " + error.response.data);
            alert("Edit the previous new product to add more!");
        }
    }

    return (
        <div className="bg-[var(--color-mint-800)] w-screen min-h-screen">
            <div className="w-full h-full flex p-10 flex-col items-center">
                <div className="flex w-full justify-end">
                    <button onClick={() => {navigate('/')}} className="bg-red-300 py-1 px-2 rounded-md hover:bg-red-400 transition-all cursor-pointer mb-2">Logout</button>
                </div>
                <h1 className="text-2xl text-[var(--color-mint-200)] font-bold">Admin Page</h1>
                <div className="flex w-full">
                    <button onClick={addProduct} className="bg-green-300 py-1 px-2 rounded-md hover:bg-green-400 transition-all cursor-pointer mb-2">Add Product</button>
                </div>
                <div className="flex flex-wrap border-2 border-[var(--color-mint-200)] bg-[var(--color-mint-600)] p-4 md:p-8 sm:p-6 gap-7 items-center justify-center rounded-2xl">
                        {
                            products.map((product) => product.id === editedProduct.id?(
                            <div key={product.id} className="flex justify-between h-30 w-full bg-[var(--color-mint-800)] rounded-lg p-4 gap-1 items-center">
                                <input onChange={e => {product.images[0] = e.target.value}} defaultValue={product.images[0]} className="text-[var(--color-mint-200)] bg-[var(--color-mint-600)] p-2 rounded-md"></input>
                                <input onChange={e => {product.title = e.target.value}} defaultValue={product.title} className="text-[var(--color-mint-200)] bg-[var(--color-mint-600)] p-2 rounded-md"></input>
                                <input onChange={e => {product.price = e.target.value}} defaultValue={product.price} className="text-[var(--color-mint-200)] bg-[var(--color-mint-600)] p-2 rounded-md" type="number"></input>
                                <input onChange={e => {product.description = e.target.value}} defaultValue={product.description} className="text-[var(--color-mint-200)] bg-[var(--color-mint-600)] p-2 rounded-md"></input>
                                <button onClick={() => {editProduct(product)}} className="bg-green-300 py-1 px-2 rounded-md hover:bg-green-400 transition-all cursor-pointer">Save</button>
                                <button onClick={() => {setEditedProduct({})}} className="bg-red-300 py-1 px-2 rounded-md hover:bg-red-400 transition-all cursor-pointer">Cancel</button>
                            </div>):(
                            <div key={product.id} className="flex justify-between h-30 w-full bg-[var(--color-mint-800)] rounded-lg p-4 gap-1 items-center">
                                <div className="flex h-full w-1/5">
                                    <img src={product.images[0]} className="object-cover rounded-lg min-w-32"></img>
                                </div>
                                <h1 className="font-bold text-[var(--color-mint-200)] text-sm w-1/5">{product.title}</h1>
                                
                                <p className="font-semibold text-[var(--color-mint-200)]  text-sm w-1/10">$ {product.price}</p>

                                <p className="font-semibold text-[var(--color-mint-200)]  text-sm w-1/10 overflow-y-scroll max-h-full">{product.description}</p>

                                <button onClick={() => {setEditedProduct(product)}} className="bg-yellow-300 py-1 px-2 rounded-md hover:bg-yellow-400 transition-all cursor-pointer">Edit</button>
                                <button onClick={() => {deleteProduct(product)}} className="bg-red-300 py-1 px-2 rounded-md hover:bg-red-400 transition-all cursor-pointer">Delete</button>
                            </div>))
                        }
                    </div>
            </div>
           
        </div>
    )
}