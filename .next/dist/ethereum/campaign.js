'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = campaignAt;

var _truffleContract = require('truffle-contract');

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/contracts/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Campaign = (0, _truffleContract2.default)(_Campaign2.default);
Campaign.setProvider(_web2.default.currentProvider);
(0, _web.handleIssueWithWeb3)(Campaign.currentProvider);

function campaignAt(address) {
  return Campaign.at(address);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbImNvbnRyYWN0Iiwid2ViMyIsImhhbmRsZUlzc3VlV2l0aFdlYjMiLCJDYW1wYWlnbkpzb24iLCJDYW1wYWlnbiIsInNldFByb3ZpZGVyIiwiY3VycmVudFByb3ZpZGVyIiwiY2FtcGFpZ25BdCIsImFkZHJlc3MiLCJhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQixBQUFqQixBQUNBLEFBQVMsQUFBVCxBQUFvQyxBQUFwQzs7OztBQUNBLEFBQU8sQUFBUCxBQUF5QixBQUF6Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLEFBQVMsQUFBVCxBQUFqQjtBQUNBLFNBQVMsQUFBVCxZQUFxQixjQUFLLEFBQTFCO0FBQ0EsOEJBQW9CLFNBQVMsQUFBN0IsQUFFQTs7QUFBZSxTQUFTLEFBQVQsV0FBb0IsQUFBcEIsU0FBNkIsQUFDMUM7U0FBTyxTQUFTLEFBQVQsR0FBWSxBQUFaLEFBQVAsQUFDRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamJvZ2Fjei9zYW5kYm94L2V0aGVyZXVtL2tpY2tzdGFydCJ9