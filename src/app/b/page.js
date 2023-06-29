import Filepicker from "@/components/filepicker";
import Accordion from "@/components/accordion";


const accordianData = [
  {
    id: 1,
    title:
      "Free and finest digital 1 HFJHG KJGKJH KHJGJ SDFGLKJGLKSDFG ,SJDFGNSDFKLGNSDF,M.G SDFGH",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
    atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
    dolore porro! Recusandae tempore doloremque molestias dolor. In
    facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
    ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
    omnis adipisci natus. Voluptas, fuga.`,
  },
  {
    id: 2,
    title: "Free and finest digital 2",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
    atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
    dolore porro! Recusandae tempore doloremque molestias dolor. In
    facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
    ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
    omnis adipisci natus. Voluptas, fuga.`,
  },
  {
    id: 3,
    title: "Free and finest digital 3",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
    atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
    dolore porro! Recusandae tempore doloremque molestias dolor. In
    facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
    ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
    omnis adipisci natus. Voluptas, fuga.`,
  },
  {
    id: 4,
    title: "Free and finest digital 4",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
    atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
    dolore porro! Recusandae tempore doloremque molestias dolor. In
    facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
    ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
    omnis adipisci natus. Voluptas, fuga.`,
  },
  {
    id: 5,
    title: "Free and finest digital 5",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
    atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
    dolore porro! Recusandae tempore doloremque molestias dolor. In
    facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
    ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
    omnis adipisci natus. Voluptas, fuga.`,
  },
  {
    id: 6,
    title: "Free and finest digital 6",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
    atque minus adipisci hic laborum, aliquid, mollitia at rem aliquam
    dolore porro! Recusandae tempore doloremque molestias dolor. In
    facilis deserunt qui voluptatum, fuga sapiente laboriosam tenetur eius
    ad nam quisquam, perspiciatis saepe atque , quam dolorum accusamus
    omnis adipisci natus. Voluptas, fuga.`,
  },
];

export default function Home() {
  return (
    <div>

      <Filepicker
        // logoContainer="bg-pink-light rounded-none"
        //  image="/images/image2.jpg"
        text="Choose File"
      //  chooseFileContainer="bg-gray rounded-none"
      // paragraph="text-pink "
      />
      <Accordion
        data={accordianData}
        summaryStyle="bg-gray" />
    </div>
  );
}
