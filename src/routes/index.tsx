import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pakvip - Best Online Casinos in Pakistan | Free Bonus Games" },
      {
        name: "description",
        content:
          "Official Pakvip Pakistan: Win Go Lottery, Aviator, JILI Slots, Live Casino & Fishing with instant JazzCash & EasyPaisa payouts.",
      },
      {
        property: "og:title",
        content: "Pakvip - Best Online Casinos in Pakistan",
      },
      {
        property: "og:description",
        content:
          "Official Pakvip Pakistan: Win Go Lottery, Aviator, JILI Slots, Live Casino & Fishing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/pakvip/images/favico.ico" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="fixed inset-0 h-dvh w-full bg-[#111] overflow-hidden m-0 p-0">
      <iframe
        className="h-full w-full border-0 block m-0 p-0"
        src="https://www.pakvip21.com/"
        title="Pakvip Official"
        allow="fullscreen; payment; camera; microphone; geolocation"
      />
    </main>
  );
}
