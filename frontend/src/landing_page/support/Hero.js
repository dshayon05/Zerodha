import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
            <div className='p-3' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-5 mx-3 '>
                <div className='col-6 p-5'>
                    <h1 className='fs-3 '>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. How do I activate F&O?' />
                    <br/>
                    <a href=''>Track account opening</a>
                    <a href=''>Track segment activation</a>
                    <a href=''>Intraday margins </a>
                    <a href=''>Kite user manual</a>

                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=''>Current Buybacks - August 2024</a></li>
                        <li><a href=''>Offer for sale (OFS) - August 2024</a></li>
                    </ol>
                    <a href=''>Current Buybacks - August 2024</a>
                    <a href=''>Offer for sale (OFS) - August 2024</a>
                </div>
                
            </div>
            
        </section>
        
            
    );
}

export default Hero;