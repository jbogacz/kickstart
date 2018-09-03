'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleIssueWithWeb3 = handleIssueWithWeb3;

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Workaround for web3@1.0.0 issue. See https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
function handleIssueWithWeb3(provider) {
  if (typeof provider.sendAsync !== "function") {
    provider.sendAsync = function () {
      return provider.send.apply(provider, arguments);
    };
  }
}

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are one the browser *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/Fe0mX2urbX8Kf6EF8E07');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsImhhbmRsZUlzc3VlV2l0aFdlYjMiLCJwcm92aWRlciIsInNlbmRBc3luYyIsInNlbmQiLCJhcHBseSIsImFyZ3VtZW50cyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBR08sQUFBUzs7QUFIaEIsQUFBTzs7Ozs7O0FBRVAsQUFDQTtBQUFPLDZCQUFBLEFBQTZCLFVBQVUsQUFDNUM7TUFBSSxPQUFPLFNBQVAsQUFBZ0IsY0FBcEIsQUFBa0MsWUFBWSxBQUM1QzthQUFBLEFBQVMsWUFBWSxZQUFXLEFBQzlCO2FBQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxNQUFkLEFBQW9CLFVBQTNCLEFBQU8sQUFBOEIsQUFDdEM7QUFGRCxBQUdEO0FBQ0Y7OztBQUVELElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbEQsQUFBMkQsYUFBYSxBQUN0RTtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUhELE9BR08sQUFDTDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2YsQUFFRjtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamJvZ2Fjei9zYW5kYm94L2V0aGVyZXVtL2tpY2tzdGFydCJ9