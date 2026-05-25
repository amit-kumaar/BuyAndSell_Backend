import { db } from "../database";

export const getUserListings={
    method:'GET',
    path:'/api/users/{userId}/listings',
    handler:async(req, h)=>{
        const userId=req.params.userId;
       
        const {results}=await db.query(
            'SELECT * FROM `buy-and-sell`.listings WHERE user_id=?',
            [userId],
        );

        return results
    }
}