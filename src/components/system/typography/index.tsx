import { cn } from "@/utils/cn";
import { withChildren } from "@/utils/types";

export interface ParagraphProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {}

const H1 = ({ children, className }: withChildren & ParagraphProps) => (
  <span className={cn("text-4xl font-bold tracking-tighter", className)}>
    {children}
  </span>
);

const H2 = ({ children }: withChildren & ParagraphProps) => (
  <span className="text-2xl font-bold tracking-tight">{children}</span>
);

const H22 = ({ children }: withChildren & ParagraphProps) => (
  <span className="text-xl font-bold tracking-tight">{children}</span>
);

const H3 = ({ children, className }: withChildren & ParagraphProps) => (
  <span className={cn("text-lg font-medium tracking-tight", className)}>
    {children}
  </span>
);

const H4 = ({ children, className }: withChildren & ParagraphProps) => (
  <span className={cn("tracking-tight", className)}>{children}</span>
);

const H5 = ({ children, className }: withChildren & ParagraphProps) => (
  <span className={cn("text-sm font-medium tracking-tight", className)}>
    {children}
  </span>
);

const H6 = ({ children, className }: withChildren & ParagraphProps) => (
  <span className={cn("text-xs font-medium tracking-tight", className)}>
    {children}
  </span>
);

const Subtitle = ({ children, className }: withChildren & ParagraphProps) => (
  <span className={cn("text-muted-foreground", className)}>{children}</span>
);

const SubtitleH5 = ({ children }: withChildren & ParagraphProps) => (
  <span className="text-xs text-muted-foreground">{children}</span>
);

export { H1, H2, H22, H3, H4, H5, H6, Subtitle, SubtitleH5 };
