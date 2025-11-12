import { render } from "@astrojs/test";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Header from "../components/Header.astro";

describe("Header component", () => {
  it("renderiza correctamente", async () => {
    const { container } = await render(Header);
    expect(container.querySelector("header")).toBeInTheDocument();
  });

  it("muestra los enlaces de navegación", async () => {
    await render(Header);

    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
  });
});
