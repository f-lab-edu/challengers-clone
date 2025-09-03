"use client";

import { SurveyItem } from "@/constants/survey";
import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import ErrorMessage from "../common/ErrorMessage";

type RHFTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<SurveyItem, "type"> & {
    errorMessage?: string;
  };

export default function RHFTextarea({
  id,
  name,
  label,
  required,
  errorMessage,
  ...props
}: RHFTextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextareaWrapper>
      <Label htmlFor={name}>
        {id}. {label}
      </Label>
      <Div>
        <Textarea {...register(name)} required={required} {...props} />
        {errorMessage && (
          <ErrorMessage
            errorMessage={errorMessage}
            cssObject={{ top: "auto", bottom: "2px" }}
          />
        )}
      </Div>
    </TextareaWrapper>
  );
}

const TextareaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #bbb;
  width: 100%;
  height: 100px;
  max-height: 200px;
  padding: 8px 12px;
  outline: none;
  resize: none;
  font-size: 14px;
  transition: all ease 500ms;

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

const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  position: relative;
`;
