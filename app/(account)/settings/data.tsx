import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Client } from "@/utils";

export const SettingsData = [
  {
    title: "Account",
    subtitle:
      "Update your account settings. Set your preferred language and currency.",
    rows: [
      {
        title: "Language",
        subtitle: "This is the language that will be used in the application.",
        Component: ({ mounted }: Client) =>
          mounted && (
            <Select defaultValue="english" disabled>
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
          "Amounts will be converted into the fiat currency of your preference.",
        Component: ({ mounted }: Client) =>
          mounted && (
            <Select defaultValue="usd" disabled>
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
    ],
  },
  {
    title: "Appearance",
    subtitle:
      "Customize the appearance of the app. Switch between day and night themes.",
    rows: [
      {
        title: "Theme",
        subtitle: "Select the theme of the dashboard.",
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
