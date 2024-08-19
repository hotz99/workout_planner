import type { PageLoad } from "./$types";
import { movements } from "$lib/stores/movements";

export const load: PageLoad = async ({ params }) => {
  const filteredMovements = movements.filter(x => x.primaryMuscles.includes(params.slug));

  console.log("loading ", params.slug);
  console.log("page.ts array size: ", filteredMovements.length);

  return {
    primaryMuscle: params.slug,
    movements: filteredMovements
  };
};
