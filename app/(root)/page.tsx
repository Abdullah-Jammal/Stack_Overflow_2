import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  return (
    <>
      <h1 className="h1-bold text-primary">Welcome Next.js 15</h1>
    </>
  );
};

export default Home;
