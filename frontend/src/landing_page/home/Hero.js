import React from 'react';

function Hero() {
    return (
        <div className='container p-5'>
          <div className='row text-center'>
            <img src='media\images\homeHero.png' alt='Hero Image' className='mt-4 mb-5' style={{width:"65%", margin:"0 auto"}}/>
            <h1 className='mt-4'>Invest in everything</h1>
            <p className='mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='mt-4 p-2 btn btn-primary fs-5' style={{width:"15%", margin:"0 auto"}} >Sign up now</button>
          </div>
        </div>
      );
}

export default Hero;