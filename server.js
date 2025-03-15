import express from "express";
import cors from "cors";

/* ## VARIABLES ## */
const app = express();
const port = 3003;
const N_NUMBERS = 17;

/* ## MIDDLEWARE (Locations allowed to talk to server/"us") ## */
const origins = [
  /https?:\/\/localhost(:\d+)?/,
  "https://www.google.com",
  /https:\/\/([a-zA-Z0-9-]+\.)*vccs\.edu/,
  /https:\/\/zaefe\.github\.io/,
  "https://zaefe.github.io/client-side-demos/demos-projects/local_fetch/",
];
const corsOpts = {
  origin: origins,
};

app.use(cors(corsOpts));

/*## FUNCTIONS ##*/
function getRandom() {
  //rand from 0 to 100
  return Math.floor(Math.random() * 101);
}

/* #LearningNote# This returns JSON data NOT HTML! */
app.get("/", (req, res) => {
  res.json(Array.from({ length: N_NUMBERS }, getRandom));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
