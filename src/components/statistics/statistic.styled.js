import styled from 'styled-components';

export const StatisticCard = styled.div`
  margin: 20px;
  padding: 40px;
  border-radius: 4px;

  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const StatTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const StatsBlock = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  padding: 0;
  gap: 5px;
  list-style-type: none;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Stats = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  width: calc(100% / 5);

  background-color: ${getRandomHexColor};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
