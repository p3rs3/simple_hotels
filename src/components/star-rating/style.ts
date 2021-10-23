import styled from 'styled-components';
import activeStar from '../../assets/images/star-rating/Vector_star_active.svg';
import inactiveStar from '../../assets/images/star-rating/Vector_star_inactive.svg';

export const StarsWrapper = styled.div`
    display: flex;
    column-gap: 4px;
`;

export const ActiveStar = styled.div`
    width: 17px;
    height: 17px;
    background-image: url('${activeStar}');
`;

export const InactiveStar = styled.div`
    width: 17px;
    height: 17px;
    background-image: url('${inactiveStar}');
`;