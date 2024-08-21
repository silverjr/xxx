import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Option } from "@/components/form";

interface FormCheckGroupProps {
  label: string;
  name: string;
  form: UseFormReturn<any>;
  options: Option[];
}
export function FormCheckBoxGroup({ form, options }: FormCheckGroupProps) {
  return (
    <FormField
      control={form.control}
      name="items"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">Quatation details</FormLabel>
            <FormDescription>
              Select the field you want to update in the contract.
            </FormDescription>
          </div>
          {options.map((item) => (
            <FormField
              key={item.value}
              control={form.control}
              name="items"
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.value])
                            : field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== item.value
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
