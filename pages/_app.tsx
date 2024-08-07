import Layout from "@/Layout/Layout";
import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/globals.css";
import { Stack } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Component {...pageProps} />
      </Stack>
    </Layout>
  );
}
