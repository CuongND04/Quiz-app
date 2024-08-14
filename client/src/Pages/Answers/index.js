import { useEffect, useState } from "react";
import { getAnswersByUserId } from "../../services/answersService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";
import "./answers.css";
function Answers() {
  const [dataAnswers, setDataAnswers] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const answersByUserId = await getAnswersByUserId();
      const topics = await getListTopic();
      let result = [];
      for (let i = 0; i < answersByUserId.length; i++) {
        result.push({
          ...topics.find((item) => item.id == answersByUserId[i].topicId),
          ...answersByUserId[i],
        });
      }
      setDataAnswers(result.reverse());
    };
    fetchApi();
  }, []);
  console.log(dataAnswers);
  return (
    <>
      <h2>Danh sách bài đã luyện tập</h2>
      <table className="table__answer">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên chủ đề</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {dataAnswers.map((item) => (
            <tr className="table__answer--item" key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={"/result/" + item.id}>Xem chi tiết</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Answers;
