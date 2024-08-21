import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectList,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
  renderMultiSelectOptions,
  type MultiSelectOption,
  type MultiSelectOptionGroup,
} from "@/components/multi-select";
import { toast } from "@/components/ui/use-toast";
import { FormSelect } from "@/components/form";

const ALL_ITEMS = [
  { value: "1", label: "Silvester Ntunga", group: "ICTD" },
  { value: "2", label: "Charles Mtove", group: "ICTD" },
  { value: "3", label: "Leonald Zahoro", group: "ICTD" },
];

const group = (
  options: Array<(typeof ALL_ITEMS)[number]>
): MultiSelectOptionGroup[] => {
  return options.reduce((acc, item) => {
    const group = acc.find((g) => g.heading === item.group);
    if (group) {
      group.children.push(item);
    } else {
      acc.push({ heading: item.group, children: [item] });
    }
    return acc;
  }, [] as MultiSelectOptionGroup[]);
};

const search = async (keyword?: string) => {
  if (!keyword) return group(ALL_ITEMS);
  const lowerKeyword = keyword.toLowerCase();
  const filtered = ALL_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(lowerKeyword)
  );

  if (!filtered.length) {
    return [
      {
        label: keyword,
        value: keyword,
      },
    ];
  }

  return group(filtered);
};

const FormSchema = z.object({
  team_members: z.array(z.string(), {
    required_error: "Please select at least one framework.",
  }),
});

export function TeamMembers() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<MultiSelectOption[]>(() =>
    group(ALL_ITEMS)
  );

  const indexRef = useRef(0);

  const handleSearch = async (keyword: string) => {
    const index = ++indexRef.current;
    setLoading(true);
    const newOptions = await search(keyword);
    if (indexRef.current === index) {
      setOptions(newOptions);
      setLoading(false);
    }
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div className="grid grid-cols-2">
          <div>
            <FormField
              control={form.control}
              name="team_members"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Team members</FormLabel> */}
                  <MultiSelect
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    onSearch={handleSearch}
                  >
                    <FormControl>
                      <MultiSelectTrigger className="w-96">
                        <MultiSelectValue placeholder="Select team member" />
                      </MultiSelectTrigger>
                    </FormControl>
                    <MultiSelectContent>
                      <MultiSelectSearch />
                      <MultiSelectList>
                        {loading ? null : renderMultiSelectOptions(options)}
                        <MultiSelectEmpty>
                          {loading ? "Loading..." : "No results found"}
                        </MultiSelectEmpty>
                      </MultiSelectList>
                    </MultiSelectContent>
                  </MultiSelect>
                  <FormDescription>Quatation team members</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div></div>
        </div>
      </form>
    </Form>
  );
}
