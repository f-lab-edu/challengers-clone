import { z } from "zod";

export const questionSchema = z.object({
  // questions: z.record(z.string(), z.string()),
  userId: z.string(),
  gender: z.string(),
  birthday: z.string(),
  recommend: z.string(),
  recommendReason: z.string(),
});

export type QuestionSchema = z.infer<typeof questionSchema>;
