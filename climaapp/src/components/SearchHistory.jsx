import React from "react";

const SearchHistory = ({ history, onCityClick }) => {
  return (
    <div className="search-history">
      <h2>Historial de Busquedas</h2>
      <ul>
        {history.map((search) => (
          <li key={search._id} onClick={() => onCityClick(search.city)}>
            {search.city} - {new Date(search.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
