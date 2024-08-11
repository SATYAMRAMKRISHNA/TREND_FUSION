import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSign from "./pages/LoginSign";
import Footer from "./componenets/Footer/Footer";
import Contest from "./pages/Contest";
import SingleAvatar from "./pages/SingleAvatar";
import men_banner from "./componenets/Assets/banner_mens.png";
import women_banner from "./componenets/Assets/banner_women.png";
import kid_banner from "./componenets/Assets/banner_kids.png";
import Connect from "./pages/Connect";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />} // Change "mens" to "men"
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />} // Change "womens" to "women"
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />} // Ensure this matches the data
          />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSign />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/singleAvatar" element={<SingleAvatar/>}/>
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
