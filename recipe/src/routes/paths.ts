export const paths = {
  home: "/",
  learn: "/learn",
  about: "/about",
  blog: "/blog",
  recipe: {
    root: `/recipe`,
    details: (id: string | number) => `/recipe/${id}`,
  },
};
