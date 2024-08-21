import { UseFormReturn } from "react-hook-form";
import { categories, taxRegions, types } from "./data";
import { FormSelect, FormText, FormTextArea } from "@/components/form";

interface ContractFormProps {
  form: UseFormReturn<any>;
}
export function ContractForm({ form }: ContractFormProps) {
  const suppliers = [
    {
      value: "1",
      label: "Softnet Technologies",
    },
    {
      value: "2",
      label: "Kichecko Tanzania",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <FormText
            name="number"
            label="Quatation Number"
            placeholder="Quatation Number"
            form={form}
          />
          <FormSelect
            name="lot"
            label="Lot"
            placeholder="Lot"
            form={form}
            options={[
              {
                value: "1",
                label: "Lot 1",
              },
              {
                value: "2",
                label: "Lot 2",
              },
              {
                value: "3",
                label: "Lot 3",
              },
            ]}
          />

          <FormSelect
            name="contractTypeId"
            label="Quatation Type"
            placeholder="Quatation Type"
            form={form}
            options={types}
          />
          <FormSelect
            name="contractCategory"
            label="Quatation category"
            placeholder="Quatation category"
            form={form}
            options={categories}
          />
          <FormTextArea
            name="description"
            label="Description"
            placeholder="Description"
            form={form}
            rows={4}
          />
        </div>
        <div>
          <FormSelect
            name="serviceProviderId"
            label="Vendor"
            placeholder="Service Provider"
            form={form}
            options={suppliers}
          />
          <FormSelect
            name="taxRegion"
            label="Tax region"
            placeholder="Tax Region"
            form={form}
            options={taxRegions}
          />
          <FormSelect
            name="financialYear"
            label="Financial Year"
            placeholder="Financial Year"
            form={form}
            options={[
              {
                value: "1",
                label: "2023-2024",
              },
              {
                value: "22",
                label: "2024-2025",
              },
            ]}
          />
          <FormSelect
            name="evaluationFrequency"
            label="Evaluation Frequency"
            placeholder="Evaluation Frequency"
            form={form}
            options={[
              {
                value: "monthly",
                label: "Monthly",
              },
              {
                value: "quartely",
                label: "Quartely",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
