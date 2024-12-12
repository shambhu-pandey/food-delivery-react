import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";

const App = () => {
  console.log("App component rendered"); // Debugging line

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

// const App = () => {
//   return (
//     <div className='app'>
//     <Navbar />

//     <Routes>
//       <Route  path="/" element={<Home />}></Route>
//       <Route path="/cart" element={<Cart />}></Route>
//       <Route path="/order" element={<PlaceOrder />}></Route>
//     </Routes>
//     </div>
//   )
// }

// export default App;
