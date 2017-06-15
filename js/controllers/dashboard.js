/**
 * Created by RoGGeR on 30.05.17.
 */
app.controller('dashboardCtrl',function($scope,$rootScope,$http){
    $scope.search_params=[];


    $scope.reload_carret=function(string){
        $http.post(string).then(function success (response) {
                $scope.currObj=response.data;
                $scope.navStyle="width:"+100/$scope.currObj.length+"%;";

            },function error (response){
                console.log(response);

            }
        );
    };
    $http.post("dashboardConfig.json").then(function success (response) {
            $scope.config=response.data;
        },function error (response){

        }
    );
    $scope.config=1;
    $http.post("dashboard.json").then(function success (response) {//устанавливаем каретку управления и заполняем ее из файла dashboard.json
            $scope.currObj=response.data;



        },function error (response){
            console.log(response);
        }
    );
    $scope.relocatePage=function(url){//переход на другую страницу(как в случае с калькулятором который не написан)
        location.href = url;
    };
    $scope.relocateHere=function(url){//переход в углубление вверху каретки
        for(i=0; i<$scope.currObj.length;i++){

            if($scope.currObj[i]['url']===url){
                console.log($scope.currObj[i]);
                $scope.currParam=$scope.currObj.indexOf($scope.currObj[i]);
            }
        }
    };

    $scope.currentUl=function(index){//функция проверки для анимации и переключения между ul
      if(index===$scope.currParam) return true;
    };
    $scope.selectParam=function (index) { // нажатии на nav
        $scope.currParam=index;
    };

    $scope.configuration=function(value){
        if(value===1){
            if($scope.config==='navigation'){
                return true;

            }
            else return false;
        }
    };


});