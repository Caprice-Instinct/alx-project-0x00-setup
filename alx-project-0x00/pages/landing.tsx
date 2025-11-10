import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Small"
        styles="border px-2 py-1 text-sm bg-blue-500 text-white rounded-sm"
      />
      <Button
        title="Medium"
        styles="border px-4 py-2 text-base bg-green-500 text-white rounded-md"
      />
      <Button
        title="Large"
        styles="border px-6 py-3 text-lg bg-red-500 text-white rounded-full"
      />
      <Button
        title="Small Rounded SM"
        styles="border px-2 py-1 text-sm bg-purple-500 text-white rounded-sm"
      />
      <Button
        title="Medium Rounded MD"
        styles="border px-4 py-2 text-base bg-orange-500 text-white rounded-md"
      />
      <Button
        title="Large Rounded Full"
        styles="border px-6 py-3 text-lg bg-pink-500 text-white rounded-full"
      />
    </div>
  );
};
export default Landing;
