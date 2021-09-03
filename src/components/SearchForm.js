import React from "react";
import { useGlobalContext } from "../context/context";
import "../styles/searchForm.scss";

function SearchForm() {
  const { query, handleSearch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search">
      <h2 className="search__title">Search news</h2>
      <form className="search__form" onSubmit={handleSubmit}>
        <label htmlFor="news"></label>
        <input
          type="text"
          id="news"
          className="search__form-input"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </section>
  );
}

export default SearchForm;
