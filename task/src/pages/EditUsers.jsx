import { useState, useEffect } from "react";
import OptionsWithHeading from "../components/OptionsWithHeading";
import { users } from "../constants";
import FieldWithHeading from "../components/FieldWithHeading";

const EditUsers = () => {
  const usernames = users.map((user) => ({ name: user.name }));
  const [selectedUsername, setSelectedUsername] = useState(usernames[0].name);
  const [changedUsername, setChangedusername] = useState(selectedUsername);
  const [error, setError] = useState(false);
  useEffect(() => {
    setChangedusername(selectedUsername);
  }, [selectedUsername]);

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
    </div>
  );
};

export default EditUsers;
