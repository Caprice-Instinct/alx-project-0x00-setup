import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Get Started"
        styles="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full"
      />
      <Button
        title="Join us now"
        styles="border px-5 py-5 text-green rounded-full bg-yellow-500"
      />
    </div>
  );
};
export default Landing;
