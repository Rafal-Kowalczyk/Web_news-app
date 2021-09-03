import React from "react";
import { useGlobalContext } from "../context/context";

import "../styles/buttonsNav.scss";

function ButtonsNav() {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        onClick={() => handlePage("dec")}
        className="btn-nav"
      >
        prev
      </button>
      <p className="btn-desc">
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => handlePage("inc")}
        className="btn-nav"
      >
        next
      </button>
    </div>
  );
}

export default ButtonsNav;
