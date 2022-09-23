import {
  Card,
  ContactInfo,
  UserName,
  Contact,
  StatsBlock,
  Stats,
} from './profile.styled';

export const Ptofile = ({ user }) => {
  const { username, tag, location, stats } = user;
  return (
    <Card>
      <ContactInfo>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          width={50}
        />
        <UserName>{username}</UserName>
        <Contact>@{tag}</Contact>
        <Contact>{location}</Contact>
      </ContactInfo>

      <StatsBlock>
        <Stats>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Stats>
        <Stats>
          <span>Views</span>
          <span>{stats.views}</span>
        </Stats>
        <Stats>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </Stats>
      </StatsBlock>
    </Card>
  );
};
