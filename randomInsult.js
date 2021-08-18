 /**
  * * Random Insults
  */
 
 var randomBodyParts = ["Face", "Nose", "Hair", "Butt", "Neck", "Head",
"Arm", "foot"];
 var randomAdjectives = ["Smelly", "Boring", "Stupid", "Ugly", "Dumb", "Inane"];
 var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat", "Dog", "Pizza", "Cake", "Nut"];

 // Join random strings 
 var randomString = "Your " + pickRandomWord(randomBodyParts) + 
 " is like a " + pickRandomWord(randomAdjectives) + 
 " " + pickRandomWord(randomWords) + "!!!";

 // Enter randomString; in the console