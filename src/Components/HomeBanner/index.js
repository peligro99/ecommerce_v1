import React from "react";
import Slider from "react-slick";

const HomeBanner = ()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };

    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://image.hm.com/assets/hm/ea/99/ea9997ab6c3f41fd717da7c9597fa60ffce7fc0b.jpg?imwidth=2140" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://img01.ztat.net/article/spp-media-p1/44a5d031780731e89ec5fcb5cf16af66/611db5bd48454f489ccd0ae6cb7e684b.jpg?imwidth=762" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://img01.ztat.net/article/spp-media-p1/44a5d031780731e89ec5fcb5cf16af66/611db5bd48454f489ccd0ae6cb7e684b.jpg?imwidth=762" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://img01.ztat.net/article/spp-media-p1/44a5d031780731e89ec5fcb5cf16af66/611db5bd48454f489ccd0ae6cb7e684b.jpg?imwidth=762" className="w-100"/>
                </div>
            </Slider>
           
        </div>
    )
}

export default HomeBanner;