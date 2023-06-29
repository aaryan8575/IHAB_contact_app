

import BarChart from "@/component/BarChart";
import ImagePicker from "@/component/ImagePicker";
export default function Home() {
  return (
    <>
      <BarChart/>
      <ImagePicker
        logoStyle="rounded-full"
        logoSrc="/noprofile.jpeg"
        placeholderText="change photo"
        buttonBack="bg-red-400"
      />
    </>
  );
}
