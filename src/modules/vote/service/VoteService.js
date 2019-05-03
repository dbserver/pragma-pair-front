VoteService.$inject = ['$http'];

export default function VoteService($http){
  const voteSvc = this;
  const baseUrl = 'http://localhost:3000';

  voteSvc.vote = (restaurantId) => {
    return $http({
      method: 'POST',
      url: baseUrl + '/api/vote/' + restaurantId,
    });
  };
}