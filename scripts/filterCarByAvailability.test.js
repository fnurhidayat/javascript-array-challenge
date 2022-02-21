QUnit.module("filterCarByAvailability", async function () {
  QUnit.test("cars", async function (assert) {
    const input = await getCars();
    const output = input.filter((i) => i.available);

    // Make sure this function is not being used!
    input.filter = function () {
      assert.notOk(true, "Please don't use filter, it's cheating :)");
    };

    assert.deepEqual(filterCarByAvailability(input), output);
  });
});
