import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from '../styles/slider.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions.js'

const Slider = ({ navigation, children }) => {
    const [slidesPerView, setSlidesPerView] = useState(3)
    const { width } = useWindowDimensions()
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const sliderRef = useRef(null);

    const handlePrev = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }

    const handleNext = () => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }

    useEffect(() => {
        if (width > 430 && width < 630) {
            setSlidesPerView(2)
        }
        if (width < 430) {
            setSlidesPerView(1.34)
        }
    }, [width])


    return (
        <div className={classes.root}>
            {
                navigation &&
                <>
                    <div ref={navigationPrevRef} className={classes.arrowPrev} onClick={handlePrev}>&larr;</div>
                    <div ref={navigationNextRef} className={classes.arrowNext} onClick={handleNext}>&rarr;</div>
                </>
            }
            <Swiper
                spaceBetween={0}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                ref={sliderRef}
            >
                {
                    children.map((child, i) => (
                        <SwiperSlide key={i}>
                            {child}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default Slider;
