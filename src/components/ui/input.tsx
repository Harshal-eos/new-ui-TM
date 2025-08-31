import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    showLabel?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, showLabel = true, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2 w-full">
                {showLabel && label && (
                    <label className="text-[14px] font-medium text-gray-900 leading-[1]">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-[14px] text-gray-700 font-normal leading-[1.43] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 input-shadow",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
