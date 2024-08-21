  import { Summary } from "@/types";
  import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
 
  const initialValues = [
    {
      name: "JAN",
      total: 400,
    },
    {
      name: "FEB",
      total: 330,
    },
    {
      name: "MAR",
      total: 530,
    },
    {
      name: "APR",
      total: 100,
    },
    {
      name: "MAY",
      total: 10,
    },
    {
      name: "JUN",
      total: 150,
    },
    {
      name: "JUL",
      total: 10,
    },
    {
      name: "AUG",
      total: 45,
    },
    {
      name: "SEP",
      total: 90,
    },
    {
      name: "OCT",
      total: 400,
    },
    {
      name: "NOV",
      total: 300,
    },
    {
      name: "DEC",
      total: 120,
    },
  ];
   interface OverviewProps {
    data?: Summary[];
  }
 
  export function ContractByMonth() {
  //   const dataSource = [...initialValues, ...(data || [])];
    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={initialValues}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
              tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="total" fill="#FACC15" radius={[4, 4, 0, 0]} className="fill-primary" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
