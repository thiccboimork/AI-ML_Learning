import React, { SVGProps } from 'react'


interface Props {
    Icon: React.ElementType;
    title: string
    onClick?: () => {}
}

function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div onClick={() => onClick?.()} className="group flex max-w-fit items-center space-x-2 px-4 py-3
    rounded-full transition-all duration-200 hover:bg-gray-600">
        <Icon className="h-6 w-6" />
        <p className="hidden md:inline-flex group-hover:text-twitter
        text-base font-dark lg:text-xl">{title}</p>
    </div>
  );
}

export default SidebarRow;