
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { UseFormReturn } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface FormProps {
  name: string
  label?: string
  form: UseFormReturn<any>
  placeholder?: string
  disabled?: boolean
}
export function FormText({
  name,
  label,
  placeholder,
  form,
  disabled,
}: FormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-4 my-4">
          <div className="flex items-center">
            <FormLabel className="w-36">{label}</FormLabel>
            <FormControl>
              <Input
                disabled={disabled}
                placeholder={placeholder}
                className="w-full"
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage className="ml-24" />
        </FormItem>
      )}
    />
  )
}
export function FormNumber({
  name,
  label,
  disabled,
  placeholder,
  form,
}: FormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-4 my-4">
          <div className="flex items-center">
            <FormLabel className="w-36">{label}</FormLabel>
            <FormControl>
              <Input
                disabled={disabled}
                type="number"
                placeholder={placeholder}
                className="w-full"
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage className="ml-24" />
        </FormItem>
      )}
    />
  )
}
interface TextAreaFormProps extends FormProps {
  rows: number
}
export function FormTextArea({
  name,
  rows,
  label,
  disabled,
  placeholder,
  form,
}: TextAreaFormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-4 my-4">
          <div className="flex items-center">
            {label && <FormLabel className="w-36">{label}</FormLabel>}
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className="w-full"
                rows={rows}
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage className="ml-24" />
        </FormItem>
      )}
    />
  )
}
export function FormFile({
  name,
  label,
  disabled,
  placeholder,
  form,
}: FormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-4 my-4">
          <div className="flex items-center">
            <FormLabel className="w-36">{label}</FormLabel>
            <FormControl>
              <Input
                disabled={disabled}
                type="file"
                placeholder={placeholder}
                className="w-full"
                {...form.register(name)}
              />
            </FormControl>
          </div>
          <FormMessage className="ml-24" />
        </FormItem>
      )}
    />
  )
}
export function FormDatePicker({ name, disabled, label, form }: FormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-4 my-4">
          <div className="flex items-center gap-2">
            <FormLabel className="w-36">{label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    disabled={disabled}
                    className={cn(
                      "w-full font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  // disabled={(date) =>
                  //   date > new Date() || date < new Date("1900-01-01")
                  // }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <FormMessage className="ml-24" />
        </FormItem>
      )}
    />
  )
}

export type Option = {
  label: string
  value: string
}
interface FormSelectProps extends FormProps {
  options?: Option[]
  placeholder?: string
  shouldFilter?: boolean
  onValueChange?: (search: string) => void
}
export function FormSelect({
  name,
  label,
  options,
  placeholder,
  disabled,
  shouldFilter,
  form,
  onValueChange,
}: FormSelectProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormLabel className="w-36">{label}</FormLabel>
              <Popover modal>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      disabled={disabled}
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? options?.find(
                            (option) => option.value === field.value
                          )?.label
                        : placeholder}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command shouldFilter={shouldFilter}>
                    <CommandInput
                      placeholder="Search..."
                      className="h-9"
                      onValueChange={onValueChange}
                    />
                    <CommandEmpty>No result found.</CommandEmpty>
                    <CommandGroup>
                      {options?.map((option) => (
                        <CommandItem
                          value={option.label}
                          key={option.value}
                          onSelect={() => {
                            form.setValue(name, option.value)
                          }}
                        >
                          {option.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              option.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    />
  )
}

