QUnit.module("sortCarByYearDescendingly", async function () {
  QUnit.test("cars", async function (assert) {
    const input = await getCars();
    const output = [...input].sort((a, b) => b.year - a.year);

    // Make sure this function is not being used!
    input.sort = function () {
      assert.notOk(true, "Please don't use sort, it's cheating :)");
    };

    assert.deepEqual(sortCarByYearDescendingly(input), output);
  });
});
