export default function Home({ secret }) {
  return (
    <>
      <p>{secret}</p>
      <p>{process.env.NEXT_PUBLIC_SECRET}</p>
    </>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {
      secret: process.env.SECRET,
    },
  };
}
