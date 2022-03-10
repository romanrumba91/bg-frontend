import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UsersState from './context/Users/UsersState';
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Layout from './components/Layout/Layout';
import Auth from './routes/Auth'
import Public from './routes/Public';
import Home from './components/Home/Home';
import About from './components/About/About';
import Location from './components/Location/Location';
import BagPack from './components/BagPack/BagPack';
import BagPackState from './context/BagPack/BagPackState';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BagPackEdit from './components/BagPack/BagPackEdit';




function Router() {
  return (
    <>
      <BagPackState>
        <UsersState>

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route 
                      index 
                      element={
                        <Public component={Home}
                      />} 
                    />


                    {/* localhost:3000/registro */}
                    <Route 
                      path="registro"
                      element={
                        <Auth component={Register} />
                      } 
                    />

                    {/* localhost:3000/login */}
                    <Route 
                      path="login"
                      element={
                        <Auth component={Login} />
                      } 
                    />  
                    {/* localhost:3000/login */}
                    <Route 
                      path="about"
                      element={
                        <Public component={About} />
                      } 
                    />   
                    <Route 
                      path="location"
                      element={
                        <Public component={Location} />
                      } 
                    />    
                    <Route 
                      path="bagpack"
                      element={
                        <Public component={BagPack} />
                      }
                       
                    /> 
                    <Route
                    path="bagpack/:id/edit"
                    element={<Public component={BagPackEdit} />}
                  />

                    <Route path="*" element={<ErrorPage/>}></Route>        
  





                </Route>

              </Routes>
          </BrowserRouter>

          </UsersState>
        </BagPackState>


    </>
  );
}

export default Router;
