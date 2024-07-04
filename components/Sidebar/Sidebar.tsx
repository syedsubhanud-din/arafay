import { linklist } from "@/data/navbarLinks";
import {
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
      width={300}
      alignItems={"center"}
      pt={5}
      sx={{ backgroundColor: "white", boxShadow: "5px 5px 5px gray" }}
    >
      <Typography variant="h5">
        <span style={{ fontWeight: "bold" }}>Horizon</span> Free
      </Typography>
      <List>
        {linklist.map((link) => (
          <ListItem
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              fontSize: "8px",
              color: "gray",
            }}
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
