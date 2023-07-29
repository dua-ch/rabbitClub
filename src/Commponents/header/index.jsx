// import React from 'react'
// import { useEffect, useState } from "react";
import "./header.css";
import Rabit from "../../assets/logo.png";



const Header = () => {
  // const [IsActive, setIsActive] = useState(false);
  // const [IsMenuActive, setIsMenuActive] = useState(false);

  // const handleMenu = () => {
  //   setIsMenuActive(!IsMenuActive);
  //   setIsActive(!IsActive)
  // };

  return (
    <>
        <header>
          <div className="hMain">
            <div className="container">
                <div className="hIcon">
                  <a href="/"><img src={Rabit}/></a>
                </div>
                {/* <div className="singIn">
                  <a href=''>SIGN IN <img src={user} alt="" /></a>
                </div> */}
            </div>
          </div>
        </header>

      {/* <header>
        <div className="container">
          <div className="navigation">
            <a href="/" className="site-logo">
              <img src={Rabit} alt="rabbit" />
              The Rabbits Club
            </a>
            <ul className="desk-nav"> 
              <li>
              <a href="/"> Play</a>
              </li>
              <li>
              <a href="/"> twitch</a>
              </li>
              <li>
              <a href="/"> telegram</a>
              </li>
              <li>
              <a href="/"> twitter</a>
              </li>
            </ul>

            <div className="menu-btns">
                     {IsActive === false ? (
                          <button
                            type="button"
                            className="hamburger-menu"
                            onClick={handleMenu}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#0099fa"
                              height={32}
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                                fill='black'
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="hamburger-menu active"
                            onClick={handleMenu}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#0099fa"
                              height={32}
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                                fill='black'
                              />
                            </svg>
                          </button>
                        )}
            </div>

            <div className={IsActive === true ? "active mob-nav" : "mob-nav"}>
            <ul > 
              <li>
              <a href="/"> Play</a>
              </li>
              <li>
              <a href="/"> twitch</a>
              </li>
              <li>
              <a href="/"> telegram</a>
              </li>
              <li>
              <a href="/"> twitter</a>
              </li>
            </ul>
            </div>
           
          </div>
        </div>
     
      </header> */}
    </>
 
  );
};

export default Header;
