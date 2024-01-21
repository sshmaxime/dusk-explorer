/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Block = {
  __typename?: 'Block';
  fees: Scalars['Int']['output'];
  gasSpent: Scalars['Int']['output'];
  header: Header;
  reward: Scalars['Int']['output'];
  transactions: Array<SpentTransaction>;
};

export type CallData = {
  __typename?: 'CallData';
  contractId: Scalars['String']['output'];
  data: Scalars['String']['output'];
  fnName: Scalars['String']['output'];
};

export type Header = {
  __typename?: 'Header';
  gasLimit: Scalars['Int']['output'];
  generatorBlsPubkey: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  iteration: Scalars['Int']['output'];
  prevBlockHash: Scalars['String']['output'];
  seed: Scalars['String']['output'];
  stateHash: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  txRoot: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  block?: Maybe<Block>;
  blockTxs: Array<SpentTransaction>;
  blocks: Array<Block>;
  mempoolTx?: Maybe<Transaction>;
  mempoolTxs: Array<Transaction>;
  transactions: Array<SpentTransaction>;
  tx?: Maybe<SpentTransaction>;
};


export type QueryBlockArgs = {
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryBlockTxsArgs = {
  contract?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryBlocksArgs = {
  last?: InputMaybe<Scalars['Int']['input']>;
  range?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryMempoolTxArgs = {
  hash: Scalars['String']['input'];
};


export type QueryTransactionsArgs = {
  last: Scalars['Int']['input'];
};


export type QueryTxArgs = {
  hash: Scalars['String']['input'];
};

export type SpentTransaction = {
  __typename?: 'SpentTransaction';
  blockHash: Scalars['String']['output'];
  blockHeight: Scalars['Int']['output'];
  blockTimestamp: Scalars['Int']['output'];
  err?: Maybe<Scalars['String']['output']>;
  gasSpent: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  raw: Scalars['String']['output'];
  tx: Transaction;
};

export type Transaction = {
  __typename?: 'Transaction';
  callData?: Maybe<CallData>;
  gasLimit: Scalars['Int']['output'];
  gasPrice: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  raw: Scalars['String']['output'];
};

export type GetBlockByHashQueryVariables = Exact<{
  hash: Scalars['String']['input'];
}>;


export type GetBlockByHashQuery = { __typename?: 'Query', block?: { __typename?: 'Block', header: { __typename?: 'Header', height: number } } | null };

export type GetBlockByHeightQueryVariables = Exact<{
  height: Scalars['Float']['input'];
}>;


export type GetBlockByHeightQuery = { __typename?: 'Query', block?: { __typename?: 'Block', header: { __typename?: 'Header', height: number } } | null };


export const GetBlockByHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlockByHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlockByHashQuery, GetBlockByHashQueryVariables>;
export const GetBlockByHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlockByHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlockByHeightQuery, GetBlockByHeightQueryVariables>;