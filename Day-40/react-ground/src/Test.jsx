import useIsOnline from './assets/customeHooks';

function Test() {
  const isOnline = useIsOnline();
  console.log(isOnline);
  return <div>{isOnline ? 'I am online' : 'I am ofline'}</div>;
}

export default Test;
