/* Where your experiment parameters will be declared. This JS file will need to be
imported before your other JS files containing your functions, especially if those
functions rely on these variables as globals. */

const IS_RUN_PRACTICE = true;
const IS_RUN_TRAIN = true;

// experiment parameters
const KEYS = [74,75,76]; // numeric codes for j,k,l
const SETSIZES =[2,3,4,5,6];
const NUM_BLOCKS = 23;
// const NUM_STIM_REPS = 13;
const NUM_CONDS = 10;
const FOLDERS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]; // names of your image folders

// trial timing and timeout parameters
let FB_DUR = 500; // feedback duration
let TRIAL_DUR = 2000; // trial duration before timeout
let FIX_DUR = 500;
const imgP = 'static/img/';

// feedback/timeout messages
const TO_MSG = '<div class="exp"><p class="center fb">You took too long to respond!</p></div>';
const COR_FB = '<div class="exp"><p class="center fb cor">+1</p></div>';
const INCOR_FB = '<div class="exp"><p class="center fb incor">0</p></div>';

const PRAC_COR_FB = '<div class="exp"><p class="center praccor fb">CORRECT KEY!</p></div>';
const PRAC_INCOR_FB = '<div class="exp"><p class="center pracincor fb">WRONG KEY! <br><br> try a different key! </p></div>';

const CONTINUE = '<p class="continue">[Press SPACE to continue]</p>'; // instruction page footer
const END_LINK = "http://ucbpsych.qualtrics.com/jfe/form/SV_cZqzukGcYdKQOHQ" // if participants need to be redirected to a page to obtain credit

// string array of all img files, each element is the path of an img to import
// this is used for preloading
const IMGS = [];
for (f = 0; f < FOLDERS.length; f++) {
  for (i = 1; i < 7; i++) {
    IMGS.push(`${imgP}images${FOLDERS[f]}/image${i}.jpg`);
  }
}
console.log(IMGS);

// this is a fixation trial
let fixation = ({
    type: "html-keyboard-response",
    stimulus: "<div class='exp'><p class='fix center'>+</p></div>",
    choices: jsPsych.NO_KEYS,
    trial_duration: FB_DUR,
  })
