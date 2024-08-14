import React from "react";
import { getCookie } from "../../helper/cookie";
import "./style.css";
const Home = () => {
  const token = getCookie("token");
  return (
    <>
      {token && (
        <div>
          <h2>Chúc mừng bạn đã đăng nhập thành công</h2>
          <div className="btn__practice">
            <a href="/topic" style={{ textDecoration: "none" }}>
              <button>Danh sách chủ đề ôn tập</button>
            </a>
            <a href="/answers" style={{ textDecoration: "none" }}>
              <button>Danh sách bài đã luyện tập </button>
            </a>
          </div>
          <hr />
        </div>
      )}
      <div className="introduction">
        <div>
          Website trắc nghiệm online lập trình Frontend là một nền tảng trực
          tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm tra,
          trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập
          trình Frontend.
        </div>
        <br />
        <div>
          Đối với các lập trình viên Frontend, website trắc nghiệm online cung
          cấp các bài kiểm tra để goups họ nâng cao kiến thức và kỹ năng của
          mình trong các công nghệ cà công cụ lập trình như HTML, CSS,
          Javascipt, jQuuery, Bootstrap, Angular, React, Vue...
        </div>
      </div>
    </>
  );
};

export default Home;
