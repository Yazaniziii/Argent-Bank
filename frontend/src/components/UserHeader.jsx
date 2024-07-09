import { useSelector } from 'react-redux';

export default function UserHeader() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user.firstName}
      </h1>
      <button className="edit-button">
        Edit Name
      </button>
    </div>
  );
}
