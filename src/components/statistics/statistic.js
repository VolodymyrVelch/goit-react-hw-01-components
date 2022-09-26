import PropTypes from 'prop-types';
import {
  StatisticCard,
  StatsBlock,
  Stats,
  StatTitle,
} from './statistic.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatisticCard>
      {title && <StatTitle>{title}</StatTitle>}
      <StatsBlock>
        {stats.map(stats => (
          <Stats key={stats.id}>
            <span>{stats.label}</span>
            <span>{stats.percentage}%</span>
          </Stats>
        ))}
      </StatsBlock>
    </StatisticCard>
  );
};
Statistic.propTypes = {
  statistic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
