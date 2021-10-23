import Slider from "react-slick";
import { SliderWrapper } from "../hotels-list/style";
import { SliderItem, SliderItemWrapper } from "./style";
import image1 from '../../assets/images/hotels-slider/Rectangle 23.png';
import image2 from '../../assets/images/hotels-slider/Rectangle 24.png';
import image3 from '../../assets/images/hotels-slider/Rectangle 28.png';
import image4 from '../../assets/images/hotels-slider/Rectangle 29.png';

export const HotelsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        variableWidth: true,
        slidesToScroll: 1
    };

    console.log(image1);
    const images = [image1, image2, image3, image4];

    return (
        <SliderWrapper>
            <Slider {...settings}>
                {
                    images.map((image, key) => {
                        return (
                            <SliderItemWrapper key={key}>
                                <SliderItem image={image}/>
                            </SliderItemWrapper>
                        );
                    })
                }
            </Slider>
        </SliderWrapper>
    )
}