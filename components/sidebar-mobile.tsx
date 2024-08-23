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
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex items-center justify-between gap-2">
              <Button className="flex-1">Apply Filters</Button>
              <DrawerClose className="flex-1" asChild>
                <Button variant={"secondary"}>Close</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
