import styled from '@emotion/styled';

export const Message = styled.b`
  margin-top: ${({ theme }) => theme.space[2]}px;

  color: #ff4d00;

  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
`;
