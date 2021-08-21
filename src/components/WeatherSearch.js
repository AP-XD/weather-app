import React, { useContext } from "react";

import Context from "../Context";

const WeatherSearch = () => {
  const { call } = useContext(Context);
  return (
    <div className="search">
      <form onSubmit={call} className="search__form">
        <input name="city" className="search__input" type="text" />
        <div className="search__submit">
          <button className="search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
