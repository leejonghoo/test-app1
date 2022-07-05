import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { fetchData } from "./fetcher";

test("checkbox의 첫 상태는 checked=false", () => {
  render(<App />);

  const checkBox = screen.getByRole("checkbox"); // <-- element 찾는 방법
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox); // <-- fireEvent 사용방법
}); // toBeChecked

describe.skip("버튼 color", () => {
  test("버튼의 initial color는 red", () => {
    render(<App />);
    const button = screen.getByRole("button");

    expect(button).toHaveStyle({ backgroundColor: "red" });
  }); // toHaveStyle

  test("버튼이 클릭되면 blue로 색이 바뀜", () => {
    render(<App />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(button).toHaveStyle({ backgroundColor: "blue" });
  }); // fireEvent.click(button)
});

describe("unit test", () => {
  test("json data를 id로 fetch 할 수 있다.", async () => {
    const res = await fetchData(4);
    expect(res.id).toEqual(4);
  });
});
