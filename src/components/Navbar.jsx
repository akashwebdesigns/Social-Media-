import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Code, Mail, Notifications } from "@mui/icons-material";

const Navbar = () => {

  const [open,setOpen]=useState(false);

  const MyToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled(Box)({
    backgroundColor: "white",
    padding: "0 10px",
    width: "40%",
    borderRadius: 5,
  });

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.down("sm")]:{
      display:"flex"
    }
  }));

  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Akash Dev
        </Typography>
        <Code sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase sx={{width:"80%"}} placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: "30px", height: "30px" }} onClick={(e)=>setOpen(true)}>A</Avatar>
        </Icons>
        <UserBox>
          <Avatar sx={{ width: "30px", height: "30px" }} onClick={(e)=>setOpen(true)}>A</Avatar>
          <Typography variant="span">Akash</Typography>
        </UserBox>
      </MyToolbar>
      {/* Menu Position  */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
