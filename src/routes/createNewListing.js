import { v4 as uuid } from 'uuid';
import * as admin from 'firebase-admin';
import { db } from '../database';

export const createNewListing={
    method:'POST',
    path:'/api/listings',
    handler:async(req, h)=>{
        const token = req.headers.authtoken;
        const user=await admin.auth().verifyIdToken(token);
        const userId = user.user_id;
        try {
        const id = uuid();
        const {name='', description='', price=0}=req.payload;
        const views=0;

        await db.query(`
            INSERT INTO \`buy-and-sell\`.listings (id, name, description, price, user_id, views)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [id, name, description, price, userId, views]
      );

      return { id, name, description, price, user_id: userId, views };
        } catch(err) {
            console.error('createNewListing error:', err);
            throw err;
        }
    }
}