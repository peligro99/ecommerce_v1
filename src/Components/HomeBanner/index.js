import React from "react";
import Slider from "react-slick";
import { Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from "swiper/modules";
import slide1 from '../../assets/images/slideBanner1.jpg';
import slide2 from '../../assets/images/slideBanner2.jpg';

const HomeBanner = ()=>{
    return(
        <div className="container mt-3">
            <div className="homeBannerSection">
            <Swiper 
                slidesPerView={1}
                spaceBetween={15}
                navigation={true}
                loop={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item">
                    <img src={slide1} className="w-100"/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <img src={slide2} className="w-100"/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <img src={slide1} className="w-100"/>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item">
                    <img src={slide2} className="w-100"/>
                </div>
                </SwiperSlide>
            </Swiper>
           
        </div>
        </div>
    )
}

export default HomeBanner;