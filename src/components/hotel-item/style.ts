import styled from 'styled-components';
import hotelLogo from '../../assets/images/hotel-item/Vector_home.svg';
import hotelLogoHeader from '../../assets/images/hotel-item/Vector_top_arrow.svg';
import favotiteLogoActive from '../../assets/images/hotel-item/Vector_hearth_active.svg';
import favotiteLogoInactive from '../../assets/images/hotel-item/Vector_hearth_inactive.svg';

export const HotelItemWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 19px 15px 17px 0;
    border-bottom: 1px solid rgba(135, 135, 135, 0.2);

    .hotel-logo {
        position: relative;
        display: flex;
        align-items: center;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: rgba(65, 82, 46, 0.05);
        background-image: url('${hotelLogo}');
        background-repeat: no-repeat;
        background-position: center;
        
    }

    .hotel-logo__home-header {
        position: absolute;
        width: 64px;
        height: 64px;
        background-image: url('${hotelLogoHeader}');
        background-repeat: no-repeat;
        background-position: center;
        top: -11px;
        left: 0px;
    }

    .hotel-info {
        margin-left: 24px;
    }

    .hotel-info__name {
        max-width: 350px;
        font-weight: 300;
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: #424242;
    }

    .hotel-info__date {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;   
        letter-spacing: -0.408px;
        color: #878787;
        margin-bottom: 4px;
    }

    .hotel-info__date .dash {
        margin-left: 10px;
        margin-right: 5px;
    }

    .hotel-controls {
        display: flex;
        flex-direction: column;
        margin-left: auto;
    }

    .hotel-controls p {
        font-weight: 300;
        font-size: 11px;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: #878787;
    }

    .hotel-controls p span {
        font-size: 17px;
        line-height: 22px;
        text-align: right;
        letter-spacing: -0.408px;
        color: #424242;
        margin-left: 15px;
    }
`;

export const FavoriteLogo = styled.div<{ isActive: boolean }>`
    align-self: end;
    width: 21px;
    height: 18px;
    background-image: ${props => (props.isActive ? `url(${favotiteLogoActive})` : `url(${favotiteLogoInactive})`)};
    margin-bottom: 22px;
    cursor: pointer;
`;