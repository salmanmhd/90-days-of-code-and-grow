function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? 'answer' : ''} ${
            // hasAnswered && index === question.correctOption
            //   ? 'correct'
            //   : 'wrong'
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
