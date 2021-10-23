import { useActions } from "../../hooks/useActions";
import { Arrow, Bracket, Line, LogoutWrapper, NavbarTitle, NavbarWrapper } from "./style"

export const Navbar = () => {
    const { logout } = useActions();

    const logoutHandler = () => {
        logout();
    }

    return (
        <NavbarWrapper>
            <NavbarTitle>
                Simple Hotel Check
            </NavbarTitle>
            <LogoutWrapper onClick={logoutHandler}>
                <span>
                    Выйти
                </span>
                <Arrow />
                <Bracket />
                <Line />
            </LogoutWrapper>
        </NavbarWrapper>
    )
}