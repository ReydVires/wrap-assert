module.exports = assert;

/**
 * Wrapping the assert log with some description
 * @param {boolean} value Evaluation parameter
 * @param {string} [label] Test label
 * @param {string} [failMessage] Log the message when the test is fail
 */
function assert (value, label, failMessage) {
	const assertLabel = (label) ? `${label} test` : "Test";
	const isPass = (value) ? "pass ✅" : "fail ❌";
	const message = `${assertLabel} is ${isPass}`;
	console.log(message);

	const reason = "[Reason] " + (failMessage || "Condition is not met");
	console.assert(value, reason);
}
