import React, { Component } from "react";
import Link from "next/link";

const convertDate = (date_string) => {
  let date = new Date(date_string);
  return `${date.getDate()} ${
    [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()]
  }`;
};

export default function NewsGridCard({ entries }) {
  return (
    <section className="news-area ptb-100">
      <div className="container">
        <div className="row">
          {entries && entries.map((entry, index) =>
            <div className="col-lg-6 col-md-6" key={index}>
              <div className="single-news">
                <div className="blog-img">
                  <Link href={'/articles/' + entry.fields.slug}>
                    <a>
                      <img src="/images/blog/blog1.png" alt="Image" />
                    </a>
                  </Link>

                  <div className="dates">
                    <span>{convertDate(entry.sys.updatedAt)}</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  {/* <ul>
                    <li>
                      <Link href="/news-grid/#">
                        <a>
                          <i className="flaticon-user"></i> Admin
                        </a>
                      </Link>
                    </li>
                    <li>
                      <i className="flaticon-conversation"></i> 2 Comments
                    </li>
                  </ul> */}

                  <Link href={'/articles/' + entry.fields.slug}>
                    <a>
                      <h3>{entry.fields.title}</h3>
                    </a>
                  </Link>

                  <p>
                    {/* {entry.fields.body} */}
                  </p>

                  <Link href={'/articles/' + entry.fields.slug}>
                    <a className="read-more">
                      Read More <i className="bx bx-plus"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {/* <div className="col-lg-12">
            <div className="page-navigation-area">
              <nav aria-label="Page navigation example text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <Link href="/news-grid/#">
                      <a className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </Link>
                  </li>

                  <li className="page-item active">
                    <Link href="/news-grid/#">
                      <a className="page-link">1</a>
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link href="/news-grid/#">
                      <a className="page-link">2</a>
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link href="/news-grid/#">
                      <a className="page-link">3</a>
                    </Link>
                  </li>

                  <li className="page-item">
                    <Link href="/news-grid/#">
                      <a className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
