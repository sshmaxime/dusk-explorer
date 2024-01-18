import { H5 } from "../typography";
import { Separator } from "../../ui/separator";

export const TitleHeader = ({
  iconBefore,
  text,
  iconAfter,
}: {
  iconBefore?: any;
  text: any;
  iconAfter?: any;
}) => {
  return (
    <div className="inline-block rounded-lg bg-muted px-[15px]">
      <div className="flex h-7 gap-2">
        {iconBefore && (
          <>
            <div className="flex items-center">
              <H5>{iconBefore}</H5>
            </div>
            <div className="flex">
              <Separator orientation="vertical" className="h-2/3 self-center" />
            </div>
          </>
        )}

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
  );
};
