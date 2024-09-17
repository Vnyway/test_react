import { useState } from "react";
import CustomDropdown from "../components/CustomDropdown";
import { departments } from "../constants";
import CustomButton from "../components/CustomButton";

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
      <CustomButton text="Delete" />
    </div>
  );
};

export default Users;
