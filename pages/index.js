export default function Home() {
  return (
    <>
      <p>{process.env.SECRET}</p>
      <p>{process.env.NEXT_PUBLIC_SECRET}</p>
    </>
  );
}
