import { Profile } from './profile/Profile';
import { FriendList } from './friendList/friendList';
import { Statistic } from './statistics/statistic';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistic title="Upload stats" stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
