import type { LayoutServerLoad } from "./$types";
import { primaryMuscles } from "$lib/stores/primaryMuscles";

export const load: LayoutServerLoad = async () => {
  return { primaryMuscles };
};
