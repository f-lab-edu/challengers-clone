"use client";

import ErrorMessage from "@/components/common/ErrorMessage";
import RequiredDisplay from "@/components/common/RequiredDisplay";
import { SurveyItem } from "@/constants/survey";
import Image from "next/image";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type RHFInputRadioProps = InputHTMLAttributes<HTMLInputElement> &
  Omit<SurveyItem, "type"> & {
    errorMessage?: string;
  };

export default function RHFInputRadio({
  id,
  name,
  label,
  required,
  options,
  errorMessage,
  ...props
}: RHFInputRadioProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper>
      <Div>
        <TitleLabel htmlFor={name}>
          {id}. {label}
        </TitleLabel>
        {required && <RequiredDisplay />}
        {errorMessage && (
          <ErrorMessage
            errorMessage={errorMessage}
            cssObject={{ top: "2px", right: "0", left: "auto" }}
          />
        )}
      </Div>
      <OptionWrapper>
        {options?.map(({ label, icon, value }) => (
          <OptionItem key={label}>
            <Input
              type="radio"
              required={required}
              id={label}
              {...register(name)}
              {...props}
              value={value}
            />
            <Label htmlFor={label}>
              {icon ? (
                <Image src={icon} alt={label} width={20} height={20} />
              ) : (
                label
              )}
            </Label>
          </OptionItem>
        ))}
      </OptionWrapper>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  border: 1px solid #000;
  padding: 8px 12px;
  outline: none;
`;

const Label = styled.label`
  font-size: 14px;
`;
const TitleLabel = styled(Label)`
  font-size: 18px;
  font-weight: 500;
`;

const OptionWrapper = styled.ul`
  display: flex;
  gap: 8px;
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  position: relative;
`;
