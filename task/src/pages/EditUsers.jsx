import { useState } from "react";
import OptionsWithHeading from "../components/OptionsWithHeading";
import { users } from "../constants";

const EditUsers = () => {
  const usernames = users.map((user) => ({ name: user.name }));
  const [selectedUsername, setSelectedUsername] = useState(usernames[0].name);
  return (
    <div>
      <OptionsWithHeading
        heading="User"
        values={usernames}
        selected={selectedUsername}
        setSelected={setSelectedUsername}
      />
    </div>
  );
};

export default EditUsers;
