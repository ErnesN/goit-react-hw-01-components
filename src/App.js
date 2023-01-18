import User from './components/User/User';
import Stat from './components/Statistics/Stat';
import FriendList from 'components/FriendList/FriendList';
import user from './path/user.json';
import data from './path/data.json';
import friends from './path/friends.json';

function App() {
  return (
    <>
      <User
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stat title="Upload stats" items={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
