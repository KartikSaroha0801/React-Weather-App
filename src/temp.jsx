// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=d81daec2f0a47d2c34ff78ccc5567fb9

import React, { useEffect, useState } from "react";
import "./styles.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("delhi");
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d81daec2f0a47d2c34ff78ccc5567fb9`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="What are you looking for?"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            type="button"
            className="searchButton"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* Our Temp Card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi-day-sunny" />
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>5&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Delhi, India</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* our 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset" />
              </p>
              <p className="extra-info-leftside">
                15:34 PM <br /> Sunset{" "}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity" />
              </p>
              <p className="extra-info-leftside">
                15:34 PM <br /> Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain" />
              </p>
              <p className="extra-info-leftside">
                15:34 PM <br /> Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind" />
              </p>
              <p className="extra-info-leftside">
                15:34 PM <br /> Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default Temp;
