import { getAllListings } from "./getAllListings";
import { getListing } from "./getListing";
import { addViewToListing } from "./addViewToListing";
import { getUserListings } from "./getUserListings";
import { createNewListing } from "./createNewListing";
import { updateListing } from "./updateListing";
import { deleteListing } from "./deleteListing";

export default [
                 getAllListings,
                 getListing, 
                 addViewToListing,
                 getUserListings,
                 createNewListing,
                 updateListing,
                 deleteListing
                ];