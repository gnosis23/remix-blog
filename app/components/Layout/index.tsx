import React from 'react';
import { Link } from 'remix';

export interface LayoutProps {
  highlight?: boolean;
  children: any;
}

export default function Layout(props: LayoutProps) {
  const { highlight = false, children } = props;
  return (
    <div>
      <div className="relative py-6 w-full px-4 min-h-screen main">
        <div className="flex justify-between flex-wrap items-center">
          {highlight ? (
            <h1 className="text-red-300 text-2xl mr-8">简单的小站</h1>
          ) : (
            <h1 className="text-red-300 text-2xl mr-8"><Link to="/">简单的小站</Link></h1>
          )}
          <div className="space-x-6 my-2">
            <Link to="/">资源</Link>
            <Link to="/trend">趋势</Link>
            <Link to="/about">关于我</Link>
          </div>
        </div>
        {children}
      </div>
      <footer>
        <div className="text-center">这是预留的底部</div>
      </footer>
    </div>
  )
}
