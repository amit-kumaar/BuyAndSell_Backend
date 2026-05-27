import { db } from "../database";
import * as admin from 'firebase-admin';

export const updateListing={
    method:'PUT',
    path:'/api/listings/{id}',
    handler:async(req, h)=>{
        const {id}=req.params;
        const{name,description,price} = req.payload;
        const token=req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId=user.user_id;

        await db.query(`
            UPDATE \`buy-and-sell\`.listings 
            SET name=?, description=?, price=?, user_id=?
            WHERE id=?
        `,[name, description, price, userId, id]
        );

        const { results } = await db.query(
            'SELECT * FROM `buy-and-sell`.listings WHERE id=? AND user_id=?',
            [id, userId],
        );
        
        
        return results[0];
    }
}