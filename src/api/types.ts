export interface GetHotelsResponse {
    location: {
        country: string,
        geo: {
            lon: number,
            lat: number
        },
        state: null,
        name: string
    },
    priceAvg: number,
    pricePercentile: {},
    hotelName: string,
    stars: number | number,
    locationId: number,
    hotelId: string,
    priceFrom: number
}