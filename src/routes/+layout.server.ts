import type { LayoutServerLoad } from "./$types";
import { calculators } from "$lib/stores/calculators";
import { primaryMuscles } from "$lib/stores/primaryMuscles";

export const load: LayoutServerLoad = async () => {
  return { calculators, primaryMuscles };
};
