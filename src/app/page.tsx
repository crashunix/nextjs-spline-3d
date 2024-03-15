import Render3D from "@/components/Render3D";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-10">
            <h1>3dzin rapai</h1>
            {/* <Image src="/logo.png" alt="logo" width={200} height={200} /> */}
            <nav className="flex items-center space-x-2">
              <a href="#">Home</a>
              <a href="#">About</a>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="relative">

          <div className="container mx-auto relative">
            x
            <div className="h-96">x</div>
            <div className="h-96">x</div>
            <div className="sticky top-0">
              <Render3D></Render3D>
            </div>
            <div className="h-96">x</div>
            <div className="h-96">x</div>
          </div>
          <div className="container mx-auto">
            alo
            <div className="h-96">x</div>
            <div className="h-96">x</div>
            <div className="h-96">x</div>
            <div className="h-96">x</div>
          </div>
        </div>
      </main>
    </main >
  );
}
