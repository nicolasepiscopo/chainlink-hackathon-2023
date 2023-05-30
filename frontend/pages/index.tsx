import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ConnectButton } from "../components/ConnectButton";

function Home() {
  return (
    <Box>
      <Head>
        <title>StratEx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl">
        <Stack justifyContent="flex-start" alignItems="center" sx={{ height: '80vh'}}>
          <Box textAlign="center" pb={6}>
            <Typography variant="h1" color="primary" sx={{ fontFamily: `'Rajdhani', sans-serif` }}>
              StratEx
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: `'Rajdhani', sans-serif` }}>
              The first decentralized trading strategy powered by automation.
            </Typography>
          </Box>
          <Box pb={6}>
            <ConnectButton 
              variant="outlined"
              title="create your first bot"
              fontSize="1.5rem"
              startIcon={<>🚀</>}
            />
          </Box>
          <Box sx={{
            width: '70%',
          }}>
            <Typography sx={{
              opacity: .5,
              color: 'white',
              lineHeight: '2',
            }}>
              Welcome to StratEx, the application that allows you to perform automated decentralized transactions with smart contracts using buy and sell limits and grids on the blockchain. With StratEx, you can make the most of your trades and get the best results quickly and easily. Our intuitive and user-friendly interface allows you to set your own buy and sell limits to get the best possible price.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
