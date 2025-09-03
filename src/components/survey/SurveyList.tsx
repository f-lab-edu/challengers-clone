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
    watch,
    formState: { errors },
  } = useFormContext();

  const getRenderFlag = (visibleIf: { [key: string]: string[] }) => {
    let continueFlag = false;
    if (visibleIf) {
      for (const [key, condition] of Object.entries(visibleIf)) {
        const value = watch(key);
        if (condition.includes(value) === false) {
          continueFlag = true;
        }
      }
      if (continueFlag) return false;
    }
    return true;
  };

  console.log("errors", errors);
  return (
    <Container>
      {SURVEY_LIST.map(
        ({ id, type, label, name, required, ...rest }: SurveyItem) => {
          const errorMessage = errors[name]?.message as string;
          const renderFlag = getRenderFlag(rest?.visibleIf || {});
          if (renderFlag === false) return null;
          return (
            <SwitchCases
              key={id}
              value={type}
              cases={{
                text: (
                  <RHFInputText
                    id={id}
                    name={name}
                    label={label}
                    required={required}
                    errorMessage={errorMessage}
                  />
                ),
                radio: (
                  <RHFInputRadio
                    id={id}
                    name={name}
                    label={label}
                    required={required}
                    options={rest?.options}
                    errorMessage={errorMessage}
                  />
                ),
                date: (
                  <RHFInputDate
                    id={id}
                    name={name}
                    label={label}
                    required={required}
                    errorMessage={errorMessage}
                  />
                ),
                textarea: (
                  <RHFTextarea
                    id={id}
                    name={name}
                    label={label}
                    required={required}
                    errorMessage={errorMessage}
                  />
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
