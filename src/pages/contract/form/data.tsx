import { Option } from "@/components/form";
import { TContractDetail } from "../schema";

export const suppliers: Option[] = [
  {
    value: "1",
    label: "Softnet Technologies",
  },
  {
    value: "2",
    label: "Kichecko Tanzania",
  },
];

export const categories: Option[] = [
  {
    value: "1",
    label: "Works",
  },
  {
    value: "2",
    label: "Goods",
  },
  {
    value: "3",
    label: "Consultant",
  },
  {
    value: "4",
    label: "Non Consultant",
  },
];

export const types: Option[] = [
  {
    value: "1",
    label: "Framework",
  },
  {
    value: "2",
    label: "Lump sum",
  },
];

export const status: Option[] = [
  {
    value: "1",
    label: "Completed",
  },
  {
    value: "2",
    label: "In progress",
  },
];

export const contractManagers: Option[] = [
  {
    value: "1",
    label: "Salum Chuma",
  },
  {
    value: "2",
    label: "Charles Mtove",
  },
];
export const currencies: Option[] = [
  {
    value: "1",
    label: "Tanzanian Shillings",
  },
  {
    value: "2",
    label: "USD",
  },
];

export const taxRegions: Option[] = [
  {
    value: "1",
    label: "TRA HQ",
  },
  {
    value: "2",
    label: "ARUSHa",
  },
];
export const evalutions: Option[] = [
  {
    value: "1",
    label: "Weekly",
  },
  {
    value: "2",
    label: "Monthly",
  },
  {
    value: "3",
    label: "Quartely",
  },
];
export const constractList: TContractDetail[] = [
  {
    id: "1",
    number: "Dodoma",
    description: "Supply of fuel and lubricants for TRA Motorized Equipments",
    category: "SILVESTER NTUNGA",
    type: "Lump sum",
    amount: 50000,
    taxRegion: "HQ",
    vendor: "123Gdd t",
    contractStartDate: "01 January 2024",
    contractDuration: "3 years",
    contractEndDate: "20 March 2024",
    expireIn: "MayFair Insurance",
    hasExpired: true,
    signStartDate: "01 January 2024",
    signEndDate: "01 January 2027",
    guaranteeStartDate: "01 January 2027",
    guaranteeEndDate: "01 January 2024",
    currency: "TZS",
    contractManager: "Charles Mtove",
    statusCode: "DRAFT",
    statusName: "DRAFT",
    taxRegionName: "120,000.00"
  },
  {
    id: "2",
    number: "DSM",
    description: "Supply of Calendar",
    category: "KUSEKWA NYANDA",
    type: "Lump sum",
    amount: 50000,
    taxRegion: "HQ",
    vendor: "M/s Jamana Printers Limited",
    contractStartDate: "01 January 2024",
    contractDuration: "3 years",
    expireIn: "01 January 2027",
    contractEndDate: "01 January 2027",
    signStartDate: "01 January 2024",
    signEndDate: "01 January 2027",
    guaranteeStartDate: "01 January 2027",
    guaranteeEndDate: "01 January 2024",
    currency: "TZS",
    contractManager: "Charles Mtove",
    statusCode: "PENDING_REVIEW",
    statusName: "Pending review",
    taxRegionName: "HQ"
  },
  {
    id: "5",
    number: "DSM-LALA",
    description: "Supply of Kyocera printer",
    category: "SYLIVESTER G",
    type: "Lump sum",
    amount: 50000,
    taxRegion: "HQ",
    vendor: "Softnet Technologies",
    contractStartDate: "01 January 2024",
    contractDuration: "3 years",
    expireIn: "01 January 2027",
    contractEndDate: "01 January 2027",
    signStartDate: "01 January 2024",
    signEndDate: "01 January 2027",
    guaranteeStartDate: "01 January 2027",
    guaranteeEndDate: "01 January 2024",
    currency: "TZS",
    contractManager: "Charles Mtove",
    statusCode: "REGISTERED",
    statusName: "Registered",
    taxRegionName: "ARUSHA"
  }
];
