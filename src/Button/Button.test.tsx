import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "./index";

it("button", () => {
  const { container } = render(<Button>ボタン</Button>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      class="sc-bdVaJa dwVJQt"
    >
      ボタン
    </button>
  `);
});
