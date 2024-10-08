const url =
  'https://i.ytimg.com/vi/bZwy6EeRp6I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYI8mTwaLU4_szUTuBtHWJGo4rUw';

const channelImg =
  'https://yt3.googleusercontent.com/acEdpqr6RnUc-BMghbtz30E5zf57LwWUX6TbdDLY2az8TRU7xSjjY7e1pj9dZlj_TnHIdbKazQ=s160-c-k-c0x00ffffff-no-rj';
const channelName = 'SalmanSphere';
const t =
  'Starting a new challenge | 90 Days of Code and Grow: My Journey to a confident developer';
const views = 70;
const time = '1 month ago';
function VideoCard() {
  return (
    <div>
      <img className='rounded-xl w-full' src={url} />
      <div className='grid grid-cols-12 bg-emerald-950'>
        <div className='col-span-2 flex justify-center'>
          <img
            className='rounded-full mt-2 h-16 w-16 '
            src={channelImg}
            alt='channelLogo'
          />
        </div>

        <div className='col-span-10 mt-2'>
          <p className='text-xl  font-bold '>{t}</p>
          <p className='text-gray-400'>{channelName}</p>
          <p className='text-gray-400'>
            {views} views - {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
