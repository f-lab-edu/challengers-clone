import ThumbsUpIcon from "@/icons/thumbs-up.svg";
import ThumbsDownIcon from "@/icons/thumbs-down.svg";

export type SurveyOption = { label: string; icon: string | null };
export type SurveyItem = {
  id: number;
  type: string;
  label: string;
  options?: SurveyOption[];
  required: boolean;
  name: string;
};
export const SURVEY_LIST = [
  {
    id: 1,
    type: "text",
    label: "아이디를 입력하세요.",
    required: true,
    name: "use-id",
  },
  {
    id: 2,
    type: "radio",
    label: "성별을 입력하세요.",
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
    id: 3,
    type: "date",
    label: "생일을 입력하세요.",
    required: true,
    name: "birthday",
  },
  {
    id: 4,
    type: "radio",
    label: "챌린저스 앱을 추천할 의향이 있나요?",
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
    id: 5,
    type: "textarea",
    label: "그렇게 생각하신 이유를 입력하세요.",
    required: true,
    name: "recommend-reason",
  },
];
