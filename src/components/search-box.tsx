
import { Key, ReactNode, useRef, useState } from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { ChevronDown, ChevronRight, FilterIcon} from "lucide-react"
import { useSearchParams } from "react-router-dom"

import { cn } from "../lib/utils"
import { useOutsideClick } from "../hooks"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible"

import { SearchFilter } from "../types"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Command, CommandItem } from "./ui/command"
import React from "react"

interface SearchBoxProps {
  className?: string
  suggestions: { name: string; label: string }[]
  searchFilters?: SearchFilter[]
}
function SearchBox({ className, suggestions, searchFilters }: SearchBoxProps) {
  // State management
  const [searchParams, setSearchParams] = useSearchParams()
  const [open, setOpen] = useState(true)
  const [showFilter, setShowFilter] = useState(false)
  const [filters, setFilters] = useState<Filter[]>([])
  const [query, setQuery] = useState("")

  const inputRef = useRef<Input>()

  // Ref for handling clicks outside the component
  const ref = useOutsideClick(() => {
    setOpen(false)
    setShowFilter(false)
    setQuery("")
  })
  const handleBoxSearchClick = () => {
    inputRef.current.focus()
  }

  // Close a filter and update search parameters
  const onClose = (name: string) => {
    const currentFilters = filters.filter((item) => item.name != name)
    const params = { ...Object.fromEntries(searchParams) }
    const paginationParams =
      params && params.page && params.size
        ? { page: params.page, size: params.size }
        : {}
    setSearchParams({
      ...paginationParams,
      ...filtersToObject(currentFilters),
    })
    setFilters(currentFilters)
    setQuery("")
  }
  const filtersToObject = (filters: SearchFilter[]) => {
    return filters.reduce(
      (prev, curr) => ({ ...prev, [curr.name]: curr.value }),
      {}
    )
  }
  const handleSetFilter = (filter: SearchFilter) => {
    // Find the index of the filter in the current filters
    const itemIndex = filters.findIndex((item) => item.name === filter.name)
    // Create a copy of the current filters
    let updatedFilters = [...filters]
    if (itemIndex === -1) {
      // If the filter is not in the current filters, add it
      updatedFilters.push(filter)
    } else {
      // If the filter is already in the current filters, update its value
      updatedFilters[itemIndex] = { ...filter, value: filter.value }
    }
    // Update search parameters with the new or updated filters
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: 0,
      ...filtersToObject(updatedFilters),
    })

    // Update the filters in the state
    setFilters(updatedFilters)

    // Reset the query
    setQuery("")
  }
  return (
    <div className={cn("w-[600px]", className)}>
      <div className="flex-col relative" ref={ref}>
        <div className="flex items-center space-x-2">
          <div
            onClick={handleBoxSearchClick}
            className="flex gap-2 items-center rounded-md border border-input bg-background px-3 py-2 text-sm  ring-offset-background focus-visible:outline-none hover:border-primary cursor-text flex-1"
          >
            <ul className="flex flex-wrap gap-1">
              {filters.map((filter) => (
                <li key={filter.label} className="text-sm flex">
                  <Badge>{filter.label}</Badge>
                  <Badge variant="secondary">
                    {filter.value}{" "}
                    <Cross2Icon
                      className="ml-2 cursor-pointer"
                      onClick={() => onClose(filter.name)}
                    />
                  </Badge>
                </li>
              ))}
              <div>
                <input
                  ref={inputRef}
                  onFocus={() => setOpen(true)}
                  //   onBlur={() => setOpen(false)}
                  placeholder="Search..."
                  className="focus:outline-none placeholder-text"
                  onChange={({ target }) => setQuery(target.value)}
                  value={query}
                />
              </div>
            </ul>
          </div>
          {searchFilters?.length > 0 && (
            <Button onClick={() => setShowFilter(!showFilter)}>Filter</Button>
          )}
        </div>
        {showFilter && (
          <div className="absolute mt-1 z-50 w-full rounded-md border bg-popover p-4 text-popover-foreground shadow-md">
            <div className=" grid grid-cols-2 py-4">
              <div className="border-r px-4">
                <div className="font-bold flex  justify-start items-center">
                  <FilterIcon className="mr-2 h-4 w-4" />
                  Filters
                </div>
                <ul className="mt-4">
                  {searchFilters?.map((filter) => (
                    <ListItem
                      onClick={() =>
                        handleSetFilter({
                          value: filter.value,
                          label: filter.name,
                          name: filter.name,
                        })
                      }
                    >
                      {filter.label}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {open && query && (
          <div className="absolute mt-1 z-50 w-full rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none">
            <Command>
              {suggestions.map((suggestion) => (
                <CommandItem
                  className="cursor-pointer"
                  key={suggestion.name}
                  value={suggestion.name}
                  onSelect={(currentValue) => {
                    handleSetFilter({
                      name: currentValue,
                      label: suggestion.label,
                      value: query,
                    })
                  }}
                >
                  <span>
                    Search {"  "} <b>{suggestion.label}</b> for: {query}
                  </span>
                </CommandItem>
              ))}
            </Command>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBox

interface SuggestionItemProps {
  name: string
  label: string
  currentValue: string
  onSelect: (filter: Filter) => void
}
function SuggestionItem({
  name,
  label,
  currentValue,
  onSelect,
}: SuggestionItemProps) {
  return (
    <ListItem
      onClick={() =>
        onSelect?.({ value: currentValue, label: label, name: name })
      }
    >
      Search <b>{label}</b> for: {currentValue}
    </ListItem>
  )
}

interface ListItemProps {
  children: ReactNode
  onClick?: () => void
}
function ListItem({ children, onClick }: ListItemProps) {
  return (
    <li
      className="select-none items-center rounded-sm px-6 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-secondary cursor-pointer"
      onClick={onClick}
    >
      {children}
    </li>
  )
}
function SuggestionItemCollapible({
  name,
  label,
  currentValue,
  onSelect,
}: SuggestionItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className="select-none items-center rounded-sm pl-2  py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="cursor-pointer"
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center space-x-2 hover:bg-secondary w-full px-2 py-1.5">
            <div className="p-0">
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle</span>
            </div>
            <p>
              Search <b>{label}</b> for: {currentValue}
            </p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ListItem
            onClick={() =>
              onSelect?.({ value: "computer", label: label, name: name })
            }
          >
            Computer
          </ListItem>
        </CollapsibleContent>
      </Collapsible>
    </li>
  )
}
