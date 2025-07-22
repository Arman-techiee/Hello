import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user");
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p>Loading..</p>;
  if (error) return <p className="text-red-500">❌ {error}</p>;
  if (!user) return <p>Loading user...</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>📧 {user.email}</p>
      <p>📞 {user.phone}</p>
      <p>🌐 {user.website}</p>
      <p>🏢 {user.company?.name}</p>
  
      <p className="mb-5">
        📍 {user.address?.city}, {user.address?.street}
      </p>

      <Link to="/users" className=" px-3 py-4 rounded-2xl bg-teal-400">
        Back to users
      </Link>
    </div>
  );
};

export default UserDetail;