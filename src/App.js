
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/header';
import CardDetails from './componants/carddetails'
import Cards from './componants/card';
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/Cards/:id' element={<CardDetails />} />
      </Routes> 
    </>
  );
}

export default App;
