sampleApp.service('httpService',['$http',function($http){
    var serverHost="http://localhost:8080/"
    this.get=function(url){
      console.log("httpService get");
      return $http.get(serverHost+url);
    };
    this.post = function(postUrl, fd, config) {
      return $http.post(serverHost+postUrl, fd, config);
    }
}]);