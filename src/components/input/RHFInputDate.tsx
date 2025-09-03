"use client";

import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import ErrorMessage from "../common/ErrorMessage";
import { SurveyItem } from "@/constants/survey";

type RHFInputDateProps = HTMLAttributes<HTMLInputElement> &
  Omit<SurveyItem, "type"> & {
    errorMessage?: string;
  };

export default function RHFInputDate({
  id,
  name,
  label,
  required,
  errorMessage,
  ...props
}: RHFInputDateProps) {
  const { register } = useFormContext();

  return (
    <InputWrapper>
      <Div>
        <Label htmlFor={name}>
          {id}. {label}
        </Label>
        {errorMessage && (
          <ErrorMessage
            errorMessage={errorMessage}
            cssObject={{ right: "0", left: "auto" }}
          />
        )}
      </Div>
      <Input
        type="date"
        required={required}
        id={name}
        {...register(name)}
        {...props}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  position: relative;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #bbb;
  padding: 8px 12px;
  outline: none;
  transition: all ease 500ms;
  font-size: 14px;

  &:focus {
    border-bottom: 2px solid #6488ea;
    background-color: #eee;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;
