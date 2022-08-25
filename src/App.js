import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./Components/Posts";
import Pagination from "./Components/Pagination";
import banner from "./Images/banner22.jpg";

function App() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(35);
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("./products.JSON");
      setposts(res.data);
      setSearchProducts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleSearch = (event) => {
    console.log();
    const searchText = event.target.value;
    const matchedProducts = posts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchProducts(matchedProducts);
    console.log(matchedProducts.length);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = searchProducts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div>
        <img width="100%" height="500px" src={banner} alt="" />
      </div>
      <div className="input-container my-5 p-2 h-100 container">
        <input
          onChange={handleSearch}
          className="field form-control shadow-lg"
          type="text"
          placeholder=" Search Products  example: Hp"
        />
      </div>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <h4 className="mt-5"> Total Products: {posts.length}</h4>
      <Pagination
        postPerPage={postPerPage}
        totoalposts={posts.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
}

export default App;
