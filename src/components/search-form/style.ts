import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 410px;
    border-radius: 16px;
    padding: 32px;
    background-color: #fff;
`;

export const SearchFromInput = styled.input`
    height: 50px;
    border: 1px solid #C9CACC;
    border-radius: 4px;
    padding: 16px;
    font-weight: 300;
    font-size: 16px;
`;

export const SearchFromInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 20px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type='number'] {
        -moz-appearance: textfield;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`;

export const SearchFormError = styled.span`
    position: absolute;
    bottom: -16px;
    font-size: 12px;
    color: red;
`;

export const SearchFromLabel = styled.label`
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #424242;
`;

export const SearchFromButton = styled.button`
    font-family: Roboto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
    color: #fff;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
`;  