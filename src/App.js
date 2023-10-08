import "./App.css";
import MainHeading from "./components/MainHeading";
import Navbar from "./components/Navbar";
import MostLoved from "./components/MostLoved";
import SinglePageProduct from "./components/SinglePageProduct";
import BrowseByCategory from "./components/BrowseByCategory";
import HorizontalCard from "./components/HorizontalCard";
import Map from "./components/Map";
import ContactPage from "./components/ContactPage";
import StayPage from "./components/StayPage";
import Page1 from "./components/Page1";
import Footer from "./components/Footer";
import Menu from "./components/mainPage/Menu";
import SmallBorder from "./components/SmallBorder";
import About from "./components/mainPage/About";
import GiftCard from "./components/mainPage/GiftCard";
import Contact from "./components/mainPage/Contact";
import LogInPage from "./components/LogInPage";
import FaqPage from "./components/mainPage/FaqPage";
import ForgetPass from "./components/ForgetPass";
import CreateAccount from "./components/CreateAccount";
import CartPage from "./components/mainPage/CartPage";
import Disscount from "./components/mainPage/Disscount";
import { Link, Route, Router, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./components/AddToCart";
import { cartAction } from "./store/CartSlice";
import MagnifyGlass from "./components/MagnifyGlass";
import './index.css'

function App() {
  const dispatch=useDispatch()
  const cartItem1=useSelector((state)=>state.cartSliceReducer.cartItem)
  const cartitem2=useSelector((state)=>state.cartSliceReducer.isCartShow)
   
 
    
  
  return (
    <>
      <div className="App">
        {/* <Router> */}
        <div  >
        {cartitem2 &&  <Link to="/cart" style={{textDecoration:"none"}}  >
        <div className="cartIcon" >
       
        <div className="noCart">{cartItem1.length}
        
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          
          viewBox="0 0 24 24"
          style={{fill: "#3D081B",transform: "msFilter",marginRight:"13px"}}
        >
          <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path>
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="16.5" cy="19.5" r="1.5"></circle>
        </svg>
        
        </div>
        </Link>}</div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainHeading />} />

          <Route path="/menu" element={<Menu />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:id" element={<SinglePageProduct />} />
          <Route path="/cart"   element={<AddToCart/>} />
          <Route path="/feature"  element={<Page1/>}/>
          <Route path="/auth"  element={<CreateAccount/>}/>
          <Route path="/magnify" element={<MagnifyGlass/>}/>
          <Route path="/forget"  element={<ForgetPass/>}/>
          
        </Routes>
        {/* //  </Router> */}
        {/* <AddToCart/> */}
        <ContactPage />
        <Footer />
       
      </div>
    </>
  );
}

export default App;
//  {/* <Navbar/> */}
{
  /* <MainHeading/>  
      <SmallBorder/> */
}
{
  /* <MostLoved/> */
}

{
  /* <BrowseByCategory/>  */
}
{
  /*<HorizontalCard />
        <Map/>
        <StayPage/>  */
}
{
  /* <SinglePageProduct/> */
}
{
  /* <Page1/> */
}
{
  /* <Menu/> */
}
{
  /* <About/> */
}

{
  /* <Map/> */
}
{
  /* <GiftCard/> */
}
{
  /* <ContactPage/>  */
}
{
  /* <Contact/> */
}
{
  /* <FaqPage/> */
}
{
  /* <Map/> */
}
{
  /* <LogInPage/> */
}
{
  /* <CreateAccount/> */
}
{
  /* <ForgetPass/>  */
}
{
  /* <CartPage/> */
}
{
  /* <Disscount/> */
}
{
  /* <ContactPage/>  */
}
{
  /* <Footer/> */
}
