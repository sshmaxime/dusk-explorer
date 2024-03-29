"use client";

import { SearchBar } from "../../components/system/searchBar";
import { SettingsButton } from "../../components/system/settingsButton";
import { Separator } from "../../components/ui/separator";
import { useBanner, useClient } from "../../utils";

import Logo from "@/assets/logo-full.svg";
import { H5, H6 } from "@/components/system/typography";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Banner } from "../../components/system/banner";
import { Combobox } from "../../components/system/combobox";
import { ThemeToggler } from "../../components/system/themeToggler";
import {
  NavigationMenu,
  NavigationMenuItem as NavigationMenuItemPrimitive,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import {
  ListItem,
  NavigationMenuItem,
  customNavigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu-extended";
import { cn } from "../../utils/cn";
import { myAppStyles } from "../../utils/constants/styles";
import { BLOCKS } from "../blocks/metadata";
import { DASHBOARD } from "../metadata";
import { TRANSACTIONS } from "../transactions/metadata";

const NavigationArray = [DASHBOARD, BLOCKS, TRANSACTIONS];

export default function Navbar() {
  const { fullRoute } = useClient();
  const banner = useBanner();

  const [network, setNetwork] = useState("mainnet");

  return (
    <div className="relative z-50 backdrop-blur md:block">
      <Banner banner={banner} />

      <header
        className={cn("flex h-8 items-center justify-between", myAppStyles)}
      >
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <H6 className="font-normal">Dusk Price:</H6>
            <H6 className="text-blue-400">$123</H6>
          </div>

          <Separator orientation="vertical" className="h-auto" />

          <div className="flex items-center gap-1">
            <H6 className="font-normal">Gas:</H6>
            <H6 className="text-blue-400">2 Gwei</H6>
          </div>
        </div>
      </header>

      <Separator />

      <header className={cn("flex h-14", myAppStyles)}>
        <Link href={"/"} style={{ display: "flex", alignSelf: "center" }}>
          <Image
            src={Logo}
            style={{ width: 70, height: "auto" }}
            alt=""
            className="dark:invert"
            quality={100}
          />
        </Link>

        <Separator
          orientation="vertical"
          className="ml-5 mr-4 h-[50%] translate-y-1/2"
        />

        <Combobox
          className="self-center"
          items={[{ value: "mainnet", label: "mainnet" }]}
          searching="Network"
          value={network}
          onChange={setNetwork}
        />

        <Separator
          orientation="vertical"
          className="ml-5 mr-4 h-[50%] translate-y-1/2"
        />

        <NavigationMenu>
          <NavigationMenuList>
            {NavigationArray.map((item) =>
              item.menuButton ? (
                item.menuButton.image ? (
                  <NavigationMenuItem key={item.href} item={item}>
                    <div className="grid w-[800px] grid-cols-4 gap-5 p-4">
                      <div className="relative col-span-1">
                        <Image priority src={"/vercel.svg"} alt="" fill />
                      </div>

                      <ul className="col-span-3 grid grid-cols-2 gap-3">
                        {item.menuButton.content.items.map((component) => (
                          <Link
                            href={"/" + component.href}
                            legacyBehavior
                            passHref
                            key={component.href}
                          >
                            <ListItem
                              activated={fullRoute === component.href}
                              title={component.name}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href} item={item}>
                    <ul className="= grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {item.menuButton.content.items.map((component) => (
                        <Link
                          key={component.href}
                          href={"/" + component.href}
                          legacyBehavior
                          passHref
                        >
                          <ListItem
                            activated={fullRoute === component.href}
                            title={component.name}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuItem>
                )
              ) : (
                <NavigationMenuItemPrimitive key={item.href}>
                  <Link href={"/" + item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={customNavigationMenuTriggerStyle({
                        activated: fullRoute === item.href,
                      })}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItemPrimitive>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-grow items-center justify-end gap-2">
          <SearchBar
            text="Search anything ..."
            placeholder="Address / Txn Hash / Block / Token / Domain Name"
          />
          <Separator orientation="vertical" className="ml-5 mr-4 h-[50%]" />
          <SettingsButton />
          <ThemeToggler />
        </div>
      </header>

      <Separator />
    </div>
  );
}
