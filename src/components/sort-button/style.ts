import styled from 'styled-components';
import arrowTopActive from '../../assets/images/sort-button/arrow_top_active.svg';
import arrowBottomInactive from '../../assets/images/sort-button/arrow_bottom_inactive.svg';

export const SortButtonWrapper = styled.div<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    width: max-content;
    padding: 4px 10px 4px 8px;
    background: #FFFFFF;
    border: ${props => (props.isActive ? '1px solid #41522E' : '1px solid #E5E5E5')};
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.408px;
    color: ${props => (props.isActive ? '#41522E' : '#99A0A3')};
    cursor: pointer;
    user-select: none;
`;

export const SortButtonNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 9px;
    height: 12px;
`;

export const SortButtonNavTop = styled.div<{ isActive: boolean }>`
    width: 9px;
    height: 5px;
    background-position: center;
    background-image: ${props => (props.isActive ? `url('${arrowTopActive}')` : `url('${arrowBottomInactive}')`)};
    transform: ${props => (props.isActive ? 'rotate(0)' : 'rotate(180deg)')};
`;

export const SortButtonNavDown = styled.div<{ isActive: boolean }>`
    width: 9px;
    height: 5px;
    background-position: center;
    background-image: ${props => (props.isActive ? `url('${arrowTopActive}')` : `url('${arrowBottomInactive}')`)};
    transform: ${props => (props.isActive ? 'rotate(180deg)' : 'rotate(0)')};
`;


export const MessageItemText = styled.div<{ isSelf: boolean }>`
    background-color: ${props => (props.isSelf ? '#d0e8d2' : '#80acc7')};
    padding: 10px;
    width: max-content;
    border-radius: 15px;
    color: ${props => (props.isSelf ? '#000' : '#fff')}
`;