var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
var ForexHeatMap = function (props) {
    var widgetProps = props.widgetProps, widgetPropsAny = props.widgetPropsAny;
    var ref = React.createRef();
    React.useEffect(function () {
        var refValue;
        if (ref.current) {
            var script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/"
                + "embed-widget-forex-heat-map.js";
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(__assign(__assign({ "width": 770, "height": 400, "currencies": [
                    "EUR",
                    "USD",
                    "JPY",
                    "GBP",
                    "CHF",
                    "AUD",
                    "CAD",
                    "NZD",
                    "CNY"
                ], "isTransparent": false, "colorTheme": "dark", "locale": "en" }, widgetProps), widgetPropsAny));
            ref.current.appendChild(script);
            refValue = ref.current;
        }
        return function () {
            if (refValue) {
                while (refValue.firstChild) {
                    refValue.removeChild(refValue.firstChild);
                }
            }
        };
    }, [ref, widgetProps, widgetPropsAny]);
    return _jsx("div", { ref: ref }, void 0);
};
export default ForexHeatMap;
//# sourceMappingURL=ForexHeatMap.js.map