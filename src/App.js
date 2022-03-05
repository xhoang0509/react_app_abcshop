import { Box } from '@mui/system';
import Footer from 'components/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutFeature from './features/About';
import BlogFeature from './features/Blog';
import ContactFeature from './features/Contact';
import ProductFeature from './features/Product';

function App() {
    return (
        <Box className="app">
            <Header />
            <Routes>
                <Route path="/" element={<ProductFeature />} />
                <Route path="product" element={<ProductFeature />} />
                <Route path="blog" element={<BlogFeature />} />
                <Route path="about" element={<AboutFeature />} />
                <Route path="contact" element={<ContactFeature />} />
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;
