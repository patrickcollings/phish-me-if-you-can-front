import React, { Component } from "react";
import NewsSidebar from "./NewsSidebar";
import Link from "next/link";
import CommentsArea from "./CommentsArea";

import ReactMarkdown from "react-markdown";

export default function NewsDetailsContent({ fields }) {
  return (
    <section className="news-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="blog-details-desc">
              {/* <div
                className="article-image"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src="/images/blog-details/blog-details.jpg" alt="Image" />
              </div> */}

              <div className="article-content">
                {/* <div className="entry-meta">
                  <ul>
                    <li>
                      <span>Posted On:</span>
                      <a>February 20 , 2020</a>
                    </li>
                    <li>
                      <span>Posted By:</span>
                      <a>John Anderson</a>
                    </li>
                  </ul>
                </div> */}

                {/* <h2>{fields.title}</h2> */}
                <div>
                    <ReactMarkdown>{fields && fields.body}</ReactMarkdown>
                </div>
              </div>

              {/* <div className="article-footer">
                <div className="article-tags">
                  <span>
                    <i className="bx bx-share-alt"></i>
                  </span>
                  <Link href="news-details/#">
                    <a>Share</a>
                  </Link>
                </div>

                <div className="article-share">
                  <ul className="social">
                    <li>
                      <Link href="news-details/#">
                        <a target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="news-details/#">
                        <a target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="news-details/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="news-details/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* 
              <div className="post-navigation">
                <div className="navigation-links">
                  <div className="nav-previous">
                    <Link href="news-details/#">
                      <a>
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </a>
                    </Link>
                  </div>

                  <div className="nav-next">
                    <Link href="news-details/#">
                      <a>
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div> */}

              {/* Comments Area */}
              {/* <CommentsArea /> */}
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-12">
            <NewsSidebar />
          </div> */}
        </div>
      </div>
    </section>
  );
}
