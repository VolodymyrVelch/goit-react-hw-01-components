import { Ptofile } from './profile/Profile';
import { FriendList } from './friendList/friendList';
import { Statistic } from './statistics/statistic';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from './profile/user';
import data from './statistics/data';
import friends from './friendList/friends.json';
import transactions from './transactions/transactions';

export const App = () => {
  return (
    <div
      style={{
        padding: '30px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}
    >
      <div>
        <Ptofile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistic stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
