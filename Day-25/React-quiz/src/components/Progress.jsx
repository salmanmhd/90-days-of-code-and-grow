function Progress({ index, numQuestion, points, maxPoints, answer }) {
  return (
    <header className='progress'>
      <progress
        value={index + Number(answer !== null)}
        max={numQuestion}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
