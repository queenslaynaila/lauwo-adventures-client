const siteUrl = "https://lauwo-adventures-client.vercel.app/";
module.exports = {
  siteUrl ,
  exclude: ['/admin'],
  generateRobotsTxt: true,
  robotsTxtOptions:{
     policies:[
      {userAgent:"*",disallow:"/admin"},
      {userAgent:"*",allow:"/"},
     ]
  },
  sourceDir: './build',
  
};
