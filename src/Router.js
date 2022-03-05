import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UsersState from './context/Users/UsersState';
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Layout from './components/Layout/Layout';
import Auth from './routes/Auth'
import Public from './routes/Public';
import Home from './components/Home/Home';


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
                    





                </Route>

              </Routes>
          </BrowserRouter>

          </UsersState>

    </>
  );
}

export default Router;
