import { useContext, useEffect, useState } from "react";
import CustomDropdown from "../components/CustomDropdown";
import { departments } from "../constants";
import CustomButton from "../components/CustomButton";
import { UserContext } from "../context";
import UserField from "../components/UserField";

const Users = () => {
  const { newUsers, setNewUsers } = useContext(UserContext);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const resetFilters = () => {
    setSelectedDepartments([]);
  };

  const handleRemoveUser = (name) => {
    setNewUsers((pv) => pv.filter((user) => user.name !== name));
  };

  return (
    <div>
      <CustomDropdown
        name="Departments"
        fields={departments}
        selectedFields={selectedDepartments}
        setSelectedFields={setSelectedDepartments}
        disabled={false}
      />
      <CustomButton
        image="/images/trash.png"
        disabled={!selectedDepartments.length}
        onClick={resetFilters}
      />
      {newUsers.map((user) => (
        <UserField
          key={user.name}
          name={user.name}
          department={user.department.name}
          country={user.country.name}
          status={user.status.name}
          onClick={handleRemoveUser}
        />
      ))}
    </div>
  );
};

export default Users;
