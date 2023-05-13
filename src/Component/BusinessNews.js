import React from "react";

function BusinessNews({ businessNews }) {
  return (
    <>
      <div className="container">
        {businessNews.map((businessNews, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src={businessNews.urlToImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{businessNews.author}</h5>
                <p className="card-text">{businessNews.description}</p>
                <a
                  href={businessNews.url}
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

export default BusinessNews;
