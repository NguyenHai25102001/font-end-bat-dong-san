import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {StateContextProvider} from './contexts/StateContext';
import DefaultLayout from "./defaultLayout";

import 'swiper/css';
import 'swiper/css/pagination';
import "./assets/css/main.css"
import 'flowbite';
function App() {
  return (
    <div className="">
      <Router>
        <StateContextProvider>
          <Routes>
            <Route path={'*'} element={<DefaultLayout/>} />
          </Routes>
        </StateContextProvider>
      </Router>


    </div>
  );
}

export default App;
