/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', [])
  .controller('AlbumsIndexController', AlbumsIndexController);
  // ^ the first argument is a string naming the controller,
  // the second argument is a function that defines the capacities
  // of the controller.
AlbumsIndexController.$inject = ['$http']

function AlbumsIndexController ( $http ) {
  var vm = this;
  vm.results = null;

  $http({
    method: 'GET',
    url: "/api/albums"
  }).then(successCallback, errorCallback);

  function successCallback(response) {
    vm.albums = response.data;
    console.log("Response for all albums: ", response);
  }
  function errorCallback(error) {
    console.log("There is an error: ", error);
  }

  vm.newAlbum = {};

  vm.newAlbum = {
      name: 'Viva Hate',
      artistName: 'Morrissey'
  };

}
