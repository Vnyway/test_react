import { useState } from "react";
import CustomDropdown from "../components/CustomDropdown";
import { departments } from "../constants";

const Users = () => {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  return (
    <div>
      <CustomDropdown
        name="Departments"
        fields={departments}
        selectedFields={selectedDepartments}
        setSelectedFields={setSelectedDepartments}
        disabled={false}
      />
    </div>
  );
};

export default Users;
