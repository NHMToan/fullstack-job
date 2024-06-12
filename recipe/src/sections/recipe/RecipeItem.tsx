import Card from "@mui/material/Card";
import Link from "@mui/material/Link";

import { RouterLink } from "@/routes/components";
import { paths } from "@/routes/paths";
import { IRecipe } from "@/types/recipe";
import { CardContent, CardMedia, Typography } from "@mui/material";

// ----------------------------------------------------------------------

type Props = {
  recipe: IRecipe;
};

export default function RecipeItem({ recipe }: Props) {
  const { id, title, description, image } = recipe;

  const linkTo = paths.recipe.details(id);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Link
          component={RouterLink}
          href={linkTo}
          color="inherit"
          variant="subtitle2"
          noWrap
        >
          {title}
        </Link>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
