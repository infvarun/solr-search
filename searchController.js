angular.module('voyagerSearch',[])
    .controller('SearchCtrl', function ($scope, $http) {

        'use strict';
		
        $scope.solrUrl = "http://localhost:8983/";
		$scope.rows = "100";

        var getInput = function (query) {
            var input = 'firstname:*';
            if (query) {
                input = query;
            }
            return input;
        };

        function _build(query) {
            var queryString = $scope.solrUrl + 'solr/employees/select?q=' + getInput(query);
            queryString += '&fl=id,firstname:[firstname],lastname,email,isretired,bpnumber';  //fields to select
            queryString += '&rows=' + $scope.rows;  //define row count
            queryString += '&wt=json&json.wrf=JSON_CALLBACK';  //jsonp
            return queryString;
        }

        function _search() {
            var solrCall = _build($scope.searchInput);
            $http.jsonp(solrCall).then(function(res) {
                $scope.docs = res.data.response.docs;
            });
        }

        $scope.searchClick = function() {
            _search();
        };

        try {
            var f = parent.frames['voyager-search-widget'];
            if (f) {
                $scope.solrUrl = f.getAttribute("data-solr-url");
            }
        } catch (e) {

        }

        _search();

    });
