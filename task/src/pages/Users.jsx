import { useContext, useEffect, useState } from "react";
import CustomDropdown from "../components/CustomDropdown";
import { departments, countries, statuses } from "../constants";
import CustomButton from "../components/CustomButton";
import { UserContext } from "../context";
import UserField from "../components/UserField";

const Users = () => {
  const { newUsers, setNewUsers } = useContext(UserContext);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const resetFilters = () => {
    setSelectedDepartments([]);
  };

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleRemoveUser = (name) => {
    setNewUsers((pv) => pv.filter((user) => user.name !== name));
  };

  return (
    <main className="page-wrapper">
      <p>Please add at least 3 departmetns to be able to proceed next steps.</p>
      <section className="filters">
        <div className="dropdowns-button">
          <div className="dropdowns">
            <CustomDropdown
              name="Departments"
              fields={departments}
              selectedFields={selectedDepartments}
              setSelectedFields={setSelectedDepartments}
              disabled={false}
            />
            <CustomDropdown
              name="Departments"
              fields={countries}
              selectedFields={selectedCountries}
              setSelectedFields={setSelectedCountries}
              disabled={selectedDepartments.length < 3}
            />
            <CustomDropdown
              name="Departments"
              fields={statuses}
              selectedFields={selectedStatuses}
              setSelectedFields={setSelectedStatuses}
              disabled={selectedDepartments.length < 3}
            />
          </div>
          <CustomButton
            image="/images/trash.png"
            disabled={!selectedDepartments.length}
            onClick={resetFilters}
          />
        </div>
        <CustomButton text="Add User" size="large" />
      </section>
      <section className="table">
        <div className="headings">
          <h4 className="first-heading">Full Name</h4>
          <h4 className="headings__large">Department</h4>
          <h4>Country</h4>
          <h4>Status</h4>
          <span className="last-span"></span>
        </div>
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
      </section>
    </main>
  );
};

export default Users;
