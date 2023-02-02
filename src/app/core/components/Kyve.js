import React, { useState ,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from '../styles/slider.module.scss';
import useWindowDimensions from '../../hooks/useWindowDimensions.js'
import 'swiper/css';


const Kyve = ({children}) => {
	const [slidesPerView,setSlidesPerView] = useState(3)
	const {width} = useWindowDimensions()

	useEffect(() => {
		if (width > 430 && width < 630) {
			setSlidesPerView(2)
		 }
		 if (width < 430) {
			setSlidesPerView(1.34)
		 }
	},[width])


    return (
        <div className={classes.root}>
            <Swiper
				  spaceBetween={0}
				  slidesPerView={slidesPerView}
				  pagination={{ clickable: true }}
				  scrollbar={{ draggable: true }}
            >
                {
                    children.map((child, i) => (
                        <SwiperSlide   key={i}>
                            {child}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}

export default Kyve;
