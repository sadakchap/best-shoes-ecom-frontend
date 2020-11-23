import React from 'react'
import Navbar from '../../layouts/Navbar'

const Base = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Base
