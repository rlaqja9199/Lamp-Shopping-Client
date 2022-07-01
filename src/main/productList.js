import React from 'react';

const ProductList = ({products}) => {
    console.log('컴포넌트안');
    console.log(products);
  
    return (
        <>
            {products.map(product=>(
                <div className="product-card">
                    <div className='product-img'>
                        <img src={product.imgsrc} alt="" />
                    </div>
                    <div className='product-contents'>
                        <span className='product-name'>{product.name}</span>
                        <span className='product-price'>{product.price}</span>
                        <div className='product-seller'>
                            <img src="images/icons/avatar.png" alt="" />{product.seller}
                        </div>
                    </div>
                </div>
           ))}
        </>
    )
    
};

export default ProductList;