import React from 'react'
import { Link} from 'react-router-dom'
export default function Nav() {
  return (

    <nav className="bg-white border-b border-gray-200">
 
        <ul>

	 {

			 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			 {/* <div className="flex h-30 pt-3"> */}
			   <div className="flex">
                {/* <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"> */}
                <img className='imageMain2' src="https://i.postimg.cc/7ZnYCv9F/logo.png" alt="Workflow" />
                {/* </div> */}
                        <div className="inline-flex h-30 mt-32 ml-28 mb-24">

                              
                                    {/* <li>
                                    <a href="/" className='prueba' >
                                    Home
                                    </a>
                                    </li> */}

                                    <li>
                                    <div className='prueba'>
                                    <Link
                                      to="/"
                                    >
                                      Home		
                                    </Link>
                                    </div>
                                    </li>
{/* 
                                    <li>
                                    <a href="/about" className='prueba' >
                                    About
                                    </a>
                                    </li> */}

                                    <li>
                                    <div className='prueba'>
                                    <Link
                                      to="/about"
                                    >
                                      About		
                                    </Link>
                                    </div>
                                    </li>

                                    {/* <li>
                                    <a href="/bagpacks" className='prueba' >
                                    Bagpacks
                                    </a>
                                    </li> */}

                                    <li>
                                    <div className='prueba'>
                                    <Link
                                      to="/bagpack"
                                    >
                                      Bagpacks		
                                    </Link>
                                    </div>
                                    </li>

                                    {/* <li>
                                    <a href="/location" className='prueba' >
                                    Location
                                    </a>
                                    </li> */}
                                    <li>
                                    <div className='prueba'>
                                    <Link
                                      to="/location"
                                    >
                                      Location		
                                    </Link>
                                    </div>
                                    </li>
                              

			            </div>
			 </div>
			 </div>


	 }

        </ul>

    </nav>






  )
}
