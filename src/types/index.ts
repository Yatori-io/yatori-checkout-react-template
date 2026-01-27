export interface CheckoutData {
  signature: string;
  status: string;
}

export interface TransactionDetails {
  signature: string;
  slot: number;
  blockTime: number | null;
  fee: number | undefined;
  status: string;
}

export interface LocationState {
  signature: string;
  amount: number;
  productName: string;
  productPrice: number;
  transactionDetails?: TransactionDetails;
}
