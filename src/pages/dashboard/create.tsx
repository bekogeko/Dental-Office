import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import DashboardLayout from "~/components/dashboardLayout";

import { api } from "~/utils/api";

const Dashboard = () => {
  return <DashboardLayout className="p-2"></DashboardLayout>;
};

export default Dashboard;
