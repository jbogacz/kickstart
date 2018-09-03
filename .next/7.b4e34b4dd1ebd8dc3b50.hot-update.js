webpackHotUpdate(7,{

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1314);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(501);

var _routes = __webpack_require__(770);

var _campaign = __webpack_require__(1332);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1339);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jbogacz/sandbox/ethereum/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jbogacz/sandbox/ethereum/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5iNGUzNGI0ZGQxZWJkOGRjM2I1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzg2MzdkMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnXG5pbXBvcnQgY2FtcGFpZ25BdCBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbidcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XG5cbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuICAgIGNvbnN0IGNhbXBhaWduID0gYXdhaXQgY2FtcGFpZ25BdChhZGRyZXNzKTtcbiAgICBjb25zdCByZXF1ZXN0c0NvdW50ID0gKGF3YWl0IGNhbXBhaWduLmdldFJlcXVlc3RzQ291bnQoKSkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBhcHByb3ZlcnNDb3VudCA9IChhd2FpdCBjYW1wYWlnbi5hcHByb3ZlcnNDb3VudCgpKS50b1N0cmluZygpO1xuXG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIEFycmF5KHJlcXVlc3RzQ291bnQpXG4gICAgICAgIC5maWxsKClcbiAgICAgICAgLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHsgXG4gICAgICAgICAgcmV0dXJuIGNhbXBhaWduLnJlcXVlc3RzKGluZGV4KVxuICAgICAgICAgICAgLnRoZW4ocmVxdWVzdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVjaXBpZW50OiByZXF1ZXN0WzBdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXF1ZXN0WzFdLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiByZXF1ZXN0WzJdLFxuICAgICAgICAgICAgICAgIGFwcHJvdmFsQ291bnQ6IHJlcXVlc3RbM10udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVxdWVzdFs0XS50b1N0cmluZygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIHsgYWRkcmVzcywgcmVxdWVzdHMsIGFwcHJvdmVyc0NvdW50LCByZXF1ZXN0c0NvdW50IH07XG4gIH1cblxuICByZW5kZXJSZXF1ZXN0cygpIHtcbiAgICBjb25zdCBpdGVtcyAgPSB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcChyZXF1ZXN0ID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogcmVxdWVzdFswXSxcbiAgICAgICAgbWV0YTogcmVxdWVzdFsxXSxcbiAgICAgICAgZGVzY3JpcHRpb246IHJlcXVlc3RbMl0sXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuXG4gIHJlbmRlclJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlcXVlc3RSb3cgXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cbiAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgYXBwcm92ZXJzQ291bnQ9e3RoaXMucHJvcHMuYXBwcm92ZXJzQ291bnR9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxuICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9XCJyaWdodFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+QWRkIFJlcXVlc3Q8L0J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudCAoRVRIKTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBjb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICA8Qm9keT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3MoKX1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgRm91bmQge3RoaXMucHJvcHMucmVxdWVzdHNDb3VudH0gcmVxdWVzdHMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFMQTtBQVFBO0FBUkE7QUFDQTtBQVFBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBNUVBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFJQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQWJBO0FBQ0E7QUFGQTs7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==