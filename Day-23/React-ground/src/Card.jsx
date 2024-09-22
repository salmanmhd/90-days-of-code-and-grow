const skillsArray = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function Card() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro name={'Md Salman'} />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className='avatar'
      src='https://www.thefactsite.com/wp-content/uploads/2017/09/ash-ketchum-facts-pokemon.webp'
      alt='ash'
    />
  );
}

function Intro({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        I am a full stack developer. Currently working in a start up. This team
        is just amazing. I have wonderful opportunity of working form home. This
        job is high in pay. More than what I expected
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className='skill-list'>
      {skillsArray.map((skillObj) => {
        return (
          <Skill
            skills={skillObj.skill}
            level={skillObj.level}
            color={skillObj.color}
            key={skillObj.skill}
          />
        );
      })}
    </div>
  );
}

function Skill({ skills, level, color }) {
  return (
    <div style={{ backgroundColor: color }} className='skill'>
      <span className='skill-list'>
        {skills}
        {level === 'beginner' ? '👶' : level === 'intermediate' ? '👌' : '💪'}
      </span>
    </div>
  );
}
export default Card;
