import { twitterVerify } from "@cyberlab/social-verifier";

function VerifyButton({ handle }) {
  const handleOnClick = async () => {
    // Get the MetaMask wallet address
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    // Check clause for handle
    if (!handle) return;

    // Verify the Twitter account
    try {
      await twitterVerify(accounts[0], handle);
      alert(`Success: you've verified ${handle}!`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button className="verifyButton" onClick={handleOnClick}>
      Verify Twitter
    </button>
  );
}

export default VerifyButton;
