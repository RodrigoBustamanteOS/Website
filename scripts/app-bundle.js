define('app',['exports', 'aurelia-framework', 'jquery', './routes'], function (exports, _aureliaFramework, _jquery, _routes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  var _routes2 = _interopRequireDefault(_routes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.title = 'ormasoft';
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = this.title;
      config.addPipelineStep('modelbind', RouterStep);
      config.addPipelineStep('postcomplete', PostCompleteStep);
      config.map(_routes2.default);
      console.log(_routes2.default);
      this.router = router;
    };

    return App;
  }();

  var RouterStep = function () {
    function RouterStep() {
      _classCallCheck(this, RouterStep);
    }

    RouterStep.prototype.run = function run(routingContext, next) {
      return next();
    };

    return RouterStep;
  }();

  var PostCompleteStep = function () {
    function PostCompleteStep() {
      _classCallCheck(this, PostCompleteStep);
    }

    PostCompleteStep.prototype.run = function run(routingContext, next) {
      (0, _jquery2.default)(".page-host").scrollTop(0);
      return next();
    };

    return PostCompleteStep;
  }();
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
define('main',['exports', './environment', 'jquery', 'moment', 'bootstrap'], function (exports, _environment, _jquery, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = undefined;

    var _environment2 = _interopRequireDefault(_environment);

    var _jquery2 = _interopRequireDefault(_jquery);

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var configure = exports.configure = function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(aurelia) {
            var HAS_SW, registration;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-animator-css');

                            if (_environment2.default.debug) {
                                aurelia.use.developmentLogging();
                            }

                            if (_environment2.default.testing) {
                                aurelia.use.plugin('aurelia-testing');
                            }

                            aurelia.use.plugin('aurelia-dialog', function (config) {
                                config.useDefaults();
                                config.settings.lock = false;
                                config.settings.centerHorizontalOnly = false;
                                config.settings.startingZIndex = 2000;
                                config.settings.keyboard = true;
                            }).plugin('aurelia-validation', function (config) {});

                            _moment2.default.locale('es');
                            _context.next = 7;
                            return aurelia.start();

                        case 7:
                            _context.next = 9;
                            return aurelia.setRoot();

                        case 9:
                            if (_environment2.default.debug) {
                                _context.next = 25;
                                break;
                            }

                            HAS_SW = 'serviceWorker' in navigator;

                            if (!HAS_SW) {
                                _context.next = 25;
                                break;
                            }

                            _context.prev = 12;
                            _context.next = 15;
                            return navigator.serviceWorker.register('service-worker.js');

                        case 15:
                            registration = _context.sent;

                            console.log('ServiceWorker registration successful with scope: ' + registration.scope);
                            if (typeof registration.update == 'function') {
                                registration.update();
                            }

                            registration.onupdatefound = function () {
                                var installingWorker = registration.installing;
                                installingWorker.onstatechange = function () {
                                    switch (installingWorker.state) {
                                        case 'installed':
                                            if (navigator.serviceWorker.controller) {
                                                console.log('New or updated content is available.');
                                            } else {
                                                console.log('Content is cached, and will be available for offline use the next time the page is loaded.');
                                            }
                                            break;
                                        case 'redundant':
                                            console.error('The installing service worker became redundant.');
                                            break;
                                    }
                                };
                            };
                            _context.next = 24;
                            break;

                        case 21:
                            _context.prev = 21;
                            _context.t0 = _context['catch'](12);

                            console.error('ServiceWorker registration failed: ' + _context.t0);

                        case 24:
                            ;

                        case 25:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[12, 21]]);
        }));

        return function configure(_x) {
            return _ref.apply(this, arguments);
        };
    }();
});
define('nav-bar',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NavBar = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var NavBar = exports.NavBar = (_class = function NavBar() {
        _classCallCheck(this, NavBar);

        _initDefineProp(this, 'router', _descriptor, this);
    }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'router', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class);
});
define('routes',['exports', 'pantallas/routes'], function (exports, _routes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _routes2 = _interopRequireDefault(_routes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var routes = [{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: false, title: 'inicio' }].concat(_routes2.default);

  exports.default = routes;
});
define('welcome',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Welcome = exports.Welcome = function Welcome() {
    _classCallCheck(this, Welcome);
  };
});
define('pantallas/routes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RootPath = 'pantallas';
  var RoutePantalla1 = 'pantalla1';
  var RoutePantalla2 = 'pantalla2';

  var routes = [{ name: RoutePantalla1, route: RoutePantalla1, moduleId: RootPath + '/' + RoutePantalla1 + '/index', nav: true, title: 'pantalla 1', settings: { iconClass: 'fa-cog' } }, { name: RoutePantalla2, route: RoutePantalla2, moduleId: RootPath + '/' + RoutePantalla2 + '/index', nav: true, title: 'pantalla 2', settings: { iconClass: 'fa-cog' } }];

  exports.default = routes;
});
define('resources/bootstrap-form-renderer',['exports', 'aurelia-validation'], function (exports, _aureliaValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BootstrapFormRenderer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var BootstrapFormRenderer = exports.BootstrapFormRenderer = function () {
    function BootstrapFormRenderer() {
      _classCallCheck(this, BootstrapFormRenderer);
    }

    BootstrapFormRenderer.prototype.render = function render(instruction) {
      for (var _iterator = instruction.unrender, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var _ref5 = _ref2;
        var result = _ref5.result,
            elements = _ref5.elements;

        for (var _iterator3 = elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref6 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref6 = _i3.value;
          }

          var element = _ref6;

          this.remove(element, result);
        }
      }

      for (var _iterator2 = instruction.render, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref4 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref4 = _i2.value;
        }

        var _ref7 = _ref4;
        var result = _ref7.result,
            elements = _ref7.elements;

        for (var _iterator4 = elements, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref8;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref8 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref8 = _i4.value;
          }

          var _element = _ref8;

          this.add(_element, result);
        }
      }
    };

    BootstrapFormRenderer.prototype.add = function add(element, result) {
      if (result.valid) {
        return;
      }

      if (typeof element.closest != 'function') return;

      var formGroup = element.closest('.form-group');
      if (!formGroup) {
        return;
      }

      formGroup.classList.add('has-error');

      var message = document.createElement('span');
      message.className = 'help-block validation-message';
      message.textContent = result.message;
      message.id = 'validation-message-' + result.id;
      formGroup.appendChild(message);
    };

    BootstrapFormRenderer.prototype.remove = function remove(element, result) {
      if (result.valid) {
        return;
      }

      if (typeof element.closest != 'function') return;

      var formGroup = element.closest('.form-group');
      if (!formGroup) {
        return;
      }

      var message = formGroup.querySelector('#validation-message-' + result.id);
      if (message) {
        formGroup.removeChild(message);

        if (formGroup.querySelectorAll('.help-block.validation-message').length === 0) {
          formGroup.classList.remove('has-error');
        }
      }
    };

    return BootstrapFormRenderer;
  }();
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./value-converters/date');
  }
});
define('services/backend',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var latency = 0;

	function wait() {
		var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : latency;

		return new Promise(function (resolve) {
			return setTimeout(resolve, ms);
		});
	}

	var Backend = exports.Backend = function Backend() {
		_classCallCheck(this, Backend);
	};
});
define('pantallas/pantalla1/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Pantalla1 = exports.Pantalla1 = function Pantalla1() {
    _classCallCheck(this, Pantalla1);
  };
});
define('pantallas/pantalla2/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Pantalla2 = exports.Pantalla2 = function Pantalla2() {
    _classCallCheck(this, Pantalla2);
  };
});
define('resources/elements/loading-indicator',['exports', 'nprogress', 'aurelia-framework'], function (exports, _nprogress, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LoadingIndicator = undefined;

  var _nprogress2 = _interopRequireDefault(_nprogress);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  _nprogress2.default.configure({ showSpinner: false, speed: 500 });

  var LoadingIndicator = exports.LoadingIndicator = (_dec = (0, _aureliaFramework.noView)(['nprogress/nprogress.css']), _dec(_class = (_class2 = function () {
    function LoadingIndicator() {
      _classCallCheck(this, LoadingIndicator);

      _initDefineProp(this, 'loading', _descriptor, this);
    }

    LoadingIndicator.prototype.loadingChanged = function loadingChanged(newValue) {
      if (newValue) {
        _nprogress2.default.start();
      } else {
        _nprogress2.default.done();
      }
    };

    return LoadingIndicator;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class);
});
define('resources/value-converters/date',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateValueConverter = exports.DateValueConverter = function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    DateValueConverter.prototype.toView = function toView(d, format) {
      var f = format ? format : 'DD/MM/YYYY';
      return (0, _moment2.default)(d).format(f);
    };

    DateValueConverter.prototype.fromView = function fromView(d) {
      return (0, _moment2.default)(d);
    };

    return DateValueConverter;
  }();
});
define('patch/bootstrap-datepicker/locale/bootstrap-datepicker.es',[], function () {
	"use strict";

	;(function ($) {
		$.fn.datepicker.dates['es'] = {
			days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
			daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
			months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
			today: "Hoy",
			monthsTitle: "Meses",
			clear: "Borrar",
			weekStart: 1,
			format: "dd/mm/yyyy"
		};
	})(jQuery);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=resources/elements/loading-indicator></require><loading-indicator loading.bind=router.isNavigating></loading-indicator><require from=nav-bar></require><nav-bar router.bind=router></nav-bar><div class=page-host><router-view></router-view></div></template>"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=router><nav class=\"navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top\" role=navigation><a class=navbar-brand href=#><img src=../img/logo-ormasoft-grande.png></a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarSupportedContent aria-controls=navbarSupportedContent aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarSupportedContent><ul class=\"navbar-nav mr-auto\"><li class=nav-item repeat.for=\"nav of router.navigation\"><a class=\"nav-link ${nav.isActive ? 'active' : ''}\" href.bind=nav.href>${nav.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=loader if.bind=router.isNavigating><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></nav></template>"; });
define('text!welcome.html', ['module'], function(module) { module.exports = "<template><section><div class=container-fluid><div class=row><div class=col-md-12><div class=row><div class=col-md-12><div class=jumbotron><h2>titulo</h2><p>contenido</p></div></div></div></div></div><div class=row><div class=col-md-4><h2>seccion1</h2><p>contenido</p><p><a class=btn href=#>Ver más »</a></p></div><div class=col-md-4><h2>Cómo comenzar</h2><p>En esta sección podrás ver cómo utilizar rayen. Descubre más:<ul><li>Requisitos</li><li>Términos del servicio</li><li><a href=#help-docs>Documentación</a></li></ul></p><p><a class=btn href=#>Ver más »</a></p></div><div class=col-md-4><h2>Integración</h2><p>La arquitectura interoperable de blabla te permite integrar tu sistema. Descubre cómo:<ul><li>api</li><li>Documentos</li><li>Arquitectura</li></ul></p><p><a class=btn href=#>Ver más »</a></p></div></div></div></section></template>"; });
define('text!pantallas/pantalla1/index.html', ['module'], function(module) { module.exports = "<template>pantalla 1</template>"; });
define('text!pantallas/pantalla2/index.html', ['module'], function(module) { module.exports = "<template>pantalla 2</template>"; });
//# sourceMappingURL=app-bundle.js.map