import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const count = useSelector((state) => state.count);
  console.log(count);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button to="/home" color="inherit" component={NavLink}>
              Online CustomerService
            </Button>

            <Button
              color="inherit"
              to="/issue"
              component={NavLink}
              style={{ marginRight: "auto" }}
            >
           Issues
            </Button>
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
            <Button color="inherit" component={NavLink} to="/register">
              Register
           </Button>
            <IconButton aria-label="cart" component={NavLink} to="/cart">
              <Badge badgeContent={count}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;