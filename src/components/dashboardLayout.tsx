import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const DashboardLayout: NextPage<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const router = useRouter();
  const { data: sessionData, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.back();
    },
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (sessionData.user.email !== "gulestanbekir@gmail.com") {
    router.back();
  }

  const currentPath = router.pathname;

  return (
    <div className="flex h-screen ">
      <div className="flex w-48 flex-shrink-0 flex-col gap-y-2 bg-gray-800 px-4 pt-12 text-white">
        <Link
          href={"/dashboard"}
          className={`rounded p-2 ${
            currentPath === "/dashboard" ? "bg-gray-600" : "bg-gray-700"
          } `}
        >
          Home
        </Link>
        <Link
          href={"/dashboard/create"}
          className={`rounded p-2 ${
            currentPath === "/dashboard/create" ? "bg-gray-600" : "bg-gray-700"
          } `}
        >
          Create order
        </Link>
        <div className="rounded bg-gray-700 p-2">Doctors</div>
        <div className="rounded bg-gray-700 p-2">Orders</div>
      </div>
      <div className="flex flex-grow flex-col bg-gray-100">
        <div className="flex h-16 flex-grow-0 items-center justify-end bg-gray-800">
          {/* sign out button */}
          <button
            className="rounded-md bg-gray-700 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={() => void signOut({ callbackUrl: "/" })}
          >
            Sign out
          </button>
        </div>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
