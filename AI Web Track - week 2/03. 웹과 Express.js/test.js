function getData() {
	$.ajax({
		method: "GET",
		url: "http://localhost:3000/get/list",
		success: function (res) {
			console.log(res);
		},
	});
}
