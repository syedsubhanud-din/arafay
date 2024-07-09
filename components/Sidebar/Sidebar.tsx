import { linklist } from "@/data/navbarLinks";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const activeStyles = {
    color: "#422AFB",
  };
  return (
    <Stack
      direction={"column"}
      width={"400px"}
      alignItems={"center"}
      pt={5}
      sx={{ backgroundColor: "white", boxShadow: "5px 5px 5px gray" }}
    >
      <Typography variant="h5">
        <span style={{ fontWeight: "bold" }}>Horizon</span> Free
      </Typography>
      <Divider
        variant="middle"
        sx={{
          m: "20px",
          backgroundColor: "lightgray",
          height: "1px",
          width: "80%",
        }}
      />
      <List sx={{ width: "100%" }} className="main_list">
        {linklist.map((link) => (
          <ListItem
            sx={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              padding: "5px",
              margin: "auto",
              fontSize: "4px",
              color: "#A5AFC8",
            }}
            className={router.pathname === link.to ? "active_styles" : ""}
            key={link.to}
            disablePadding
            color="grey"
          >
            <Link href={link.to}>
              <Stack direction={"row"}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
              </Stack>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
