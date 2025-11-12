import { render } from "@astrojs/test";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Badge from "../components/Badge.astro";

describe("Badge component", () => {
  it("renderiza el contenido del slot", async () => {
    await render(Badge, { slots: { default: "Frontend" } });
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("tiene las clases base de estilo", async () => {
    const { container } = await render(Badge, { slots: { default: "Tag" } });
    const span = container.querySelector("span");
    expect(span).toHaveClass("bg-blue-100", "text-blue-800", "font-medium");
  });
});
