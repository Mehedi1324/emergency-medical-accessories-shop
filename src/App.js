import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './SharingComponents/HeaderFooter/Footer';
import Header from './SharingComponents/HeaderFooter/Header';
import AuthProvider from './SharingComponents/Hooks/AuthProvider';
import SingleItem from './Components/SingleItem';

import Error from './Components/Error';
import Contact from './Components/Contact';
import Card from './Components/Card';
import Order from './Components/Order';
// import PrivateRoute from './Components/PrivateRoute';
import Congratulation from './Components/Congratulation';
import LoginPage from './SharingComponents/SIgn In/LoginPage';
import RegisterPage from './SharingComponents/SIgn In/RegisterPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleItem />} />
          <Route path="/card" element={<Card />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-placed" element={<Congratulation />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/order"
            element={
              // <PrivateRoute>
              <Order />
              //  </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
