import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" style={{width: "100%", height: "300px"}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/product-photography_P3a_720x560?$pjpeg$&jpegSize=200&wid=720" style={{width: "100%", height: "300px"}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.productphotography.com/wp-content/uploads/2022/08/Mini-lifestyle-Image-001.jpg"  style={{width: "100%", height: "300px"}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.productphotography.com/wp-content/uploads/2022/08/Mini-lifestyle-Image-002.jpg" style={{width: "100%", height: "300px"}} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.productphotography.com/wp-content/uploads/2022/08/Mini-lifestyle-Image-002.jpg" style={{width: "100%", height: "300px"}} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
