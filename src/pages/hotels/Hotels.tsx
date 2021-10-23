import moment from 'moment';
import { FC } from 'react';
import { Favorites } from '../../components/favorites/Favorites';
import { HotelsList } from '../../components/hotels-list/HotelsList';
import { Navbar } from '../../components/navbar/Navbar';
import { SearchForm } from '../../components/search-form/SearchForm';
import { Container, HotelsContainer, HotelsWrapper, LeftSide, RightSide } from './style';

export const Hotels: FC = () => {
    return (
        <HotelsContainer>   
            <Navbar />
            <Container>
                <HotelsWrapper>
                    <LeftSide>
                        <SearchForm />
                        <Favorites />
                    </LeftSide>
                    <RightSide>
                        <HotelsList />  
                    </RightSide>
                </HotelsWrapper>
            </Container>
        </HotelsContainer>
    )
}