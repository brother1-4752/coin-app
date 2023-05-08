import { atom } from "recoil";

interface ICoinDetail {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

export const darkModeState = atom({
  key: "isDark",
  default: false,
});

export const coinDetailState = atom<ICoinDetail[]>({
  key: "coinDetail",
  default: [],
});
