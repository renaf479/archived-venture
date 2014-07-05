angular.module('ventureApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('admin/admin.html',
    "<div id=admin data-ui-view=content></div>"
  );


  $templateCache.put('admin/dashboard/create.html',
    "create"
  );


  $templateCache.put('admin/dashboard/editor.html',
    "editor"
  );


  $templateCache.put('admin/dashboard/list.html',
    "<div data-ng-controller=dashboardListCtrl id=dashboards><header id=toolbar><div id=create-btn data-ng-click=create()></div><h2 id=title>Dashboards</h2></header><div id=list data-ng-class=\"{'extend': showForm}\"><div id=dashboard-{{dashboard.id}} class=tile data-ng-repeat=\"dashboard in dashboards\">{{dashboard.name}} <a data-ui-sref=\"dashboard.editor({id:'{{dashboard.id}}'})\">Link</a></div></div><div id=create data-ng-include=\"\" src=dashboardCreate></div></div>"
  );


  $templateCache.put('admin/settings.html',
    "settings"
  );


  $templateCache.put('homepage.html',
    "<div id=home data-ng-controller=homepageController><div id=home-login data-ui-view=login data-ui-scrollfix=100></div><div style=\"width: 100%; height: 1000px; display:block\"></div></div>"
  );


  $templateCache.put('platform/header.html',
    "<header id=global-header data-ng-class=\"{'extend': headerExtend}\"><div class=container><a href=# class=logo>Venture</a> <div class=right data-ng-show=user.auth><div id=header-profile class=dropdown on-toggle=toggled(open)><div class=dropdown-toggle><img class=avatar data-ng-src={{user.user.content.avatar}}></div><ul class=dropdown-menu><li><a href=# class=transition data-ui-sref=admin.settings>Settings</a></li><li><a href=# class=transition data-ng-click=ventureLogout()>Sign Out</a></li></ul></div></div></div></header>"
  );


  $templateCache.put('platform/login.html',
    "<form id=login data-ng-submit=loginPost() data-ng-model=login data-ng-controller=loginController><label class=formLabel>Username or E-mail</label><input class=formInput placeholder=\"Username or E-mail\" data-ng-model=login.email><label class=formLabel>Password</label><input type=password class=formInput placeholder=Password data-ng-model=login.password><button type=submit class=formSubmit>Sign In</button></form>"
  );

}]);
