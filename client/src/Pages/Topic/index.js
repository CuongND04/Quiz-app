import { useEffect, useState } from "react";
import { getListTopic } from "../../services/topicService";
import "./style.css";
function Topic() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      setTopics(response);
    };
    fetchApi();
  }, []);
  return (
    <>
      <h2>Danh sách chủ đề ôn luyện</h2>
      <div>
        <table className="table__topic">
          <thead>
            <tr>
              <th>Mã đề</th>
              <th>Tên chủ đề</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <a
                    href={`/quiz/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button>Làm bài</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Topic;
