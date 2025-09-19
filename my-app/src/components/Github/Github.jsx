import React from "react";
import { useLoaderData } from "react-router-dom";

export async function githubInfoLoader() {
  const response = await fetch("https://api.github.com/users/octocat");
  if (!response.ok) {
    throw new Response("Failed to fetch GitHub user data", { status: response.status });
  }
  return response.json();
}

function Github() {
  const data = useLoaderData();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">GitHub User: {data.login}</h2>
      <img
        src={data.avatar_url}
        alt={data.login}
        width={150}
        className="mx-auto rounded-full mb-4"
      />
      <p className="text-gray-700">Followers: {data.followers}</p>
      <p className="text-gray-700">Following: {data.following}</p>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 hover:underline mt-2 inline-block"
      >
        Visit Profile
      </a>
    </div>
  );
}

export default Github;
