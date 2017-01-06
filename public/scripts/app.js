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

  vm.newAlbum = {};

  $http({
    method: 'GET',
    url: "/api/albums"
  }).then(getSuccess, errorCallback);

  vm.createAlbum = function() {
    $http({
      method: 'POST',
      url: "/api/albums",
      data: {
        name: vm.newAlbum.name,
        artistName: vm.newAlbum.artistName
      }
    }).then(function postSuccess(response) {
        vm.albums.push(response.data);
      }), function postCallbackError(response) {
        console.log("There was an error ", response);
      };
    };
  

  function getSuccess(response) {
    vm.albums = response.data;
    console.log("Response for all albums: ", response);
  }

  function errorCallback(error) {
    console.log("There is an error: ", error);
  }


  // vm.newAlbum = {
  //     name: 'Viva Hate',
  //     artistName: 'Morrissey'
  // };
}
