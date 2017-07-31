'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
/*配置主模块所需的提供者。
模板的.config() 方法可以获取配置所需的提供者。
除了核心服务和指令，我们还需要配置$route服务（使用它的提供者）。

通过.config() 方法，我们请求提供者（如$routeProvider）注入到配置函数中，
并使用提供者的方法指定服务行为。在这里，
我们使用$routeProvider.when()
和$routeProvider.otherwise() 制定程序路由的选择规则。

我们还使用$locationProvider.hashPrefix()将哈希前缀设置为！，
该前缀会加到我们客户端路由链接中，
位于文件路径与字符（#）之间(例如 index.html#!/some/path)。
虽然设置前缀不是必须的，但这是种好的做法（具体原因超出本课程范围，不做讨论）。
！是最常用的前缀。

注意第2个路由声明中的:phoneId参数。$route服务使用路由声明（/phones/:phoneId）
作为一个模板来匹配当前的URL。所有:phoneId变量都会被提取到$routeParams对象中。*/


/*  angular.
     module('phonecatApp').
     config(['$locationProvider','$routeProvider',
       function config($locationProvider,$routeProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider.
           when('/phones',{
            template:'<phone-list></phone-list>'
           }).
           when('/phones/:phoneId',{
            template:'<phone-detail></phone-detail>'
           }).
           otherwise('/phones');
       }
      ]);*/
