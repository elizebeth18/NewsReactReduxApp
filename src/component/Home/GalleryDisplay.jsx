import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const showGallery = (gdata) =>{
    const gd = gdata;
    if(gd){
        return(
            <Slider {...settings}>
                {gd.map((item) => {
                    return(
                        <Link key={Math.random(1)} to='/' className="slider-item">
                            <div className="image" style={{background:`url(/images/galleries/${item.images[0].img})`}}></div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
}

const GalleryDisplay = (props) => {
    return(
        <div className="home-gallery">
            <h2>Image Gallery</h2>
                {showGallery(props.adata)}
        </div>
    )
}

export default GalleryDisplay;