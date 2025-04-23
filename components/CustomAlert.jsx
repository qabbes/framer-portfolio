import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

const CustomAlert = ({ title, setIsAlertOpen, isAlertOpen }) => {
  const handleClick = (e) => {
    setIsAlertOpen(false);
    navigate("https://github.com/qabbes/issue-tracker");
  };

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
            {title === "Issue Tracker" ? (
              <Link target="_blank" href="https://github.com/qabbes/issue-tracker">
                {title}
              </Link>
            ) : (
              "ETF Dashboard"
            )}
            {title === "Issue Tracker" ? " is under maintenance" : " is under construction"}
          </AlertDialogTitle>
        </div>
        <AlertDialogDescription>
          <h1 className="text-slate-500 text-center">{title}</h1>
          {title === "Issue Tracker" ? (
            " is being deployed and will be back soon"
          ) : (
            <>
              is currently being built,{" "}
              <Link
                href="https://github.com/qabbes/etf-dashboard"
                target="_blank"
                className="text-blue-500 underline">
                check the repo
              </Link>
            </>
          )}
        </AlertDialogDescription>
        <div className="flex flex-row gap-[50px]">
          <AlertDialogAction
            className="flex items-center justify-center w-[70px] h-[30px] text-white rounded-md"
            onClick={() => setIsAlertOpen(false)}>
            Ok
          </AlertDialogAction>
          {title === "Issue Tracker" && (
            <AlertDialogAction
              className="flex bg-slate-900 items-center justify-center w-auto h-[30px] text-white rounded-md"
              onClick={() => setIsAlertOpen(false)}>
              <Link
                className="flex items-center"
                target="_blank"
                href="https://github.com/qabbes/issue-tracker">
                Visit Repo <IoLogoGithub className="ml-2" />
              </Link>
            </AlertDialogAction>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlert;
