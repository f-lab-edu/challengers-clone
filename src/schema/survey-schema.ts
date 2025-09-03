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
        if (val === "") {
          return;
        }
        const age = dayjs().diff(dayjs(val), "years");
        console.log("age", age);
        if (age < 14) {
          ctx.addIssue({
            code: "custom",
            message: "14세 미만은 설문 작성이 불가능합니다.",
          });
        }
      }),
    satisfaction: z
      .transform((val) => {
        if (isNaN(Number(val)) === false) {
          return Number(val);
        }
      })
      .superRefine((val, ctx) => {
        if (val == null || val == -1) {
          ctx.addIssue({
            code: "custom",
            message: "(필수 항목입니다.)",
          });
          return;
        }
      }),
    recommend: z
      .transform((val) => {
        if (isNaN(Number(val)) === false) {
          return Number(val);
        }
        return 0;
      })
      .optional(),
    recommendReason: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.satisfaction != null) {
      if (data.satisfaction >= 3) {
        if (data.recommendReason != null && data.recommendReason.length < 10) {
          ctx.addIssue({
            code: "custom",
            message: "추천 이유를 10자 이상 입력해주세요.",
            path: ["recommendReason"],
          });
        }
      } else {
        if (data.recommendReason != null && data.recommendReason.length < 100) {
          ctx.addIssue({
            code: "custom",
            message: "불만족스러웠던 경험을 자세히 입력해주세요.(100자 이상)",
            path: ["recommendReason"],
          });
        }
      }
    }
  });

export type QuestionSchema = z.infer<typeof questionSchema>;
