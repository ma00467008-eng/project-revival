import { createFileRoute } from "@tanstack/react-router";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pakvip- Best Online Casinos in Pakistan, Free bonus games Pakistan" },
      {
        name: "description",
        content: "Pakvip- Best Online Casinos in Pakistan, Free bonus games Pakistan",
      },
      {
        property: "og:title",
        content: "Pakvip- Best Online Casinos in Pakistan, Free bonus games Pakistan",
      },
      {
        property: "og:description",
        content: "Pakvip- Best Online Casinos in Pakistan, Free bonus games Pakistan",
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
    <main className="fixed inset-0 h-dvh w-full bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/pakvip/index.html"
        title="Pakvip home page"
      />
    </main>
  );
}
