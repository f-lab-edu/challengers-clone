import dayjs from "dayjs";
import { z } from "zod";

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);

export const questionSchema = z
  .object({
    // questions: z.record(z.string(), z.string()),
    email: z.email({ error: "이메일 형식이 올바르지 않습니다." }),
    phone: z.string().regex(phoneRegex, "전화번호 형식이 올바르지 않습니다."),
    gender: z.transform((val) => {
      if (isNaN(Number(val)) === false) {
        return Number(val);
      }
      return 0;
    }),
    birthday: z
      .string()
      .optional()
      .superRefine((val, ctx) => {
        const age = dayjs().diff(dayjs(val), "years");
        console.log("age", age);
        if (age < 14) {
          ctx.addIssue({
            code: "custom",
            message: "14세 미만은 설문 작성이 불가능합니다.",
            path: ["birthday"],
          });
        }
      }),
    satisfaction: z.transform((val) => {
      if (isNaN(Number(val)) === false) {
        return Number(val);
      }
      return 0;
    }),
    recommend: z
      .transform((val) => {
        if (isNaN(Number(val)) === false) {
          return Number(val);
        }
        return 0;
      })
      .optional(),
    recommendReason: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.recommend === 0 && data.recommendReason.length < 10) {
      ctx.addIssue({
        code: "custom",
        message: "추천 이유는 10자 이상이어야 합니다.",
        path: ["recommendReason"],
      });
    } else if (data.recommend === 1 && data.recommendReason.length < 100) {
      ctx.addIssue({
        code: "custom",
        message: "비추천 이유는 100자 이상이어야 합니다.",
        path: ["recommendReason"],
      });
    }
  });

export type QuestionSchema = z.infer<typeof questionSchema>;
