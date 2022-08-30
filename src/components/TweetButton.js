import { twitterAuthorize } from "@cyberlab/social-verifier";

function TweetButton({ setHandle }) {
  const handleOnClick = async () => {
    // Get the MetaMask wallet address
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // Prompt to enter the Twitter handle
    const handle = prompt("Enter your Twitter handle:");

    // Check clause for handle
    if (!handle) return;

    // Update the state for handle
    setHandle(handle);

    // Generate the signature
    const sig = await twitterAuthorize(window.ethereum, accounts[0], handle);

    // The message that the user posts on Twitter
    const message = `Verifying my Web3 identity on @cyberconnecthq: %23LetsCyberConnect %0A ${sig}`;

    // Open new window so that the user can post on Twitter
    window.open(`https://twitter.com/intent/tweet?text=${message}`, "_blank");
  };

  return (
    <button className="tweetButton" onClick={handleOnClick}>
      Tweet message
    </button>
  );
}

export default TweetButton;
