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
];

const answers = [];

const zip = (ks, vs) => {
  const obj = {};
  for (let i = 0; i < ks.length; i++) {
    obj[ks[i]] = vs[i];
  }
  return obj;
}

const askQuestion = (context, array) => {
  const head = array[0];
  if (head) {
    const tail = array.slice(1);
    context.question(head + " -> ", ans => {
      answers.push(ans);
      askQuestion(context, tail);
    });
  } else {
    context.close();
    console.log('Thank you for the feedback!');
    console.table(zip(questions, answers));
    return;
  }
};

askQuestion(rl, questions);