import styled, { keyframes } from "styled-components";

type SkeletonCategoryItemProps = {
  colsCount: number;
};

export default function SkeletonCategoryItem({
  colsCount = 2,
}: SkeletonCategoryItemProps) {
  return (
    <SkeletonWrapper $colsCount={colsCount}>
      {Array.from({ length: colsCount }).map((_, index) => (
        <div key={index}>
          <SkeletonImage />
          <SkeletonTag />
          <SkeletonTime />
          <SkeletonTitle />
          <SkeletonPrice />
          <SkeletonPayback />
        </div>
      ))}
    </SkeletonWrapper>
  );
}

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

const SkeletonWrapper = styled.div<{ $colsCount: number }>`
  display: grid;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  grid-template-columns: repeat(${({ $colsCount }) => $colsCount}, 1fr);
  gap: 12px;
`;

const Skeleton = styled.div`
  animation: ${shimmer} 1.2s infinite linear;
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 800px 104px;
`;

const SkeletonImage = styled(Skeleton)`
  width: 100%;
  height: 180px;
`;

const SkeletonTag = styled(Skeleton)`
  width: 50px;
  height: 18px;
  margin: 8px 10px 4px;
  border-radius: 4px;
`;

const SkeletonTime = styled(Skeleton)`
  width: 90px;
  height: 14px;
  margin: 4px 10px;
  border-radius: 4px;
`;

const SkeletonTitle = styled(Skeleton)`
  width: 80%;
  height: 16px;
  margin: 4px 10px;
  border-radius: 4px;
`;

const SkeletonPrice = styled(Skeleton)`
  width: 60px;
  height: 20px;
  margin: 4px 10px;
  border-radius: 4px;
`;

const SkeletonPayback = styled(Skeleton)`
  width: 80px;
  height: 20px;
  margin: 6px 10px 10px;
  border-radius: 4px;
`;
