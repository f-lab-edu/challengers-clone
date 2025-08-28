"use client";

import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type RHFInputTextProps = {
  name: string;
  label: string;
  required: boolean;
};

export default function RHFInputText({
  name,
  label,
  required,
}: RHFInputTextProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" required={required} id={name} {...register(name)} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
