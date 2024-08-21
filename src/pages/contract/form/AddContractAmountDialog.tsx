import { FormSelect, FormText, FormTextArea } from "@/components/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { currencies } from "./data";

export function AddContractDialog() {
  const form = useForm<z.infer<any>>({});
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add contract amount</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Amount</DialogTitle>
          <DialogDescription>Add contract amount</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormSelect
            name="currency"
            label="Currency"
            placeholder="currency"
            form={form}
            options={currencies}
          />
          <FormText
            name="amount"
            label="Amount"
            placeholder="amount"
            form={form}
          />
          <FormText
            name="exchange_rate"
            label="Exchange rate"
            placeholder="Exchange rate"
            form={form}
          />
          <FormTextArea
            name="description"
            // label="Description"
            placeholder="Description"
            form={form}
            rows={4}
          />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
