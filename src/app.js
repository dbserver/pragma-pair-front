import UIRouter from 'angular-ui-router';
import '/src/less/master.less';

import Vote from '/src/modules/vote';
import Home from '/src/modules/home';

angular.
module('app', [Vote, Home, UIRouter]);