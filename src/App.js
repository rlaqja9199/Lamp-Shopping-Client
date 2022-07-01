import './App.css';
import Header from './include/Header';
import MainPage from './main';
import Footer from './include/Footer';
import ProductPage from './product';
import UploadPage from './upload';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
