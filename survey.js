const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question('What is your name? ', (answer) => {
  profile.name = answer;
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's an activity you like doing? ", (answer) => {
    profile.activity = answer;
    console.log(`Wow, ${answer} sounds like fun!`);

    rl.question("What do you listen to while doing that? ", (answer) => {
      profile.music = answer;
      console.log(`${answer} is a great answer, you have great taste!`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
        profile.meal = answer;
        console.log(`Cool!`);
  
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.food = answer;
          console.log(`Yum!`);
    
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile.sport = answer;
            console.log(`Fun!`);
      
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile.superpower = answer;
              console.log(`Wicked!`);
              console.log(`${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.food} for ${profile.meal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superpower}.`)
              rl.close();
              
            });
            
          });
          
        });
        
      });
      
    });
  
  });
  
});

