import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListTopic } from "../../services/topicService";
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
      <h2>Danh sach chu de on luyen</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ten chu de</th>
              <th></th>
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
