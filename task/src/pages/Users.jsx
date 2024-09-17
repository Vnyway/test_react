import { useState } from "react";
import CustomDropdown from "../components/CustomDropdown";
import { departments } from "../constants";
import CustomButton from "../components/CustomButton";

const Users = () => {
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const resetFilters = () => {
    setSelectedDepartments([]);
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
    </div>
  );
};

export default Users;
