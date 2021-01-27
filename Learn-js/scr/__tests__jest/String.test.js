import { revertString } from "../../utils_to_testing/String.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});
