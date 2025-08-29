"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { questionSchema } from "@/schema/survey-schema";
import SurveyList from "./SurveyList";
import Button from "../button/Button";

const SurveyHome = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      phone: "",
      gender: 0,
      birthday: "",
      satisfaction: 0,
      recommend: 0,
      recommendReason: "",
    },
    resolver: zodResolver(questionSchema),
  });
  const { handleSubmit } = form;

  const onSubmit = (data: unknown) => {
    console.log("survey data", data);
  };

  return (
    <FormProvider {...form}>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Title>Challegers 이용에 관한 설문을 작성해주세요 🖌</Title>
          <SurveyList />
          <Button
            buttonText="제출하기"
            buttonType="primary"
            buttonStyle="fullWidth"
            type="submit"
          />
        </Form>
      </Container>
    </FormProvider>
  );
};

export default SurveyHome;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
