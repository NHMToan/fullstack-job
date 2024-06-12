import RecipeDetailsView from "@/sections/recipe/RecipeDetailsView";
export const metadata = {
  title: "Recipe details",
};
type Props = {
  params: {
    id: string;
  };
};
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function RecipePage({ params }: Props) {
  console.log(params.id);

  return <RecipeDetailsView id={~~params?.id} />;
}
