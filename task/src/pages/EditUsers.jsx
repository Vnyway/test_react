import { useState, useEffect, useContext } from "react";
import OptionsWithHeading from "../components/OptionsWithHeading";
import FieldWithHeading from "../components/FieldWithHeading";
import { UserContext } from "../context";
import CustomButton from "../components/CustomButton";
import { departments, countries, statuses } from "../constants";

const EditUsers = () => {
  const { newUsers, setNewUsers } = useContext(UserContext);

  const [usernames, setUsernames] = useState(
    newUsers.map((user) => ({ name: user.name }))
  );

  const [currentUser, setCurrentUser] = useState(newUsers[0]);
  const [selectedUsername, setSelectedUsername] = useState(usernames[0].name);

  const [changedUsername, setChangedusername] = useState(selectedUsername);
  const [changedDepartment, setChangedDepartment] = useState(
    currentUser.department
  );
  const [changedCountry, setChangedCountry] = useState(currentUser.country);
  const [changedStatus, setChangedStatus] = useState(currentUser.status);
  const [error, setError] = useState("");
  const [changesSaved, setChangesSaved] = useState(true);

  const isChanged = () => {
    return (
      changedUsername !== currentUser.name ||
      changedDepartment.value !== currentUser.department.value ||
      changedCountry.value !== currentUser.country.value ||
      changedStatus.value !== currentUser.status.value
    );
  };

  const findUser = (name) => {
    return newUsers.find((user) => user.name === name);
  };

  useEffect(() => {
    const user = findUser(selectedUsername);

    if (user) {
      setCurrentUser(user);
      setChangedusername(user.name);
      setChangedDepartment(user.department);
      setChangedCountry(user.country);
      setChangedStatus(user.status);
      setChangesSaved(true);
    }
  }, [selectedUsername]);

  useEffect(() => {
    setUsernames(newUsers.map((user) => ({ name: user.name })));
  }, [newUsers]);

  const clearChanges = () => {
    setChangedusername(currentUser.name);
    setChangedDepartment(currentUser.department);
    setChangedCountry(currentUser.country);
    setChangedStatus(currentUser.status);
    setChangesSaved(true);
  };

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

    setNewUsers(updatedUsers);
    setSelectedUsername(changedUsername);
    setChangesSaved(true);
  };

  useEffect(() => {
    if (isChanged()) {
      setChangesSaved(false);
    }
  }, [changedUsername, changedDepartment, changedCountry, changedStatus]);

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
        {!changesSaved && (
          <CustomButton
            text="Undo"
            onClick={clearChanges}
            disabled={false}
            size="small"
          />
        )}
        <CustomButton
          text="Save"
          onClick={applyChanges}
          disabled={changesSaved || error}
          size="large"
        />
      </div>
    </main>
  );
};

export default EditUsers;
