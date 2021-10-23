import styled from 'styled-components';
import bg from '../../assets/images/login/IMG_20210312_140957_174 2.png';

export const LoginContainer = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url('${bg}');
    background-repeat: no-repeat;
    background-size: cover;

    .blur {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        heidth: 100%;
        background-color: rgba(255,255,255,0.6);
        backdrop-filter: blur(20px);
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 409px;
    height: 382px;
    padding: 32px;
    background-color: white;
    border-radius: 16px;
`;

export const FormTitle = styled.h1`
    font-weight: 500;
    color: #424242;
    -webkit-text-stroke: 1px #000000;
    line-height: 28px;
    margin-bottom: 32px;
`;

export const LoginInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;
`;

export const PasswordInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 32px;
`;

export const FormInput = styled.input<{ error?: boolean }>`
    height: 50px;
    border: ${props => (props.error ? '1px solid #EB1717;' : '1px solid #C9CACC')};
    border-radius: 4px;
    padding: 16px;
    font-size: 16px;
    font-weight: 300;
`;

export const FormLabel = styled.label<{ error?: boolean }>`
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 7px;
    color: ${props => (props.error ? '#EB1717;' : '#424242')};
`;

export const FormButton = styled.button`
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
    background: linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%);
`;

export const ErrorMessage = styled.span`
    position: absolute;
    bottom: -16px;
    font-size: 12px;
    color: #EB1717;
`;
