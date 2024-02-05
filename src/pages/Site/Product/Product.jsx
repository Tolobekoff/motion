import React from 'react';
import photo from "../../../components/images/product-img.svg"

const Product = () => {
    return (
        
        <section id="product">
            <div className="container">
                <div className="product">
                    <img src={photo} alt="" />
                </div>
            </div>
        </section>

        
    );
};

export default Product;