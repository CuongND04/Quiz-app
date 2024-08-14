import { useEffect, useState } from "react";
import { getAnswer } from "../../services/answersService";
import { useParams } from "react-router-dom";
import { getListQuestion } from "../../services/questionService";
import "./Result.css";
function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await getAnswer(params.id);
      const dataQuestions = await getListQuestion(dataAnswers.topicId);

      let resultFinal = [];
      for (let i = 0; i < dataQuestions.length; i++) {
        resultFinal.push({
          ...dataAnswers.answers.find(
            (item) => item.questionId == dataQuestions[i].id
          ),
          ...dataQuestions[i],
        });
      }
      setDataResult(resultFinal);
    };
    fetchApi();
  }, []);
  return (
    <>
      <h1>Kết quả: </h1>
      <div className="result__list">
        {dataResult.map((item, index) => (
          <div className="result__item" key={item.id}>
            <p>
              Câu {index + 1}: {item.question}
              {item.correctAnswer == item.answer ? (
                <span className="result__tag result__tag--true">Đúng</span>
              ) : (
                <span className="result__tag result__tag--false">Sai</span>
              )}
            </p>
            {item.answers.map((itemAns, indexAns) => {
              let className = "";
              let checked = false;
              if (item.answer == indexAns) {
                checked = true;
                className = "result__item--selected";
              }
              if (item.correctAnswer == indexAns) {
                className += " result__item--result";
              }
              return (
                <div className="result__answer" key={indexAns}>
                  <input type="radio" checked={checked} disabled />
                  <label className={className}>{itemAns}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}
export default Result;
