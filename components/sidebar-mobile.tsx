import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SidebarContent from "./sidebar-content";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function SidebarMobile() {
  return (
    <div className="flex mb-4 gap-2">
      <Input type="text" placeholder="Search for properties..." />
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"outline"}>Filters</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Select filters to apply.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <SidebarContent />
          </div>
          <DrawerFooter>
            <div className="flex items-center justify-between gap-2">
              <Button className="flex-1">Apply Filters</Button>
              <DrawerClose className="flex-1" asChild>
                <Button variant={"outline"}>Close</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
