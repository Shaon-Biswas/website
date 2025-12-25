import React from 'react'
import { useState, useEffect } from "react";

async function getLeetCodeData() {
  try {
    const data = await fetch("https://leetscan.vercel.app/Shaon_Biswas")
      .then((response2) => response2.json())
      .then((leetdata) => {
        return leetdata;
      });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getHackerRankData() {
  try {
    const data = await fetch(
      "https://hackerrank-star-scraper.vercel.app/profile/shaonbiswas900"
    )
      .then((response2) => response2.json())
      .then((hackerRankData) => {
        return hackerRankData;
      });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getGitHubData() {
  try {
    const data = await fetch("https://api.github.com/users/Shaon-Biswas")
      .then((response1) => response1.json())
      .then((gitdata) => {
        return gitdata;
      });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getData() {
  const githubData = getGitHubData();
  const leetcodeData = getLeetCodeData();
  const hackerRankData = getHackerRankData();

  const main_data = await Promise.all([
    githubData,
    leetcodeData,
    hackerRankData,
  ]);
  return {
    githubData: main_data.length !== 0 ? main_data[0] : null,
    leetcodeData: main_data.length > 1 ? main_data[1] : null,
    hackerRankData: main_data.length > 2 ? main_data[2] : null,
  };
}

function Profiles() {
  const [gitdata, setGitData] = useState(null);
  const [leetdata, setLeetData] = useState(null);
  const [hackerdata, setHackerData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((response) => {
        if (response.leetcodeData) {
          setLeetData(response.leetcodeData);
        }
        if (response.githubData) {
          setGitData(response.githubData);
        }
        if (response.hackerRankData) {
          setHackerData(response.hackerRankData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center bg-zinc-100 dark:bg-[#020817] w-full py-20 px-4">
      <h1 className="flex justify-center mt-8 mb-8 text-3xl md:text-5xl text-black dark:text-white font-bold p-8">Profiles</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 mx-4 w-full max-w-7xl mx-auto">
            <h1 className="flex justify-center items-center text-2xl md:text-3xl text-black dark:text-gray-500 font-bold mb-16">GitHub</h1>
            {gitdata ? (
              <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 mt-4">
                <img src={gitdata.avatar_url} alt="git picture" className="w-64" />
                <div className="grid grid-cols-1 gap-4 mt-2 list-none text-black dark:text-gray-500 text-xl">
                  <li>User Name: {gitdata.login}</li>
                  <li>Followers: {gitdata.followers}</li>
                  <li>Repo : {gitdata.public_repos}</li>
                  <li>
                    <a href="https://github.com/Shaon-Biswas" target="_blank" rel="noopener noreferrer" className="text-gray-500 bg-gray-700 dark:hover:bg-gray-400 transition-colors rounded-xl px-4 py-2 inline-block mt-2">
                      View Profile
                    </a>
                  </li>
                </div>
              </div>
            ) : (
              <p>No Data Found</p>
            )}
          </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 mx-4 w-full max-w-7xl mx-auto">
            <h1 className="flex justify-center items-center text-2xl md:text-3xl text-black dark:text-gray-500 font-bold mb-16">LeetCode</h1>
            {gitdata ? (
              <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 mt-4">
                <img src={gitdata.avatar_url} alt="git picture" className="w-64" />
                <div className="grid grid-cols-1 gap-4 mt-2 list-none text-black dark:text-gray-500 text-xl">
                  <li>User Name: {leetdata.username}</li>
                  <li>Rank: {leetdata.ranking}</li>
                  <li>Solved: {leetdata.totalSolved}</li>
                  <li>
                    <a href="https://leetcode.com/u/Shaon_Biswas/" target="_blank" rel="noopener noreferrer" className="text-gray-500 bg-black hover:text-white dark:hover:bg-gray-400 transition-colors rounded-xl px-4 py-2 inline-block mt-2">
                      View Profile
                    </a>
                  </li>
                </div>
              </div>
            ) : (
              <p>No Data Found</p>
            )}
          </div>
      )}
    </div>
  )
}

export default Profiles