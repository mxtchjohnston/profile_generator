const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  'What\'s your name? Nicknames are also acceptable :)',
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
]

const answers = [];

const ask = (context, q, next) => {
  context.question(q + ' -> ', (ans) => answers.push(ans));
  if (next > questions.length) ask(context, q[next], next++);
}

ask(rl, questions[0], 1);

console.log(answers);

rl.close();
