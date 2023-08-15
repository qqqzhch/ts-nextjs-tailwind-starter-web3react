export default interface Root {
  code: number;
  data: Data;
}

export interface Data {
  status: string;
  from: From;
  to: To;
  steps: string[];
  scan: string;
  mint: string;
  attest: string;
}

export interface From {
  tx_hash: string;
  chain_id: string;
  token_address: string;
  user_address: string;
}

export interface To {
  tx_hash: string;
  chain_id: string;
  token_address: string;
  recipient: string;
}
