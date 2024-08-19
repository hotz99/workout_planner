import { z } from "zod";

export const formSchema = z.object({
  age: z.number().min(1).max(120),
  sex: z.enum(["male", "female"]),
  height: z.number().positive(),
  unitSystem: z.enum(["metric", "imperial"]),
  goal: z.enum(["lose", "maintain", "gain"]),
  activityLevel: z.enum(["low", "moderate", "high", "extreme"]),
});

export type FormSchema = typeof formSchema;
