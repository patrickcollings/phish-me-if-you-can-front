import React, { Component } from 'react';
import { publicRuntimeConfig } from '../../next.config';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        let elementId2 = document.getElementById("action-button");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                elementId2.classList.remove("hide-action-button");
            } else {
                elementId.classList.remove("is-sticky");
                elementId2.classList.add("hide-action-button");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
          <>
            <div id="navbar" className="navbar-area fixed-top">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <button
                    onClick={this.toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Home</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a className="nav-link">Blog</a>
                        </Link>
                      </li>

                      {/* <li className="nav-item" id="action-button">
                        <Link
                          href="https://play.phishmeifyoucan.com"
                          activeClassName="active"
                        >
                          <a className="nav-link">Play</a>
                        </Link>
                      </li> */}

                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">FAQ</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div style={{position: 'absolute', right: '10px'}} id="action-button" className="hide-action-button">
                    <a href={publicRuntimeConfig.GAME_URL}>
                      <button
                        type="submit"
                        className="default-btn btn-two"
                        style={{ fontSize: "15px", padding: '12px 25px' }}
                      >
                        Play The Game
                      </button>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </>
        );
    }
}

export default Navbar;