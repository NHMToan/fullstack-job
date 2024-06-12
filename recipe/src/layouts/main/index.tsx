import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import NavBar from "./nav";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <NavBar />
      <Container>{children}</Container>
    </Box>
  );
}
