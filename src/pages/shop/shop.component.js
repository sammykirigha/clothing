import React from "react";
import {Route} from 'react-router-dom'

import CollectionOverview from "../../components/collection-overview/collection-overview.comp.js";
import CollectionPage from "../collection/collection.comp.js";



const ShopPage = ({match}) =>(
    <div className="shop-page">
       <Route exact path = {`${match.path}`} component={CollectionOverview} />
       <Route path = {`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
 );


export default ShopPage;