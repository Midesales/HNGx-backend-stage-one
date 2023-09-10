const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/endpoint', (req, res) => {
  const midewears02 = req.query.midewears02;
  const track = req.query.Backend;

  // Get the current day of the week in full format
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time within a +/-2 minute window
  const now = new Date();
  const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() - 120) * 60000).toISOString();

  // Replace with your GitHub repository and file name
  const githubRepoURL = "https://github.com/username/repo";
  const githubFileURL = `${githubRepoURL}/blob/main/file_name.ext`;

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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});