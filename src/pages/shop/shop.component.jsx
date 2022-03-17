import React, { useState } from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/preview-collection/preview-collection';

// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         };
//     }
//     render() {
//         const { collections } = this.state;

//         return (
//             <div className="shop-page">
//                 {
//                     collections.map(({ id, ...otherSectionProps }) => (
//                         <PreviewCollection key={id} {...otherSectionProps} />
//                     ))
//                 }
//             </div>
//         )
//     }
// }

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherSectionProps }) => (
                    <PreviewCollection key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}


export default ShopPage;