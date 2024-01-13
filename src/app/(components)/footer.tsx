import Logo from "@/assets/logo-full.svg";
import { H3, H5 } from "@/components/system/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils/cn";
import { myAppStyles } from "@/utils/constants/styles";
import { SiDiscord, SiReddit, SiTwitter } from "@icons-pack/react-simple-icons";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PackageJson from "../../../package.json";

export default function Footer() {
  return (
    <div className="bg-accent">
      <div className={cn(myAppStyles)}>
        <div className="flex justify-between px-2 py-8">
          <div className="flex gap-3">
            <Button
              asChild
              variant="ghost"
              className="h-auto bg-transparent p-0"
            >
              <Link href="">
                <SiDiscord className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="h-auto bg-transparent p-0"
            >
              <Link href="">
                <SiTwitter className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="h-auto bg-transparent p-0"
            >
              <Link href="">
                <SiReddit className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="dark:bg-accent-foreground dark:opacity-10" />

        <div className="flex justify-between px-2">
          <div className="flex grow flex-col gap-2 py-10">
            {/* <div className="grid grid-flow-col">
              <div className="flex flex-col gap-2">
                <H3 className="mb-2 font-bold">Company</H3>
                <H5>Company</H5>
                <H5>Company</H5>
                <H5>Company</H5>
                <H5>Company</H5>
              </div>
            </div> */}
          </div>

          <div className="flex flex-col items-end gap-2 self-end py-10">
            <Image src={Logo} alt="" className="h-4 w-auto dark:invert" />
            <H5 className="font-normal">© 2024 Dusk. All Rights Reserved.</H5>
          </div>
        </div>

        <Separator className="dark:bg-accent-foreground dark:opacity-10" />

        <div className="flex justify-between px-2 py-4">
          <H5 className="font-normal">Duskscan (v{PackageJson.version})</H5>
          <div className="flex items-center gap-1">
            <H5 className="font-normal">
              Donations:
              <Button variant="ghost" className="h-auto p-0">
                &nbsp;
                <H5 className="underline underline-offset-4">0x123456789</H5>
                &nbsp;
              </Button>
            </H5>
            <Heart className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
