import axios, { AxiosResponse } from "axios";
import { HotelsApi } from "../constants";
import { GetHotelsResponse } from "./types";

export default class HotelService {
    static async getHotels(location: string, checkIn: string, checkOut: string): Promise<AxiosResponse<GetHotelsResponse[]>> {
        return axios.get<GetHotelsResponse[]>(`${HotelsApi.GET_HOTELS}?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`);
    }
}