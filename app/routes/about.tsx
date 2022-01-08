import React from 'react';
import Layout from '~/components/Layout';
import me from '~/assets/me.png';

export default function AboutPage() {
  return (
    <Layout>
      <div className="space-y-2 mt-4">
        <div className="text-center">
          <img src={me} alt="" className="rounded-lg" />
        </div>
        <p>你可以通过以下方式联系我:)</p>
        <ul>
          <li>
            <span className="text-blue-300 mr-4 w-24 inline-block text-right">Email:</span>
            <a href="mailto:bj050323@gmail.com">bj050323@gmail.com</a>
          </li>
          <li>
            <span className="text-green-300 mr-4 w-24 inline-block text-right">Github:</span>
            <a href="https://github.com/gnosis23">gnosis23</a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
