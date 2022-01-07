export type Post = {
  no: string;
  url: string;
  title: string;
  description?: string;
  date: string;
};

const getArticles = (data: { body: string }[]) => {
  let rawTextList: string[] = [];

  data.forEach(item => {
    let text = item.body.split('\r\n');
    rawTextList = rawTextList.concat(text);
  });

  const regExp = /(\d{4}-\d{2}-\d{2}).+\[(\d+): (.+)]\((.+)\)(.*)/
  rawTextList = rawTextList.filter(x => regExp.test(x));

  const list = rawTextList.map(text => {
    const strs = text.match(regExp);
    // @ts-ignore
    return { date: strs[1], no: strs[2], title: strs[3], url: strs[4], description: strs[5] };
  });

  list.sort((a, b) => +b.no - +a.no);
  return list;
};

export async function getAllArticles() {
  const data = await fetch('https://api.github.com/repos/gnosis23/hello-world-blog/issues/6/comments', {
    headers: {
      "Accept": "application/vnd.github.v3+json"
    }
  }).then(res => res.json())

  return getArticles(data);
}
