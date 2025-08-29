import { z } from "zod";

export const questionSchema = z.object({
  // questions: z.record(z.string(), z.string()),
  email: z.email({ error: "이메일 형식이 올바르지 않습니다." }),
  phone: z.string(),
  gender: z.string(),
  birthday: z.string(),
  recommend: z.string(),
  recommendReason: z.string(),
});

export type QuestionSchema = z.infer<typeof questionSchema>;
