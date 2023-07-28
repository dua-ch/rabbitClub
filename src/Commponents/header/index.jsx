// import React from 'react'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import "./header.css";
import Rabit from "../../assets/rabbits.png";
import { Link } from "react-router-dom";

const pages = ["PLAY", "TWITCH", "TELEGRAM", "TWITTER"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="headerM">
      <AppBar position="sticky" color="transparent">
        <Container>
          <Toolbar disableGutters>
            <Link to="/" className="link">
              <img src={Rabit} width={45} height={45} alt="text" />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 20,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  font: 20,
                  color: "rgb(85, 85, 85)",
                  textDecoration: "none",
                  marginLeft: "5px",
                }}
              >
                The Rabbits Club
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* <MenuItem key={page} onClick={handleCloseNavMenu}> */}
                <a href="#">PLAY</a>
                <a href="#">TWITCH</a>
                <a href="#">TELEGRAM</a>
                <a href="#">TWITTER</a>
                {/* </MenuItem> */}
              </Menu>
            </Box>
            {/* <img src={Rabit} width={45} height={45} alt='text'  /> */}
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 7,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "roboto,helvetica,arial,sans-serif",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              The Rabbits Club
            </Typography>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
