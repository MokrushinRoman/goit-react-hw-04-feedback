import styled from '@emotion/styled';

export const FeedbackButton = styled.button`
  border: ${({ theme }) => theme.borders.initial};
  border-radius: ${({ theme }) => theme.radii.initial};

  background-color: transparent;
  box-shadow: ${({ theme }) => theme.shadows.buttons};

  font-size: ${({ theme }) => theme.fontSizes.s};

  transition: box-shadow ${({ theme }) => theme.transition};

  & + & {
    margin-left: 20px;
  }

  :hover,
  :focus {
    transform: scale(1.02);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;
