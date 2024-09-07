// DSA

// CHALLENGE 1:
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
// 2
const [gk, ...fieldPlayers] = players1;
//3
const allPlayers = [...players1, ...players2];
// 4
const players1Final = [...players1, 'Thiago', 'Coutino', 'Periscic'];

// 5
const { team1, x: draw, team2 } = game.odds;

// 6
// printGoals(...game.scored);

function printGoals(...players) {
  console.log(`Total goals: ${players.length}`);
  console.log(players);
}

// continues - CHALLENGE 2:

// console.log(team1 < team2 ? `Team 1 will win` : 'Team 2 will win');

// Looping over objects:
const openHours = {
  Sun: { open: 12, close: 23 },
  Mon: { open: 9, close: 23 },
  Tue: { open: 9, close: 23 },
  Wed: { open: 9, close: 23 },
};

const entries = Object.entries(openHours);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }

function printGoals1(arr) {
  let count = 1;
  arr.map((player) => console.log(`Goal ${count++}: ${player}`));
}

// printGoals1(game.scored);

const goalDetails = {};

function goalsDetailsPrepare(obj, key) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = obj[key] + 1;
  } else {
    obj[key] = 1;
  }
}

game.scored.map((player) => goalsDetailsPrepare(goalDetails, player));

// console.log(goalDetails);

// AVERAGE OF ODDS:

function averageOfOdds(obj) {
  const values = Object.values(obj);
  let sum = 0;
  values.map((n) => (sum += n));
  return (sum / values.length).toFixed(2);
}

// console.log(`the average of odds: ${averageOfOdds(game.odds)}`);

// Printing odds in pretty format:
// console.log(
//   `This is not a variable ${typeof salman !== 'undefined' ? salman : 'salman'}`
// );

function printingOdds(obj) {
  const entries = Object.entries(obj);

  for (const [team, odds] of entries) {
    const teamName = game.hasOwnProperty(team) ? game[team] : team;
    console.log(
      `Odd of${teamName === 'x' ? '' : ' victory'} ${
        teamName === 'x' ? 'draw' : teamName
      }: ${odds}`
    );
  }
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(
  `An event happened, on average every ${calculateAverageEventTime(
    gameEvents
  )} minutes`
);

loopingOverEveryEvents(gameEvents);

function loopingOverEveryEvents(event) {
  for (const [key, value] of event) {
    console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF] ${key}: ${value}`);
  }
}

function calculateAverageEventTime(event) {
  let prevTime = 0;
  const length = event.size;
  let sum = 0;
  for (const [key, value] of event) {
    sum += key - prevTime;
    prevTime = key;
  }

  return Math.round(sum / length);
}

const events = new Set();
for (const [key, value] of gameEvents) {
  events.add(value);
}

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(events);

// -------------STRING -----------------
const str = 'calculate_AGE';
//    first_name Some_Variable calculate_AGE delayed_departure ';

// function camelCase(str) {
//   let splitted = str.split('_'); // underscore case
//   splitted[1] = splitted[1].toLowerCase();
//   const a = splitted[1].replace(splitted[1][0], splitted[1][0].toUpperCase());
//   splitted[1] = a;
//   const ans = splitted.join('');
//   console.log(ans);
// }

function camelCase(str) {
  return str
    .split('_') // Split the string at the underscore
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}
// console.log(camelCase(str));

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
