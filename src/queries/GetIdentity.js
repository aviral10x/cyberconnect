import { useEffect, useState } from "react";
import { DEMO_ADDRESS, CYBERCONNECT_ENDPOINT } from "../helpers/constants";
import { GraphQLClient, gql } from "graphql-request";

// Initialize the GraphQL Client
const client = new GraphQLClient(CYBERCONNECT_ENDPOINT);

// You can add/remove fields in query
export const GET_IDENTITY = gql`
  query ($address: String!) {
    identity(address: $address) {
      domain
      followerCount
      followingCount
    }
  }
`;

// You can change the below variables
const variables = {
  address: DEMO_ADDRESS,
};

export default function GetIdentity() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [identity, setIdentity] = useState([]);

  useEffect(() => {
    client
      .request(GET_IDENTITY, variables)
      .then((res) => {
        setLoading(false);
        setIdentity(res?.identity);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  return (
    <div>
      <h1>Identity</h1>
      {identity && (
        <div className="table">
          <div className="item">
            <div>Domain</div>
            <div>{identity.domain ? identity.domain : "-"}</div>
          </div>
          <div className="item">
            <div>Followers (count)</div>
            <div>{identity.followerCount}</div>
          </div>
          <div className="item">
            <div>Followings (count)</div>
            <div>{identity.followingCount}</div>
          </div>
        </div>
      )}
    </div>
  );
}
