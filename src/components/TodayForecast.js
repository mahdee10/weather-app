'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import WeatherImage from './weatherImage';
import { useTheme } from '../context/themeContext';
import { useTemp } from '../context/tempContext';
const TodayForecast = ({ data }) => {
    // const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const {celsius}=useTemp();
    const { isDarkMode } = useTheme();
    console.log("dddddddddd", data)

    if (data === undefined || data.length === 0) {
        return <div>wait</div>;
    }
    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    };
    

    return (
        <div className="">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                effect="coverflow"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => {
                    // console.log('slide change', swiper.activeIndex);
                    // setActiveSlideIndex(swiper.activeIndex);
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 3.5,
                        // spaceBetween: 50,
                    },
                    '@0.75': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 6.2,
                        // spaceBetween: 1,
                    },
                }}
            >
                {data.slice(1,12).map((cat, index) => (

                    <SwiperSlide
                        key={index}
                        onMouseEnter={() => console.log("Hovered on SwiperSlide:", cat.values.temperature)}
                    >
                        <div className=" flex flex-col sm:w-fit justify-between sm:h-fit h-24 content-end sm:mb-0 mb-3 shrink-0">
                            <h4 className={`sm:text-base text-xs ${isDarkMode ? 'text-g' : 'text-dg'} text-center  `}>
                                {cat?.time && formatTime(cat.time)}
                            </h4>
                            <div className='sm:flex hidden  pt-2.5 justify-center'>
                                <WeatherImage
                                    imageName={cat?.values?.weatherCode}
                                    size={"s"}
                                ></WeatherImage>
                            </div>
                            <div className='sm:hidden  flex pt-2.5 justify-center'>
                                <WeatherImage
                                    imageName={cat?.values?.weatherCode}
                                    size={"xs"}
                                ></WeatherImage>
                            </div>
                            <h4 className=' sm:text-base text-xs pt-2.5 text-white text-center '>
                            {celsius ? `${Math.floor(cat?.values?.temperature)}°C` : `${Math.floor((cat?.values?.temperature * 9/5) + 32)}°F`}
                            </h4>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TodayForecast;