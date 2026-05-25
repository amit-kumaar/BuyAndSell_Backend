import { db } from '../database';
import Boom from '@hapi/boom';

export const addViewToListing={
    method:'POST',
    path:'/api/listings/{id}/add-view',
    handler:async(req,h)=>{
        const id = req.params.id;
        await db.query(
            'UPDATE `buy-and-sell`.listings SET views = views + 1 WHERE id=?',
            [id],
        );

        const { results } = await db.query(
          'SELECT * FROM `buy-and-sell`.listings WHERE id=?',
          [id],
        );
        const updatedListing = results[0];
        return updatedListing || Boom.notFound(`Listing doesn't exist with id ${id}`);
    }
       
    }