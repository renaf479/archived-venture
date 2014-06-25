angular.module('ventureApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/admin.html',
    "admin"
  );


  $templateCache.put('views/homepage.html',
    "<div id=home data-ng-controller=homepageController><div id=home-login data-ui-view=login data-ui-scrollfix=100></div><div style=\"width: 100%; height: 1000px; display:block\"></div></div>"
  );


  $templateCache.put('views/partials/global-header.html',
    "<header id=global-header><div class=container><div id=header-left data-ng-show=user.auth><span id=header-menu class=\"inline icon-hover transition-icon icon-menu2\"></span></div><a href=# id=header-logo>Venture</a><div id=header-right data-ng-show=user.auth><div id=header-search class=inline><input id=headerSearch-input class=\"inline formInput\"><button id=headerSearch-button class=\"inline icon-hover transition-icon icon-search\"></button></div><div class=\"inline dropdown\" on-toggle=toggled(open)><img id=header-user class=\"inline icon-hover dropdown-toggle\" data-ng-src={{user.user.content.avatar}}><ul id=header-user-menu class=dropdown-menu><li><a href=# class=transition data-ng-click=ventureLogout()>Logout</a></li></ul></div></div></div></header>"
  );


  $templateCache.put('views/partials/login.html',
    "<form id=login data-ng-submit=loginPost() data-ng-model=login data-ng-controller=loginController><label class=formLabel>Username or E-mail</label><input class=formInput placeholder=\"Username or E-mail\" data-ng-model=login.email><label class=formLabel>Password</label><input type=password class=formInput placeholder=Password data-ng-model=login.password><button type=submit class=formSubmit>Sign In</button></form>"
  );

}]);
