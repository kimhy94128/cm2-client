import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppRouter from './AppRouter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Sidebar />
        <div class="main-content">
          <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8"></div>
            <div class="container-fluid mt--7">
              <Navbar />
              <AppRouter />
              <Footer />
          </div>
        </div>
    </>
  );
}

export default App;
