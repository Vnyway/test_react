import { useState, useEffect, useContext } from "react";
import OptionsWithHeading from "../components/OptionsWithHeading";
import FieldWithHeading from "../components/FieldWithHeading";
import { UserContext } from "../context";
import CustomButton from "../components/CustomButton";
import { departments, countries, statuses } from "../constants";

const EditUsers = () => {
  const { newUsers, setNewUsers } = useContext(UserContext);

  // Maintain a state for the usernames array
  const [usernames, setUsernames] = useState(
    newUsers.map((user) => ({ name: user.name }))
  );

  // Current selected user state
  const [currentUser, setCurrentUser] = useState(newUsers[0]);
  const [selectedUsername, setSelectedUsername] = useState(usernames[0].name);

  // Other state variables
  const [changedUsername, setChangedusername] = useState(selectedUsername);
  const [changedDepartment, setChangedDepartment] = useState(
    currentUser.department
  );
  const [changedCountry, setChangedCountry] = useState(currentUser.country);
  const [changedStatus, setChangedStatus] = useState(currentUser.status);
  const [error, setError] = useState("");

  // Function to find the user by name
  const findUser = (name) => {
    return newUsers.find((user) => user.name === name);
  };

  // Update dependent states when selectedUsername changes
  useEffect(() => {
    const user = findUser(selectedUsername);

    if (user) {
      setCurrentUser(user);
      setChangedusername(user.name);
      setChangedDepartment(user.department);
      setChangedCountry(user.country);
      setChangedStatus(user.status);
    }
  }, [selectedUsername]);

  // Update usernames list whenever newUsers changes
  useEffect(() => {
    setUsernames(newUsers.map((user) => ({ name: user.name })));
  }, [newUsers]);

  // Reset to default values
  const clearChanges = () => {
    setSelectedUsername(usernames[0].name);
    setChangedusername(usernames[0].name);
  };

  // Apply changes to the user list
  const applyChanges = () => {
    const updatedUsers = newUsers.map((user) =>
      user.name === selectedUsername
        ? {
            ...user,
            name: changedUsername,
            department: changedDepartment,
            country: changedCountry,
            status: changedStatus,
          }
        : user
    );

    // Update the users in context
    setNewUsers(updatedUsers);

    // Reset selected username and changedUsername after applying changes
    setSelectedUsername(changedUsername);
  };

  return (
    <main className="page-wrapper">
      <h1>EDIT USER</h1>
      <section className="username-wrapper">
        <div className="username-wrapper-wrapper">
          <OptionsWithHeading
            heading="User"
            values={usernames}
            selected={selectedUsername}
            setSelected={setSelectedUsername}
          />
        </div>
      </section>
      <section className="user-info">
        <h2>User Information</h2>
        <div className="change-info">
          <FieldWithHeading
            heading="Full Name"
            defaultValue={selectedUsername}
            values={usernames}
            selected={changedUsername}
            setSelected={setChangedusername}
            error={error}
            setError={setError}
          />
          <OptionsWithHeading
            heading="Department"
            isObject={true}
            values={departments}
            selected={changedDepartment}
            setSelected={setChangedDepartment}
          />
        </div>
        <div className="change-info">
          <OptionsWithHeading
            heading="Country"
            isObject={true}
            values={countries}
            selected={changedCountry}
            setSelected={setChangedCountry}
          />
          <OptionsWithHeading
            heading="Status"
            isObject={true}
            values={statuses}
            selected={changedStatus}
            setSelected={setChangedStatus}
          />
        </div>
      </section>
      <div className="buttons-wrapper">
        <CustomButton
          text="Undo"
          onClick={clearChanges}
          disabled={false}
          size="small"
        />
        <CustomButton
          text="Save"
          onClick={applyChanges}
          disabled={error}
          size="large"
        />
      </div>
    </main>
  );
};

export default EditUsers;
