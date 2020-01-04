import React from "react";
import styled, { css } from "styled-components";
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

  it("haveStyleRule", () => {
    const { container } = render(<Button isError={true}>ボタン</Button>);
    expect(container.firstChild).toHaveStyleRule("border", "2px solid tomato");
  });

  it("リスト内にあるボタンの border-color がオレンジ色になること", () => {
    const List = styled.div`
      ${Button} {
        border-color: orange;
      }
    `;

    const { container } = render(<List><Button /></List>);
    expect(container.firstChild).toHaveStyleRule("border-color", "orange", {
      modifier: css`${Button}`
      // TODO: css 使うと TS でエラーになってしまうので後で調べる
      // Type 'FlattenSimpleInterpolation' is not assignable to type 'string'.
    });
  });
});
