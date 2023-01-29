import { Profile } from './Profile/Profile';
import { Statistics } from './Statictics/Statictics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import styles from './App.module.css';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import React from 'react';


export const App = () => {
  return (
    <>
      <h2 className={styles.category}>User profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className={styles.category}>Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2 className={styles.category}>Friends</h2>
      <FriendList friends={friends} />
      <h2 className={styles.category}>Transactions</h2>
      <TransactionHistory items={transactions} />
    </>
  );
};
