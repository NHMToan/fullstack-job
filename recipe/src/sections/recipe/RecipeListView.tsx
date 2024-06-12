"use client";
import { useGetRecipes } from "@/api/recipe";
import { Box, Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import RecipeItem from "./RecipeItem";

interface RecipeListViewProps {}

const RecipeListView: React.FC<RecipeListViewProps> = ({}) => {
  const { recipes, recipesLoading, recipesError, recipesEmpty } =
    useGetRecipes();

  const renderSkeleton = (
    <>
      {[...Array(16)].map((_, index) => (
        <Box sx={{ width: 300 }} key={index}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      ))}
    </>
  );

  const renderList = (
    <>
      {recipes?.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Recipes
      </Typography>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {recipesLoading ? renderSkeleton : renderList}
      </Box>
    </>
  );
};

export default RecipeListView;
