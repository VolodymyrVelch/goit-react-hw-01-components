import styled from 'styled-components';

export const Cards = styled.ul`
  padding: 10px;
`;

export const Card = styled.li`
  display: flex;
  margin: 10px;
  padding: 20px;
  align-items: center;
  gap: 15px;
  border-radius: 4px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  /* flex-direction: column; */
`;

export const Active = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;
export const Ofline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const Name = styled.p`
  font-size: 20px;
`;
