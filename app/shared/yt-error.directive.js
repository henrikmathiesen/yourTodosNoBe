/// <reference path="../../typings/index.d.ts" />

angular
    .module('shared')
    .directive('ytError', function (errorHandlerFactory) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'shared/yt-error.template.html',
            replace: true,
            link: function (scope, $element) {

                scope.$watch(errorHandlerFactory.getAppHasError, function (newValue, oldValue) {

                    console.log("watch");
                    console.log("newValue: " + newValue);
                    console.log("oldValue: " + oldValue);
                    console.log("watch");

                    if (newValue !== oldValue) {

                        console.log("watch newValue !== oldValue");

                        if (newValue === true) {
                            console.log("true hasError, fadeIn");
                            $element.fadeIn();
                        }
                        else {
                            console.log("false hasError, fadeOut");
                            $element.fadeOut();
                        }
                    }

                });

            }
        }
    });