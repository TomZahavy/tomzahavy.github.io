import type { Metadata } from "next";
import { publications } from "@/lib/data";
import PublicationList from "@/components/PublicationList";

export const metadata: Metadata = {
  title: "Publications — Tom Zahavy",
};

export default function PublicationsPage() {
  const ranked = [...publications].sort((a, b) => b.citations - a.citations);

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-semibold tracking-tight">Publications</h1>
      <p className="mt-2 text-sm text-muted">
        Ordered by citation count. Filter by domain or method.
      </p>

      <PublicationList publications={ranked} />
    </div>
  );
}
