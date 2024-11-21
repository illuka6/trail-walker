import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  // state(從store抓取) . userSlice {name:user}(userReducer) 內儲存的state: userName
  if (!userName) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
