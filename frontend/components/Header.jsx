import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="py-5 bg-slate-300 flex flex-row-reverse">
      <Link href={'/'}>
        <h1 className="mr-4 text-blue-700 font-bold text-5xl">אור-מיכאל</h1>
      </Link>
    </div>
  );
};

export default Header;
