import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>NextJS App Router Template with Tailwind CSS, ShadcnUI, and Mongodb Initialisation</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}

export default Home