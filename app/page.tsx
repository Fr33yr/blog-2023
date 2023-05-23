import Image from "next/image";
import {PostLink} from '../components/index'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <PostLink id="2" description="asd" title="asd" date="May 23"/>
        <PostLink id="2" description="asd" title="asd" date="May 23"/>
        <PostLink id="2" description="asd" title="asd" date="May 23"/>
      </div>
    </>
  );
}
