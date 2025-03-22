import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios";


function ProductList() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get("/products")
            .then(response => {
                console.log("API Response:", response.data); // Debugging API data
                setData(response.data || []);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setError("Failed to load products");
            });
    }, []);

    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <h1>Product List</h1>
            {data.length > 0 ? (
                data.map((product, index) => (
                    <div key={product?._id || index}>
                        <h2>{product?.name || "No Name"}</h2>
                        <p>Price: ${product?.price || "N/A"}</p>
                        <img src={product?.image || "/default.jpg"} alt={product?.name || "Product"} width="200" />
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
}

export default ProductList;