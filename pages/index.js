import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ActionCard from "../components/ActionCard"
export default function Home() {
  return (
    <>
      <section className="text-gray-400 bg-gray-1000 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Base64 Encoder and Decoder
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Available options
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
          <ActionCard heading="Base64 Encode" subHeading="Encode" buttonLabel="Encode" message="Enter the message you want to encode"/>
          <ActionCard heading="Base64 Decode" subHeading="Decode" buttonLabel="Decode" message="Enter the message you want to decode"/>
          </div>
        </div>
      </section>
    </>
  );
}
