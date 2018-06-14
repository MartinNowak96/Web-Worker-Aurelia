define('worker',[], function () {
  "use strict";
});
define('webworker',["exports"], function (exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
                value: true
        });

        function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                }
        }

        var webworker = exports.webworker = function webworker() {
                _classCallCheck(this, webworker);

                var webEmployee = new Worker("worker.js");

                var messageToThread = { doMath: { num1: 1, num2: 3 } };

                webEmployee.postMessage(messageToThread);
        };
});
define('text!webworker.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n</template>"; });
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map([{ route: ['', "webworker"], name: "webworker", moduleId: "webworker", title: "WebWorker" }]);
    };

    function App() {
      _classCallCheck(this, App);

      this.message = 'Hello World!';
    }

    return App;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>Welcome to the webworker demo app!</h1>\r\n  <router-view></router-view>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map