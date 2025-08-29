import { z } from "zod";

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);

export const questionSchema = z.object({
  // questions: z.record(z.string(), z.string()),
  email: z.email({ error: "이메일 형식이 올바르지 않습니다." }),
  phone: z.string().regex(phoneRegex, "전화번호 형식이 올바르지 않습니다."),
  gender: z.string(),
  birthday: z.string(),
  recommend: z.string(),
  recommendReason: z.string(),
});

export type QuestionSchema = z.infer<typeof questionSchema>;
