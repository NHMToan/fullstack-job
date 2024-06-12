import MainLayout from "@/layouts/main";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <MainLayout>
      <Typography variant="h4" gutterBottom>
        Welcome to the Recipe App
      </Typography>
      <Typography variant="body1">
        Select a recipe from the navigation menu to view the details.
      </Typography>
    </MainLayout>
  );
}
