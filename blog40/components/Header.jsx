import React, { useState, useEffect } from 'react'

import Link from 'next/link';


import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
    
  }, []);
  


  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Ecole Ibnou Bajaa</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 cursor-pointer transition duration-500 transform hover:-translate-y-1 inline-block bg-orange-600 font-bold rounded-full px-2 py-1 ">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;

