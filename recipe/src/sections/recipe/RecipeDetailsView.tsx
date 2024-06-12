"use client";

import { useGetRecipe } from "@/api/recipe";
import Image from "@/components/Image";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";

import React from "react";

interface RecipeDetailsViewProps {
  id: number;
}

const RecipeDetailsView: React.FC<RecipeDetailsViewProps> = ({ id }) => {
  const { recipe, recipeLoading } = useGetRecipe(id);

  const renderSkeleton = (
    <>
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </>
  );

  const renderProduct = recipe && (
    <>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 10 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/recipe">
          Recipe
        </Link>
        <Typography color="text.primary">{recipe.title}</Typography>
      </Breadcrumbs>
      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={5}>
          <div>
            <Typography variant="h2" sx={{ mb: 3 }}>
              {recipe.title}
            </Typography>
          </div>

          <div>
            <Typography>{recipe.description}</Typography>
          </div>
        </Grid>
        <Grid xs={12} md={6} lg={7}>
          <Image alt="cover" src={recipe.image} ratio="16/9" />
        </Grid>
      </Grid>
    </>
  );
  return (
    <Container
      sx={{
        mt: 5,
        mb: 15,
      }}
    >
      {recipeLoading && renderSkeleton}

      {recipe && renderProduct}
    </Container>
  );
};

export default RecipeDetailsView;
