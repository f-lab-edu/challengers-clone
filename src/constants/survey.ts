import ThumbsUpIcon from "@/icons/thumbs-up.svg";
import ThumbsDownIcon from "@/icons/thumbs-down.svg";

export type SurveyOption = {
  label: string;
  value: number;
  icon?: string;
};
export type SurveyItem = {
  id: string;
  type: string;
  label: string;
  required: boolean;
  name: string;
  options?: SurveyOption[];
  visibleIf?: { [key: string]: string[] };
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
        value: 0,
      },
      {
        label: "여",
        value: 1,
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
    label: "챌린저스 앱 만족도를 선택해주세요.",
    options: [
      {
        label: "매우 불만족",
        value: 0,
      },
      {
        label: "불만족",
        value: 1,
      },
      {
        label: "보통",
        value: 2,
      },
      {
        label: "만족",
        value: 3,
      },
      {
        label: "매우 만족",
        value: 4,
      },
    ],
    required: true,
    name: "satisfaction",
  },
  {
    id: "5-1",
    type: "radio",
    label: "챌린저스 앱을 주변에 추천하신 적이 있으신가요?",
    options: [
      {
        label: "있음",
        value: 0,
      },
      {
        label: "없음",
        value: 1,
      },
    ],
    required: false,
    name: "recommend",
    visibleIf: {
      satisfaction: ["3", "4"],
    },
  },
  {
    id: "6",
    type: "textarea",
    label: "그렇게 생각하신 이유를 입력해주세요.",
    required: false,
    name: "recommendReason",
  },
];
