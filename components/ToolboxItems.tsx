import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

type ToolboxItem = {
  title: string;
  icon: React.ElementType;
};

type ToolboxItemsProps = {
  items: ToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
  style?: React.CSSProperties;
};

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
  style
}: ToolboxItemsProps) => {
  return (
    <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
        <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",itemsWrapperClassName)}>
          {[...new Array(2)].fill(0).map((_,index)=>(
            <Fragment key={index}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
          >
            <Icon className="w-8 h-8 text-emerald-200" />
            <span className="font-semibold">{item.title}</span>
          </div>
        );
      })}
            </Fragment>
          ))}

    </div>
    </div>
  );
};
