
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Gaming Website" },
      { name: "description", content: "Welcome to our gaming website." },
    ],
    links: [{ rel: "icon", href: "/pakvip/images/favico.ico" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="fixed inset-0 h-dvh w-full bg-[#111] overflow-hidden m-0 p-0">
      <iframe
        className="h-full w-full border-0 block"
        src="/pakvip/index.html"
        title="My Gaming Website"
        allow="fullscreen"
      />
    </main>
  );
}
