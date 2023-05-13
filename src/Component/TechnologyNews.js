import React from "react";

function TechnologyNews({ technologyNews }) {
  return (
    <>
      <div className="container">
        {technologyNews.map((technologyNews, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src={technologyNews.urlToImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{technologyNews.author}</h5>
                <p className="card-text">{technologyNews.description}</p>
                <a
                  href={technologyNews.url}
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

export default TechnologyNews;
