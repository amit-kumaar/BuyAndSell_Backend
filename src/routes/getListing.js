import { db } from "../database";
import Boom from '@hapi/boom';

export const getListing = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async(req, h) => {
        const { results } = await db.query(
          "SELECT * FROM `buy-and-sell`.listings where id=?",
          [req.params.id],
        );
        const listing=results[0];
        return listing || Boom.notFound(`Listing doesn't exist with id ${req.params.id}`);
    }
}
