import type { Metadata } from "next";
import MovedPage from "@/components/MovedPage";

export const metadata: Metadata = {
  title: "AlphaZero db — Tom Zahavy",
  robots: { index: false },
};

export default function AlphaZeroDbMoved() {
  return <MovedPage to="/projects/chess#alphazero-db" title="AlphaZero db" />;
}
