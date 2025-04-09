
import { CheckCircle, AlertTriangle, XCircle, HelpCircle } from "lucide-react";
import { cn } from "../../lib/utils";

export default function FactCheckBadge({ rating, className }) {
  const getBadgeContent = () => {
    switch (rating) {
      case "Verified":
        return {
          icon: <CheckCircle className="h-3 w-3 mr-1" />,
          text: "Fact-Checked",
          bgColor: "bg-green-50 dark:bg-green-950",
          textColor: "text-green-700 dark:text-green-400",
          borderColor: "border-green-200 dark:border-green-800",
        };
      case "Partially True":
        return {
          icon: <AlertTriangle className="h-3 w-3 mr-1" />,
          text: "Partially True",
          bgColor: "bg-amber-50 dark:bg-amber-950",
          textColor: "text-amber-700 dark:text-amber-400",
          borderColor: "border-amber-200 dark:border-amber-800",
        };
      case "False":
        return {
          icon: <XCircle className="h-3 w-3 mr-1" />,
          text: "False Information",
          bgColor: "bg-red-50 dark:bg-red-950",
          textColor: "text-red-700 dark:text-red-400",
          borderColor: "border-red-200 dark:border-red-800",
        };
      case "Unverified":
        return {
          icon: <HelpCircle className="h-3 w-3 mr-1" />,
          text: "Unverified",
          bgColor: "bg-gray-50 dark:bg-gray-900",
          textColor: "text-gray-700 dark:text-gray-400",
          borderColor: "border-gray-200 dark:border-gray-800",
        };
      default:
        return {
          icon: <HelpCircle className="h-3 w-3 mr-1" />,
          text: "Unverified",
          bgColor: "bg-gray-50 dark:bg-gray-900",
          textColor: "text-gray-700 dark:text-gray-400",
          borderColor: "border-gray-200 dark:border-gray-800",
        };
    }
  };

  const content = getBadgeContent();

  return (
    <div
      className={cn(
        "inline-flex items-center text-xs px-2 py-1 border",
        content.bgColor,
        content.textColor,
        content.borderColor,
        className
      )}
    >
      {content.icon}
      <span>{content.text}</span>
    </div>
  );
}
