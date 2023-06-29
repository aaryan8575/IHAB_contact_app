import BarChart from "@/components/BarChart";
import ImagePicker from "@/components/ImagePicker";
export default function Home() {
  return (
    <>
      <BarChart />
      <ImagePicker
        logoStyle="rounded-full"
        logoSrc="/noprofile.jpeg"
        placeholderText="change photo"
        buttonBack="bg-red-400"
      />
    </>
  );
}
