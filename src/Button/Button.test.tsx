import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { render } from "@testing-library/react";
import Button from "./index";

it("button", () => {
  const { container } = render(<Button>ボタン</Button>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      border: 2px solid tomato;
    }

    <button
      class="c0"
    >
      ボタン
    </button>
  `);
});
