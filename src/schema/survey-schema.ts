import { z } from "zod";

export const questionSchema = z.object({
  questions: z.array(
    z.object({
      title: z.string().min(1),
      content: z.string().min(1),
      type: z.enum(["text", "image"]),
    })
  ),
});

export type QuestionSchema = z.infer<typeof questionSchema>;
