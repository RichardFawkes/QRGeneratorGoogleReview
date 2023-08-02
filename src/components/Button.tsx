import { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {}
const Button = (props: ButtonProps) => {
  return (
    <button
      className="rounded bg-zinc-50 px-4 font-medium text-zinc-900 py-1.5"
      {...props}
    />
  );
};

export default Button;
