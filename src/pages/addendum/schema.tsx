import { z } from "zod"
export const addendumFormSchema = z.object({
    contractId: z.string(),
    financialYear: z.string(),
    currentStartDate: z.date(),
    description: z.string(),
    currentDescription: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    currentEndDate: z.date(),
    supplier:z.string(),
    contractNumber: z.string(),
    contractTotalAmt: z.string(),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
    }),
    // description: z.string(),
    // contractNumber: z.string(),
    // contractDescription: z.string(),

    // submittedBy: z.string(),
    // submittedDate: z.string(),

    // reviewedBy: z.string(),
    // reviewedDate: z.string(),
    // reviewerComment: z.string(),

    // approvedBy: z.string(),
    // approvedByDate: z.string(),
    // approverComment: z.string(),

  })

  export const addendumSchema = z.object({
    id: z.string(),
    number: z.string(),
    description: z.string(),
    contractDescription: z.string(),
    contractNumber: z.string(),
    statusCode: z.string(),
    statusName: z.string(),

    submittedBy: z.string(),
    submittedDate: z.string(),

    reviewedBy: z.string(),
    reviewerComment: z.string(),
    reviewedDate: z.string(),

    approvedBy: z.string(),
    approvedDate: z.string(),
    approverComment: z.string(),

  })
  export type Addendum = z.infer<typeof addendumSchema>