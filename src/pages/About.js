import React from 'react'
import logo from '../logo.png'

const About = () => {
    return (
        <section className='text-center text-nowrap'>
            <div className='d-inline'>
                <img alt="Logo" src={logo} height='45' width='45'/>
                <h1 className='my-3 d-inline'>Books</h1>
            </div>
            <div className='border border-dark rounded-3 fit-content mx-auto p-3'>
                <h3 className='mx-auto text-center'>React Project by <i>Pietro Tamburini</i></h3>
                <h4 className='mx-auto text-center'>Book API by Google</h4>
                <h4 className='mx-auto text-center'>Made By Pietro Tamburini</h4>
            </div>
        </section>
    )
}

export default About
