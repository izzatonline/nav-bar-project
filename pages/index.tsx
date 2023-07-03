// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"

import MyAvatar from "@/components/ui/MyAvatar";
import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";
import Letsgooo from "@/components/ui/letsgooo";
import { RiBrainLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className="bg-slate-200">
        <div className="mx-auto flex max-w-7xl justify-between items-center p-6 lg:px-8">
          <div className="flex flex-row gap-16 items-center justify-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <RiBrainLine className="text-4xl" />
              <div className="font-bold text-black text-lg">KLENTHON</div>
            </div>
            <NavigationMenuDemo />
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="bg-white rounded-xl">
              <Letsgooo />
            </div>
            <MyAvatar />
          </div>
          {/* <div className="font-bold text-black">Letsgoooo</div> */}
        </div>
      </div>
    </>
  );
}
