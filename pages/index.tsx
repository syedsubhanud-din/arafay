import Cards from "@/components/CardsSection/Cards";
import Charts from "@/components/ChartsSection/Charts";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      sx={{ width: "100%" }}
      margin={"auto"}
      maxHeight={"auto"}
    >
      <Cards />
      <Charts />
    </Stack>
  );
}
