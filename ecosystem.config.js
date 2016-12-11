module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : "api",
      script    : "./bin/www",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "lichun",
      host : "wxminapp.com",
      ref  : "origin/master",
      ssh_options: "StrictHostKeyChecking=no",
      repo : "git@git.oschina.net:sampsonli/myserver.git",
      path : "/home/lichun/myproj/myserver",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js --env api"
    }
  }
}
