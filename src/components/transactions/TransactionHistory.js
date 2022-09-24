import PropTypes from 'prop-types';
import {
  TransactionCard,
  TableHead,
  TableList,
  TableTh,
  TableTd,
} from './transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionCard>
      <table>
        <thead>
          <TableHead>
            <TableTh>Type</TableTh>
            <TableTh>Amount</TableTh>
            <TableTh>Currency</TableTh>
          </TableHead>
        </thead>
        <tbody>
          {items.map(item => (
            <TableList key={item.id}>
              <TableTd>{item.type}</TableTd>
              <TableTd>{item.amount}</TableTd>
              <TableTd>{item.currency}</TableTd>
            </TableList>
          ))}
        </tbody>
      </table>
    </TransactionCard>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
