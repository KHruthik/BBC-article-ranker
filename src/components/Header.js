import React from 'react'

import logo from '../images/logo.png'

import '../css/header.css'

export default function Header() {
    return (
        <header>
            <img src={logo} id="logo"/>
        </header>
    )
}
