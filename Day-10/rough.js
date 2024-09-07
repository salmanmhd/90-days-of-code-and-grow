const workoutRoutine = {
  name: 'Full Body Workout',
  duration: 60, // in minutes
  exercises: [
    {
      name: 'Squats',
      sets: 4,
      reps: 12,
      weight: 50, // in kg
      muscleGroup: 'Legs',
    },
    {
      name: 'Bench Press',
      sets: 3,
      reps: 10,
      weight: 40, // in kg
      muscleGroup: 'Chest',
    },
    {
      name: 'Deadlift',
      sets: 3,
      reps: 8,
      weight: 60, // in kg
      muscleGroup: 'Back',
    },
    {
      name: 'Bicep Curls',
      sets: 4,
      reps: 15,
      weight: 15, // in kg
      muscleGroup: 'Arms',
    },
    {
      name: 'Plank',
      sets: 3,
      duration: 60, // in seconds
      muscleGroup: 'Core',
    },
  ],
  restTimeBetweenSets: 90, // in seconds
  trainer: 'John Doe',
  gymLocation: 'FitLife Gym, 123 Main Street',

  // // Method to calculate total weight lifted for the workout
  // calculateTotalWeight: function () {
  //   let totalWeight = 0;
  //   this.exercises.forEach((exercise) => {
  //     if (exercise.weight) {
  //       totalWeight += exercise.sets * exercise.reps * exercise.weight;
  //     }
  //   });
  //   return totalWeight;
  // },

  // // Method to display workout summary
  // displayWorkoutSummary: function () {
  //   console.log(`Workout Name: ${this.name}`);
  //   console.log(`Duration: ${this.duration} minutes`);
  //   console.log('Exercises:');
  //   this.exercises.forEach((exercise) => {
  //     if (exercise.weight) {
  //       console.log(
  //         `${exercise.name}: ${exercise.sets} sets of ${exercise.reps} reps @ ${exercise.weight}kg`
  //       );
  //     } else {
  //       console.log(
  //         `${exercise.name}: ${exercise.sets} sets for ${exercise.duration} seconds`
  //       );
  //     }
  //   });
  //   console.log(`Total Weight Lifted: ${this.calculateTotalWeight()} kg`);
  //   console.log(`Trainer: ${this.trainer}`);
  //   console.log(`Location: ${this.gymLocation}`);
  // },
};

function printProperties(obj) {
  for (property of Object.values(obj)) {
    console.log(property);
  }
}

// printProperties(workoutRoutine);

const name = { first: 1, last: 2 };

function count(value) {
  // first
  if (name.hasOwnProperty(value)) {
    name[value] = name[value] + 1;
  } else {
    name[value] = 1;
  }
}

count('last');
count('last');
count('last');
count('first');

// console.log(name);

const abc = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};

// const a = []
console.log(`The next is the unavailable value ${abc['123']}`);

// printABC(abc);
function printABC(abc) {
  const entries = Object.entries(abc);

  for (const [team, odd] of entries) {
    console.log(team, odd);
  }
}

// const newSet = new Set([1, 2, 3, 4, 5]); // iterator is required to ceate new Set
// newSet.add(5); // add element at the end
// newSet.delete(4); // delete any element
// newSet.has(5); // chech if it has?
// newSet.size;
// // newSet.clear();

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5, 4, 3, 2, 1, 2, 34, 54, 5];

// const newArray = [...new Set(arr1)]; // removing duplicates from an array

const chainMap = new Map()
  .set('name', 'John')
  .set('age', 30)
  .set('job', 'Engineer');

chainMap.set(1, 'Software Engineer');

console.log(chainMap);

const str = 'this_name';
console.log(str.replace('t', 'T'));
// console.log()
const splitted = str.split('_'); // this, name
console.log(splitted.join(''));
