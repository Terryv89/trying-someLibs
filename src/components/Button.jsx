import className from "classnames";
import { twMerge } from "tailwind-merge";

const finalClassName = className("px-1.5", {
  "bg-blue-500": true,
});

console.log(finalClassName);

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  const classes = className("px-3 py-1.5 border m-3", {
    "border-blue-500 bg-blue-500 text-white": primary === true,
    "border-gray-900 bg-gray-900 text-white": secondary === true,
    "border-green-500 bg-green-500 text-white": success === true,
    "border-yellow-400 bg-yellow-400 text-white": warning === true,
    "border-red-500 bg-red-500 text-white": danger === true,
  });

  return <button className={classes}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Only one prim value!");
    }
  },
};
export default Button;
