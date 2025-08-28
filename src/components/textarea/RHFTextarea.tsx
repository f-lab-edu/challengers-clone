"use client";

import { SurveyOption } from "@/constants/survey";
import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type RHFTextareaProps = HTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  label: string;
  required: boolean;
  options?: SurveyOption[];
};

export default function RHFTextarea({
  name,
  label,
  required,
  ...props
}: RHFTextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextareaWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Textarea {...register(name)} required={required} {...props} />
    </TextareaWrapper>
  );
}

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid #bbb;
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
