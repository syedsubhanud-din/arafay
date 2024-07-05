import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import FolderIcon from "@mui/icons-material/Folder";
import Image from "next/image";

const Card = styled(Paper)({
  padding: "16px",
  color: "#000",
  boxShadow: "0 3px 5px 2px rgba(105, 135, 255, .3)",
  borderRadius: "8px",
});

const IconWrapper = styled("div")({
  fontSize: "40px",
  color: "#422AFB",
  marginBottom: "8px",
  backgroundColor: "#F4F7FE",
  height: "50px",
  width: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginRight: "10px",
});

const Value = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
});

const Description = styled(Typography)({
  fontSize: "14px",
  color: "#757575",
});

const PositiveChange = styled(Typography)({
  color: "#4caf50",
});

interface CardData {
  icon?: JSX.Element;
  description: string;
  value: string;
  positiveChange?: string;
  imageURL?: string;
}

const cardData: CardData[] = [
  {
    icon: <BarChartIcon />,
    description: "Earnings",
    value: "$350.4",
  },
  {
    icon: <AttachMoneyIcon />,
    description: "Spend this month",
    value: "$642.39",
  },
  {
    description: "Sales",
    value: "$574.34",
    positiveChange: "+23% since last month",
  },
  {
    description: "Your balance",
    value: "$1,000",
    imageURL: "/images/flag.png",
  },
  {
    icon: <AssignmentTurnedInIcon />,
    description: "New Tasks",
    value: "154",
  },
  {
    icon: <FolderIcon />,
    description: "Total Projects",
    value: "2935",
  },
];

const Cards: React.FC = () => {
  return (
    <Box p={3} overflow={"auto"} width={"100%"}>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: "flex", justifyContent: "space-between" }}>
              {card.icon && <IconWrapper>{card.icon}</IconWrapper>}
              <Box flexGrow={1}>
                <Description>{card.description}</Description>
                <Value>{card.value}</Value>
                {card.positiveChange && (
                  <PositiveChange>{card.positiveChange}</PositiveChange>
                )}
              </Box>
              {card.imageURL && (
                <Image
                  src={card.imageURL}
                  width={60}
                  height={20}
                  alt="Picture of the author"
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
