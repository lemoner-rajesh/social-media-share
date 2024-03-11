"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NewsCardsShare;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _shareLinkedin = _interopRequireDefault(require("./assets/share-linkedin.svg"));
var _shareTwitter = _interopRequireDefault(require("./assets/share-twitter.svg"));
var _shareFb = _interopRequireDefault(require("./assets/share-fb.svg"));
var _shareWhatsapp = _interopRequireDefault(require("./assets/share-whatsapp.svg"));
var _shareCopyBlack = _interopRequireDefault(require("./assets/share-copy-black.svg"));
var _shareCopyWhite = _interopRequireDefault(require("./assets/share-copy-white.svg"));
var _shareBlack = _interopRequireDefault(require("./assets/share-black.svg"));
var _shareWhite = _interopRequireDefault(require("./assets/share-white.svg"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function NewsCardsShare(_ref) {
  let {
    title,
    pageSlug,
    isDark
  } = _ref;
  const [showCopy, setShowCopy] = (0, _react.useState)(false);
  const [showSocialShare, setShowSocialShare] = (0, _react.useState)(false);
  function shareWhatsapp(shareUrl, title) {
    // var mainURL = shareUrl;//window.location.origin + shareUrl;

    if (typeof window !== "undefined") {
      var mainURL = window.location.origin + shareUrl;
      window.open("https://wa.me/?text=" + encodeURIComponent(mainURL));
    }
  }
  function shareFB(shareUrl, title) {
    // var mainURL = shareUrl;//window.location.origin + shareUrl;

    if (typeof window !== "undefined") {
      var mainURL = window.location.origin + shareUrl;
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(mainURL) + "&t=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    }
  }
  function shareTwitter(shareUrl, title) {
    // var mainURL = shareUrl;//window.location.origin + shareUrl;

    if (typeof window !== "undefined") {
      var mainURL = window.location.origin + shareUrl;
      window.open("https://twitter.com/share?url=" + encodeURIComponent(mainURL) + "&text=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    }
  }
  function shareLinkedin(shareUrl, title) {
    // var mainURL = shareUrl;//window.location.origin + shareUrl;

    if (typeof window !== "undefined") {
      var mainURL = window.location.origin + shareUrl;
      window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(mainURL) + "&title=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    }
  }
  // function shareEmail(shareUrl, title) {
  //     var mainURL = shareUrl;//window.location.origin + shareUrl;

  //     if (typeof window !== `undefined`) {
  //         window.open("mailto:?subject=" + title + "&body= Check out this article " + encodeURIComponent(mainURL), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
  //     }
  // }

  function Clipboard_CopyTo(value) {
    if (typeof window !== "undefined") {
      var tempInput = document.createElement("input");
      tempInput.value = window.location.origin + value;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // document.getElementById('linkCopiedText').classList.add('on');
      setShowCopy(true);
      setTimeout(function () {
        // document.getElementById('linkCopiedText').classList.remove('on');
        setShowCopy(false);
      }, 2000);

      // setShowCopy(true)
    }
  }
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "socialbx block-options ".concat(isDark ? 'sociabx-black' : 'sociabx-white')
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#/",
    onClick: () => {
      Clipboard_CopyTo(pageSlug);
    },
    className: "sicons copy-share-icons"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: isDark ? _shareCopyBlack.default : _shareCopyWhite.default,
    alt: "img"
  }), showCopy ? /*#__PURE__*/_react.default.createElement("span", {
    className: "linkCopiedText"
  }, "Link Copied!") : null)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#/",
    className: "sicons share-click copy-share-icons",
    onClick: () => setShowSocialShare(!showSocialShare)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: isDark ? _shareBlack.default : _shareWhite.default,
    alt: "img"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "alj-podcast-share-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alj-podcast-share ".concat(showSocialShare ? "on" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alj-chat-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alj-podcast-inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#/",
    onClick: () => {
      shareWhatsapp(pageSlug, title);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _shareWhatsapp.default,
    alt: "whatsapp_icon"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#/",
    onClick: () => {
      shareLinkedin(pageSlug, title);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _shareLinkedin.default,
    alt: "linkedin-icon"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#/",
    onClick: () => {
      shareFB(pageSlug, title);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _shareFb.default,
    alt: "facebook_icon"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#/",
    onClick: () => {
      shareTwitter(pageSlug, title);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _shareTwitter.default,
    alt: "twitter_icon"
  })))))))));
}