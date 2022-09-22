import { Ptofile } from './profile/Profile';
import { FriendList } from './friendList/friendList';
import { Statistic } from './statistics/statistic';
import { Transaction } from './transactions/transaction';
import user from './profile/user.json';
import friends from './friendList/friends.json';
import data from './statistics/data.json';
import transaction from './transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Ptofile user={user} />
      <FriendList />
      <Statistic />
      <Transaction />
    </div>
  );
};
