import { Laptop, Monitor, Package, Printer } from "lucide-react";
import { Outlet } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NumberCard } from "../contract/components/NumberCard";
import { ContractByMonth } from "./ContractByMonth";
import { TopSuppliers } from "./TopSuppliers";

interface DataMap {
  [key: string]: number;
}
export function ConstractDashboard() {
  return <div></div>;
  // <div className="flex-1 space-y-4 p-8 pt-6">
  //   <div className="flex items-center justify-between space-y-2">
  //     <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
  //   </div>
  //   <div></div>
  //   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  //     <NumberCard label="Expire in 30 days" value={10} icon={<Monitor />} className="bg-destructive text-destructive-foreground hover:bg-destructive/90" />
  //     <NumberCard label="Expire in 60 days" value={30} icon={<Laptop />} className="bg-yellow-500"  />
  //     <NumberCard label="Expire in 90 days" value={100} icon={<Printer />} />
  //     <NumberCard label="Expire in 120 days" value={100} icon={<Package />} />
  //   </div>
  //   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  //     <NumberCard label="Total Quatations" value={50000} icon={<Monitor />}  />
  //     <NumberCard label="Expired Quatations" value={300} icon={<Laptop />}  />
  //     <NumberCard label="Completed Quatations" value={100} icon={<Printer />} />
  //     <NumberCard label="Expire in 120 days" value={100} icon={<Package />} />
  //   </div>
  //   <div className="grid  gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
  //     <Card className="col-span-4">
  //       <CardHeader>
  //         <CardTitle>Quatations By Month</CardTitle>
  //       </CardHeader>
  //       <CardContent className="pl-2">
  //        <ContractByMonth />
  //       </CardContent>
  //     </Card>
  //     <Card className="col-span-3">
  //       <CardHeader>
  //         <CardTitle>Top performing Suppliers</CardTitle>
  //       </CardHeader>
  //       <CardContent className="pl-4">
  //         <TopSuppliers />
  //       </CardContent>
  //     </Card>
  //   </div>
  //   <Outlet />
  // </div>
}
