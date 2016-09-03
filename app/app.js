'use strict';

// Declare app level module which depends on views, and components
var dailyUiApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


dailyUiApp.controller('ImagesController', ["$scope", function($scope) {
	$scope.items = [
	{num: '001', name: 'Bulbasaur', jap: 'ゼニガメ', img: 'app/img/001.png',
	 fast: 'Vine Whip, Tackle', special: 'Special Attacks: Sludge Bomb, Seed Bomb, Power Whip',
	 evo: 'Ivysaur, Venosaur', type: 'app/img/grass.png'},
	{num: '004', name: 'Charmander', jap: 'ヒトカゲ', img: 'app/img/004.png',
	 fast: 'Ember, Scratch', special: 'Flame Charge, Flame Burst, Flamethrower',
	 evo: 'Charmeleon , Charizard', type: 'app/img/fire.png'},
	{num: '007', name: 'Squirtle', jap: 'フシギダネ', img: 'app/img/007.png',
	 fast: 'Bubble, Tackle', special: 'Aqua Jet, Aqua Tail, Water Pulse',
	 evo: 'Wartortle, Blastoise', type: 'app/img/water.png'},
	{num: '010', name: 'Caterpie', jap: 'キャタピー', img: 'app/img/010.png',
	 fast: 'Bug Bite, Tackle', special: 'Struggle', 
	 evo: 'Metapod, Butterfree', type: 'app/img/bug.png'},
	{num: '013', name: 'Weedle', jap: 'ビードル', img: 'app/img/013.png',
   	 fast: 'Bug Bite, Poison Sting', special: 'Struggle', 
   	 evo: 'Kakuna, Beedrill', type: 'app/img/bug.png'},
	{num: '016', name: 'Pidgey', jap: 'ポッポ', img: 'app/img/016.png',
	 fast: 'Quick Attack, Tackle', special: 'Twister, Aerial Ace, Air Cutter',
	 evo: 'Pidgeotto, Pidgeot', type: 'app/img/flying.png'},
	{num: '019', name: 'Rattata', jap: 'コラッタ', img: 'app/img/019.png',
	 fast: 'Tackle, Quick Attack', special: 'Dig, Hyper Fang, Body Slam', 
	 evo: 'Raticate', type: 'app/img/normal.png'},
	{num: '023', name: 'Ekans', jap: 'アーボ', img: 'app/img/023.png',
 	 fast: 'Poison Sting, Acid', special: 'Wrap, Sludge Bomb, Gunk Shot',
 	 evo: 'Arbok', type: 'app/img/poison.png'},
	{num: '025', name: 'Sandshrew', jap: 'サンド', img: 'app/img/025.png',
	 fast: 'Scratch, Mud Shot', special: 'Dig, Rock Slide, Rock Tomb', 
	 evo: 'Sandslash', type: 'app/img/ground.png'}
	];

	$scope.itemNum = "";
	$scope.itemName = "";
	$scope.itemJap = "";
	$scope.itemFast = "";
	$scope.itemSpecial = "";
	$scope.itemEvo = "";
	$scope.itemType = "";

	$scope.select = function(item) {
		$scope.itemNum = item.num;
		$scope.itemName = item.name;
		$scope.itemJap = item.jap;
		$scope.itemFast = item.fast;
		$scope.itemSpecial = item.special;
		$scope.itemEvo = item.evo;
		$scope.itemType = item.type;
	}

}]);







