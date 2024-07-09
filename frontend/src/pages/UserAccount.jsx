import AccountList from "../components/AccountList"
import UserHeader from "../components/UserHeader"

export default function UserAccount() {
  return (
    <main className="main bg-dark">
      <UserHeader />
      <AccountList />
    </main>
  )
}