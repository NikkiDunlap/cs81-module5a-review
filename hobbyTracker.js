// Array of hobby tracking entries, each with day, hobby name, minutes spent, and mood
const hobbyLog = 
[
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// Function to calculate total minutes spent across all hobbies
function totalTime(log) 
{
  // Uses reduce to sum the 'minutes' values of each entry
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// Function to find all unique hobbies in the log
function uniqueHobbies(log) 
{
  // Uses map to extract the 'hobby' field from each entry
  const names = log.map(entry => entry.hobby);
  // Uses Set to remove duplicates and returns the result as an array
  return [...new Set(names)];
}

// Function to return only sessions longer than a given number of minutes
function longSessions(log, minMinutes) 
{
  // Uses filter to return entries where 'minutes' > minMinutes
  return log.filter(entry => entry.minutes > minMinutes);
}

// Function to count how many times a certain mood appears in the log
function countMood(log, moodType) 
{
  // Filters by moodType and returns the count of matching entries
  return log.filter(entry => entry.mood === moodType).length;
}

// Displays total minutes spent on hobbies
console.log("Total time spent:", totalTime(hobbyLog), "minutes");

// Lists all unique hobbies logged
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));

// Shows sessions longer than 30 minutes
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));

// Counts how many sessions were done while feeling "relaxed"
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// Additional test: count how many sessions were done while feeling "focused"
console.log("Focused sessions:", countMood(hobbyLog, "focused"));


// Suggestion for improvement: The function name 'countMood' could be renamed to 'countMoodOccurrences' for more clarity.
// It may also be helpful to generalize mood tracking with a function that returns all mood frequencies in an object.
