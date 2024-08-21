import { cn, formatDateTime } from "@/lib/utils";

interface ValueChange {
  field: string;
  oldValue: string;
  newValue: string;
}
export interface Timeline {
  id: string;
  date: Date;
  author: string;
  title: string;
  code: string;
  description: string;
  values?: ValueChange[];
}
interface TimelineProps {
  items?: Timeline[];
}
interface ColorStatusMap {
  [key: string]: "bg-primary" | "bg-green-500" | "bg-gray-200";
}
const colorStatusMap: ColorStatusMap = {
  DELIVERED: "bg-primary",
  ISSUED: "bg-primary",
  ALLOCATED: "bg-green-500",
  HANDOVER: "bg-gray-200",
  MOVED_FROM: "bg-green-500",
  MOVED_TO: "bg-green-500",
};
export function Timeline({ items }: TimelineProps) {
  if (items?.length === 0)
    return <div className="text-center">No history found</div>;
  return (
    <ol className="relative border-s border-gray-200 ">
      {items?.map((item) => (
        <li key={item.id} className="mb-5 ms-4">
          <div
            className={cn(
              "absolute w-3 h-3  bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 ",
              colorStatusMap?.[item.code]
            )}
          ></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.author} {item && item.date && formatDateTime(item.date)}
          </time>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            {/* {item.description} */}
            {item && item.values ? (
              <ul className="space-y-1 my-2">
                {item.values.map((value) => (
                  <li>
                    {value.oldValue} ={">"} {value.newValue} ({value.field}){" "}
                  </li>
                ))}
              </ul>
            ) : (
              item.description
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}
