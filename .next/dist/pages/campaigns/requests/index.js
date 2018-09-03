'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jbogacz/sandbox/ethereum/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRequests',
    value: function renderRequests() {
      var items = this.props.requests.map(function (request) {
        return {
          header: request[0],
          meta: request[1],
          description: request[2],
          style: { overflowWrap: 'break-word' }
        };
      });
      return _react2.default.createElement(Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
    }
  }, {
    key: 'renderRows',
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          approversCount: _this2.props.approversCount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Amount (ETH)'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Approval count'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, this.renderRows())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Found ', this.props.requestsCount, ' requests.'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestsCount, approversCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                _context.next = 3;
                return (0, _campaign2.default)(address);

              case 3:
                campaign = _context.sent;
                _context.next = 6;
                return campaign.getRequestsCount();

              case 6:
                requestsCount = _context.sent.toNumber();
                _context.next = 9;
                return campaign.approversCount();

              case 9:
                approversCount = _context.sent.toString();
                _context.next = 12;
                return _promise2.default.all(Array(requestsCount).fill().map(function (element, index) {
                  return campaign.requests(index).then(function (request) {
                    return {
                      recipient: request[0],
                      description: request[1],
                      complete: request[2],
                      approvalCount: request[3].toString(),
                      value: request[4].toString()
                    };
                  });
                }));

              case 12:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, approversCount: approversCount, requestsCount: requestsCount });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsImNhbXBhaWduQXQiLCJSZXF1ZXN0Um93IiwiUmVxdWVzdEluZGV4IiwiaXRlbXMiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwiaGVhZGVyIiwicmVxdWVzdCIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0c0NvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsImdldFJlcXVlc3RzQ291bnQiLCJ0b051bWJlciIsInRvU3RyaW5nIiwiYWxsIiwiQXJyYXkiLCJmaWxsIiwiZWxlbWVudCIsInRoZW4iLCJyZWNpcGllbnQiLCJjb21wbGV0ZSIsImFwcHJvdmFsQ291bnQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7OztxQ0EwQmEsQUFDZjtVQUFNLGFBQVMsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLG1CQUFXLEFBQ2hEOztrQkFDVSxRQURILEFBQ0csQUFBUSxBQUNoQjtnQkFBTSxRQUZELEFBRUMsQUFBUSxBQUNkO3VCQUFhLFFBSFIsQUFHUSxBQUFRLEFBQ3JCO2lCQUFPLEVBQUUsY0FKWCxBQUFPLEFBSUUsQUFBZ0IsQUFFMUI7QUFOUSxBQUNMO0FBRkosQUFBZSxBQVFmLE9BUmU7MkNBUVIsQUFBQyxLQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7O2lDQUdJO21CQUNYOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUNFLEFBQUM7ZUFBRCxBQUNPLEFBQ0w7Y0FGRixBQUVNLEFBQ0o7bUJBSEYsQUFHVyxBQUNUO21CQUFTLE9BQUEsQUFBSyxNQUpoQixBQUlzQixBQUNwQjswQkFBZ0IsT0FBQSxBQUFLLE1BTHZCLEFBSzZCOztzQkFMN0I7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxTQURGO0FBRkosQUFBTyxBQVdSLE9BWFE7Ozs7NkJBYUE7VUFBQSxBQUNDLFNBREQsQUFDbUMsdUJBRG5DLEFBQ0M7VUFERCxBQUNTLE1BRFQsQUFDbUMsdUJBRG5DLEFBQ1M7VUFEVCxBQUNjLGFBRGQsQUFDbUMsdUJBRG5DLEFBQ2M7VUFEZCxBQUMwQixPQUQxQixBQUNtQyx1QkFEbkMsQUFDMEIsQUFDakM7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDZCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFFLGNBQXpDLEFBQXVDLEFBQWdCO29CQUF2RDtzQkFBQTtBQUFBO1NBSk4sQUFFRSxBQUNFLEFBQ0UsQUFHSixrQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLG1DQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBbkJKLEFBT0UsQUFZRSxBQUNHLEFBQUssQUFHVixnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDUyxlQUFBLEFBQUssTUFEZCxBQUNvQixlQXpCeEIsQUFDRSxBQXVCRSxBQUtMOzs7OzsyR0FsRjRCLEE7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNQUFsQixBOzt1QkFDZSx3QixBQUFBLEFBQVc7O21CQUE1QjtBOzt1QkFDdUIsU0FBQSxBQUFTLEE7O21CQUFoQztBLDhDLEFBQW9EOzt1QkFDNUIsU0FBUyxBLEFBQVQ7O21CQUF4QjtBLCtDQUFtRCxBOzt5Q0FFbEMsQUFBUSxVQUM3QixBQUFNLGVBQU4sQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7a0NBQU8sQUFBUyxTQUFULEFBQWtCLE9BQWxCLEFBQ0osS0FBSyxtQkFBVyxBQUNmOztpQ0FDYSxRQUROLEFBQ00sQUFBUSxBQUNuQjttQ0FBYSxRQUZSLEFBRVEsQUFBUSxBQUNyQjtnQ0FBVSxRQUhMLEFBR0ssQUFBUSxBQUNsQjtxQ0FBZSxRQUFBLEFBQVEsR0FKbEIsQUFJVSxBQUFXLEFBQzFCOzZCQUFPLFFBQUEsQUFBUSxHQUxqQixBQUFPLEFBS0UsQUFBVyxBQUV2QjtBQVBVLEFBQ0w7QUFITixBQUFPLEFBVVIsbUJBVlE7QUFKVSxBLEFBQ3JCLGlCQUFBLENBRHFCOzttQkFBakI7QTtpREFnQkMsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixnQkFBckIsZ0JBQXFDLGVBQXJDLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2QmdCLEEsQUFzRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYm9nYWN6L3NhbmRib3gvZXRoZXJldW0va2lja3N0YXJ0In0=