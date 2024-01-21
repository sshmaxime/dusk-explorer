import { H3, H5, Subtitle2 } from "@/components/system/typography";
import { Separator } from "@/components/ui/separator";
import { withChildren } from "@/utils/types";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";

type RowProps = {
  title: string;
  subtitle: string;
  upSubtitle?: boolean;
} & withChildren;

const Row = ({ title, subtitle, upSubtitle, children }: RowProps) => (
  <div className="space-y-2">
    <H5 className="font-semibold tracking-normal">{title}</H5>
    {upSubtitle && <Subtitle2 className="text-[0.8rem]">{subtitle}</Subtitle2>}
    <div className="col-span-2 flex items-end">{children}</div>
    {!upSubtitle && <Subtitle2 className="text-[0.8rem]">{subtitle}</Subtitle2>}
  </div>
);

type Props = { value: string };

const TabTrigger = ({ value }: Props) => (
  <TabsTrigger
    value={value}
    className="inline-flex h-9 items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-accent-foreground hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-muted data-[state=active]:hover:no-underline"
  >
    {value}
  </TabsTrigger>
);

type SettingsContentProps = {
  title: string;
  subtitle: string;
} & withChildren;

const SettingsContent = ({
  title,
  subtitle,
  children,
}: SettingsContentProps) => {
  return (
    <TabsContent value={title}>
      <H3 className="block">{title}</H3>
      <Subtitle2 className="block">{subtitle}</Subtitle2>
      <Separator className="my-6" />

      <div className="grid space-y-6">{children}</div>
    </TabsContent>
  );
};

export { Row, TabTrigger, SettingsContent };
