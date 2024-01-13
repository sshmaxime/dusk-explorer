import { useStore } from "@/store";
import { useClient } from "@/utils";
import { cn } from "@/utils/cn";
import { myAppClasse } from "@/utils/constants/styles";
import { Banner as BannerType } from "@/utils/types";
import { X } from "lucide-react";

type Props = {
  banner: BannerType;
};

export const Banner = ({ banner }: Props) => {
  const { mounted } = useClient();
  const { open, toggle } = useStore();

  const isOpen = mounted ? open : false;

  return (
    <header
      className={`${
        isOpen ? "h-8" : "h-0 opacity-0"
      } z-50 flex w-full items-center bg-muted text-sm backdrop-blur duration-500`}
    >
      <div className={cn("flex w-full flex-row justify-between", myAppClasse)}>
        <div className="w-20"></div>
        <div className="flex flex-row justify-center">
          <p className="text-center">{banner.message}</p>
        </div>
        <div className="flex w-20 flex-row-reverse items-center px-3">
          <X className="h-4 w-4 cursor-pointer" onClick={toggle} />
        </div>
      </div>
    </header>
  );
};
