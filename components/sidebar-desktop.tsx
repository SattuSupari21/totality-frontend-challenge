import SidebarContent from "./sidebar-content";
import { Button } from "./ui/button";

export default function SidebarDesktop() {
  return (
    <div className=" min-[700px]:w-[800px] flex flex-col gap-6 pr-8">
      <span className="font-semibold text-xl mr-16">Filters</span>
      <SidebarContent />
      <Button>Apply Filters</Button>
    </div>
  );
}
