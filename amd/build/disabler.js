require(["jquery","core/ajax"],function(e,t){var o={isOpen:!1,orientation:void 0},i=160,n=[],a=null,d=null;function r(t,o){null==o&&(o=2e3);var i=e("<div class='disabler-toaster toaster-container'><lable class='toaster-message'>"+t+"</lable></div>");e("html").append(i),e(i).addClass("show"),setTimeout(function(){e(i).addClass("fade"),setTimeout(function(){e(i).removeClass("fade"),setTimeout(function(){e(i).remove()},300)},o)})}function s(t){1==t&&(console.clear(),a=e("body").detach(),e("head")&&(d=e("head").detach()),0==e("#body-detached-css").length&&e("html").append(e('<style id="body-detached-css">.disabler-toaster.toaster-container {position: fixed;width: 100%;top: 1vw;z-index: 140002;left: 0;opacity: 0;text-align: center;transition: top 0.3s linear, opacity 0.3s linear;display: none;}.disabler-toaster.toaster-container.fade {top: 6vw;opacity: 1;}.disabler-toaster.toaster-container.show {display: block;}.disabler-toaster.toaster-container .toaster-message {padding: 1rem 2rem;color: white;border-radius: 2px;background-color: #424242;}</style>')),r(n.developertoolsopened,5e3)),0==t&&(e("html").append(a),a=null,null!=d&&e("html").append(d))}function l(t){t.disablerightclick&&1==t.disablerightclick&&e("body").contextmenu(function(e){r(n.rightclick),e.preventDefault()}),t.disablecutcopypaste&&1==t.disablecutcopypaste&&e("body").on("keydown",function(e){if(1==e.ctrlKey&&-1!=[65,67,83,86,88].indexOf(e.keyCode))return r(n.cutcopypaste),void e.preventDefault()}),t.disabledevelopertools&&1==t.disabledevelopertools&&(e("body").on("keydown",function(e){if(123==e.keyCode||1==e.ctrlKey&&1==e.shiftKey&&-1!=[67,73,74].indexOf(e.keyCode)||1==e.ctrlKey&&-1!=[85].indexOf(e.keyCode))return r(n.developertools),void e.preventDefault()}),setInterval(function(){const e=window.outerWidth-window.innerWidth>i,t=window.outerHeight-window.innerHeight>i,n=e?"vertical":"horizontal";t&&e||!(window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized||e||t)?(o.isOpen&&s(!1),o.isOpen=!1,o.orientation=void 0):(o.isOpen&&o.orientation===n||s(!0),o.isOpen=!0,o.orientation=n)},1e3))}e(document).ready(function(){t.call([{methodname:"local_disablerightclick_settings",args:{}}])[0].done(function(e){data=JSON.parse(e),n=data.strings,l(data.settings)}).fail(function(e){})})});