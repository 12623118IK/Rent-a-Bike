import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, CarsOverview, AboutUs,AddCars, NotFound} from "./pages";
import {Navigation, TopBar} from "./components";
import {InfoCar} from "./pages/InfoCar.tsx";
import {EditCar} from "./pages/EditCar.tsx";


function App() {


  return (
      <BrowserRouter>
        <TopBar/>
        <Navigation/>
          <div id="container">
              <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/cars'} element={<CarsOverview/>}/>
                  <Route path="/cars/:id/" element={<InfoCar/>} />
                  <Route path={'/about-us'} element={<AboutUs/>}/>
                  <Route path="/cars/:id/edit" element={<EditCar/>} />
                  <Route path={'/add-cars'} element={<AddCars/>}/>
                  <Route path={'*'} element={<NotFound/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
