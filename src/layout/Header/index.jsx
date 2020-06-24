
import React from 'react';

const Header = () => (
        <div className="row border-bottom">
        <nav
          className="navbar navbar-static-top"
          role="navigation"
          style={{marginBottom: 0}}
        >
          <div className="navbar-header">
            <a
              className="navbar-minimalize minimalize-styl-2 btn btn-primary"
              href="#"
              ><i className="fa fa-bars"></i>
            </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">

            <li>
              <a href="">
                <i className="fa fa-sign-out"></i> Log out
              </a>
            </li>
          </ul>
        </nav>
      </div>
)

export default Header;