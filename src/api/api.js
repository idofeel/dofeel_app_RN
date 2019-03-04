// let REQUEST_URL = 'http://da.isayb.com/ishome/daily.php';

function Ajax(
	options = {
		url: '',
		type: 'GET',
		dataType: 'JSON',
		data: {},
		success: function() {},
		error: function() {}
	}
) {
	fetch(options.url, {
		method: options.type || 'GET',
		body: options.data
	})
		.then((result) => {
			if (result.ok) {
				result.json().then((obj) => {
					options.success(obj);
				});
			}
		})
		.catch((error) => {
			options.error(error);
		});
}

export default Ajax;
