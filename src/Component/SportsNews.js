import React from "react";

function SportsNews({ sportsNews }) {
  return (
    <>
      <div className="container">
        {sportsNews.map((sportsNews, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src={sportsNews.urlToImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{sportsNews.author}</h5>
                <p className="card-text">{sportsNews.description}</p>
                <a
                  href={sportsNews.url}
                  className="btn btn-primary"
                  target="_blank"
                >
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

export default SportsNews;
