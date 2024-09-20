import { CustomButton } from "./";

const UserField = ({ name, department, country, status, onClick }) => {
  return (
    <div className="user-field">
      <h3 className="user-field__username">{name}</h3>
      <span className="user-field__span">{department}</span>
      <span>{country}</span>
      <span>{status}</span>
      <CustomButton
        image="./images/trash.png"
        onClick={() => onClick(name)}
        disabled={false}
      />
    </div>
  );
};

export default UserField;
