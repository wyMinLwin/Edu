import React from 'react'

const Section = () => {
  return (
    <div className='container'>
        <div className='relative'>
            <h1 className='h1 text-primary mt-4'>Leadership</h1>

            <img 
            src={require('../../assets/images/laptop.jpg')} alt='laptop.jpg' style={{width:'350px'}} 
            className='wow animate__animated animate__bounceIn rounded-circle absolute xl:top-20 xl:left-40 lg:top-20 lg:left-0 md:left-0 md:top-0 sm:top-0 sm:left-0' 
            />
            <img 
            src={require('../../assets/images/discuss.jpg')} alt='discuss.jpg' style={{width:'200px'}} 
            className='wow animate__animated animate__bounceIn rounded-circle d-none d-sm-block absolute xl:top-0 xl:right-80 lg:top-0 lg:left-80 md:left-80 md:top-0 sm:top-20 sm:left-40' 
            />
            <div className='absolute wow animate__animated animate__bounceInLeft xl:top-60 xl:right-80 lg:top-60 lg:right-40 md:top-60 md:right-20 sm:top-80' >
                <div className='card-body card border-0 rounded-0 bg-primary ' style={{maxWidth:'22rem'}} >
                    <h1 className='h3 fw-bold '>
                        Organization Consulting
                    </h1>
                    <p className='card-subtitle my-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam impedit veniam facere, maxime debitis molestiae mollitia totam deleniti enim.
                    </p>
                    <button className='btn btn-light w-50 rounded-pill fw-semibold'>Blah Blah</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section