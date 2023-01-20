import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  margin-top: ${({ theme }) => theme.space[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const StatisticsItem = styled.li`
  & + & {
    margin-top: ${({ theme }) => theme.space[1]}px;
  }
`;
export const StatisticsItemValue = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.space[1]}px;
`;
