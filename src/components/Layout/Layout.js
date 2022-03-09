import { Outlet } from "react-router-dom"

import Header from './Header'
import Footer from './Footer'
import Nav from "../Nav/Nav"




export default function Layout() {
  return (
	<>
		<Header />
			<Nav />
			
			
			<Outlet />

		<Footer />
	
	</>
  )
}