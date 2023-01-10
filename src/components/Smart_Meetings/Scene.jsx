import React from 'react'
import Header from './Header'

const Scene = () => {
  return (
    <div className='container d-flex flex-column align-items-center'>
        <Header />
        <div className='relative w-100'>
            <img 
            src={require('../../assets/images/laptop.jpg')} alt='laptop.jpg' style={{width:'230px'}} 
            className='
            wow animate__animated animate__bounceIn
            img-laptop rounded-circle absolute xl:top-0 xl:left-40 lg:top-20 lg:left-0 md:left-0 md:top-0 sm:top-20' 
            />
            <img 
            src={require('../../assets/images/discuss.jpg')} alt='discuss.jpg' style={{width:'280px'}} 
            className='
            wow animate__animated animate__bounceIn
            img-discuss rounded-circle absolute xl:top-40 xl:left-60 lg:top-40 lg:left-40 md:top-40 md:left-20 sm:top-40 sm:right-20' />
            <img 
            src={require('../../assets/images/laugh.jpg')} alt='laugh.jpg' style={{width:'230px'}} 
            className='
            wow animate__animated animate__bounceIn
            img-laugh rounded-circle absolute top-20 xl:right-60 lg:right-0 md:top-0 md:right-0 sm:right-0' />
            <div className='
            wow animate__animated animate__bounceIn
            img-circle bg-warning rounded-circle absolute mt-lg-4 xl:top-80 xl:left-40 lg:top-80 lg:left-20 md:top-80 sm:top-60 sm:left-0' style={{width:'150px',height:'150px'}}></div>
        </div>
    </div>
  )
}

export default Scene