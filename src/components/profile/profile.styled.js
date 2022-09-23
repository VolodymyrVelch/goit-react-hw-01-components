import styled from 'styled-components';

export const Card = styled.div`
  margin: 20px;
  padding: 40px;
  border: 1px;
  border-radius: 4px;

  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const ContactInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Contact = styled.p`
  font-size: 16px;
  color: grey;
`;

export const StatsBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  flex-grow: inherit;
  gap: 10px;
  list-style-type: none;
`;

export const Stats = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  width: calc(100% / 3);

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
