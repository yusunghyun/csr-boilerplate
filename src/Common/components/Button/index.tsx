import styled from '@emotion/styled';
import { VFC } from 'Common/utils';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: VFC<Props> = ({ onTouchStart, onTouchEnd, ...props }) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  border: none;

  border-radius: 0.875rem;
`;
