import { useState } from "react";
import { departments, countries, statuses } from "../constants";
import { CustomButton, FieldWithHeading, OptionsWithHeading } from "./";

const Popup = ({ isOpened, setIsOpened, users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState(null);
  const [country, setCountry] = useState(null);
  const [status, setStatus] = useState(null);
  const [usernames, setUsernames] = useState(
    users.map((user) => ({ name: user.name }))
  );
  const [error, setError] = useState("");

  const handleAdd = () => {
    setUsers([
      ...users,
      {
        name: username,
        status: { name: status.name, value: status.value },
        department: { name: department.name, value: department.value },
        country: { name: country.name, value: country.value },
      },
    ]);
    setUsername("");
    setDepartment(null);
    setCountry(null);
    setStatus(null);
  };

  const isAddDisabled = () => {
    if (!username.trim()) return true;

    const usernameExists = users.some((user) => user.name === username);
    if (usernameExists) return true;

    if (!department || !country || !status) return true;

    return false;
  };

  return (
    <>
      <div className={`popup ${isOpened ? "" : "popup-closed"}`}></div>
      <div className={`card ${isOpened ? "" : "card-closed"}`}>
        <h3>ADD USER</h3>
        <div className="card__options-wrapper">
          <div className="card__options">
            <FieldWithHeading
              heading="Full Name"
              defaultValue={"Enter Full Name"}
              values={usernames}
              selected={username}
              setSelected={setUsername}
              error={error}
              setError={setError}
            />
            <OptionsWithHeading
              heading="Department"
              isObject={true}
              values={departments}
              selected={department}
              setSelected={setDepartment}
            />
          </div>
          <div className="card__options">
            <OptionsWithHeading
              heading="Country"
              isObject={true}
              values={countries}
              selected={country}
              setSelected={setCountry}
            />
            <OptionsWithHeading
              heading="Status"
              isObject={true}
              values={statuses}
              selected={status}
              setSelected={setStatus}
            />
          </div>
        </div>
        <div className="card__buttons">
          <CustomButton text="Cancel" onClick={() => setIsOpened(false)} />
          <CustomButton
            text="Add"
            size="large"
            onClick={handleAdd}
            disabled={isAddDisabled()}
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
