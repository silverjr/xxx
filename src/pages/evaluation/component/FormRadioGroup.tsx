import { Option } from "@/components/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";

interface FormRadioGroupProps {
  label?: string;
  name: string;
  form: UseFormReturn<any>;
  options: Option[];
}

export function FormRadioGroup({
  form,
  name,
  label,
  options,
}: FormRadioGroupProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          {/* <FormLabel>{label}</FormLabel> */}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              // className="flex flex-col space-y-1"
              className="flex flex-row space-x-1"
            >
              {options.map((item) => (
                <FormItem
                  key={item.value}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
