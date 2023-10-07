import React, { useState, useEffect } from 'react';
import productsData from '../../productsData.json';
import './ProductList.css';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    const productsPerPage = 20;

    const [products, setProducts] = useState(productsData);
    const [sortedProducts, setSortedProducts] = useState([...products]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const productCategory = [...new Set(products.map((product) => product.category))];
    const productBrands = [...new Set(products.map((product) => product.brand))];
    const minPrice = Math.min(...products.map((product) => product.price));
    const maxPrice = Math.max(...products.map((product) => product.price));

    useEffect(() => {
        let filteredProducts = [...products];

        if (selectedBrand.length > 0) {
            filteredProducts = filterByBrand(filteredProducts, selectedBrand);
        }

        if (selectedCategory.length > 0) {
            filteredProducts = filterByCategory(filteredProducts, selectedCategory);
        }

        filteredProducts.sort((a, b) => a.price - b.price);

        setSortedProducts(filteredProducts);
    }, [products, selectedBrand, selectedCategory]);

    const handleBrandCheckboxChange = (e) => {
        const brand = e.target.value;
        if (brand === 'All') {
            setSelectedBrand([]);
        } else {
            setSelectedBrand((prevSelected) => {
                if (prevSelected.includes(brand)) {
                    return prevSelected.filter((item) => item !== brand);
                } else {
                    return [...prevSelected, brand];
                }
            });
        }
    };

    const handleCategoryCheckboxChange = (e) => {
        const category = e.target.value;
        if (category === 'All') {
            setSelectedCategory([]);
        } else {
            setSelectedCategory((prevSelected) => {
                if (prevSelected.includes(category)) {
                    return prevSelected.filter((item) => item !== category);
                } else {
                    return [...prevSelected, category];
                }
            });
        }
    };

    const handleSortChange = (e) => {
        const sortOption = e.target.value;

        if (sortOption === 'price-low-to-high') {
            const sortedByPriceAsc = [...sortedProducts].sort((a, b) => a.price - b.price);
            setSortedProducts(sortedByPriceAsc);
        } else if (sortOption === 'price-high-to-low') {
            const sortedByPriceDesc = [...sortedProducts].sort((a, b) => b.price - a.price);
            setSortedProducts(sortedByPriceDesc);
        } else if (sortOption === 'name-asc') {
            const sortedByNameAsc = [...sortedProducts].sort((a, b) => a.name.localeCompare(b.name));
            setSortedProducts(sortedByNameAsc);
        } else if (sortOption === 'name-desc') {
            const sortedByNameDesc = [...sortedProducts].sort((a, b) => b.name.localeCompare(a.name));
            setSortedProducts(sortedByNameDesc);
        }
    };

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleBuyProduct = (product) => {
        alert(`You have purchased ${product.name}`);
    };

    const filterByBrand = (products, brands) => {
        return products.filter((product) => brands.includes(product.brand));
    };

    const filterByCategory = (products, categorys) => {
        return products.filter((product) => categorys.includes(product.category));
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const calculateDiscountedPrice = (price, discount) => {
        return (price - (price * discount) / 100).toFixed(2);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-center">Products</h2>
            <div className="row mb-4">
                <div className="col-10">
                    <h3>Filters</h3>
                </div>
                <div className="col-2">
                    <label htmlFor="sortOptions" className="form-label">
                        Sort by:
                    </label>
                    <select id="sortOptions" className="form-select" onChange={handleSortChange}>
                        <option value="price-low-to-high">Price: Low to High</option>
                        <option value="price-high-to-low">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <div className="mb-3">
                        <label className="form-label">Filter by Brand:</label>
                        <div>
                            <input type="checkbox" id="selectAllBrands" value="All" checked={selectedBrand.length === 0} onChange={handleBrandCheckboxChange} className="me-1" />
                            <label htmlFor="selectAllBrands">All</label>
                        </div>
                        {productBrands.map((brand) => (
                            <div key={brand}>
                                <input type="checkbox" id={brand} value={brand} checked={selectedBrand.includes(brand)} onChange={handleBrandCheckboxChange} className="me-1" />
                                <label htmlFor={brand}>{brand}</label>
                            </div>
                        ))}
                    </div>
                    <div><hr /></div>
                    <div className="mb-3">
                        <label className="form-label">Filter by Category:</label>
                        <div>
                            <input type="checkbox" id="selectAllCategorys" value="All" checked={selectedCategory.length === 0} onChange={handleCategoryCheckboxChange} className="me-1" />
                            <label htmlFor="selectAllCategorys">All</label>
                        </div>
                        {productCategory.map((category) => (
                            <div key={category}>
                                <input type="checkbox" id={category} value={category} checked={selectedCategory.includes(category)} onChange={handleCategoryCheckboxChange} className="me-1" />
                                <label htmlFor={category}>{category}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        {currentProducts.map((product) => (
                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card">
                                    <Link to='/contact'><img src={product.thumbnail} alt={product.name} className="card-img-top" /></Link>
                                    <div className="card-body">
                                        <Link to='/contact'><h6 className="card-title text-capitalize">{product.name}</h6></Link>
                                        <p className="card-text">⭐{product.rating}</p>
                                        <span className="card-text font-weight-800">
                                            ₹{' '}
                                            {product.discount && (
                                                <span className="discounted-price fw-bold fs-5">
                                                    {calculateDiscountedPrice(product.price, product.discount)} rs
                                                </span>
                                            )}
                                            <span className="original-price text-decoration-line-through d-block text-muted mb-3">
                                                M.R.P.: {'  '}
                                                {product.price} Rs.
                                            </span>
                                        </span>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-outline-primary me-2" onClick={() => handleAddToCart(product)}> Add to Cart</button>
                                            <button className="btn btn-outline-success" onClick={() => handleBuyProduct(product)}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row justify-content-center">
                        <div className="pagination-container">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                                </li>
                                {Array(Math.ceil(sortedProducts.length / productsPerPage))
                                    .fill()
                                    .map((_, index) => (
                                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => paginate(index + 1)}> {index + 1} </button>
                                        </li>
                                    ))}
                                <li className={`page-item ${currentPage === Math.ceil(sortedProducts.length / productsPerPage) ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(sortedProducts.length / productsPerPage)}>Next</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
