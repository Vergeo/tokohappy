import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import { About } from './pages/member/about'
import Products from './pages/member/products'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
