import styled, { css } from "styled-components";

const ProductThumbnailPrice = ({
  price,
  originalPrice,
  cashbackAmount,
  isSoldOut,
}: {
  price: number;
  originalPrice: number;
  cashbackAmount: number;
  isSoldOut: boolean;
}) => {
  return (
    <>
      <PriceText>실구매가</PriceText>
      <PriceWrapper>
        <Price $isSoldOut={isSoldOut}>{price.toLocaleString()}원</Price>
        <OriginalPrice>{originalPrice.toLocaleString()}원</OriginalPrice>
      </PriceWrapper>
      <CashbackBadge $isSoldOut={isSoldOut}>
        페이백 {cashbackAmount.toLocaleString()}원
      </CashbackBadge>
    </>
  );
};

const PriceWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 22px; /* 가격 높이 강제 통일 */
`;

const Price = styled.span<{ $isSoldOut: boolean }>`
  color: #0077ff;
  font-size: 16px;
  font-weight: bold;

  ${({ $isSoldOut }) =>
    $isSoldOut &&
    css`
      color: black;
    `}
`;

const OriginalPrice = styled.span`
  color: #999;
  font-size: 14px;
  text-decoration: line-through;
`;

const CashbackBadge = styled.div<{ $isSoldOut: boolean }>`
  margin-top: 4px;
  background-color: #1976d2;
  color: white;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  padding: 4px 8px;
  display: inline-block;
  width: fit-content;
  height: 28px;
  display: flex;
  align-items: center;

  ${({ $isSoldOut }) =>
    $isSoldOut &&
    css`
      background-color: #999;
    `}
`;

const PriceText = styled.span`
  font-size: 12px;
  color: #999;
  font-weight: bold;
`;

export default ProductThumbnailPrice;
