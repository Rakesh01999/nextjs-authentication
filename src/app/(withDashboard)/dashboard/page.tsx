import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  // Redirect to login if no session
  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To Dashboard Page, {session.user.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged in user email: {session.user.email}
          </h1>
          {session.user.image && (
            <Image
              src={session.user.image}
              width={200}
              height={200}
              alt="User profile"
              className="mx-auto rounded-full mt-6"
            />
          )}
        </>
      )}
    </div>
  );
};

export default DashboardPage;
