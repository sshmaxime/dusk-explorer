import { H2, Subtitle } from "@/components/system/typography";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { withChildren } from "@/utils/types";
import Page from "../../../components/system/page";

type RowProps = {
  title: string;
  subtitle: string;
} & withChildren;

const Row = ({ title, subtitle, children }: RowProps) => (
  <div className="grid grid-flow-col grid-cols-3">
    <div className="col-span-1">
      <div className="flex  flex-col">
        <H2 className="font-semibold tracking-normal">{title}</H2>
        <Subtitle className="tracking-tight">{subtitle}</Subtitle>
      </div>
    </div>

    <div className="col-span-2 flex items-end">{children}</div>
  </div>
);

export default function Settings() {
  return (
    <Page title="Settings" subtitle="Manage your settings." separator marginTop>
      <div className="grid gap-8">
        <Row title="Theme" subtitle="Set the theme of the app">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="La c'est la" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Row>
      </div>
    </Page>
  );
}
