import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import BusinessNews from "./Component/BusinessNews";
import SportsNews from "./Component/SportsNews";
import TechnologyNews from "./Component/TechnologyNews";
import EntertainmentNews from "./Component/EntertainmentNews";

function App() {
  const [news, setNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=93954bf08dff4e648b3ef7fbf884bbcc"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=93954bf08dff4e648b3ef7fbf884bbcc"
      )
      .then((result) => {
        console.log(result.data.articles);
        setBusinessNews(result.data.articles);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=93954bf08dff4e648b3ef7fbf884bbcc"
      )
      .then((result) => {
        console.log(result.data.articles);
        setSportsNews(result.data.articles);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=93954bf08dff4e648b3ef7fbf884bbcc"
      )
      .then((result) => {
        console.log(result.data.articles);
        setTechnologyNews(result.data.articles);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=93954bf08dff4e648b3ef7fbf884bbcc"
      )
      .then((result) => {
        console.log(result.data.articles);
        setEntertainmentNews(result.data.articles);
      });
  }, []);

  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=93954bf08dff4e648b3ef7fbf884bbcc').then((res) => {
  //     return res.json();
  //   }).then((data) => {
  //     console.log(data);
  //   })
  // })

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/general" element={<News news={news} />}></Route>
          <Route
            path="/business"
            element={<BusinessNews businessNews={businessNews} />}
          ></Route>
          <Route
            path="/sports"
            element={<SportsNews sportsNews={sportsNews} />}
          ></Route>
          <Route
            path="/technology"
            element={<TechnologyNews technologyNews={technologyNews} />}
          ></Route>
          <Route
            path="/entertainment"
            element={
              <EntertainmentNews entertainmentNews={entertainmentNews} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
