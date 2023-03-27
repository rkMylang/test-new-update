import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import getDeployments from "@/pages/api/get-deployments";
// import { Octokit } from 'octokit';

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   let envVariables = {
  //     "curVersion": process.env.CURRENT_VERSION,
  //     "latestVersion": process.env.LATEST_VERSION,
  //     "appName": process.env.APP_NAME,
  //     "projectId": process.env.PROJECT_ID,
  //     "bearerToken": process.env.VERCEL_TOKEN,
  //     "verceGitCommitSha": process.env.VERCEL_GIT_COMMIT_SHA
  //   }
    // const config = {
    //   method: `get`,
    //   url: `https://api.vercel.com/v6/deployments?app=${process.env.APP_NAME}&limit=5&projectId=${process.env.PROJECT_ID}&state=ready&target=production`,
    //   headers: {
    //     "Authorization": `Bearer ${process.env.VERCEL_TOKEN}`
    //   }
    // };

    // fetch("https://api.vercel.com/v6/deployments", config).then((result) => {
    //   return result.json()
    // })
    // .then((data) => {
    //   console.log(data);
    //   const isLatestVersion = envVariables.verceGitCommitSha === data?.deployments[0]?.meta?.githubCommitSha;
    //   !isLatestVersion && alert("New Version Available! Please Reload the page...");
    // })
    // .catch((err) => {
    //   console.error(err);
    // });

    // Octokit.js
// https://github.com/octokit/core.js#readme
// const helperFunc = async () => {
//   const octokit = new Octokit({
//     auth: process.env.GITHUB_TOKEN
//   })
  
//   const res = await octokit.request('GET /repos/{owner}/{repo}/deployments', {
//     owner: 'rkMylang',
//     repo: 'test-new-update',
//     headers: {
      
//       "Access-Control-Allow-Origin": "*",
//       'X-GitHub-Api-Version': '2022-11-28'
//     },
//     ref: process.env.VERCEL_GIT_COMMIT_SHA || undefined,
//     environment: "production",
//     per_page: 1
//   })

//   const data = res.data;
//   console.log(data);
//   return Promise.resolve(data);
// }
// console.log(helperFunc());


//     setInterval(() => {
//       console.log("Cur Git SHA: ", process.env.VERCEL_GIT_COMMIT_SHA || "sha-not-found");
//     }, 5000);
//   }, [])
  

  return <Component {...pageProps} />
}
