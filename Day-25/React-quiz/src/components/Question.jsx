import Options from './Options';
function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
