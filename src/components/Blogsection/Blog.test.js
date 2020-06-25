import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Blog from "./BlogComponents/Blog";

describe("<Blog />", () => {
  test("When a blog is initially displayed, it only shows its title and author.", () => {
    const blog = {
      title: "Testing",
      author: "Benizio Mauritest",
      url: "http:localhost:3000/blogs",
      user: "maurirlz",
    };

    const likeMock = jest.fn();
    const deleteMock = jest.fn();

    const component = render(
      <Blog likeHandler={likeMock} deleteHandler={deleteMock} blog={blog} />
    );

    expect(component.container).toHaveTextContent("Testing");
    expect(component.container).toHaveTextContent("Benizio Mauritest");
    expect(component.container).not.toHaveTextContent(
      "http:localhost:3000/blogs"
    );
    expect(component.container).not.toHaveTextContent("maurirlz");
  });
});
