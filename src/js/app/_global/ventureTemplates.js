angular.module('ventureApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('admin/admin.html',
    "<div id=admin data-ui-view=content></div>"
  );


  $templateCache.put('admin/dashboard/editor.html',
    "editor"
  );


  $templateCache.put('admin/dashboard/list.html',
    "<div data-ng-controller=dashboardListCtrl id=dashboards><form id=create name=formCreate data-ng-class=\"{'extend': showForm}\" data-ng-submit=create(formCreate.$valid) novalidate><div class=container><div id=create-btn data-ng-class=\"{'extend': showForm}\" data-ng-click=toggle()></div><div id=create-form data-ng-show=showForm><div class=form-group><label>Name</label><input placeholder=Title data-ng-model=createForm.name required></div><div class=form-group><label>Description</label><input placeholder=Description data-ng-model=createForm.description></div><button type=submit class=\"submit icon-arrow-right2\" data-ng-disabled=formCreate.$invalid></button></div></div></form><div id=list data-ng-class=\"{'extend': showForm}\"><div id=dashboard-{{dashboard.id}} class=tile data-ng-repeat=\"dashboard in dashboards\">{{dashboard.name}} <a data-ui-sref=\"dashboard.editor({id:'{{dashboard.id}}'})\">Link</a></div></div></div>"
  );


  $templateCache.put('admin/settings.html',
    "settings"
  );


  $templateCache.put('homepage.html',
    "<div id=home data-ng-controller=homepageController><div id=home-login data-ui-view=login data-ui-scrollfix=100></div><div style=\"width: 100%; height: 1000px; display:block\"></div></div>"
  );


  $templateCache.put('platform/header.html',
    "<header id=global-header><div class=container><a href=# class=logo>Venture</a><div id=header-search><input class=search placeholder=Search><span class=icon-search></span></div><div class=right data-ng-show=user.auth><div id=header-profile class=dropdown on-toggle=toggled(open)><div class=dropdown-toggle><img class=avatar data-ng-src={{user.user.content.avatar}}></div><ul class=dropdown-menu><li><a href=# class=transition data-ui-sref=admin.settings>Settings</a></li><li><a href=# class=transition data-ng-click=ventureLogout()>Sign Out</a></li></ul></div></div></div></header>"
  );


  $templateCache.put('platform/login.html',
    "<form id=login data-ng-submit=loginPost() data-ng-model=login data-ng-controller=loginController><label class=formLabel>Username or E-mail</label><input class=formInput placeholder=\"Username or E-mail\" data-ng-model=login.email><label class=formLabel>Password</label><input type=password class=formInput placeholder=Password data-ng-model=login.password><button type=submit class=formSubmit>Sign In</button></form>"
  );

}]);
