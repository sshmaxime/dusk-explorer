"use client";

import { graphql } from "@/config/api/gql";
import { GraphQLClient } from "graphql-request";

const endpoint = "https://nodes.dusk.network/2/Chain/";
const client = new GraphQLClient(endpoint);

const GetBlockByHash = graphql(`
  query GetBlockByHash($hash: String!) {
    block(hash: $hash) {
      header {
        height
      }
    }
  }
`);

const GetBlockByHeight = graphql(`
  query GetBlockByHeight($height: Float!) {
    block(height: $height) {
      header {
        height
      }
    }
  }
`);

const getBlockByHash = (hash: string) =>
  client.request(GetBlockByHash, { hash });

const getBlockByHeight = (height: number) =>
  client.request(GetBlockByHeight, { height });

export { getBlockByHash, getBlockByHeight };
