import styled from 'styled-components';
import { Field } from 'formik';

export const SearchInput = styled.input`
  width: 300px;

  font-size: ${p => p.theme.fontSizes.s}px;
  padding: ${p => p.theme.space[3]}px;

  :focus {
    border-color: ${p => p.theme.colors.primary};
    outline: none;
  }
`;

export const Input = styled(Field)`
  width: 300px;

  font-size: ${p => p.theme.fontSizes.s}px;
  padding: ${p => p.theme.space[3]}px;

  :focus {
    border-color: ${p => p.theme.colors.primary};
    outline: none;
  }
`;

export const Error = styled.div`
  color: ${p => p.theme.colors.error};
  font-size: ${p => p.theme.fontSizes.s}px;
`;
