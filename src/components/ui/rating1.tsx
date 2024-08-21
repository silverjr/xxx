import { FieldPath, useFormContext } from 'react-hook-form'
import { forwardRef } from 'react'
import React from 'react'

type RatingProps = React.InputHTMLAttributes<HTMLInputElement>

export const RatingOne = forwardRef<HTMLInputElement, RatingProps>(
  (props, ref) => {
    const name = props.name as FieldPath<any>
    const { register, setValue, getValues } = useFormContext<any>()

    return (
      <div className="flex">
        <input {...props} className="hidden" {...register(name)} ref={ref} />
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-5 ${i < +getValues(name) ? 'fill-primary' : 'fill-primary-foreground'}`}
              onClick={() =>
                setValue(name, i === +getValues(name) - 1 ? 0 : i + 1)
              }
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          ))}
      </div>
    )
  },
)
