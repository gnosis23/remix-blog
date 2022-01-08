import React from 'react';
import Layout from '~/components/Layout';
import {LoaderFunction} from "remix";
import {useLoaderData} from "@remix-run/react";
import {fetchTrend} from "~/services/trend";
import type { Trend } from "~/services/trend";

export let loader: LoaderFunction = async () => {
  return await fetchTrend(30, 30);
};

export default function TrendPage() {
  const data = useLoaderData<Trend[]>();
  return (
    <Layout>
      <div className="space-y-2 mt-4">
        <h1 className="text-3xl">Month Popular Projects</h1>
        {data.map((item: Trend) => (
          <div key={item.id} className="space-y-2 py-2 rounded-md">
            <div className="title text-xl flex items-center text-sm">
              <div className="mr-4 px-2 rounded bg-blue-300 text-white text">{item?.language ?? 'Other'}</div>
              <a href={item?.owner?.html_url} target="_blank noopener" rel="noreferrer" className="text-xl text-blue-400">
                {item.owner?.login}
              </a>
              <span className="mx-2 text-blue-300">/</span>
              <a href={item.html_url} target="_blank" rel="noreferrer" className="text-xl text-blue-500">
                {item.name}
              </a>
            </div>
            <div className="text-gray-600 text-sm">{item.description}</div>
            <div className="date text-gray-400 text-sm font-medium">🌟 {item.stargazers_count}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
