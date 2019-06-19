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
    output: './logs/pm2/out.log',
    error: './logs/pm2/error.log',
    log: './logs/pm2/combined.log.log',
    env: {
      NODE_ENV: 'production'
    }
  }],
};
