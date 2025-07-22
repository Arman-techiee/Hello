import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(
  //   () => {

  //   }
  // )

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users", err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>⏳ Loading users...</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">All Users</h3>
      <ul className="space-y-1">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="text-blue-600 hover:underline"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;