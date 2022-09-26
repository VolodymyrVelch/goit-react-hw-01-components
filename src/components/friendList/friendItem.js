import React from 'react';

import PropTypes from 'prop-types';
import { Card, Active, Ofline, Name } from './friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      {isOnline ? <Active></Active> : <Ofline></Ofline>}
      <img src={avatar} alt="Foto" width={40} />
      <Name> {name}</Name>
    </Card>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
