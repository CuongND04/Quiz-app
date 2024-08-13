import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helper/generateToken";
import { checkExits, register } from "../../services/usersService";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const checkExitsEmail = await checkExits("email", email);
    console.log(checkExitsEmail);
    if (checkExitsEmail.length > 0) {
      alert("Email đã tồn tại!");
    } else {
      const options = {
        fullName: fullName,
        email: email,
        password: password,
        token: generateToken(20),
      };

      const response = await register(options);
      console.log(response);
      if (response) {
        navigate("/login");
      } else {
        alert("Đăng kí không thành công!");
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <input type="fullName" placeholder="Nhập họ tên" />
        </div>
        <div>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
export default Register;
