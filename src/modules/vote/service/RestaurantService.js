ResultsService.$inject = ['$http'];

export default function ResultsService($http){
  const resultsSvc = this;
  const baseUrl = 'http://localhost:3000';

  resultsSvc.getAllRestaurants = () => {
    return $http({
      method: 'GET',
      url: baseUrl + '/api/restaurants'
    });
  };

  resultsSvc.getChosenRestaurants = () => {
    return $http({
      method: 'GET',
      url: baseUrl + '/api/restaurants/chosen'
    });
  };
}