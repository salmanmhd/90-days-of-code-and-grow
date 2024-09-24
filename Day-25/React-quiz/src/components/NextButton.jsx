function NextBuuton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'next' })}>
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finished' })}
      >
        Finish
      </button>
    );
  }
}

export default NextBuuton;
