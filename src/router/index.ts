import { Auth } from '../pages/Auth';
import { Hotels } from '../pages/hotels/Hotels';

export interface Routes {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    AUTH = '/auth',
    HOTELS = '/hotels',
}

export const publicRoutes: Routes[] = [
    {
        path: RouteNames.AUTH,
        exact: true,
        component: Auth
    }
];

export const privateRoutes: Routes[] = [
    {
        path: RouteNames.HOTELS,
        exact: true,
        component: Hotels
    },
];