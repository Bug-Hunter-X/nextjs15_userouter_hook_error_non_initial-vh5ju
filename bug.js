```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the About page is visited directly,
  // as the useRouter hook will not be available in the initial render.
  //const router = useRouter();

  // Instead of trying to use the router inside this page,
  // we can fetch data using getServerSideProps.
  // This way, data will be fetched before the page is rendered.

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```