"use client";

import { useCallback, useRef, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard, type PieceDropHandlerArgs } from "react-chessboard";

export type Puzzle = { name: string; fen: string; url: string };

function sideToMove(fen: string): "white" | "black" {
  return fen.split(" ")[1] === "b" ? "black" : "white";
}

export default function PuzzleTrainer({ puzzles }: { puzzles: Puzzle[] }) {
  const [idx, setIdx] = useState(0);
  const gameRef = useRef(new Chess(puzzles[0].fen));
  const [fen, setFen] = useState(puzzles[0].fen);
  const [orientation, setOrientation] = useState<"white" | "black">(
    sideToMove(puzzles[0].fen),
  );

  const load = useCallback(
    (i: number) => {
      const p = puzzles[i];
      gameRef.current = new Chess(p.fen);
      setIdx(i);
      setFen(p.fen);
      setOrientation(sideToMove(p.fen));
    },
    [puzzles],
  );

  const onPieceDrop = useCallback(
    ({ sourceSquare, targetSquare }: PieceDropHandlerArgs) => {
      if (!targetSquare) return false;
      try {
        gameRef.current.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: "q",
        });
        setFen(gameRef.current.fen());
        return true;
      } catch {
        return false; // illegal move — snap back
      }
    },
    [],
  );

  const puzzle = puzzles[idx];
  const startFen = puzzle.fen;
  const moved = fen !== startFen;
  const turn = gameRef.current.turn() === "w" ? "White" : "Black";

  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">
          Puzzle {idx + 1} of {puzzles.length}
        </span>
        <span className="font-medium">{turn} to move</span>
      </div>

      <div className="mx-auto mt-3 max-w-[440px]">
        <Chessboard
          options={{
            id: "puzzle-board",
            position: fen,
            onPieceDrop,
            boardOrientation: orientation,
            darkSquareStyle: { backgroundColor: "#6b8bb5" },
            lightSquareStyle: { backgroundColor: "#e9edf2" },
            boardStyle: { borderRadius: "0.5rem", overflow: "hidden" },
            animationDurationInMs: 200,
          }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => load(idx)}
          disabled={!moved}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground/80"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => load(Math.max(0, idx - 1))}
          disabled={idx === 0}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground/80"
        >
          &larr; Prev
        </button>
        <button
          type="button"
          onClick={() => load(Math.min(puzzles.length - 1, idx + 1))}
          disabled={idx === puzzles.length - 1}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground/80"
        >
          Next &rarr;
        </button>
        <a
          href={puzzle.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-accent transition-colors hover:border-accent"
        >
          Analyze on Lichess &#8599;
        </a>
      </div>
    </div>
  );
}
