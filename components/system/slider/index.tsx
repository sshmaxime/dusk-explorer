import { H1, H3 } from "../typography";
import { Input } from "../../ui/input";
import { Slider as UISlider } from "../../ui/slider";
import { useState } from "react";

let USDollar = new Intl.NumberFormat("fr-FR");

type Props = {
  change: Function;

  props: {
    type: "currency" | "number" | "float";
    title: string;
    max: number;
    min: number;
    step: number;
    defaultValue?: number;
    token: React.ReactNode;
    small?: boolean;
  };
};

export const Slider = ({
  change,
  props: { max, min, step, defaultValue, token, title, small, type },
}: Props) => {
  const [value, setValue] = useState(defaultValue || min);

  const setValueProxy = (value: number) => {
    setValue(value);
    change(value);
  };

  const onValueChange = (value: number[]) => {
    setValueProxy(value[0]);
  };

  let formatedValue = "";
  if (type === "currency") {
    formatedValue = USDollar.format(value);
  }

  return (
    <div>
      <div className="flex h-full items-end justify-between">
        {small ? <H3>{title}</H3> : <H1>{title}</H1>}
        <div className="relative">
          <Input
            placeholder=""
            readOnly
            className="w-60 pr-11 text-right text-4xl font-bold"
            value={formatedValue || value}
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            {token}
          </div>
        </div>
      </div>

      <UISlider
        defaultValue={[value]}
        max={max}
        min={min}
        onValueChange={onValueChange}
        step={step}
        className="py-5"
        value={[value]}
      />
    </div>
  );
};

export const useSlider = (props: Props["props"]) => {
  const [value, setValue] = useState(props.defaultValue || props.min);
  return { value, setValue, props };
};
