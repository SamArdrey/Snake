* Overarching
  - Fix CSS
  - Show snake length at the top
  - Clean up dead code and console.logs
  - Make comments explicit
  - README BRUH

* Noise
  - Sound Effects
  - Music

* Collision
  <!-- -Collision with food...??? -->
  - Create Collision utility
  - Move collision functions from snake class to util
  - Figure out how to make the functions more generic to save space and allow for easier conversion between classic and battle royale mode

* Board
  - Migrate necessary functions over to collision and other objects

* Food
  <!-- -Only one ever in play -->
  <!-- -Random location generation -->
  <!-- - Draw -->
  - Change cheese to svg https://stackoverflow.com/questions/3768565/drawing-an-svg-file-on-a-html5-canvas

* Snake
  - Move middle function to setting or generic util file--this one only if I have a few other functions that I could move over

* Battle royale mode with computer?
  - Create a button or modal for switching between the two games
  - Create a snake subclass for computer
  - Make snake class interchangeable
  - Make game class interchangeable
  - Make food class interchangeable
  - Make collision utility interchangeable

* Misc ideas
  - Make walls loop back around so snake leaves right side, comes back left side
  - Random Colors for snake and snake food