
import Layout from './global/layout'
import HomePage from './pages/homePage';
import { Route, Router, Routes } from 'react-router-dom';
import ContactUS from './pages/contactUs';
import AboutUS from './pages/aboutUs';
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/contact_us' exact element={<ContactUS />} />
          <Route path='/about_us' exact element={<AboutUS />} />
        </Routes>
        {/* <HomePage /> */}
      </Layout>

    </div>
  );
}

export default App;
