module.exports = {
  apps: [
    {
      name: "react-app", // Name of the application
      script: "node_modules/react-scripts/scripts/start.js", // Script to start the React app
      watch: true, // Enable watching files for changes
      ignore_watch: [
        "node_modules", // Ignore changes in node_modules
        "logs", // Ignore changes in logs
        "build", // Ignore changes in build (if applicable)
      ],
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
