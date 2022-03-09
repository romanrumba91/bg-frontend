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
import MainMenu from './components/Mainmenu/MainMenu';
import BagPack from './components/BagPack/BagPack';









function Router() {
  return (
    <>

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
                        <Auth component={About} />
                      } 
                    />   
                    <Route 
                      path="location"
                      element={
                        <Auth component={Location} />
                      } 
                    />   
                    <Route 
                      path="mainmenu"
                      element={
                        <Auth component={MainMenu} />
                      } 
                    />    
                    <Route 
                      path="bagpack"
                      element={
                        <Auth component={BagPack} />
                      }
                       
                    />         
  





                </Route>

              </Routes>
          </BrowserRouter>

          </UsersState>


    </>
  );
}

export default Router;
