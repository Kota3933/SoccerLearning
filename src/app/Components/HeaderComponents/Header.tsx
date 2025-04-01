import Link from 'next/link';

import SearchBar from './SearchBar';
//import NewRegistration from './NewRegistration'
// import Login from './Login';

function Header(){
  return (
    <header className="bg-white text-[#4F772D] py-4 shadow-md">
      <div className=" flex  items-center px-16">
        <h1 className="text-xl font-bold ">
          <Link href="/">Soccer Learning</Link>
        </h1>

        <h2 className='text-xl font-bold px-12'>
          <Link href="/">Category</Link> 
        </h2>
        <div>
          <SearchBar />
        </div>
        <nav>
          <ul className="flex space-x-8 ml-195">
            <li>
              <Link href="/URL" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/URL" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/URL" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>

      </div>

    </header>
  );
};

export default Header;

