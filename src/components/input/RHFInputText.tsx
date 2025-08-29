"use client";

import { ChangeEvent, InputHTMLAttributes } from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import styled, { css } from "styled-components";
import ErrorMessage from "../common/ErrorMessage";
import SwitchCases from "../common/SwitchCases";
import RequiredDisplay from "../common/RequiredDisplay";

type RHFInputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  required: boolean;
  errorMessage?: string;
};

// const PlainText = ({
//   name,
//   required,
//   errorMessage,
//   field,
//   ...props
// }: Omit<RHFInputTextProps, "label"> & {
//   field: ControllerRenderProps<FieldValues, string>;
// }) => {
//   return (
//     <Input
//       type="text"
//       id={name}
//       required={required}
//       $hasError={!!errorMessage}
//       {...field}
//       {...props}
//     />
//   );
// };

// const PhoneText = ({
//   name,
//   required,
//   errorMessage,
//   field,
//   ...props
// }: Omit<RHFInputTextProps, "label"> & {
//   field: ControllerRenderProps<FieldValues, string>;
// }) => {
//   const { setValue } = useFormContext();
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     const formattedValue = value.replace(/[^0-9-]/g, "");
//     const formattedValueWithDash = formattedValue
//       .split("")
//       .reduce((acc, cur, idx) => {
//         if (idx === 3) {
//           // 전화번호 3번째 자리인 경우
//           if (cur === "-") {
//             return acc + cur;
//           }
//           return acc + "-" + cur;
//         } else if (idx === 8) {
//           // 전화번호 8번째 자리인 경우
//           if (cur === "-" || acc[idx - 1] === "-") {
//             // 대시를 입력하는 경우 혹은 2번째 대시가 이미 있는 경우
//             return acc + cur;
//           }
//           return acc + "-" + cur;
//         } else {
//           return acc + cur;
//         }
//       }, "");
//     setValue(name, formattedValueWithDash);
//   };

//   const handleBlur = () => {
//     const value = field.value;
//     setValue(name, value, { shouldValidate: true });
//   };

//   return (
//     <Input
//       type="text"
//       id={name}
//       required={required}
//       $hasError={!!errorMessage}
//       {...field}
//       {...props}
//       onChange={handleChange}
//       onBlur={handleBlur}
//     />
//   );
// };

export default function RHFInputText({
  name,
  label,
  required,
  errorMessage,
  ...props
}: RHFInputTextProps) {
  const { control } = useFormContext();

  const getProps = (field: ControllerRenderProps<FieldValues, string>) => {
    const { setValue } = useFormContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const formattedValue = value.replace(/[^0-9-]/g, "");
      const formattedValueWithDash = formattedValue
        .split("")
        .reduce((acc, cur, idx) => {
          if (idx === 3) {
            // 전화번호 3번째 자리인 경우
            if (cur === "-") {
              return acc + cur;
            }
            return acc + "-" + cur;
          } else if (idx === 8) {
            // 전화번호 8번째 자리인 경우
            if (cur === "-" || acc[idx - 1] === "-") {
              // 대시를 입력하는 경우 혹은 2번째 대시가 이미 있는 경우
              return acc + cur;
            }
            return acc + "-" + cur;
          } else {
            return acc + cur;
          }
        }, "");
      setValue(name, formattedValueWithDash);
    };

    const handleBlur = () => {
      const value = field.value;
      setValue(name, value, { shouldValidate: true });
    };

    switch (name) {
      case "phone":
        return {
          onChange: handleChange,
          onBlur: handleBlur,
        };
      default:
        return {};
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <InputWrapper>
          <Div>
            <Label htmlFor={name}>{label}</Label>
            {required && <RequiredDisplay />}
          </Div>
          <Div>
            <Input
              type="text"
              id={name}
              required={required}
              $hasError={!!errorMessage}
              {...field}
              {...props}
              {...getProps(field)}
            />

            {/* <SwitchCases
              value={name}
              cases={{
                email: (
                  <PlainText
                    name={name}
                    required={required}
                    errorMessage={errorMessage}
                    field={field}
                    {...props}
                  />
                ),
                phone: (
                  <PhoneText
                    name={name}
                    required={required}
                    errorMessage={errorMessage}
                    field={field}
                    {...props}
                  />
                ),
              }}
            /> */}

            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          </Div>
        </InputWrapper>
      )}
    />
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  height: 32px;
  border: none;
  border-bottom: 1px solid #bbb;
  padding: 8px 12px;
  outline: none;
  transition: all ease 500ms;
  font-size: 14px;

  &:focus {
    ${({ $hasError }) =>
      $hasError == null &&
      css`
        border-bottom: 2px solid #6488ea;
      `}
    background-color: #eee;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      height: 64px;
      padding-bottom: 0;
      border-bottom: 2px solid red;
    `}
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  position: relative;
`;
