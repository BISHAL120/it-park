import React from "react";
import logo from "../../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="py-4">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="header">
            <div className="menus">
              <Link to="/home">Home</Link>
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All categories
                </button>
                <ul class="dropdown-menu bg-transparent border-0 ">
                  <li>
                    <Link class="dropdown-item bg-primary border-opacity-25 " >
                      Link 1
                    </Link>
                  </li>
                  <li>
                  <Link class="dropdown-item bg-primary border-opacity-25 " >
                      Link 2
                    </Link>
                  </li>
                  <li>
                  <Link class="dropdown-item bg-primary border-opacity-25 " >
                      Link 3
                    </Link>
                  </li>
                </ul>
              </div>
              <Link to="/">Leads for business</Link>
              <Link to="/">Plans</Link>
              <Link to="/">Business listing</Link>
              <Link to="/">About us</Link>
              <Link to="/">Become an article publisher</Link>
              <Link to="/">Contact us</Link>
            </div>
            <div className="icons">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                >
                  <path
                    d="M6.87501 0.895996C5.85282 0.895996 4.8725 1.30206 4.1497 2.02486C3.42691 2.74765 3.02084 3.72797 3.02084 4.75016V6.896H0.958343C0.85501 6.896 0.770844 6.97933 0.770844 7.0835V9.91683C0.770844 10.0202 0.854177 10.1043 0.958343 10.1043H3.02084V15.9168C3.02084 16.0202 3.10418 16.1043 3.20834 16.1043H6.04168C6.14501 16.1043 6.22918 16.021 6.22918 15.9168V10.1043H8.31001C8.39584 10.1043 8.47084 10.046 8.49168 9.96266L9.20001 7.12933C9.20698 7.10168 9.20755 7.07281 9.20168 7.04491C9.19582 7.017 9.18366 6.99081 9.16615 6.96831C9.14863 6.94581 9.12621 6.9276 9.1006 6.91507C9.07499 6.90254 9.04686 6.89602 9.01834 6.896H6.22918V4.75016C6.22918 4.66535 6.24588 4.58137 6.27834 4.50301C6.31079 4.42466 6.35837 4.35346 6.41834 4.29349C6.47831 4.23352 6.54951 4.18595 6.62786 4.15349C6.70622 4.12103 6.7902 4.10433 6.87501 4.10433H9.04168C9.14501 4.10433 9.22918 4.021 9.22918 3.91683V1.0835C9.22918 0.980163 9.14584 0.895996 9.04168 0.895996H6.87501Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                >
                  <path
                    d="M13.3917 2.28739C13.3176 2.0018 13.169 1.74099 12.9611 1.53162C12.7532 1.32226 12.4934 1.17184 12.2083 1.09573C10.48 0.891882 8.74024 0.800024 7.00002 0.820728C5.25979 0.800024 3.52005 0.891882 1.79168 1.09573C1.50661 1.17184 1.24685 1.32226 1.03895 1.53162C0.83105 1.74099 0.682454 2.0018 0.608348 2.28739C0.419023 3.34902 0.326974 4.42571 0.333348 5.50406C0.326655 6.58795 0.418702 7.6702 0.608348 8.73739C0.686294 9.01838 0.836596 9.274 1.04424 9.47872C1.25189 9.68345 1.50962 9.83011 1.79168 9.90406C3.52005 10.1079 5.25979 10.1998 7.00002 10.1791C8.74024 10.1998 10.48 10.1079 12.2083 9.90406C12.4904 9.83011 12.7481 9.68345 12.9558 9.47872C13.1634 9.274 13.3137 9.01838 13.3917 8.73739C13.5813 7.6702 13.6734 6.58795 13.6667 5.50406C13.6731 4.42571 13.581 3.34902 13.3917 2.28739ZM5.63335 7.49573V3.52906L9.12502 5.50406L5.63335 7.48739V7.49573Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.85749 5.974H9.95249V7.51567C10.3983 6.629 11.5417 5.83234 13.2592 5.83234C16.5517 5.83234 17.3333 7.59734 17.3333 10.8357V16.8332H14V11.5732C14 9.729 13.5542 8.689 12.4192 8.689C10.845 8.689 10.1908 9.80984 10.1908 11.5723V16.8332H6.85749V5.974ZM1.14166 16.6915H4.47499V5.83234H1.14166V16.6915ZM4.95249 2.2915C4.95261 2.5709 4.8972 2.84753 4.78948 3.10533C4.68175 3.36312 4.52387 3.59693 4.32499 3.79317C3.92199 4.19369 3.3765 4.41788 2.80832 4.4165C2.24115 4.41612 1.69692 4.1925 1.29332 3.794C1.09517 3.5971 0.937811 3.36302 0.830276 3.1052C0.722741 2.84737 0.667139 2.57086 0.666656 2.2915C0.666656 1.72734 0.891656 1.18734 1.29416 0.789004C1.69739 0.389969 2.24186 0.166255 2.80916 0.166504C3.37749 0.166504 3.92249 0.390671 4.32499 0.789004C4.72666 1.18734 4.95249 1.72734 4.95249 2.2915Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.64168 1.06796C6.53836 0.746878 9.46166 0.746878 12.3583 1.06796C13.9408 1.24463 15.2167 2.49046 15.4025 4.07879C15.746 7.01601 15.746 9.98325 15.4025 12.9205C15.2167 14.5088 13.9408 15.7546 12.3592 15.9321C9.46222 16.2533 6.53864 16.2533 3.64168 15.9321C2.05918 15.7546 0.783347 14.5088 0.597514 12.9213C0.253954 9.98381 0.253954 7.01628 0.597514 4.07879C0.783347 2.49046 2.05918 1.24463 3.64168 1.06796ZM12.1667 3.49963C11.9457 3.49963 11.7337 3.58742 11.5774 3.74371C11.4211 3.89999 11.3333 4.11195 11.3333 4.33296C11.3333 4.55397 11.4211 4.76594 11.5774 4.92222C11.7337 5.0785 11.9457 5.16629 12.1667 5.16629C12.3877 5.16629 12.5997 5.0785 12.7559 4.92222C12.9122 4.76594 13 4.55397 13 4.33296C13 4.11195 12.9122 3.89999 12.7559 3.74371C12.5997 3.58742 12.3877 3.49963 12.1667 3.49963ZM4.04168 8.49963C4.04168 7.44981 4.45872 6.44299 5.20105 5.70066C5.94338 4.95833 6.9502 4.54129 8.00001 4.54129C9.04983 4.54129 10.0566 4.95833 10.799 5.70066C11.5413 6.44299 11.9583 7.44981 11.9583 8.49963C11.9583 9.54944 11.5413 10.5563 10.799 11.2986C10.0566 12.0409 9.04983 12.458 8.00001 12.458C6.9502 12.458 5.94338 12.0409 5.20105 11.2986C4.45872 10.5563 4.04168 9.54944 4.04168 8.49963Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="buttons">
              <button className="button-1">Play Games</button>
              <button className="button-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 10.5C14.2091 10.5 16 8.70914 16 6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5C8 8.70914 9.79086 10.5 12 10.5Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M20 18C20 20.485 20 22.5 12 22.5C4 22.5 4 20.485 4 18C4 15.515 7.582 13.5 12 13.5C16.418 13.5 20 15.515 20 18Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>{" "}
                Sing up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
