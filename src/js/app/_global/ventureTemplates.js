angular.module('ventureApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('admin/admin.html',
    "<div id=admin data-ui-view=content></div>"
  );


  $templateCache.put('admin/dashboard/editor.html',
    "editor"
  );


  $templateCache.put('admin/dashboard/list.create.html',
    "<h2 class=title>Create</h2><form id=create name=formCreate data-ng-submit=submit(formCreate.$invalid) novalidate><div class=form-group><label>Name</label><input placeholder=\"Give your Dashboard a name\" data-ng-model=createForm.name required></div><div class=form-group><label>Description</label><textarea placeholder=\"What is your Dashboard about?\" data-ng-model=createForm.description></textarea></div><form-switch id=createForm-private checked></form-switch><button class=\"form-button cancel\">Cancel</button> <button type=submit class=\"form-button submit\" data-ng-disabled=formCreate.$invalid>Create Dashboard</button></form>"
  );


  $templateCache.put('admin/dashboard/list.html',
    "<div data-ng-controller=dashboardListCtrl id=dashboards><div id=list data-ng-class=\"(dashboardSide.sideNav)? dashboardSide.sideNavClass: ''\"><h2 class=title>Dashboards</h2><dashboard-list-item data-ng-repeat=\"dashboard in dashboards\" class=tile id=dashboard-{{dashboard.id}}></dashboard-list-item></div><div id=sideNav data-ng-class=\"(dashboardSide.sideNav)? dashboardSide.sideNavClass: ''\"><div id=sideNav-btn data-ng-click=toggle()></div><div data-ng-include=dashboardSide.template></div></div></div>"
  );


  $templateCache.put('admin/dashboard/list.info.html',
    "{{dashboardModify}}"
  );


  $templateCache.put('admin/dashboard/list.item.html',
    "<div><img class=thumb data-ng-src=\"http://lorempixel.com/350/25{{dashboard.id}}/\"><div class=info><span>{{dashboard.name}}</span> <span class=\"menu icon-list2\" data-ng-click=info(dashboard)></span></div></div>"
  );


  $templateCache.put('admin/settings.html',
    "settings"
  );


  $templateCache.put('homepage.html',
    "<div id=home data-ng-controller=homepageController><div id=home-login data-ui-view=login data-ui-scrollfix=100></div><div style=\"width: 100%; height: 1000px; display:block\"></div></div>"
  );


  $templateCache.put('platform/header.html',
    "<header id=global-header data-ng-class=\"{'extend': headerExtend}\"><div class=container><a href=# class=logo>Venture</a><div class=right data-ng-show=user.auth><div id=profile class=dropdown on-toggle=toggled(open)><div class=dropdown-toggle><img class=avatar data-ng-src={{user.user.content.avatar}}></div><ul class=dropdown-menu><li><a href=# class=transition data-ui-sref=admin.settings>Settings</a></li><li><a href=# class=transition data-ng-click=ventureLogout()>Sign Out</a></li></ul></div></div></div></header>"
  );


  $templateCache.put('platform/login.html',
    "<form id=login data-ng-submit=loginPost() data-ng-model=login data-ng-controller=loginController><label class=formLabel>Username or E-mail</label><input class=formInput placeholder=\"Username or E-mail\" data-ng-model=login.email><label class=formLabel>Password</label><input type=password class=formInput placeholder=Password data-ng-model=login.password><button type=submit class=formSubmit>Sign In</button></form>"
  );


  $templateCache.put('platform/switch.html',
    "<div class=form-switch><input type=checkbox name=onoffswitch class=checkbox id=myonoffswitch checked><label class=switch-label for=myonoffswitch><span class=inner></span> <span class=switch></span></label></div>"
  );

}]);
