// import React from 'react'
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./content.css";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Contenet = () => {
  return (
    <div className="ContentMain">
    <dvi className="container-wide">
    <div className="fSection">
        <div>
          <h2 className="heading">LIVE STREAMING</h2>
        </div>
        <div>
          <h1 className="heading">Roach Rally</h1>
        </div>
        <div>
          <p className="para1">
            Place bets on live streamed roach races where the first roach to cross the finish line wins!
          </p>
        </div>
        {/* <div>
          <p className="para3">
            CA – 0x3576eff2be8b1a31782b3e8dfd962a6ddb087890
          </p>
        </div> */}
        <div className="forF btn-div">
          <button >START BETTING</button>
          <div className="icon-div">
            <a href="">
              <img className="icon" src="images/twitch.svg" alt="" />
            </a>
            <a href="">
              {" "}
              <img className="icon" src="images/telegram.svg" alt="" />
            </a>
            <a href="">
              <img className="icon" src="images/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="sSection">
        <div>
     
           <iframe
        title="YouTube Video"
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/uXWycyeTeCs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        autoPlay
             
             controls
        
            
      ></iframe>
        </div>
      </div>
    </dvi>
    </div>
  );
};

export default Contenet;
