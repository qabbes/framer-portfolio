import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const CustomAlert = ({ title, setIsAlertOpen, isAlertOpen }) => {
  return (
    <AlertDialog className="w-[400px] bg-white" open={isAlertOpen} onOpenChange={setIsAlertOpen}>
      <AlertDialogTrigger asChild>
        <button style={{ display: "none" }}></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="text-center leading-8 ">
          <AlertDialogTitle>
            Sorry,
            <br />
            {title}
            {title === "Issue Tracker" ? " is under maintenance" : " is under construction"}
          </AlertDialogTitle>
        </div>
        <AlertDialogDescription>
          <span className="">{title} </span>
          {title === "Issue Tracker"
            ? " is being deployed and will be back soon"
            : " is currently being built, ETC Q1 2025"}
        </AlertDialogDescription>
        <AlertDialogAction
          className="flex items-center justify-center w-[70px] h-[30px] text-white rounded-md"
          onClick={() => setIsAlertOpen(false)}>
          Ok
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlert;
