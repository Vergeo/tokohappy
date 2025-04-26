import React, { use, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginButtonClicked = () => {
        if (username === "admin" && password === "admin") {
            navigate("/admin");
        } else {
            navigate("/about");
        }
    }

    const handleUsernameUpdate = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePasswordUpdate = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <div className="flex bg-[var(--color-mint-400)] w-screen h-screen flex-col md:flex-row">
            <div className="flex w-screen md:w-1/2 h-1/3 md:h-screen justify-center items-center bg-[var(--color-mint-400)]">
                <h1 className="text-7xl font-black text-[var(--color-mint-800)] text-center">Toko Happy</h1>
            </div>
            <div className="flex w-full md:w-1/2 h-2/3 md:h-screen p-1 justify-center items-center flex-col md:rounded-t-none md:rounded-l-4xl rounded-t-4xl bg-[var(--color-mint-600)] drop-shadow-2xl">
                <h1 className="text-2xl md:text-4xl font-semibold text-[var(--color-mint-200)] text-center">Welcome</h1>
                <h3 className="text-lg font-semibold mb-16 text-[var(--color-mint-400)] text-center">Please log in to your account to continue</h3>
                <form className="flex flex-col w-2/3 xl:w-1/2">
                    <label className="font-semibold text-[var(--color-mint-200)] mb-1">Username</label>
                    <input onChange={handleUsernameUpdate} type="text" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-4 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="username"></input>
                    <label className="font-semibold text-[var(--color-mint-200)] mb-1">Password</label>
                    <input onChange={handlePasswordUpdate} type="password" className="bg-[var(--color-mint-800)] text-[var(--color-mint-200)] p-2 mb-8 rounded-sm outline-2 outline-[var(--color-mint-800)] focus:outline-[var(--color-mint-400)] transition-all" placeholder="password"></input>
                    <div className="flex justify-center">
                        <input type="button" value="Login" className="bg-[var(--color-mint-200)] w-fit px-4 py-1 rounded-lg text-[var(--color-mint-800)] hover:bg-[var(--color-mint-400)] transition-all cursor-pointer" onClick={loginButtonClicked}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;