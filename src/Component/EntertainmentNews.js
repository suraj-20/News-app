import React from "react";

function EntertainmentNews({ entertainmentNews }) {
  return (
    <>
      <div className="container">
        {entertainmentNews.map((entertainmentNews, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src={entertainmentNews.urlToImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{entertainmentNews.author}</h5>
                <p className="card-text">{entertainmentNews.description}</p>
                <a
                  href={entertainmentNews.url}
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

export default EntertainmentNews;
