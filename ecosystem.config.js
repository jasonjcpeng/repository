module.exports = {
  apps: [{
    name: 'repository',
    script: './server/app.js',
    exec_mode: "cluster",
    instances: 4,
    watch: false,
    autorestart: true,
    max_memory_restart: '1G',
    merge_logs: true,
    output: './logs/terminal/out.log',
    error: './logs/terminal/error.log',
    log: './logs/terminal/combined.log',
    instance_var: "INSTANCE_ID",
    env: {
      NODE_ENV: process.env.NODE_ENV
    }
  }],
};
