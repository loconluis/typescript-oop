import axios from 'axios';
import { Product } from './models/product.model';

(async () => {
  function delay(ms: number) {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });

    return promise;
  }

  function getProducts() {
    const promise = axios.get(
      `http://api.escuelajs.co/api/v1/products?limit=10`
    );
    return promise;
  }

  async function getProductsAsync() {
    const promise = await axios.get<Product[]>(
      `http://api.escuelajs.co/api/v1/products?limit=10`
    );
    return promise.data;
  }

  console.log('----');
  const rta = await delay(2500);
  console.log(rta);
  console.log('----');
  const products = await getProductsAsync();
  console.log('data', products);
  // console.log('data count', products.lenght);
})();
