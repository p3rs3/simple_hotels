export interface HotelItemType {
    id: string;
    name: string;
    date: {
        day: string | number;
        month: string;
        year: string | number;
    };
    rating: number;
    price: string | number;
    isFavorite: boolean;
}