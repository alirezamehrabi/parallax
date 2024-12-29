"use client";

import Image from "next/image";
import { ParallaxLayer } from "../component/parallax";

export default function ParallaxPage() {
  return (
    <div>
      <div
        style={{ height: "100vh", position: "relative", overflow: "hidden" }}
      >
        {/* add bg */}
        <ParallaxLayer
          speed={-0.3}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "200vh",
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            zIndex: -2,
          }}
        />

        {/* triangles layers */}
        <ParallaxLayer
          speed={0.5}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: 'url("/background-triangles.png") no-repeat right',
            zIndex: 5,
          }}
        />

        <ParallaxLayer
          speed={-0.2}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "url('/200.webp') no-repeat",
            zIndex: -3,
          }}
        />
        <ParallaxLayer
          speed={1.0}
          style={{
            position: "absolute",
            top: "50vh",
            left: "20%",
            width: "200px",
            height: "200px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        <ParallaxLayer speed={0.7} style={{ zIndex: 2 }}>
          <h1>Welcome to My Website</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <Image
            src={"/200.webp"}
            width={200}
            height={200}
            className="block mx-auto"
            alt="A 200x200 image"
          />
        </ParallaxLayer>

        {/* main content */}
        <ParallaxLayer
          speed={0}
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <h1>Scroll Down</h1>
          <p>This is the main content</p>
          <div style={{ height: "200vh" }}></div> {/* height for scroll */}
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.7}
          style={{
            zIndex: 12,
            height: "200px",
          }}
        >
          <h2 className="text-center bg-blue-800">test text</h2>
        </ParallaxLayer>
      </div>
      <div className="bg-red-500 h-[100dvh]"></div>
    </div>
  );
}
