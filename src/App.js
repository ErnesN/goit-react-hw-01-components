import User from './components/User/User';
import Header from 'components/Header/Header';

import user from './data/user.json';

function App() {
  return (
    <>
      <Header />
      <User
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;
