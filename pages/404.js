import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useRouter from 'next/router';
const NotFound = () => {
  const [time, setTime] = useState(0);
  const timer = () => {
    if (time > 3) useRouter.push('/');
    setInterval(() => {
      setTime(time + 1);
    }, 1000);
  };
  useEffect(() => {
    timer();
    return () => null;
  }, [time]);
  return (
    <>
      <Head>
        <title>Ninja list | 404 Page </title>
      </Head>
      <div className='not-found'>
        <h1>Oops...</h1>
        <h2>The page is not found</h2>
        <p>Redirecting in {time} seconds </p>
        <p>
          Go back to home page
          <Link href='/'>
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
