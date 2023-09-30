import { Button } from "@/components/ui/button";
import Link from "next/link";

const CousePage = () => {
  return (
    <div className="p-6">
      {" "}
      <Button variant="destructive">
        {" "}
        <Link href="/teacher/create">New course</Link>
      </Button>
    </div>
  );
};

export default CousePage;
