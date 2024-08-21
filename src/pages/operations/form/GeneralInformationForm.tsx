import { FormDatePicker, FormNumber, FormSelect } from "@/components/form";
import { Section } from "@/components/section";
import { UseFormReturn } from "react-hook-form";

interface GeneralInformationFormProps {
  form: UseFormReturn<any>;
}
export function GeneralInformationForm({ form }: GeneralInformationFormProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <Section title="Quatation date">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <FormNumber
                name="duration"
                label="Quatation duration"
                placeholder="Quatation duration"
                form={form}
              />
            </div>
            <div>
              <div>
                <FormSelect
                  name="duration_unit"
                  label="Unit"
                  placeholder="Unit"
                  form={form}
                  options={[
                    {
                      value: "days",
                      label: "Days",
                    },
                    {
                      value: "Months",
                      label: "Months",
                    },
                    {
                      value: "Years",
                      label: "years",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <FormDatePicker
            name="date_of_signature"
            label="Date of signing"
            placeholder="Date of signing"
            form={form}
          />
          <FormDatePicker
            name="intended_completion_date"
            label="Intended completion date"
            placeholder="Intended completion date"
            form={form}
          />

          <FormDatePicker
            name="startDate"
            label="Start Date"
            placeholder="Start date"
            form={form}
          />
          <FormDatePicker
            name="endDate"
            label="End start"
            placeholder="End date"
            form={form}
            disabled
          />
        </Section>
      </div>
      <div>
        <Section title="Performance guarantee">
          <FormDatePicker
            name="contractSignedDate"
            label="Quatation Signed Date"
            placeholder="contract signed Date"
            form={form}
          />
          <FormDatePicker
            name="completeAt"
            label="Quatation Completetion"
            placeholder="Quatation Completetion"
            form={form}
          />
        </Section>
      </div>
    </div>
  );
}
