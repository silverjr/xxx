import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import {Alert, AlertDescription, AlertTitle} from "./ui/alert"
import React from "react"

export function ErrorFallback() {
  let error: any = useRouteError()
  return isRouteErrorResponse(error) ? (
    <div className="flex items-center justify-center w-full mt-4">
      <div className="flex flex-col space-y-3">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            {" "}
            {error.status} {error.statusText}
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center w-full mt-4">
      <div className="flex flex-col space-y-3">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error?.message}</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
