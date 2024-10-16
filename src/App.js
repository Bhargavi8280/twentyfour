import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import ShoeList from "./ShoeList";
import Cart from "./Cart";
import PaymentPage from "./PaymentPage";
import "./App.css";
// Adjust the path if necessary

// Import your CSS file

const App = () => {
  const shoeData = [
    {
      id: 1,
      name: "Nike Air",
      price: 150,
      image:
        "https://img.freepik.com/free-psd/nike-air-force-1-mockup-floating_1332-60648.jpg?t=st=1728654163~exp=1728657763~hmac=912c88e2474575d0336afbe14a50fdc6593356844a6eafab12ac58274281ac32&w=996",
    },
    {
      id: 2,
      name: "Adidas",
      price: 180,
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6b6036a0a2c436ba5543f30348533f8_9366/STEP_N_PACE_SHOES_Black_IQ9157_01_standard.jpg",
    },
    {
      id: 3,
      name: "Puma",
      price: 120,
      image:
        "https://images.jdmagicbox.com/quickquotes/images_main/jpu1gynblu38300906-puma-sports-shoes-for-men-2025694318-lcpycdyw.jpg",
    },
    {
      id: 4,
      name: "Bata",
      price: 150,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/x/f/x/-original-imagg7szr9w5jmdz.jpeg?q=90&crop=false",
    },
    {
      id: 5,
      name: "Fila",
      price: 180,
      image:
        "https://fila.co.in/media/catalog/product/cache/274c04d22a7b28db321c499b6be61cc2/1/1/11010871_2.jpg",
    },
    {
      id: 6,
      name: "Sketcher",
      price: 120,
      image:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dwe537bfac/images/large/232384-1.jpg",
    },
  ];

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ShoeList shoes={shoeData} />
                <Cart />
              </>
            }
          />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
