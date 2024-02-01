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

const H22 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-lg font-bold tracking-tight", className)}>
    {children}
  </p>
);

const H3 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-lg font-medium tracking-tight", className)}>
    {children}
  </p>
);

const H4 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("tracking-tight", className)}>{children}</p>
);

const H44 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("font-medium tracking-tight", className)}>{children}</p>
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

const Subtitle = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-muted-foreground", className)}>{children}</p>
);

const Subtitle2 = ({ children, className }: withChildren & ParagraphProps) => (
  <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
);

const SubtitleH5 = ({ children }: withChildren & ParagraphProps) => (
  <p className="text-xs text-muted-foreground">{children}</p>
);

export { H1, H2, H22, H3, H4, H44, H5, H6, Subtitle, Subtitle2, SubtitleH5 };
