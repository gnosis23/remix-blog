import type {LoaderFunction} from "remix";
import {useLoaderData} from "@remix-run/react";
import Layout from "~/components/Layout";
import {getAllArticles, Post} from "~/services/post";

export let loader: LoaderFunction = async () => {
  const data: Post[] = await getAllArticles();
  return data;
};

export default function Index() {
  const allArticles = useLoaderData<Post[]>();
  return (
    <Layout highlight>
      <div className="space-y-4 mt-4">
        <h1 className="text-3xl">文章分享</h1>
        {allArticles.map(item => (
          <div key={item.no} className="">
            <div className="title text-xl">
              <a href={item.url} target="_blank" rel="noreferrer" className="text-lg text-red-400">
                <span className="mr-2">{item.no}:</span>
                {item.title}
              </a>
            </div>
            <div className="text-gray-600 text-sm">{item.description}</div>
            <div className="date text-gray-400 text-sm font-medium">{item.date}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
