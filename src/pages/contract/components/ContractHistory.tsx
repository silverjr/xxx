import { Timeline } from "@/components/timeline";

const constractHistory: Timeline[] = [
  {
    id: "11",
    date: new Date(),
    author: "RM arusha",
    title: "Closure Rejected",
    code: "Draft",
    description: "",
  },
  {
    id: "10",
    date: new Date(),
    author: "Silvester Ntunga",
    title: "Quatation closure rejected",
    code: "Draft",
    description: "Kindly upload more attachment!!",
  },
  {
    id: "12",
    date: new Date(),
    author: "Silvester Ntunga",
    title: "Quatation closure submitted",
    code: "Draft",
    description: "",
  },
  {
    id: "1",
    date: new Date(),
    author: "Silvester Ntunga",
    title: "Extend contract completion date",
    code: "Draft",
    description: "Update description",
    values: [
      {
        field: "Name",
        oldValue: "Silvester Ntunga",
        newValue: "Zahoro zahoro",
      },
      {
        field: "Phone",
        oldValue: "+255767121212",
        newValue: "+255787121212",
      },
    ],
  },
  {
    id: "2",
    date: new Date(),
    author: "Leonald Zahoro",
    title: "Update contract expiration date",
    code: "Draft",
    description: "Update contract expiration date",
    values: [
      {
        field: "Description",
        oldValue: "Supply of kycore",
        newValue: "Supply of macbook",
      },
      {
        field: "Phone",
        oldValue: "+255767121212",
        newValue: "+255787121212",
      },
    ],
  },
  {
    id: "3",
    date: new Date(),
    author: "Emmanuel Chanila",
    title: "Add a new team member",
    code: "Draft",
    description: "Update contract expiration date",
    values: [
      {
        field: "Description",
        oldValue: "Supply of kycore",
        newValue: "Supply of macbook",
      },
      {
        field: "Phone",
        oldValue: "+255767121212",
        newValue: "+255787121212",
      },
    ],
  },
];
export function ContractHistory() {
  return <Timeline items={constractHistory} />;
}
