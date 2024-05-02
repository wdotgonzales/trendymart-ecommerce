import './App.css'
import HomePage from './pages/HomePage/HomePage';
import OurTeam from './pages/OurTeam/OurTeam';
import OurServices from './pages/OurServices/OurServices';
import PricingPlans from './pages/PricingPlans/PricingPlans';
import Payment from './pages/Payment/Payment';
import Testimonials from './pages/Testimonials/Testimonials';
import GiftCards from './pages/GiftCards/GiftCards';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import ContactUs from './pages/ContactUs/ContactUs';
import FAQ from './pages/FAQ/FAQ';
import Shop from './pages/Shop/Shop';
import WishList from './pages/Wishlist/WishList';
import ShopSelectedProduct from './components/ShopSelectedProduct/ShopSelectedProduct';

import products from './products';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <OurTeam /> */}
      {/* <OurServices /> */}
      {/* <PricingPlans /> */}
      {/* <Payment /> */}
      {/* <Testimonials /> */}
      {/* <GiftCards /> */}
      {/* <TermsAndConditions /> */}
      {/* <ContactUs /> */}
      {/* <FAQ /> */}
      {/* <Shop /> */}
      {/* <WishList /> */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop'>
          <Route index element={<Shop />} />
          {
            products.map((product) => {
              return <>
                <Route path={`${product.path}`} element={<ShopSelectedProduct />} />
              </>
            })
          }
          <Route path='*' element={<p>product not found</p>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
