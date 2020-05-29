import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import Categories from "../../src/js/components/categories";

test("Emulando el request http", async () => {
  const mock = new MockAdapter(axios);

  mock
    .onGet(
      "https://comolohago.cl/wp-json/wp/v2/categories?include=343,24,182,1695,440"
    )
    .reply(200, [
      { id: 1, name: "Comida" },
      { id: 2, name: "Manualidadeeeeeeeees" },
    ]);

  const onClick = jest.fn();
  const container = render(<Categories categories={[]} onClick={onClick} />);

  // asserts
  waitFor(() => {
    const categoriesGrid = container.getByTestId("categories-grid-element");
    const manualidadesButton = container.getByText("Manualidadeeeeeeeees");

    act(() => {
      fireEvent.click(manualidadesButton);
    });

    expect(categoriesGrid).toBeInTheDocument();
    expect(onClick).toBeCalled();
    expect(onClick).toBeCalledWith(2);
  });
});

test.skip("El componente renderea", async () => {
  const onClick = jest.fn();
  const component = render(<Categories onClick={onClick} categories={[]} />);
  const componentWithElements = render(
    <Categories onClick={onClick} categories={[{ id: 1, name: "Comida" }]} />
  );

  expect(component.container).toMatchSnapshot();
  expect(componentWithElements.container).toMatchSnapshot();
});

test.skip("Categorias renderean y onClick funciona", async () => {
  const onClick = jest.fn();
  const container = render(
    <Categories
      categories={[
        { id: 1, name: "Comida" },
        { id: 2, name: "Manualidades" },
      ]}
      onClick={onClick}
    />
  );

  // asserts
  const categoriesGrid = container.getByTestId("categories-grid-element");
  const manualidadesButton = container.getByText("Manualidades");

  act(() => {
    fireEvent.click(manualidadesButton);
  });

  expect(categoriesGrid).toBeInTheDocument();
  expect(onClick).toBeCalled();
  expect(onClick).toBeCalledWith(2);
});
