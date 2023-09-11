import express from 'express'
const app = express();


app.get('/api', (req, res) => {
  const midewears02 = req.query.midewears02;
  const track = req.query.backend;

  // Get the current day of the week in full format
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time within a +/-2 minute window
  const now = new Date();
  const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() - 120) * 60000).toISOString();

  // Replace with your GitHub repository and file name
  const githubRepoURL = "https://github.com/Midesales/Zuri-Backend/tree/master/stage-one";
  const githubFileURL = `https://github.com/Midesales/Zuri-Backend/blob/master/stage-one/app.js`;

  // Create the response JSON object
  const responseObject = {
    slack_name: midewears02,
    current_day: currentDay,
    utc_time: utcTime,
    track: "Backend",
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200
  };

  res.json(responseObject);
});

const port = 3000;



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
