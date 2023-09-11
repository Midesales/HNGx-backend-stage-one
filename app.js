import express from 'express'
const app = express();


app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  // Calculate a random offset within +/-2 minutes in milliseconds
  const offset = (Math.random() * 4 - 2) * 60 * 1000;

  // Apply the offset to the current time
  const utcTime = new Date(now.getTime() + offset);

  // Format the UTC time string
  const formattedUtcTime = utcTime.toISOString().slice(0, -1) + 'Z';

  // Get the current day of the week in full format
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[now.getUTCDay()]
  // Replace with your GitHub repository and file name
  const githubRepoURL = "https://github.com/Midesales/Zuri-backend-stage-one";
  const githubFileURL = `https://github.com/Midesales/Zuri-backend-stage-one/blob/master/app.js`;

  // Create the response JSON object
  const responseObject = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: formattedUtcTime,
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
