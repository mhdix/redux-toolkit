import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";
import { useEffect } from "react";

const UserList = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>user</h1>
      {loading ? (
        "loading ..."
      ) : error ? (
        { error }
      ) : (
        <div>
          {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
        </div>
      )}
    </div>
  );
};

export default UserList;
