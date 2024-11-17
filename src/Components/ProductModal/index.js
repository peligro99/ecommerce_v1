import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import { useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    const goto = (index) =>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => props.closeProductModal()}>

                <Button className='close_' onClick={() => props.closeProductModal()}><MdClose /></Button>
                <h4 claaa="mb-1 font-weight-bold">All Natural Italian-Style Chicken MeatBalls</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Brands:</span>
                        <span className='ml-2'><b>Welch's</b></span>
                    </div>

                    <Rating name="read-only" value={5} size='small' precision={0.5} readOnly />



                </div>

                <div className='row mt-2 productDetaileModal'>
                    <div className='col-md-5'>
                        <div className='productZoom'>
                            <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>

                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={2}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`}/>
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={2}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`}/>
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={2}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`}/>
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={2}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`}/>
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={2}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`}/>
                                </div>

                            </Slider>
                        </div>
                        <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`} className='w-100' onClick={() => goto(0)}/>
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`} className='w-100' onClick={() => goto(1)}/>
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`} className='w-100' onClick={() => goto(2)}/>
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`} className='w-100' onClick={() => goto(3)}/>
                            </div>
                            <div className='item'>
                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg`} className='w-100' onClick={() => goto(4)} />
                            </div>
                            
                        </Slider>

                    </div>

                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center'>
                            <span className='oldPrice lg mr-2'>$9.35</span>
                            <span className='netPrice text-danger lg'>$7.25</span>
                        </div>


                        
                    </div>
                </div>
                <hr />
                <br /><br />
                <br /><br />
                <br /><br />
            </Dialog>
        </>
    )
}

export default ProductModal;