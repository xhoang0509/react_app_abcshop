import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { makeStyles } from '@mui/styles';
import './ProductSlider.scss';

ProductSlider.propTypes = {};
const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};
const useStyles = makeStyles(() => ({
    root: {},
    box: {
        '& img': {
            width: '100%',
        },
    },
}));
function ProductSlider(props) {
    const classes = useStyles();
    return (
        <div>
            <Slider {...settings} className={classes.box}>
                <div>
                    <img
                        src="https://anphat.com.vn/media/banner/01_Mar2e17a16a64f7410613f050e753d7a2c0.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://anphat.com.vn/media/banner/27_Janead0897acfce7c6e780d0c7c61dac591.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://anphat.com.vn/media/banner/21_Deca04496114ad5355c7b1b4c0752b62f53.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://anphat.com.vn/media/banner/27_Jan62b922e43d88aa7913a887d30e396eab.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://anphat.com.vn/media/banner/20_Jan2579f6a42f459f8145cb507791051fac.jpg"
                        alt=""
                    />
                </div>
            </Slider>
        </div>
    );
}

export default ProductSlider;
