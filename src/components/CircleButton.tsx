import type { AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";

type LinkType = {
  type: "link";
  to: string;
  isExternal?: boolean;
};

type ButtonType = {
  type: "button";
};

type CircleButtonProps = {
  bgColor: string; // hexadecimal color
} & (LinkType | ButtonType);

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export default function CircleButton({ children, ...props }: PropsWithChildren<CircleButtonProps>) {
  const customClasses = [
    `bg-[${props.bgColor}]`,
    "cursor-pointer",
    "inline-flex",
    "rounded-full",
    "w-10",
    "h-10",
    "p-2",
    `bg-[${props.bgColor}]/80`,
    "transition-all",
    "duration-400",
    "justify-center",
    "items-center",
    "[&>svg]:w-5"
  ];
  if (props.type === "link") {
    const anchorProps: AnchorProps = props?.isExternal ? {
      rel: "noopener noreferrer",
      target: "_blank"
    } : {};
    return (
      <a {...anchorProps} className={customClasses.join(" ")} href={props.to} >{children}</a>
    );
  }
  return (
    <button className={customClasses.join(" ")}>{children}</button>
  );
}