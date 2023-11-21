import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { About } from "./pages/about";

import { Gallery } from "./pages/gallery";
import {Contact}  from "./pages/contact";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Social from "./components/social";


function App() {
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
    <Social/>

        <Routes>
     
    <Route path='/' element={<Home/>}/>  
    <Route path='/About' element={<About/>}/>  
    <Route path='/Gallery' element={<Gallery/>}/> 
    <Route path='/Contact' element={<Contact/>}/>          
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
