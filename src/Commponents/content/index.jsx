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
      <div className="fSection">
        <div>
          <h2 className="heading">LIVE STREAMING</h2>
        </div>
        <div>
          <h2 className="heading">RABBIT RACE</h2>
        </div>

        <div>
          <p className="para1">
            Welcome to The Rabbits Club – the exhilarating live-streamed rabbit
            race betting platform! Immerse yourself in the world of fast-paced,
            adorable action as you witness these agile hoppers compete for
            victory right from the comfort of your screen.
          </p>
        </div>
        <br />
        <div>
          <p className="para2">
            Place bets on your favorite fluffy contenders in real-time and win
            accordingly
          </p>
        </div>
        <br />
        <div>
          <p className="para3">
            CA – 0x3576eff2be8b1a31782b3e8dfd962a6ddb087890
          </p>
        </div>
        <div className="forF">
          <button>START BETTING</button>
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
            src="https://www.youtube.com/embed/uXWycyeTeCs"
            width={420}
            height={400}
            sandbox="allow-scripts allow-modal"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contenet;
