import { useState, useContext } from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Register() {

  const ctxUser = useContext(UsersContext)

  const {
    registerUser
  } = ctxUser


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  })


  const handleChange = (event) => {
    
    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()

    registerUser(data)

  }

  return (
    <>

    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
      </div>
      <form onSubmit={(evt) => { handleSubmit(evt) }}>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div className='space-y-6'>
        <div className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <label>Nombre</label>
        <input 
          name="name"
          value={data.name}
          onChange={(evt) => { handleChange(evt) }}
        />
        </div>

        <br />
        <div className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <label>Email</label>
        <input 
          name="email"
          value={data.email}
          onChange={(evt) => { handleChange(evt) }}
        />
        </div>

        <br />
        <div className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <label>Password</label>
        <input 
          name="password"
          value={data.password}
          onChange={(evt) => { handleChange(evt) }}
          type="password"
        />
        </div>

        <br />
        <div className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <label>Confirm Password</label>
        <input 
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={(evt) => { handleChange(evt) }}
          type="password"
        />
        </div>

        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create user</button>
      </div>
      </div>
      </div>
      </form>
    </div>
    </>
  )
}