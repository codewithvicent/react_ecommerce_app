import "../../pages/login/login.css";

export const Input = ({ Icon, type, placeholder }) => {
  return (
    <div className="login_input_wrapper">
      <Icon color="#7d2ae8" />
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
