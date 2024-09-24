import { useEffect, useReducer } from 'react';
import './../App.css';
import Container from './Container';
import Header from './Header';
import Loader from './Loader';
import Error from './Error';
import StarScreen from './StarScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';

const url = 'http://localhost:3500/questions';
const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 10,
};
const SEC_PER_QUESTION = 30;
function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, status: 'ready', questions: action.payload };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case 'newAnswer': {
      // const question = state.questions[state.index];
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case 'next':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case 'finished':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return {
        ...initialState,
        status: 'active',
        questions: state.questions,
        highscore: state.highscore,
      };

    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };

    default:
      return 'Invalid action';
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const questLentgh = questions.length;
  const maxPoints = questions.reduce((acc, q) => acc + q.points, 0);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({ type: 'dataReceived', payload: data });
      } catch (error) {
        console.log(error);
        dispatch({ type: 'dataFailed' });
      }
    }

    fetchData();
  }, []);
  return (
    <div className='app'>
      <Header />
      <Container>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StarScreen length={questLentgh} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestion={questLentgh}
              points={points}
              answer={answer}
              maxPoints={maxPoints}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                maxPoints={maxPoints}
                index={index}
                numQuestions={questions.length}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
