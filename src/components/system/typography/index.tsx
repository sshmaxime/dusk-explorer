import { cn } from "@/utils/cn";
import { withChildren } from "@/utils/types";

export interface ParagraphProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {}

const H1 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-4xl font-bold tracking-tighter", className)}>
    {children}
  </p>
);

const H2 = ({ children }: withChildren & ParagraphProps) => (
  <p className="text-2xl font-bold tracking-tight">{children}</p>
);

const H3 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-lg font-bold tracking-tight", className)}>
    {children}
  </p>
);

const H4 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-base font-medium tracking-tight", className)}>
    {children}
  </p>
);

const H5 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-sm font-medium tracking-tight", className)}>
    {children}
  </p>
);

const H6 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-xs font-medium tracking-tight", className)}>
    {children}
  </p>
);

const Subtitle = ({ children }: withChildren & ParagraphProps) => (
  <p className="text-muted-foreground">{children}</p>
);

const SubtitleH5 = ({ children }: withChildren & ParagraphProps) => (
  <p className="text-xs text-muted-foreground">{children}</p>
);

export { H1, H2, H3, H4, H5, H6, Subtitle, SubtitleH5 };
