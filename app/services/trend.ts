const { subDays, format } = require('date-fns');

export interface Trend {
  id: string;
  language?: string;
  owner?: any;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: number;
}

export async function fetchTrend(page_size: number, last_n_day: number) {
  const url = `https://api.github.com/search/repositories?` +
    `sort=stars` +
    `&order=desc` +
    `&per_page=${page_size}` +
    `&q=created%3A>${format(subDays(new Date(), last_n_day), 'yyyy-MM-dd')}`;
  const headers = { Accept: 'application/vnd.github.v3+json' };

  const response = await fetch(url, { headers });
  if (response.status !== 200) {
    throw new Error(`Github API respond with ${response.status} for url ${url}`);
  }

  const data = await response.json();
  return data.items;
}
