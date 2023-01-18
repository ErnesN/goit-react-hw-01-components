import User from './components/User/User';
import Stat from './components/Statistics/Stat';
import user from './path/user.json';
import data from './path/data.json';

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
      <Stat title="" items={data} />
    </>
  );
}

export default App;
