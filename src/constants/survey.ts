import ThumbsUpIcon from "@/icons/thumbs-up.svg";
import ThumbsDownIcon from "@/icons/thumbs-down.svg";

export type SurveyOption = { label: string; icon: string | null };
export type SurveyItem = {
  id: string;
  type: string;
  label: string;
  options?: SurveyOption[];
  required: boolean;
  name: string;
};
export const SURVEY_LIST = [
  {
    id: "1",
    type: "text",
    label: "이메일을 입력해주세요.",
    required: true,
    name: "email",
  },
  {
    id: "2",
    type: "text",
    label: "전화번호를 입력해주세요.",
    required: true,
    name: "phone",
  },
  {
    id: "3",
    type: "radio",
    label: "성별을 선택해주세요.",
    options: [
      {
        label: "남",
        icon: null,
      },
      {
        label: "여",
        icon: null,
      },
    ],
    required: false,
    name: "gender",
  },
  {
    id: "4",
    type: "date",
    label: "생일을 선택해주세요.",
    required: true,
    name: "birthday",
  },
  {
    id: "5",
    type: "radio",
    label: "챌린저스 앱을 추천할 의향이 있으신가요?",
    options: [
      {
        label: "있음",
        icon: ThumbsUpIcon,
      },
      {
        label: "없음",
        icon: ThumbsDownIcon,
      },
    ],
    required: true,
    name: "recommend",
  },
  {
    id: "6",
    type: "textarea",
    label: "그렇게 생각하신 이유를 입력해주세요.",
    required: true,
    name: "recommendReason",
  },
];
