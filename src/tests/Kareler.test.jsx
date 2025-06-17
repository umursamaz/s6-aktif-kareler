import { beforeEach, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import fs from "fs/promises";

import Kareler from "../Kareler";
const squareIds = ["sqA", "sqB", "sqC", "sqD"];

function hasUseState(codeString) {
  return (
    codeString.includes("useState") || codeString.includes("React.useState")
  );
}

let container;
beforeEach(() => {
  ({ container } = render(<Kareler />));
});

test("Dosyada state kullanılıyor mu", async () => {
  const filePath = "./src/Kareler.jsx";
  const code = await fs.readFile(filePath, "utf-8");
  expect(hasUseState(code)).toBe(true);
});

test("Kareler ekranda doğru şekilde oluşmuş", () => {
  squareIds.forEach((id) => {
    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
});

test("Sayfa ilk yüklendiğinde seçili bir kare yok", () => {
  squareIds.forEach((id) => {
    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
  expect(container.querySelectorAll(".active")).toHaveLength(0);
});

test("Tıklanan kareye active classı ekleniyor.", () => {
  squareIds.forEach((id) => {
    fireEvent.click(screen.getByTestId(id));
    expect(screen.getByTestId(id)).toHaveClass("active");
  });
});

test("Bir kareye 2 kere tıklanınca active classı eklenip kaldırılıyor", () => {
  fireEvent.click(screen.getByTestId("sqA"));
  expect(screen.getByTestId("sqA")).toHaveClass("active");
  fireEvent.click(screen.getByTestId("sqA"));
  expect(screen.getByTestId("sqA")).not.toHaveClass("active");
});

test("Bir kareye tıklanınca diğer karalerdeki active classı kaldırılıyor", () => {
  squareIds.forEach((id) => {
    fireEvent.click(screen.getByTestId(id));
    expect(document.querySelectorAll(".active")).toHaveLength(1);
  });
});
