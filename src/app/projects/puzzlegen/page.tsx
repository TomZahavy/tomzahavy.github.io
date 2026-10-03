import type { Metadata } from "next";
import MovedPage from "@/components/MovedPage";

export const metadata: Metadata = {
  title: "PuzzleGen — Tom Zahavy",
  robots: { index: false },
};

export default function PuzzleGenMoved() {
  return <MovedPage to="/projects/chess#puzzlegen" title="PuzzleGen" />;
}
