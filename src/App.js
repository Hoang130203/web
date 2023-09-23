//import logo from './logo.svg';
import { Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Paragraph from './Paragraph';
import Heading from './Heading';
import Button from './Button';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';
function App() {
  return (
    <div style={{position:'relative',left:'30%'}}>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/News'>News</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage/>}>
          </Route>
          <Route path='/news' element={<NewsPage/>}>
          </Route>
          <Route path='/contact' element={<ContactPage/>}>
          </Route>
        </Routes>
        <Heading/>
        <Paragraph/>
        <Button/>
    </div>
  );
}

export default App;
