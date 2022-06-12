import React from 'react';
import { useParams } from 'react-router';
import { useLocalStorageState } from '../../CustomHooks/CustomHooks';
import { useProductContext } from '../../store/index.store';

export const SingleProduct = () => {
  const { productID } = useParams();
  const { productCurrentState } = useProductContext();
  const singleProduct = productCurrentState?.productsList?.find(
    (product) => product.id === productID
  );
  console.log(singleProduct);

  return (
    <main>
      <section className="page-hero">
        <div className="section-center">
          <h3 className="page-hero-title">
            Home <span className="title-slash">/</span>
            {singleProduct?.productTitle || 'product'}
          </h3>
        </div>
      </section>
      <section className="single-product">
        <div className="section-center single-product-center">
          <img
            src={
              singleProduct?.imgUrl ||
              'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Mercury-1_540x.png?v=1639400857'
            }
            className="single-product-img img"
            alt=""
          />
          <article className="single-product-info">
            <div>
              <h2 className="single-product-title">
                {singleProduct?.productTitle || 'Smart Watch'}
              </h2>
              <p className="single-product-company text-slanted">{`by ${
                singleProduct?.brand || 'boat'
              }`}</p>
              <p className="single-product-price">
                ₹{singleProduct?.productPrice || 5000}
              </p>
              <div className="single-product-colors" />
              <p className="single-product-desc">
                {singleProduct?.productDesc}
              </p>

              <div className="single-product-btns flex-al-center">
                <button type="submit" className="btn btn-squared" data-id="id">
                  add to cart
                </button>
                <button
                  type="submit"
                  className="wishlist-btn btn btn-squared btn-outline-secondary m-left-small"
                  data-id="id"
                >
                  <svg
                    className="wishlist-svg"
                    id="icon-heart"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};
