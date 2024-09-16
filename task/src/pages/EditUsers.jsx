import { useState, useEffect, useContext } from "react";
import OptionsWithHeading from "../components/OptionsWithHeading";
import FieldWithHeading from "../components/FieldWithHeading";
import { UserContext } from "../context";
import CustomButton from "../components/CustomButton";

const EditUsers = () => {
  const { newUsers, setNewUsers } = useContext(UserContext);
  const usernames = newUsers.map((user) => ({ name: user.name }));
  const [selectedUsername, setSelectedUsername] = useState(usernames[0].name);
  const [changedUsername, setChangedusername] = useState(selectedUsername);
  const [error, setError] = useState(false);
  console.log(newUsers);
  useEffect(() => {
    setChangedusername(selectedUsername);
  }, [selectedUsername]);

  const clearChanges = () => {
    setChangedusername(selectedUsername);
  };

  const applyChanges = () => {
    const updatedUsers = newUsers.map((user) =>
      user.name === selectedUsername ? { ...user, name: changedUsername } : user
    );
    setNewUsers(updatedUsers);
  };

  return (
    <div>
      <OptionsWithHeading
        heading="User"
        values={usernames}
        selected={selectedUsername}
        setSelected={setSelectedUsername}
      />
      <FieldWithHeading
        heading="Full Name"
        defaultValue={selectedUsername}
        values={usernames}
        selected={changedUsername}
        setSelected={setChangedusername}
        error={error}
        setError={setError}
      />
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
  );
};

export default EditUsers;
