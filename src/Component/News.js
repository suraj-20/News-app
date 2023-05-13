import React from "react";
import "../App.css";

function News({ news }) {
  return (
    <>
      <div className="container">
        {news.map((news, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img src={news.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{news.author}</h5>
                <p className="card-text">{news.description}</p>
                <a href={news.url} className="btn btn-primary" target="_blank">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default News;
