import PropTypes from 'prop-types';
import { Cards, Card, Active, Ofline, Name } from './friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <Cards>
      {friends.map(friend => (
        <Card key={friend.id}>
          {friend.isOnline ? <Active></Active> : <Ofline></Ofline>}
          <img src={friend.avatar} alt="Foto" width={40} />
          <Name> {friend.name}</Name>
        </Card>
      ))}
    </Cards>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
