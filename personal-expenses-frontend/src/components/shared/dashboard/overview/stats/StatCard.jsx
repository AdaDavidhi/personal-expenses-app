import { Card, CardDescription, CardFooter, CardTitle, CardHeader } from "@/components/ui/card";

const StatCard = ({title, subtitle, icon, stat}) => {
  return (
    <Card className="bg-gray-800 border-cyan-900/50 text-gray-200">
      <CardHeader>
        <div>
           <p className="font-semibold font-stretch-50% text-lg">{title}</p>
           <p className="text-sm text-gray-400">({subtitle})</p>
        </div>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-between w-full items-center">
            <CardTitle className="text-3xl">{stat}</CardTitle>
            <CardDescription className="rounded-full bg-cyan-600/30 text-cyan-500 p-2.5">{icon}</CardDescription>
        </div>
      </CardFooter>
    </Card>
  )
}

export default StatCard