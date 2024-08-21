import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { FormSelect, FormText } from "@/components/form"


interface DialogProps {
  title: string
  buttonTitle: string
}

export default function ContractApproveDialog({title, buttonTitle}:DialogProps) {
  const { toast } = useToast()
  const form = useForm<z.infer<any>>({
    // resolver: zodResolver(approveFormSchema),
  })
  const handleSubmit = async () => {
 
  }
  const handleValidationError = (errors: any) => {
    console.log(errors)
    toast({ description: "Validation errors!" })
  }


  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button variant="outline">{buttonTitle}</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit, handleValidationError)}
          >
            <AlertDialogHeader>
              <AlertDialogTitle>{title}</AlertDialogTitle>
              <AlertDialogDescription>
                <FormSelect
                  name="requisitionStatusCode"
                  label="Action"
                  placeholder="Status"
                  form={form}
                  options={[
                    { label: "Send back", value: "DRAFT" },
                    { label: "Approve", value: "APPROVED" },
                    { label: "Reject", value: "REJECTED" },
                  ]}
                />
                <FormText
                  name="approvalComment"
                  label="Comment"
                  placeholder="Comment..."
                  form={form}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction type="submit">
                Save
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
