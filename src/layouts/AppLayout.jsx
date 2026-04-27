import React from 'react'
import { Outlet,Link} from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
    <div className='bg-gray-800 text-white p-4'>
        <h1>Este es un layout</h1>
    </div>
    <div className='flex-1' >
        <Outlet />
    </div>
    
    <div className='bg-gray-800 p-10' >
    <Link to='/main' className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 m-3">
        Volver a la vista principal
    </Link>
    <Link to='/OtraView' className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 m-3">
    Otra view
    </Link>
    <Link to='/ContactoView' className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 m-3">
    Contacto view
    </Link>
    </div>
    </>
  )
}
