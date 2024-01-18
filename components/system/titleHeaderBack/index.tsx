import { H5 } from "../typography";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const TitleHeaderBack = ({
  text,
  iconAfter,
}: {
  text: any;
  iconAfter?: any;
}) => {
  const router = useRouter();

  return (
    <div
      className="inline-block cursor-pointer rounded-lg pl-1"
      onClick={router.back}
    >
      <div className="flex h-7 items-center">
        <div className="flex gap-2">
          <div className="flex items-center">
            <ArrowLeft className="h-4 w-4" />
          </div>

          <div className="flex items-center">
            <H5 className="font-medium tracking-normal">{text}</H5>
          </div>

          {iconAfter && (
            <div className="flex self-center">
              <H5>{iconAfter}</H5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
