import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import DashboardLayout from "~/components/dashboardLayout";

const Dashboard = () => {
  return <DashboardLayout></DashboardLayout>;
};

export default Dashboard;
