import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserProfile } from '../redux/userSlice';
import AccountList from '../components/AccountList';
import UserHeader from '../components/UserHeader';

export default function UserAccount() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <UserHeader />
      <AccountList />
    </main>
  );
}
