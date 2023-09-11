import express from 'express'
const app = express();


app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week in full format
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time within a +/-2 minute window
  const now = new Date();
  const utcTime = now.toISOString();

  // Replace with your GitHub repository and file name
  const githubRepoURL = "https://github.com/Midesales/Zuri-backend-stage-one";
  const githubFileURL = `https://github.com/Midesales/Zuri-backend-stage-one/blob/master/app.js`;

  // Create the response JSON object
  const responseObject = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
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
