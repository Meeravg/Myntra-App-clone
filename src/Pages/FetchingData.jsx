import React, { useState, useEffect } from 'react';
import "./Fetch.css";

const FetchingData = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategory = async (category) => {
    if (category) {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(`Error fetching category ${category}:`, error);
      }
    } else {
      fetchProducts();
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    fetchCategory(selectedCategory);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    sortProducts(e.target.value);
  };

  const sortProducts = (order) => {
    let sortedProducts = [...products];
    if (order === 'Low to High') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'High to Low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <img style={{ width: '100%', height: '600px' }} src="https://couponswala.com/blog/wp-content/uploads/2021/12/myntra-upcomming-sale-min-1.png" alt="" />
        <br />
        <h1 style={{ marginLeft: '-1150px', fontFamily: 'inherit' }}>Select by filter</h1>
        <br />
      <div className="nav">
    <select style={{ width: '200px', height: '30px', color: "black", marginTop: '-12px'}} onChange={handleCategoryChange} value={category}>
          <option value="">Select by Category</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
        <input
          style={{ width: '150px', height: '30px', color: "black", marginTop: '-12px'}}
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={handleSearchChange}
        />
        <select style={{ width: '150px', height: '30px', color: "black", marginTop: '-12px'}} onChange={handleSortOrderChange} value={sortOrder}>
          <option value="">Sort by Price</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </div>
      
      <div id="container" className="grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="box">
            <img src={product.image} alt={product.title} />
            <h2 style={{ marginTop: '10px', fontWeight:"bold", paddingLeft:"20px"  }}>{product.title}</h2>
            <p style={{ paddingLeft:"20px" }}>Price - ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingData;
