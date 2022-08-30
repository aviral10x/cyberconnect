import ConnectButton from "./components/ConnectButton";
import FollowButton from "./components/FollowButton";
import TweetButton from "./components/TweetButton";
import VerifyButton from "./components/VerifyButton";
import { useState } from "react";

export default function App() {

  const [handle, setHandle] = useState<string>("");

  return (
    <div className="container">
      <h1>Create a Connection</h1>
      <ConnectButton></ConnectButton>
      <FollowButton></FollowButton>
      <h1>Verify a Twitter account</h1>
    
      <TweetButton setHandle={setHandle}></TweetButton>
      <VerifyButton handle={handle}></VerifyButton>
    </div>
  );
}






