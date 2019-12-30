import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { render } from "@testing-library/react";
import Button from "./index";

describe("button", () => {
  it("normal", () => {
    const { container } = render(<Button>ボタン</Button>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        border: 2px solid white;
      }

      <button
        class="c0"
      >
        ボタン
      </button>
    `);
  });

  it("error", () => {
    const { container } = render(<Button isError={true}>ボタン</Button>);
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
});
