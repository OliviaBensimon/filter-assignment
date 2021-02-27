// wait for dom ready
document.addEventListener("DOMContentLoaded", function (e) {
	/**
	 * Capture all filters into a NodeList
	 */
	const filter_dropdowns = document.querySelectorAll("select.filter");

	/**
	 * Listen to each filter dropdown for a change and fire the filter function
	 */
	filter_dropdowns.forEach(function (filter_dropdown) {
		filter_dropdown.addEventListener("change", function (e) {
			/**
			 * on change, run the filter_movies function
			 * which will re-evaluate all three dropdown selections and generate
			 * a fresh selector for the filters
			 */
			filter_mayors();
		});
	});
});

/**
 * This function grabs the value of each dropdown and builds
 * a combined class to show/hide
 */
function filter_mayors() {
	/**
	 * Capture the value of each dropdown
	 */
	const party_class = document.querySelector("#party").value;
	const priority_class = document.querySelector("#priority").value;
	const issue_class = document.querySelector("#issue").value;

	/**
	 * Remove .active from each active item
	 */
	const active_items = document.querySelectorAll(".item.active");

	active_items.forEach(function (item) {
		item.classList.remove("active");
	});

	/**
	 * Show items that match the dropdowns
	 */
	const filtered_items = document.querySelectorAll(`.item.${party_class}.${priority_class}.${issue_class}`);

	filtered_items.forEach(function (item) {
		item.classList.add("active");
	});
}