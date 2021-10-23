export interface Hotel {
    id: string;
    name: string;
    date: {
        day: string | number;
        month: string;
        year: string | number;
    };
    days: number,
    rating: number;
    price: number;
    isFavorite: boolean;
}