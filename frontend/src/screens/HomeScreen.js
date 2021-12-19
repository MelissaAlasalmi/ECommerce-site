import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Product } from '../components/Product';
import { Loading } from '../components/Loading';
import { Message } from '../components/Message';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch(err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [])
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="row center">
          {products.map(product => (
            <Product key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
  )
}
