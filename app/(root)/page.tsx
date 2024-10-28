import { signOut, auth } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold text-primary">Welcome Next.js 15</h1>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
        className="px-5 pt-24"
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};

export default Home;
