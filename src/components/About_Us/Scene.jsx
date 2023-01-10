import React from 'react'
import 'wowjs'
const Scene = () => {
  return (

    <div id='about-us-scene'>
        <div className='container relative overflowX-hidden' style={{minHeight:'100vh',width:'100vw'}}>
            <div style={{width:'10rem',height:'10rem'}} className='wow animate__animated animate__bounceIn rounded-circle bg-warning absolute d-none d-lg-block xl:top-40 xl:right-40'></div>
            <div className='absolute xl:z-20 xl:top-60 xl:right-60 wow animate__animated animate__bounceIn'>
                <div className='card-body card border-0 rounded-0 bg-light px-md-5' style={{maxWidth:'17rem'}}>
                    <h1 className='h3 fw-bold '>
                        About Us
                    </h1>
                    <p className='card-subtitle my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam impedit veniam facere, maxime debitis molestiae mollitia totam deleniti enim.
                    </p>
                    <button className='btn btn-primary rounded-pill fw-semibold'>Blah Blah</button>
                </div>
            </div>
            <img src={require('../../assets/images/girl.jpg')} alt='girl' style={{maxWidth:'25vw'}} 
            className='absolute d-none d-lg-block md:z-10 xl:top-40 xl:left-80 wow animate__animated animate__bounceIn'
            />
            <img src={require('../../assets/images/two-content-business-partners-discussing-issue.jpg')} 
            style={{maxWidth:'25vw'}}
            alt='two-content-business-partners-discussing-issue.jpg' 
            className='absolute d-none d-lg-block xl:top-80 xl:left-20 wow animate__animated animate__bounceIn'
            />
        </div>
    </div>
    
  )
}

export default Scene