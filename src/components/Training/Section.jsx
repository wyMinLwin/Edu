import React from 'react'

const Section = () => {
  return (
    <div className='container text-light relative'>
      <div className='row g-0 z-30 relative'>
        <div className='col-10'>
          <div className='row g-0'>
            <h1 className='h3 col-md-6 my-3'>Corporate training is critical to the success of any business</h1>
          </div>
          <div className='row g-0 pe-md-5'>
            <img 
              src={require('../../assets/images/laptop.jpg')} alt='laptop.jpg'
              className='col-6 col-md-4 p-2 wow animate__animated animate__bounceIn'
            />
            <img 
              src={require('../../assets/images/laugh.jpg')} alt='laugh.jpg'
              className='col-6 col-md-4 p-2 wow animate__animated animate__bounceIn'
            />
            <img 
              src={require('../../assets/images/discuss.jpg')} alt='discuss.jpg'
              className='col-6 col-md-4 p-2 wow animate__animated animate__bounceIn'
            />
            <img 
              src={require('../../assets/images/laugh.jpg')} alt='laugh.jpg'
              className='col-6 col-md-4 p-2 wow animate__animated animate__bounceIn'
            />
            <img 
              src={require('../../assets/images/discuss.jpg')} alt='discuss.jpg'
              className='col-6 col-md-4 p-2 wow animate__animated animate__bounceIn'
            />
            <img 
              src={require('../../assets/images/laptop.jpg')} alt='laptop.jpg'
              className='col-6 col-md-4 p-2 wow animate__animated animate__bounceIn'
            />
          </div>
          <div className='row g-0 my-3'>
            <div className='col-md-6'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quae.</p>
              <button className='btn btn-light rounded-pill fw-semibold'>Check Out</button>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute z-0 bg-warning top-20 right-0' style={{width:'25vw',height:'60vh'}}></div>
    </div>
  )
}

export default Section