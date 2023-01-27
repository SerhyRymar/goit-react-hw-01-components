import { Profile } from './Profile/Profile';
import { Statistics } from './Statictics/Statictics';
import user from '../data/user.json';
import data from '../data/data.json';


export const App = () => {
  return (
    <>
      <h2>User profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>Friends</h2>
      <h2>Transactions</h2>
    </>
  );
};
