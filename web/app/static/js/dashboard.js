angular.module('ChronoLogger', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
).directive('timeLine', function() {
	// this function renders the entire Google Chart containter. Trigger it using attribute: 'time-line="<data array>"'
	return function(scope, element, attrs, MonitoringService) {
		// Log element
		console.log(scope, element, attrs);
		var chart = new google.visualization.Timeline(element[0]);
		scope.$watch(attrs.timeLine, function(value) {
			//alert('New Array: '+value);
			var dataTable = new google.visualization.DataTable();

			dataTable.addColumn({ type: 'string', id: 'Position' });
			dataTable.addColumn({ type: 'string', id: 'Name' });
			dataTable.addColumn({ type: 'date', id: 'Start' });
			dataTable.addColumn({ type: 'date', id: 'End' });
			dataTable.addRows(value);

			chart.draw(dataTable);
		});
	}
});

function DashboardCtrl($scope, $http) {
	$scope.test = "hello world";
	$scope.mode = "main" // main for main page, users for user dashboard, member for member details

	$scope.scheduleData = [
			  [ 'President',          'George Washington', new Date(1789, 3, 29), new Date(1797, 2, 3)],
			  [ 'President',          'John Adams',        new Date(1797, 2, 3),  new Date(1801, 2, 3)],
			  [ 'President',          'Thomas Jefferson',  new Date(1801, 2, 3),  new Date(1809, 2, 3)],
			  [ 'Vice President',     'John Adams',        new Date(1789, 3, 20), new Date(1797, 2, 3)],
			  [ 'Vice President',     'Thomas Jefferson',  new Date(1797, 2, 3),  new Date(1801, 2, 3)],
			  [ 'Vice President',     'Aaron Burr',        new Date(1801, 2, 3),  new Date(1805, 2, 3)],
			  [ 'Vice President',     'George Clinton',    new Date(1805, 2, 3),  new Date(1812, 3, 19)],
			  [ 'Secretary of State', 'John Jay',          new Date(1789, 8, 25), new Date(1790, 2, 21)],
			  [ 'Secretary of State', 'Thomas Jefferson',  new Date(1790, 2, 21), new Date(1793, 11, 30)],
			  [ 'Secretary of State', 'Edmund Randolph',   new Date(1794, 0, 1),  new Date(1795, 7, 19)],
			  [ 'Secretary of State', 'Timothy Pickering', new Date(1795, 7, 19), new Date(1800, 4, 11)],
			  [ 'Secretary of State', 'Charles Lee',       new Date(1800, 4, 12), new Date(1800, 5, 4)],
			  [ 'Secretary of State', 'John Marshall',     new Date(1800, 5, 12), new Date(1801, 2, 3)],
			  [ 'Secretary of State', 'Levi Lincoln',      new Date(1801, 2, 4),  new Date(1801, 4, 0)],
			  [ 'Secretary of State', 'James Madison',     new Date(1801, 4, 1),  new Date(1809, 2, 2)]];

	$scope.toggleView = function(newView) {
		$scope.mode = newView;
	}

	/*
	$http.get("/api/getAllSamples")
		.success(function(data, status, headers, config) {
			$scope.sampleData = data.sample;
		})
		.error(function(data, status, headers, config) {
			alert("Error getting data. Check console for details.");
			console.log(status);
		});

*/

}