import { mount } from "enzyme";
import React from "react";

import { IncrementalButton } from "../../src/components/IncrementalButton";

describe("Form", () => {
  test("should prevent multiple submit", () => {
    expect.assertions(1);

    const DOM = mount(<IncrementalButton />);

    const form = DOM.find(IncrementalButton);
    expect(form).toHaveLength(1);
  });
});
