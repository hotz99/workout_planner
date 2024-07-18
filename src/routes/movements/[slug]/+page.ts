import type { Movement } from "$lib/types/Movement";
import type { PageLoad } from "./$types";

const muscleGroupMovements: Map<string, Movement[]> = new Map([
  ["chest", [
    { name: "Incline Barbell Press" },
    { name: "Incline Dumbbell Press" },
    { name: "Machine Fly" },
    { name: "Unilateral Upper Cable Press" }
  ]],
  ["back", [
    { name: "Wide Grip Pull Up" },
    { name: "Seated Cable Row" },
    { name: "Machine Chest Supported Row" },
    { name: "Wide Grip Pull Down" }
  ]],
  ["leg", [
    { name: "Squat" },
    { name: "Leg Press" },
    { name: "Lunges" },
    { name: "Leg Curl" }
  ]],
  ["shoulder", [
    { name: "Overhead Press" },
    { name: "Lateral Raise" },
    { name: "Front Raise" },
    { name: "Rear Delt Fly" }
  ]],
  ["bicep", [
    { name: "Ez Barbell Curl" },
    { name: "Dumbbell Curl" },
    { name: "Hammer Curl" },
    { name: "Cable Curl" }
  ]],
  ["tricep", [
    { name: "Tricep Dips" },
    { name: "Tricep Pushdown" },
    { name: "Overhead Tricep Extension" },
    { name: "Skull Crusher" }
  ]],
  ["forearm", [
    { name: "Dumbbbell Wrist Curl" },
    { name: "Reverse Wrist Curl" },
    { name: "Farmer's Walk" },
    { name: "Reverse Curl" }
  ]],
  ["abdominal", [
    { name: "Crunches" },
    { name: "Leg Raises" },
    { name: "Plank" },
    { name: "Russian Twists" }
  ]],
  ["hip", [
    { name: "Hip Thrust" },
    { name: "Cable Hip Abduction" },
    { name: "Lateral Band Walk" },
    { name: "Cable Hip Adduction" }
  ]],
  ["neck", [
    { name: "Neck Flexion" },
    { name: "Neck Extension" },
    { name: "Lateral Neck Flexion" },
    { name: "Neck Rotation" }
  ]]
]);


export const load: PageLoad = async ({ params }) => {
  return {
    movements: muscleGroupMovements.get(params.slug),
    slug: params.slug
  };
};
