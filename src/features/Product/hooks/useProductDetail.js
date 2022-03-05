import productApi from 'api/productApi';
import { useEffect, useState } from 'react';

function useProductDetail(productId) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            (async () => {
                const response = await productApi.get(productId);
                setProduct(response);
            })();
            setLoading(false);
        } catch (error) {
            console.log('Failed to fetch product detail');
        }
    }, [productId]);

    return { product, loading };
}

export default useProductDetail;
