// src/components/NavBar.tsx
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <Link href="/" passHref>
          <Button sx={{ color: "#fff" }}>Home</Button>
        </Link>
        <Link href="/recipe" passHref>
          <Button sx={{ color: "#fff" }}>Recipe</Button>
        </Link>
        <Link href="/learn" passHref>
          <Button sx={{ color: "#fff" }}>Learn</Button>
        </Link>
        <Link href="/about" passHref>
          <Button sx={{ color: "#fff" }}>About</Button>
        </Link>
        <Link href="/blog" passHref>
          <Button sx={{ color: "#fff" }}>Blog</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
