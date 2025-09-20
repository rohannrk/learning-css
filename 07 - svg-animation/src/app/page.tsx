import { SVGComponent } from "@/components/svg-component";
import { SVGLines } from "@/components/svg-lines";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-gray-50 max-w-4xl mx-auto flex items-center flex-col py-20">
      <SVGLines />
    </main>
  );
}