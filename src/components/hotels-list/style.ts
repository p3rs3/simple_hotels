import styled from 'styled-components';
import rightArrow from '../../assets/images/hotels-list/Vector.svg';

export const HotelsListWrapper = styled.div`
    width: 664px;
    background-color: #fff;
    box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
    border-radius: 16px;
    padding: 48px 32px;
`;

export const HotelsListTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
`;

export const SearchLocationWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchLocationText = styled.span`
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
`;

export const ArrivalDate = styled.section`
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #41522E;
`;

export const RightArrow = styled.div`
    height: 17px;
    width: 9px;
    padding: 0 20px;
    background-image: url('${rightArrow}');
    background-repeat: no-repeat;
    background-position: center;
`;

export const SliderWrapper = styled.div`
    margin-bottom: 28px;
`;

export const FavoritesInfo = styled.div`
    font-weight: 300;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-bottom: 12px;

    b {
        margin: 0 4px 0 8px;
    }
`;

export const SearchedHotelsList = styled.div`
    max-height: 510px;
    padding: 0 20px 0 0;
`;

export const FavoriteLabel = styled.div`
`;

export const SearchedHotel = styled.div`

`;