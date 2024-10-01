import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
  // @ts-ignore
  export function Popup({ onAddNote }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    onAddNote({
      desc: text,
      name: name,
      filesize: "",
      close: true,
      tag: { isOpen: true, tagTitle: name, tagColor: "green" },
    });

    setName("");
    setText("");

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => setOpen(true)}
      >
        <FaPlus />
      </Button>
      <DialogContent className="sm:max-w-[425px] w-full max-w-[90%] bg-gray-900 text-white rounded-lg shadow-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add Notes</DialogTitle>
          <DialogDescription className="text-sm">
            Write Notes for the Future you. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="text" className="text-right">
              Write here
            </Label>
            <Input
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="col-span-3 bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
