import HomeBanner from "../../Components/HomeBanner";
import banner1 from '../../assets/images/banner1.jpg'
import { Button } from "@mui/material/";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import ProductItem from "../../Components/ProductItem";

const Home = () => {
    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return (
        <>
            <HomeBanner />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={banner1} className="cursor w-100"></img>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All
                                    <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    // install Swiper modules

                                    spaceBetween={0}
                                    slidesPerView={4}
                                    navigation
                                    pagination={{ clickable: true }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>



                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            





                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products in stock</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All
                                    <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    // install Swiper modules

                                    spaceBetween={0}
                                    slidesPerView={4}
                                    navigation
                                    pagination={{ clickable: true }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>



                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>








                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;