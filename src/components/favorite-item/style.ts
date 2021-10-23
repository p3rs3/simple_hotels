import styled from 'styled-components';
import favotiteLogoActive from '../../assets/images/hotel-item/Vector_hearth_active.svg';

export const FavoriteItemWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    border-bottom: 1px solid rgba(135, 135, 135, 0.2);

    .hotel-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
    }

    .hotel-title__name {
        max-width: 240px;
        font-weight: 300;
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: #424242;
    }

    .hotel-date {
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: #878787;
        margin-bottom: 10px;    
    }

    .hotel-info {
        display: flex;
        justify-content: space-between;
    }

    .hotel-info__price {
        font-weight: 300;
        font-size: 11px;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: #878787;
    }

    .hotel-info__price span {
        font-size: 17px;
        line-height: 22px;
        text-align: right;
        letter-spacing: -0.408px;
        color: #424242;
        margin-left: 12px;
    }

    .dash {
        margin: 0 13px 0 15px; 
    }
`;

export const FavoriteLogo = styled.div`
    align-self: end;
    width: 21px;
    height: 18px;
    background-image: url('${favotiteLogoActive}');
    cursor: pointer;
`;