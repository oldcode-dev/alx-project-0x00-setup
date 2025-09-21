import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Book a flat" styles="rounded-sm" />
      <Button title="Book a flat" styles="rounded-lg" />
      <Button title="Book a flat" styles="rounded-full" />
    </div>
  )
}
export default Landing