import PropTypes from 'prop-types';
export const Statistic = ({ stats }) => {
  stats.map(stats => stats);
  return (
    <section>
      <h2>Upload stats</h2>
      <ul>
        <li>
          <span>.docx</span>
          <span>14%</span>
        </li>
        <li>
          <span>.mp3</span>
          <span>14%</span>
        </li>
        <li>
          <span>.pdf</span>
          <span>41%</span>
        </li>
        <li>
          <span>.mp4</span>
          <span>12%</span>
        </li>
      </ul>
    </section>
  );
};
Statistic.propTypes = {
  statistic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
