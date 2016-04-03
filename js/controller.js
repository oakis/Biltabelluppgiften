app.controller('tabell', function($scope) {
	
	// Array with cars
	$scope.cars = [
		{
			lic: 'ABC123',
			brand: 'Volvo',
			model: 'V70',
			year: 2010,
			edit: false
		},
		{
			lic: 'DEF456',
			brand: 'Saab',
			model: '95',
			year: 2000,
			edit: false
		}
	];

	// Delete car function
	$scope.delCar = function (id) {
		if (window.confirm('Are you sure about deleting the car with licence number '+$scope.cars[id].lic)) {
			$scope.cars.splice(id);
		}
	}

	// Add car function
	$scope.addCar = function () {
		var newCar = {
			lic: document.getElementById("lic").value,
			brand: document.getElementById("brand").value,
			model: document.getElementById("model").value,
			year: document.getElementById("year").value
		}
		$scope.cars.push(newCar);
		document.getElementById("carAddForm").reset();
	}

});