/* createInstruction builds the sequence of your instructions. each instruction slide
is an object to be pushed to the timeline. You'll mainly have to replace the value for
the stimulus property. The type will be "html-button-response" if you're using a button
or "html-keyboard-response" for keys. Check jsPsych to see more configurations. */

const createInstructions1 = function() {
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>In this experiment, you will see a series of images on the screen.<br><br>
  Please respond to each image by pressing one of the three buttons on the keyboard,
  J, K, or L, with your dominant hand.
  </p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>For each image, there is a button that gives you points. <br><br>
Your goal is to figure out which button makes you win for each image. <br><br>
You will have a couple seconds to respond.<br><br>
Please respond to every image as quickly and accurately as possible.<br><br>
If you do not respond, the trial will be counted as a loss.
</p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>If you select the correct button, you will gain <span style="color:green;">+1</span> point. <br><br>
If you select the incorrect key or do not respond, you will earn <span style="color:red;">0</span> points.
</p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>Push the space bar to try this task out with two images. <br><br>
Remember to respond with the J, K, or L keys.
</p></div>`+CONTINUE,
  choices: [32],
});
// timeline.push({
//   type: "html-keyboard-response",
//   stimulus: `<div class='center'><p>The correct action for each image will stay the same for a while.<br><br>
// But after a while, the correct action for an image can change.<br><br>
// You'll need to figure out again what the new correct action is!
// </p></div>`+CONTINUE,
//   choices: [32],
// });
// timeline.push({
//   type: "html-keyboard-response",
//   stimulus: `<div class='center'><p>
// There are XX blocks. <br><br>
// At the beginning of each block, you will be shown the set of images for that block.<br><br>
// Some blocks will have more images than others, but your goal is always the same. <br><br>
// You can take a short break between each block.
// </p></div>`+CONTINUE,
//   choices: [32],
// });
// timeline.push({
//   type: "html-keyboard-response",
//   stimulus: `<div class='center'><p>Remember the following important rules:<br><br>
// 1. At any given time, there is ONLY ONE correct response for each image.<br><br>
// 2. Within each block, the correct response for each image WILL CHANGE.
// After you gain points for an image multiple times, you will have to find the new key to press to win again.<br><br>
// 3. One response button MAY be correct for multiple images, or not be correct for any image.
// </p></div>`+CONTINUE,
//   choices: [32],
// });
}

const createInstructions2 = function() {
  timeline.push({
  type: "html-keyboard-response",
  on_start: trial => { // save data from previous practice block (block 1)
    let toSave = jsPsych.data.get().filter({block: 1});
    let blockFileName = `${file_name}_block_1`;
    save_data_csv(blockFileName, toSave);
  },
  stimulus: `<div class='center'><p>Great job! <br><br>
  Now the task is going to get a little harder.
  </p></div>`+CONTINUE,
  choices: [32],
});
  timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>Before, the correct action for each image stayed the same.<br><br>
Now, the correct action for an image can change after a while.<br><br>
When that happens, you'll need to figure out what the new correct action is!
</p></div>`+CONTINUE,
  choices: [32],
});
  timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>Push the space bar to try this task out with one image. <br><br>
Remember to respond with the J, K, or L keys.
</p></div>`+CONTINUE,
  choices: [32],
});
}

const createInstructions3 = function() {
  timeline.push({
  type: "html-keyboard-response",
  on_start: trial => { // save data from previous practice block (block 2)
    let toSave = jsPsych.data.get().filter({block: 2});
    let blockFileName = `${file_name}_block_2`;
    save_data_csv(blockFileName, toSave);
  },
  stimulus: `<div class='center'><p>Great job! You have completed the practice section. <br><br>
  You will now begin the task.
</p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>
There are 16 blocks. <br><br>
At the beginning of each block, you will be shown the set of images for that block.<br><br>
Some blocks will have more images than others, but your goal is always the same. <br><br>
You can take a short break between each block.
</p></div>`+CONTINUE,
  choices: [32],
});
timeline.push({
  type: "html-keyboard-response",
  stimulus: `<div class='center'><p>Remember the following important rules:<br><br>
1. At any given time, there is ONLY ONE correct response for each image.<br><br>
2. Within each block, the correct response for each image WILL CHANGE.
After you gain points for an image multiple times, you will have to find the new key to press to win again.<br><br>
3. One response button MAY be correct for multiple images, or not be correct for any image.
</p></div>`+CONTINUE,
  choices: [32],
});
}
