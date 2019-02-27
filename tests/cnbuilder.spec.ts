import cnb from "../src";

describe("cnbuilder", () => {
    it("should build from strings", () => {
        expect(cnb("foo", "bar", "baz")).toBe("foo bar baz");
    });

    it("should build from array", () => {
        expect(cnb(["foo", "bar", "baz"])).toBe("foo bar baz");
    });

    it("should build from nested arrays", () => {
        expect(cnb(["foo", ["bar", "baz"]])).toBe("foo bar baz");
    });

    it("should build from objects", () => {
        expect(
            cnb({
                    foo: true,
                    bar: true,
                    baz: true,
                    bax: false,
                }),
        ).toBe("foo bar baz");
    });

    it("should build from mixed args", () => {
        expect(
            cnb("foo", ["bar", {baz: true, bux: false}], {bax: true, abc: false}),
        ).toBe("foo bar baz bax");
    });

    it("should ignore wrong args", () => {
        expect(
            cnb(
                //@ts-ignore
                "foo",
                ["bar", {baz: true, bux: false}],
                {
                    bax: true,
                    abc: false,
                },
                false,
                123,
                () => {},
            ),
        ).toBe("foo bar baz bax");
    });

    it("should return empty string on empty call", () => {
        //@ts-ignore
        expect(cnb()).toBe("");
    });

    it("should ignore empty strings, empty arrays, empty build results (not add extra spaces)", () => {
        //@ts-ignore
        expect(cnb([""], "foo", {"": true}, "bar", "", "baz", [])).toBe(
            "foo bar baz",
        );
    });
});
