import React from 'react'
import Navbar from '../../layouts/Navbar'
import { Container } from '../../reuseableComponents/Container'

const Base = ({ title, description, children }) => {
    return (
        <>
            <Container>
                <Navbar />
                {children}
            </Container>
        </>
    )
}

export default Base