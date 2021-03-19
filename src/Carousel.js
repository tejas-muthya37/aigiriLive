import React from 'react';
import "./carousel.css";
// import img5 from "./img5.jpg";
// import img6 from "./img6.jpg";
// import img7 from "./img7.jpg";
// import img8 from "./img8.jpg";

function Carousel() {
    return (
    
        <div id="carouselExampleIndicators" className="carousel carousel-fade carousel_laptop slide" data-ride="carousel">
            <div className="carousel-inner">

            <div className="carousel-item active">
                <img loading="lazy" className="d-block w-100" id="img4" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/img8.cc6b2138.jpg" alt="..." />
            </div>
            <div className="carousel-item">
                <img loading="lazy" className="d-block w-100" id="img3" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/img6.df4a7688.jpg" alt="..." />
            </div>
            <div className="carousel-item">
                <img loading="lazy" className="d-block w-100" id="img2" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/img5.ee091894.jpg" alt="..." />
            </div>
            <div className="carousel-item">
                <img loading="lazy" className="d-block w-100" id="img1" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/img7.e319d388.jpg" alt="..." />
            </div>
            </div>
            {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon move-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon move-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a> */}
        </div>
 

       
        
    )
}

export default Carousel;
