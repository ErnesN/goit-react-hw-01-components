import User from './User/User';
import Stat from './Statistics/Stat';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/Transaction/TransactionHistory';
import user from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';

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
      <Stat items={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
