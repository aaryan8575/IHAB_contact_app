import ColorPicker from "@/components/colorpicker";
import TextComponent from "@/components/inputcomponent";

export default function Home() {
  return (
    <main>
      <ColorPicker />
      <TextComponent
        label="First Name"
        type="text"
        width="full"
        required="true"
      />
      <TextComponent label="Phone Number" type="number" width="full" />
      <TextComponent label="Email" type="email" width="full" />
      <TextComponent
        id="message"
        label="Password"
        type="password"
        width="full"
        image="https://cdn-icons-png.flaticon.com/512/6405/6405909.png"
      />
      <TextComponent />
    </main>
  );
}
