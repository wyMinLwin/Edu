import React from 'react'

const Section = () => {
  return (
    <div className='container py-5'>
        <div className='row'>
            <div className='col-12 col-md-6 d-flex flex-column justify-content-between'>
                <h2 className='h5 text-warning'>Location</h2>
                <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <h2 className='h5 text-warning'>Follow Us</h2>
                <div className='text-warning d-flex fs-5'>
                    <a href='/' className='nav-link mx-1'><i className="fa-brands fa-facebook"></i></a>
                    <a href='/' className='nav-link mx-1'><i className="fa-brands fa-twitter"></i></a>
                    <a href='/' className='nav-link mx-1'><i className="fa-brands fa-instagram"></i></a>
                    <a href='/' className='nav-link mx-1'><i className="fa-brands fa-discord"></i></a>
                </div>
                <p className='text-light'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='col-12 col-md-6 '>
                <h2 className='h5 text-warning'>contact form</h2>
                <input type={'text'} placeholder={'Enter your name'} className={'my-1 rounded-0 form-control'} />
                <input type={'email'} placeholder={'Enter your email'} className={'my-1 rounded-0 form-control'} />
                <textarea className='my-1 rounded-0 form-control' placeholder={'Enter the message'}></textarea>
                <button type='button' className='btn btn-warning my-1 fw-semibold text-dark rounded-0 py-1'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Section