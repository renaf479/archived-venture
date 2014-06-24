angular.module('ventureApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/admin.html',
    "admin"
  );


  $templateCache.put('views/homepage.html',
    "<div id=home class=container data-ng-controller=homepageController><form id=login data-ng-submit=loginPost() data-ng-model=login><ul><li><label>Username/E-mail</label><input placeholder=\"Username or E-mail\" data-ng-model=login.email></li><li><label>Password</label><input type=password placeholder=Password data-ng-model=login.password></li></ul><button type=submit>Log In</button></form></div>"
  );


  $templateCache.put('views/partials/global-header.html',
    "<header id=global-header><div class=container><div id=header-left data-ng-show=user.auth><span class=\"inline icon-home icon-hover transition-icon\"></span></div><a href=# id=header-logo>Venture</a><div id=header-right data-ng-show=user.auth><form id=header-search class=inline><input placeholder=Search></form><button class=inline data-ng-click=logout()>Logout</button></div></div></header>"
  );

}]);
