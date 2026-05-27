import * as admin from 'firebase-admin';
import { db } from "../database";

export const getUserListings={
    method:'GET',
    path:'/api/users/{userId}/listings',
    handler:async(req, h)=>{
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId=req.params.userId;

        if(user.user_id!==userId) throw Boom.unauthorize('Users can only access their own listing')
       
        const {results}=await db.query(
            'SELECT * FROM `buy-and-sell`.listings WHERE user_id=?',
            [userId],
        );

        return results
    }
}