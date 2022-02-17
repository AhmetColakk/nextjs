import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useRouter from 'next/router';
const NotFound = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (time < 3) {
        setTime(time + 1);
      } else {
        useRouter.push('/');
      }
    }, 1000);
    return () => null;
  }, [time]);
  return (
    <>
      <Head>
        <title>Ninja list | 404 </title>
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
