type Stats = {
  tps: number;
  hostlist: number;
  activeProvisioners: number;
  activeStake: number;
  waitingProvisioners: number;
  waitingStake: number;
  lastBlock: number;
  txs100blocks: {
    transfers: number;
    failed: number;
  };
};

enum TransactionContract {
  Transfer = "Transfer",
}

enum TransactionMethod {
  Transfe = "Transfer",
}

type Transaction = {
  blockhash: string;
  blockheight: number;
  feepaid: number;
  gasspent: number;
  txerror: string;
  success: boolean;
  blockts: number;
  blocktimestamp: string;
  gaslimit: number;
  gasprice: number;
  txid: string;
  txtype: string;
  contract: TransactionContract;
  method: TransactionMethod;
};
type Transactions = Transaction[];

type Block = {
  header: {
    feespaid: number;
    hash: string;
    prevblockhash: string;
    reward: number;
    seed: string;
    height: number;
    ts: number;
    timestamp: string;
    version: string;
  };
  transactions: {
    data: Transactions;
    stats: {
      gasUsed: number;
      averageGasPrice: number;
      gasLimit: number;
    };
  };
};
type Blocks = Blocks[];

export type { Stats, Block, Blocks, Transaction, Transactions };
