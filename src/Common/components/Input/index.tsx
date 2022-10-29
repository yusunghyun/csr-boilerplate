import styled from '@emotion/styled';
import { VFC } from 'Common/utils';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: VFC<Props> = ({ label, ...props }) => {
  return (
    <Row>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </Row>
  );
};

const Label = styled.label``;

const StyledInput = styled.input`
  outline: none;

  height: 3rem;

  box-sizing: border-box;

  padding: 0 0.875rem;

  border: 1px solid #000000;
  border-radius: 0.5rem;

  background: inherit;
`;

const Row = styled.div`
  flex-direction: row;
`;
