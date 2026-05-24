import { fakeListings } from "./fake-data";
import Boom from '@hapi/boom';

export const getListing = {
    method: 'GET',
    path: '/api/listing/{id}',
    handler: (req, h) => {
        const listing = fakeListings.find((listing) => listing.id === req.params.id);
        return listing || Boom.notFound(`Listing doesn't exist with id ${req.params.id}`);
    }
}
