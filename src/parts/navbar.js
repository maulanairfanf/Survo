import React from 'react'
import Logo from 'assets/images/Logo.png'
import {Link} from 'react-router-dom'

export default function navbar() {
  return (
    <div className="mx-5 pt-2 flex justify-between">
        <div class="">
            <img src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center">
            <ul className="mx-3">
                <li className="text-red-300 text-small"><Link to="/home">Home</Link></li>
            </ul>
            <ul className="mx-3">
                <li className="text-red-300 text-small"><Link to="/login">About US</Link></li>
            </ul>
            <ul className="mx-3">
                <li className="text-red-300 text-small"><Link to="/pricing">Pricing</Link></li>
            </ul>
            <ul className="mx-3">
                <li className="text-red-300 text-small font-bold"><Link to="/login">Login/Register</Link></li>
            </ul>
        </div>
    </div>
  )
}
