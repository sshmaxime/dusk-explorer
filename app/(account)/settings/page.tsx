"use client";

import {
  Row,
  SettingsContent,
  TabTrigger,
} from "@/app/(account)/settings/components";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Client, useClient } from "@/utils";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import Page from "../../../components/system/page";

const SettingsData = [
  {
    title: "Overview",
    subtitle:
      "Update your account settings. Set your preferred language and timezone.",
    rows: [
      {
        title: "Language",
        subtitle:
          "This is the name that will be displayed on your profile and in emails.",
        Component: ({ mounted }: Client) =>
          mounted && (
            <Select defaultValue="english">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="english">English</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ),
      },
      {
        title: "Currency",
        subtitle:
          "This is the name that will be displayed on your profile and in emails.",
        Component: ({ mounted }: Client) =>
          mounted && (
            <Select defaultValue="usd">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="usd">USD</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ),
      },
      {
        title: "Theme",
        subtitle:
          "This is the name that will be displayed on your profile and in emails.",
        Component: ({ mounted, theme, toggleTheme }: Client) =>
          mounted && (
            <Switch
              id="airplane-mode"
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
            />
          ),
      },
    ],
  },
];

export default function Settings() {
  const client = useClient();

  return (
    <Page title="Settings" subtitle="Manage your settings." separator marginTop>
      <Tabs defaultValue={SettingsData[0].title}>
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-1">
            <TabsList className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
              {SettingsData.map((item) => (
                <TabTrigger value={item.title} key={item.title} />
              ))}
            </TabsList>
          </div>

          <div className="col-span-4">
            {SettingsData.map((setting) => (
              <SettingsContent
                title={setting.title}
                subtitle={setting.subtitle}
                key={setting.title}
              >
                {setting.rows.map((row) => (
                  <Row
                    title={row.title}
                    subtitle={row.subtitle}
                    key={row.title}
                  >
                    {row.Component(client)}
                  </Row>
                ))}
              </SettingsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </Page>
  );
}
