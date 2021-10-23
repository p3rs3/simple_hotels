import styled from 'styled-components';
import image1 from '../../assets/images/hotels-slider/Rectangle 23.png';

export const SliderWrapper = styled.div`
`;

export const SliderItemWrapper = styled.div`
    width: 164px;
    height: 149px;
    padding-right: 5px;
`;

export const SliderItem = styled.div<{ image: string }>`
    width: 164px;
    height: 149px;
    background-image: ${props => (props.image ? `url('${props.image}')` : `url('${image1}')`)};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

