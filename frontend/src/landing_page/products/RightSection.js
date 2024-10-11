import React from 'react';

function RightSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='contianer '>
            <div className='row p-5'>
                
                <div className='col-6 p-5 '>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try demo</a>
                    <a href={learnMore} style={{textDecoration:"none", marginLeft:"50px"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay} ><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore} ><img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}/></a>
                    </div>
                </div>

                

                <div className='col-5 p-5'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;