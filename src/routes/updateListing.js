import { db } from "../database";

export const updateListing={
    method:'POST',
    path:'/api/listings/{id}',
    handler:async(req, h)=>{
        const {id}=req.params;
        const{name,description,price} = req.payload;
        const userId='12345';

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