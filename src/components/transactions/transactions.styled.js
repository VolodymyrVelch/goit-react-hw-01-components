import styled from 'styled-components';

export const TransactionCard = styled.div`
  padding: 20px;
  border-radius: 4px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;

export const TableHead = styled.tr`
  background-color: #3393ff;
  color: white;
  margin: 20px;
`;
export const TableTh = styled.th`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const TableTd = styled.td`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const TableList = styled.tr`
  &:nth-child(odd) {
    background-color: #f0f8ff;
  }
  &:nth-child(even) {
    background-color: #f5f5dc;
  }
`;
