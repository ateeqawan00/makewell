module.exports = {
  apps: [
    {
      name: "makewell-backend",
      script: "index.js", // Assuming index.js is in the same directory
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
