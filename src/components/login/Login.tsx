import { FC } from 'react';
import { LoginForm, LoginContainer, FormTitle, LoginInputWrapper, PasswordInputWrapper, FormInput, FormLabel, FormButton, ErrorMessage } from './style';
import { useForm, SubmitHandler} from 'react-hook-form';
import { LoginFormType } from './types';
import { useActions } from '../../hooks/useActions';

export const Login: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useActions();

    const formSubmit:  SubmitHandler<LoginFormType> = () => {
        login();
    }

    console.log(errors);

    return (
        <LoginContainer>
            <div className='blur'>
                <LoginForm onSubmit={handleSubmit(formSubmit)}>
                    <FormTitle>
                        Simple Hotel Check
                    </FormTitle>    
                    <LoginInputWrapper>
                        <FormLabel error={!!errors.login}>
                            Логин
                        </FormLabel>
                        <FormInput 
                            type="text"
                            error={!!errors.login}
                            {
                                ...register(
                                    'login',
                                    {
                                        required: true,
                                        pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                                    }
                                )
                            }
                        />
                        {errors.login && errors.login.type === 'required' && <ErrorMessage>Обязательное поле</ErrorMessage>}
                        {errors.login && errors.login.type === 'pattern' && <ErrorMessage>Некорректный email</ErrorMessage>}
                    </LoginInputWrapper>
    
                    <PasswordInputWrapper className="password-input">
                        <FormLabel error={!!errors.password}>
                            Пароль
                        </FormLabel>
                        <FormInput
                            type="text"
                            error={!!errors.password}
                            {
                                ...register(
                                    'password',
                                    {
                                        required: true,
                                        minLength: 8,
                                        pattern: /^[^а-яё]+$/iu,
                                    },
                                )
                            }
                        />
                        {errors.password && errors.password.type === 'required' && <ErrorMessage>Обязательное поле</ErrorMessage>}
                        {errors.password && errors.password.type === 'minLength' && <ErrorMessage>Минимальная длина 8 символов</ErrorMessage>}
                        {errors.password && errors.password.type === 'pattern' && <ErrorMessage>Только кириллица</ErrorMessage>}
                    </PasswordInputWrapper>

                    <FormButton type="submit">
                        Войти
                    </FormButton>
                </LoginForm>
            </div> 
        </LoginContainer>
    )
}