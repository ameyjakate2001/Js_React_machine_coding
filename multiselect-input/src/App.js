import { useRef, useEffect, useState } from "react";
import "./styles.css";
import useDebounce from "./useDebounce";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pills, setPills] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedSet, setSelectedSet] = useState(new Set());
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${debouncedSearchValue}`
      );
      const data = await response.json();
      setUsers(data.users);
      console.log(data.users);
    }
    fetchUsers();
  }, [debouncedSearchValue]);

  const handleSelectedUser = (user) => {
    setSelectedUser((prevUser) => [...prevUser, user]);
    setSelectedSet((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.add(user.email);
      return newSet;
    });
    inputRef.current.focus();
  };
  const handleRemoveUser = (user) => {
    setSelectedUser(selectedUser.filter((u) => u.email !== user.email));
    setSelectedSet((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.delete(user.email);
      return newSet;
    });
  };
  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      searchValue === "" &&
      selectedUser.length > 0
    ) {
      setSelectedUser((prevUser) => prevUser.slice(0, -1));
      setSelectedSet((prevSet) => {
        const newSet = new Set(prevSet);
        newSet.delete(selectedUser[selectedUser.length - 1].email);
        return newSet;
      });
    }
  };
  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {selectedUser?.map((user) => {
          return (
            <span
              key={user.email}
              className="user-pill"
              onClick={() => {
                handleRemoveUser(user);
              }}
            >
              <img src={user.image} alt={user.firstName} />
              <span>{user.firstName} &times;</span>
            </span>
          );
        })}
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search For a User..."
            ref={inputRef}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
          <ul className="suggestions-list">
            {users?.map((user, index) => {
              return !selectedSet.has(user.email) ? (
                <li key={user.email} onClick={() => handleSelectedUser(user)}>
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
