import express from 'express';
const app = express();

app.get('/api', (req, res) => {
  // Check if slack_name and track parameters are missing
  if (!req.query.slack_name || !req.query.track) {
    return res.status(400).json({ error: 'slack_name and track are required' });
  }

  const slack_name = req.query.slack_name;
  const track = req.query.track;

  // Get the current UTC time
  const now = new Date();

  // Calculate a random offset within +/-2 minutes in milliseconds
  const offset = (Math.random() * 4 - 2) * 60 * 1000;

  // Apply the offset to the current time
  const utcTime = new Date(now.getTime() + offset);

  // Format the UTC time string as specified
  const formattedUtcTime = `${utcTime.getUTCFullYear()}-${String(utcTime.getUTCMonth() + 1).padStart(2, '0')}-${String(utcTime.getUTCDate()).padStart(2, '0')}T${String(utcTime.getUTCHours()).padStart(2, '0')}:${String(utcTime.getUTCMinutes()).padStart(2, '0')}:${String(utcTime.getUTCSeconds()).padStart(2, '0')}Z`;

  // Get the current day of the week in full format
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[utcTime.getUTCDay()];

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
