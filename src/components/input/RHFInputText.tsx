"use client";

import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled, { css } from "styled-components";
import ErrorMessage from "../common/ErrorMessage";

type RHFInputTextProps = HTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  required: boolean;
  errorMessage?: string;
};

export default function RHFInputText({
  name,
  label,
  required,
  errorMessage,
  ...props
}: RHFInputTextProps) {
  const { register } = useFormContext();

  return (
    <InputWrapper>
      <Div>
        <Label htmlFor={name}>{label}</Label>
        {required && <Star>*</Star>}
      </Div>
      <Div>
        <Input
          type="text"
          required={required}
          id={name}
          {...register(name)}
          {...props}
          $hasError={!!errorMessage}
        />
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      </Div>
    </InputWrapper>
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

const Star = styled.span`
  color: red;
  margin-top: 4px;
`;
