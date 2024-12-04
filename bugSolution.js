```javascript
// pages/about.js
import {getServerSideProps} from 'next';

export default function About({data}) {
  return (
    <div>
      <h1>About Page</h1>
      {data && <p>Data from getServerSideProps: {data.message}</p>}
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch data here using getServerSideProps to avoid using useRouter
  const data = { message: 'Data fetched from getServerSideProps' };
  return { props: { data } };
}
```