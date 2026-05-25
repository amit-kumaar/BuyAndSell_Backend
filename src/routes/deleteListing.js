import { db } from "../database";


export const deleteListing={
    method:'DELETE',
    path:'/api/listings/{id}',
    handler:async(req, h)=>{
        const {id} = req.params;
        await db.query(
            'DELETE FROM `buy-and-sell`.listings WHERE id=?',
            [id],
        );

        return {message:'Successfully deleted!'};
    }
}