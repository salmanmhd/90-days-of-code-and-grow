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

// printingOdds(game.odds);
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
