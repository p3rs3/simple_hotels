import styled from 'styled-components';
import arrow from '../../assets/images/navbar/Vector (2).svg';
import bracket from '../../assets/images/navbar/Vector (1).svg';
import line from '../../assets/images/navbar/Vector (3).svg';

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
`;

export const NavbarTitle = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #424242;
`;

export const LogoutWrapper = styled.div`
    position: relative;
    width: 80px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.408px;
    color: #41522E;
    cursor: pointer;
`;

export const Arrow = styled.div`
    position: absolute;
    width: 6px;
    height: 14px;
    top: 3px;
    right: 0px;
    background-image: url('${arrow}');
    background-position: center;
    background-size: cover;
`;

export const Bracket = styled.div`
    position: absolute;
    width: 10px;
    height: 19px;
    right: 12px;
    top: 0;
    background-image: url('${bracket}');
    background-position: center;
    background-size: cover;
`;

export const Line = styled.div`
    position: absolute;
    width: 12px;
    height: 4px;
    top: 8px;
    right: 2px;
    background-image: url('${line}');
    background-position: center;
    background-size: cover;
`;