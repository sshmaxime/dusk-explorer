import Page from "@/components/system/page";
import { H1, Subtitle } from "@/components/system/typography";

export default function Settings() {
  return (
    <Page>
      <div className="space-y-0.5">
        <H1>Settings</H1>
        <Subtitle>Manage your settings.</Subtitle>
      </div>

      <div className="border-b p-3" />
    </Page>
  );
}
