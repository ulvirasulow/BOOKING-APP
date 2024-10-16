import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";

const Featured = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8800/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Last 3 Users</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <ul className="userList">
          {users.map((user) => (
            <li className="userItem" key={user._id}>
              <span className="username">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Featured;
