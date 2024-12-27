
import React, { useEffect, useState } from 'react';
import { request, BASEURL } from '../../Connect/request';

import ProductDetails from '../ProductProfile/Partials/ProductDetails';
import { ProductPage } from '../Products/ProductPage';

const ProductManagement = () => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    displayImage();
  }, []);

  const displayImage = () => {
    request.get('display').then(function (response) {
      console.log(response, 'llllllllllll res');
      const blob = response.data;
      setImgUrl(blob);
      console.log(response.data, 'jjjjjj');
    });
  };

  return (
    <div>
      <ProductDetails setImgUrl={setImgUrl} />
      <ProductPage imgUrl={imgUrl} />
      <input name='wsx' imgUrl={imgUrl} hidden/>
    </div>
  );
};

export default ProductManagement;