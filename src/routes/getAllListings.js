import { db } from "../database";

export const getAllListings = {
    method: 'GET',
    path: '/api/listings',
    handler: async(req, h) =>{
        const {results} = await db.query(
            'SELECT * FROM `buy-and-sell`.listings;'
        );
        return results;
    } 
}