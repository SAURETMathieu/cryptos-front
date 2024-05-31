import CreateBotForm from "@/src/components/forms/createBotForm";
import { LeftSheetForm } from "@/src/components/modals/LeftSheetForm";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Settings } from "lucide-react";

export default function AddBotCard() {
  return (
    <Card className="items-between flex flex-col">
      <CardHeader className="">
        <CardTitle className="relative flex justify-between gap-2 text-xl font-medium">
          Bots
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
          >
            <Settings className="size-5" />
          </Button>
        </CardTitle>
        <CardDescription className="max-w-lg text-balance text-sm leading-relaxed">
          Automate your trading
        </CardDescription>
      </CardHeader>
      <CardFooter>
          <LeftSheetForm
            title="Create your bot"
            description="Create your bot for automate your trading strategy"
            triggerButton={<Button>Add a bot</Button>}
          >
            <CreateBotForm />
          </LeftSheetForm>
      </CardFooter>
    </Card>
  );
}
