import { TransactionSignature, ConfirmOptions } from '@solana/web3.js';

export interface Transaction {
  signature: TransactionSignature;
  blockTime: number;
  confirmationStatus: ConfirmOptions;
}

export interface TransactionListProps {
  numTx: number;
}