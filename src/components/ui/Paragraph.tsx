import { FC, forwardRef, HTMLAttributes } from "react";
import {cva, VariantProps} from 'class-variance-authority';
import { cn } from "@/lib/utils";


const paragraphVariants = cva(
    'text-black max-w-prose dark:text-black mb-2 text-center',
    {
        variants: {
            size: {
                default: 'text-black text-base sm:text-lg',
                sm: 'text-black text-sm, sm:text-base',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

interface ParagraphProps 
    extends HTMLAttributes<HTMLParagraphElement>, 
        VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({className, size, children, ...props}, ref) => {
    return (
        <p 
        ref={ref} 
        {...props} 
        className={cn(paragraphVariants({ size, className }))}>
            {children}
        </p>
        )   
    }
);

Paragraph.displayName = 'Paragraph'

export default Paragraph;
