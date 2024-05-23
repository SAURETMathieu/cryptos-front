import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Settings } from "lucide-react";

export default function InfosBlock() {
  return (
    <section className="w-full p-4 py-2 pb-0">
      <Card className="h-fit w-full max-w-full">
        <CardContent className="flex justify-between p-6 py-2">
          <div className="flex w-10/12 items-center justify-evenly gap-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-base font-medium">Blockchain:</span>
              <span>All</span>
            </div>
            <div className="hidden gap-4 sm:flex sm:items-center sm:justify-between">
              <span className="text-base font-medium">Transactions:</span>
              <span>2300</span>
            </div>
            <div className="hidden gap-4 md:flex md:items-center md:justify-between">
              <span className="text-base font-medium">Frais:</span>
              <span>26.06</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="size-5" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
