"use client";

import { SearchBar } from "@/components/system/searchBar";
import { SettingsButton } from "@/components/system/settingsButton";
import { Separator } from "@/components/ui/separator";
import { useBanner, useClient } from "@/utils";

import { Banner } from "@/components/system/banner";
import { ThemeToggler } from "@/components/system/themeToggler";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem as NavigationMenuItemPrimitive,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ListItem,
  NavigationMenuItem,
  customNavigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu-extended";
import { DASHBOARD } from "@/app/metadata";
import Logo from "@/assets/logo.svg";
import { px } from "@/config/theme";

const NavigationArray = [DASHBOARD];

export default function Navbar() {
  const { fullRoute } = useClient();
  const banner = useBanner();

  return (
    <div className="relative z-50">
      <Banner banner={banner} />

      <header className={`flex h-14 w-full backdrop-blur ${px}`}>
        <Image src={Logo} width={70} alt="" />

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
          <SearchBar />
          <span className="ml-3 text-gray-300 dark:text-gray-800">|</span>
          <SettingsButton />
          <ThemeToggler />
        </div>
      </header>

      <Separator className="mb-12" />
    </div>
  );
}
