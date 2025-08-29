import { SURVEY_LIST, SurveyItem } from "@/constants/survey";
import SwitchCases from "../common/SwitchCases";
import RHFInputText from "../input/RHFInputText";
import styled from "styled-components";
import RHFInputRadio from "../input/RHFInputRadio";
import RHFTextarea from "../textarea/RHFTextarea";
import RHFInputDate from "../input/RHFInputDate";
import { useFormContext } from "react-hook-form";

const SurveyList = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <Container>
      {SURVEY_LIST.map(
        ({ id, type, label, name, required, ...rest }: SurveyItem) => {
          const errorMessage = errors[name]?.message as string;

          return (
            <SwitchCases
              key={id}
              value={type}
              cases={{
                text: (
                  <RHFInputText
                    name={name}
                    label={label}
                    required={required}
                    errorMessage={errorMessage}
                  />
                ),
                radio: (
                  <RHFInputRadio
                    name={name}
                    label={label}
                    required={required}
                    options={rest?.options}
                  />
                ),
                date: (
                  <RHFInputDate name={name} label={label} required={required} />
                ),
                textarea: (
                  <RHFTextarea name={name} label={label} required={required} />
                ),
              }}
            />
          );
        }
      )}
    </Container>
  );
};

export default SurveyList;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 32px;

  & :not(:last-child) {
    // border-bottom: 1px solid #000;
  }
`;
