import { fakeListings } from "./fake-data";

export const getAllListings = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) =>{
        return fakeListings;
    } 
}