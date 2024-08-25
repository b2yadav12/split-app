import { useDispatch } from "react-redux";
import { usersListThunk } from "../../services/users";

export const Dashboard = () => {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    await dispatch(usersListThunk({}));
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button className="mt-5" onClick={fetchUsers}>Fetch Users</button>
    </div>
  );
}

export default Dashboard;