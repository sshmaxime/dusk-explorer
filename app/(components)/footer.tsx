import { PRIVACY } from "@/app/(company)/(policies)/privacy/metadata";
import { TERMS } from "@/app/(company)/(policies)/terms/metadata";
import Logo from "@/assets/logo-full.svg";
import LogoNice from "@/assets/nice.svg";
import { URLS } from "@/config/constants";
import { SiDiscord, SiReddit, SiTwitter } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { H3, H5, H6 } from "../../components/system/typography";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import PackageJson from "../../package.json";
import { cn } from "../../utils/cn";
import { myAppStyles } from "../../utils/constants/styles";

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
              <Link href={URLS.discord}>
                <SiDiscord className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="h-auto bg-transparent p-0"
            >
              <Link href={URLS.twitter}>
                <SiTwitter className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="h-auto bg-transparent p-0"
            >
              <Link href={URLS.reddit}>
                <SiReddit className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <Separator className="dark:bg-accent-foreground dark:opacity-10" />

        <div className="flex flex-col justify-between px-2 md:flex-row">
          <div className="grid grid-flow-row gap-8 py-10 md:grid-flow-col md:gap-40">
            <Image src={LogoNice} alt="" className="h-20 w-20 self-center" />

            <div className="flex flex-col gap-1">
              <H3 className="mb-4 font-bold">Legal</H3>
              <Link href={PRIVACY.href}>
                <H5 className="font-normal">Privacy Policy</H5>
              </Link>
              <Link href={TERMS.href}>
                <H5 className="font-normal">Terms of Service</H5>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 self-end py-10">
            <Image src={Logo} alt="" className="h-4 w-auto dark:invert" />
            <H5 className="font-normal">© 2024 Dusk. All Rights Reserved.</H5>
          </div>
        </div>

        <Separator className="dark:bg-accent-foreground dark:opacity-10" />

        <div className="flex flex-col gap-1 px-2 py-2 md:flex-row md:justify-between md:gap-0">
          <H6 className="font-normal">
            Duskscan{" "}
            <span className="text-xs font-semibold">
              (v{PackageJson.version})
            </span>
          </H6>

          <div className="flex items-center gap-1">
            <H6 className="font-normal">
              Made with love by
              <Button variant="ghost" className="h-auto p-0">
                &nbsp;
                <H6 className="underline underline-offset-4">@sshmaxime</H6>
                &nbsp;
              </Button>
            </H6>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
