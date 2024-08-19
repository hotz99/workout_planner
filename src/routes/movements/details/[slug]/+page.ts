import type { PageLoad } from "./$types";
import { movements } from "$lib/stores/movements";

export const load: PageLoad = async ({ params }) => {
  return {
    selectedMovement: movements.filter(x => x.id.toLowerCase() === params.slug)[0]
  };
};
