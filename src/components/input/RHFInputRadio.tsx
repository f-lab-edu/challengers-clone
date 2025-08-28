"use client";

import { SurveyOption } from "@/constants/survey";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

type RHFInputRadioProps = HTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  required: boolean;
  options?: SurveyOption[];
};

export default function RHFInputRadio({
  name,
  label,
  required,
  options,
  ...props
}: RHFInputRadioProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InputWrapper>
      <TitleLabel htmlFor={name}>{label}</TitleLabel>
      <OptionWrapper>
        {options?.map(({ label, icon }) => (
          <OptionItem key={label}>
            <Input
              type="radio"
              required={required}
              id={label}
              {...register(name)}
              {...props}
              value={label}
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

const Label = styled.label``;
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
