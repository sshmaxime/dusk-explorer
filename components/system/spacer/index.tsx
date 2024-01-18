type Props = {
  small?: boolean;
  extraSmall?: boolean;
};

export const Spacer = ({ small, extraSmall }: Props) => {
  return <div className={small ? "p-2" : extraSmall ? "p-1" : "p-4"} />;
};
