import React from "react";
type MagicButtonProps = {
    title:string,
    position:"left"|"right",
    icon:React.ReactNode,
    handleClick?:()=>void;
    otherClasses?:string
}
const MagicButton = ({title,position,icon,handleClick,otherClasses}:MagicButtonProps) => {
  return (
    <button className="relative w-52 mt-5 rounded-xl inline-flex h-12 overflow-hidden p-[1px]">
      <span className="absolute inset-[-1000%]  animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full gap-1 w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {position=="left"&&icon}
        {title}
        {position=="right"&&icon}
      </span>
    </button>
  );
};

export default MagicButton;
