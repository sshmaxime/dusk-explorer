type Props = {
  small?: boolean;
  extraSmall?: boolean;
};

export const Spacer = ({ small, extraSmall }: Props) => {
  return <div className={small ? "p-1" : extraSmall ? "p-[2px]" : "p-2"} />;
};
