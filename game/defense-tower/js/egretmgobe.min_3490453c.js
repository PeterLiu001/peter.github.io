var __extends = this && this.__extends || function(e, t) {
        function n() {
            this.constructor = e
        }
        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        n.prototype = t.prototype, e.prototype = new n
    },
    __reflect = this && this.__reflect || function(e, t, n) {
        e.__class__ = t, n ? n.push(t) : n = [t], e.__types__ = e.__types__ ? n.concat(e.__types__) : n
    },
    __awaiter = this && this.__awaiter || function(e, t, n, o) {
        return new(n || (n = Promise))(function(r, _) {
            function i(e) {
                try {
                    a(o.next(e))
                } catch (t) {
                    _(t)
                }
            }

            function s(e) {
                try {
                    a(o["throw"](e))
                } catch (t) {
                    _(t)
                }
            }

            function a(e) {
                e.done ? r(e.value) : new n(function(t) {
                    t(e.value)
                }).then(i, s)
            }
            a((o = o.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function n(e) {
            return function(t) {
                return o([e, t])
            }
        }

        function o(n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a;) try {
                if (r = 1, _ && (i = _[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(i = i.call(_, n[1])).done) return i;
                switch (_ = 0, i && (n = [0, i.value]), n[0]) {
                    case 0:
                    case 1:
                        i = n;
                        break;
                    case 4:
                        return a.label++, {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        a.label++, _ = n[1], n = [0];
                        continue;
                    case 7:
                        n = a.ops.pop(), a.trys.pop();
                        continue;
                    default:
                        if (i = a.trys, !(i = i.length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            a = 0;
                            continue
                        }
                        if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                            a.label = n[1];
                            break
                        }
                        if (6 === n[0] && a.label < i[1]) {
                            a.label = i[1], i = n;
                            break
                        }
                        if (i && a.label < i[2]) {
                            a.label = i[2], a.ops.push(n);
                            break
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue
                }
                n = t.call(e, a)
            } catch (o) {
                n = [6, o], _ = 0
            } finally {
                r = i = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var r, _, i, s, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    };
"undefined" == typeof GameGlobal || GameGlobal.window || (GameGlobal.window = GameGlobal), ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.MGOBE = t() : e.MGOBE = t()
}(window, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var r in e) t.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 12)
    }([function(e, t, n) {
        "use strict";
        var o = n(1),
            r = n(3),
            _ = n(4);
        n.d(t, "j", function() {
            return c
        }), n.d(t, "l", function() {
            return u
        }), n.d(t, "k", function() {
            return C
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "h", function() {
            return s
        }), n.d(t, "i", function() {
            return a
        }), n.d(t, "a", function() {
            return E
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "f", function() {
            return p
        }), n.d(t, "g", function() {
            return l
        }), n.d(t, "c", function() {
            return r.a
        }), n.d(t, "b", function() {
            return _.a
        }), n(10);
        var i, s, a, E, R = n(8),
            c = {
                pingTimeout: 5e3,
                reconnectInterval: 500,
                reconnectMaxTimes: 15,
                resendInterval: 1e3,
                resendTimeout: 2e4,
                url: void 0
            },
            u = {
                version: R.version,
                appName: void 0,
                cmd: "",
                seq: void 0,
                clientIp: void 0,
                serviceIp: void 0,
                business: void 0,
                authKey: void 0,
                authType: void 0,
                authIp: void 0,
                gameId: void 0,
                uid: void 0,
                playerId: void 0,
                body: void 0
            },
            C = {
                gameId: void 0,
                openId: void 0,
                secretKey: void 0
            };
        ! function(e) {
            var t = {};
            e.getInfo = function() {
                return t
            }, e.setInfo = function(e) {
                return t = e
            }
        }(i || (i = {})),
        function(e) {
            var t;
            ! function(e) {
                e[e.INITED = 1] = "INITED", e[e.INITING = 2] = "INITING", e[e.UNINIT = 3] = "UNINIT"
            }(t = e.StatusType || (e.StatusType = {}));
            var n = t.UNINIT;
            e.isInited = function() {
                return n === t.INITED
            }, e.isIniting = function() {
                return n === t.INITING
            }, e.isUnInit = function() {
                return n === t.UNINIT
            }, e.setStatus = function(e) {
                return n = e
            }
        }(s || (s = {})),
        function(e) {
            var t;
            ! function(e) {
                e[e.LOGIN = 1] = "LOGIN", e[e.LOGINING = 2] = "LOGINING", e[e.LOGOUT = 3] = "LOGOUT", e[e.LOGOUTING = 4] = "LOGOUTING"
            }(t = e.StatusType || (e.StatusType = {}));
            var n = t.LOGOUT,
                o = 0,
                r = "";
            e.isStatus = function(e) {
                return n === e
            }, e.setStatus = function(e) {
                n = e, e === t.LOGIN && (o = 0)
            }, e.setErrCode = function(e, t) {
                o = e, r = t
            }, e.getErrCode = function() {
                return o
            }, e.getErrMsg = function() {
                return r
            }
        }(a || (a = {})),
        function(e) {
            var t;
            ! function(e) {
                e[e.CHECKING = 1] = "CHECKING", e[e.CHECKED = 2] = "CHECKED", e[e.OFFLINE = 3] = "OFFLINE"
            }(t = e.StatusType || (e.StatusType = {}));
            var n = t.CHECKING;
            e.isChecked = function() {
                return n === t.CHECKED
            }, e.isOffline = function() {
                return n === t.OFFLINE
            }, e.setStatus = function(e) {
                return n = e
            }
        }(E || (E = {}));
        var d = o.a.ClientSendServerReqWrap2Cmd,
            p = o.a.ServerSendClientBstWrap2Type,
            l = 5443
    }, function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "a", function() {
                return o
            }),
            function(e) {
                var t, n, o, r, _, i, s, a, E, R, c;
                ! function(e) {
                    e[e.COMMON = 0] = "COMMON", e[e.RELAY = 1] = "RELAY"
                }(t = e.ConnectionType || (e.ConnectionType = {})),
                function(e) {
                    e[e.E_PUSH_TYPE_TEST = 0] = "E_PUSH_TYPE_TEST", e[e.E_PUSH_TYPE_RELAY = 1] = "E_PUSH_TYPE_RELAY", e[e.E_PUSH_TYPE_GAMESVR = 2] = "E_PUSH_TYPE_GAMESVR", e[e.E_PUSH_TYPE_JOIN_ROOM = 100] = "E_PUSH_TYPE_JOIN_ROOM", e[e.E_PUSH_TYPE_LEAVE_ROOM = 101] = "E_PUSH_TYPE_LEAVE_ROOM", e[e.E_PUSH_TYPE_DISMISS_ROOM = 102] = "E_PUSH_TYPE_DISMISS_ROOM", e[e.E_PUSH_TYPE_REMOVE_PLAYER = 103] = "E_PUSH_TYPE_REMOVE_PLAYER", e[e.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY = 104] = "E_PUSH_TYPE_MODIFY_ROOM_PROPERTY", e[e.E_PUSH_TYPE_NETWORK_STATE = 105] = "E_PUSH_TYPE_NETWORK_STATE", e[e.E_PUSH_TYPE_ROOM_CHAT = 106] = "E_PUSH_TYPE_ROOM_CHAT", e[e.E_PUSH_TYPE_PLAYER_STATE = 107] = "E_PUSH_TYPE_PLAYER_STATE", e[e.E_PUSH_TYPE_START_GAME = 108] = "E_PUSH_TYPE_START_GAME", e[e.E_PUSH_TYPE_STOP_GAME = 109] = "E_PUSH_TYPE_STOP_GAME", e[e.E_PUSH_TYPE_CREATE_ROOM = 110] = "E_PUSH_TYPE_CREATE_ROOM", e[e.E_PUSH_TYPE_DESTROY_ROOM = 111] = "E_PUSH_TYPE_DESTROY_ROOM", e[e.E_PUSH_TYPE_MATCH_SUCCESS = 200] = "E_PUSH_TYPE_MATCH_SUCCESS", e[e.E_PUSH_TYPE_MATCH_TIMEOUT = 201] = "E_PUSH_TYPE_MATCH_TIMEOUT"
                }(n = e.ServerSendClientBstWrap2Type || (e.ServerSendClientBstWrap2Type = {})),
                function(e) {
                    e[e.E_CMD_INVALID = 0] = "E_CMD_INVALID", e[e.E_CMD_HEART_BEAT_REQ = 100] = "E_CMD_HEART_BEAT_REQ", e[e.E_CMD_CHECK_LOGIN_REQ = 101] = "E_CMD_CHECK_LOGIN_REQ", e[e.E_CMD_LOGIN_TO_ROOM_REQ = 102] = "E_CMD_LOGIN_TO_ROOM_REQ", e[e.E_CMD_FORWARD_TO_RELAY_REQ = 103] = "E_CMD_FORWARD_TO_RELAY_REQ", e[e.E_CMD_LOGIN_REQ = 1e3] = "E_CMD_LOGIN_REQ", e[e.E_CMD_LOGOUT_REQ = 1001] = "E_CMD_LOGOUT_REQ", e[e.E_CMD_AUTH_REQ = 1002] = "E_CMD_AUTH_REQ", e[e.E_CMD_QUERY_BY_PLAYER_ID_REQ = 1003] = "E_CMD_QUERY_BY_PLAYER_ID_REQ", e[e.E_CMD_QUERY_BY_GAME_ID_REQ = 1004] = "E_CMD_QUERY_BY_GAME_ID_REQ", e[e.E_CMD_GET_ROOM_DETAIL_REQ = 2001] = "E_CMD_GET_ROOM_DETAIL_REQ", e[e.E_CMD_JOIN_ROOM_REQ = 2002] = "E_CMD_JOIN_ROOM_REQ", e[e.E_CMD_QUIT_ROOM_REQ = 2003] = "E_CMD_QUIT_ROOM_REQ", e[e.E_CMD_CREATE_ROOM_REQ = 2004] = "E_CMD_CREATE_ROOM_REQ", e[e.E_CMD_DESTORY_ROOM_REQ = 2005] = "E_CMD_DESTORY_ROOM_REQ", e[e.E_CMD_REMOVE_MEMBER_REQ = 2006] = "E_CMD_REMOVE_MEMBER_REQ", e[e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ = 2007] = "E_CMD_CHANGE_ROOM_PROPERTIS_REQ", e[e.E_CMD_DISSMISS_ROOM_REQ = 2008] = "E_CMD_DISSMISS_ROOM_REQ", e[e.E_CMD_CHANGE_PLAYER_STATE_REQ = 2009] = "E_CMD_CHANGE_PLAYER_STATE_REQ", e[e.E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ = 2010] = "E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ", e[e.E_CMD_ROOM_CHAT_REQ = 2011] = "E_CMD_ROOM_CHAT_REQ", e[e.E_CMD_START_FRAME_SYNC_REQ = 2012] = "E_CMD_START_FRAME_SYNC_REQ", e[e.E_CMD_STOP_FRAME_SYNC_REQ = 2013] = "E_CMD_STOP_FRAME_SYNC_REQ", e[e.E_CMD_GET_ROOM_LIST_REQ = 2014] = "E_CMD_GET_ROOM_LIST_REQ", e[e.E_CMD_MATCH_ROOM_SIMPLE_REQ = 3001] = "E_CMD_MATCH_ROOM_SIMPLE_REQ", e[e.E_CMD_MATCH_USER_SIMPLE_REQ = 3002] = "E_CMD_MATCH_USER_SIMPLE_REQ", e[e.E_CMD_MATCH_CANCEL_MATCH_REQ = 3003] = "E_CMD_MATCH_CANCEL_MATCH_REQ", e[e.E_CMD_MATCH_ROOM_COMPLEX_REQ = 3004] = "E_CMD_MATCH_ROOM_COMPLEX_REQ", e[e.E_CMD_MATCH_PLAYER_COMPLEX_REQ = 3005] = "E_CMD_MATCH_PLAYER_COMPLEX_REQ", e[e.E_CMD_RELAY_SEND_FRAME_REQ = 4e3] = "E_CMD_RELAY_SEND_FRAME_REQ", e[e.E_CMD_RELAY_REQUEST_FRAME_REQ = 4001] = "E_CMD_RELAY_REQUEST_FRAME_REQ", e[e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ = 4002] = "E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ", e[e.E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ = 4003] = "E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ", e[e.E_CMD_NOTIFY_JOIN_ROOM = 5e3] = "E_CMD_NOTIFY_JOIN_ROOM", e[e.E_CMD_NOTIFY_QUIT_ROOM = 5001] = "E_CMD_NOTIFY_QUIT_ROOM", e[e.E_CMD_NOTIFY_DESTORY_ROOM = 5002] = "E_CMD_NOTIFY_DESTORY_ROOM", e[e.E_CMD_NOTIFY_NET_STATE = 5003] = "E_CMD_NOTIFY_NET_STATE", e[e.E_CMD_NOTIFY_KICK_MEMBER = 5004] = "E_CMD_NOTIFY_KICK_MEMBER", e[e.E_CMD_GET_ADDR_BY_ROUTER_ID_REQ = 6e3] = "E_CMD_GET_ADDR_BY_ROUTER_ID_REQ"
                }(o = e.ClientSendServerReqWrap2Cmd || (e.ClientSendServerReqWrap2Cmd = {})),
                function(e) {
                    e[e.EC_OK = 0] = "EC_OK", e[e.EC_REQ_BAD_PKG = 1] = "EC_REQ_BAD_PKG", e[e.EC_CMD_INVALID = 2] = "EC_CMD_INVALID", e[e.EC_PARAMS_INVALID = 3] = "EC_PARAMS_INVALID", e[e.EC_INNER_ERROR = 4] = "EC_INNER_ERROR", e[e.EC_TIME_OUT = 5] = "EC_TIME_OUT", e[e.EC_SERVER_BUSY = 6] = "EC_SERVER_BUSY", e[e.EC_NO_RIGHT = 7] = "EC_NO_RIGHT", e[e.EC_ACCESS_CMD_INVALID_ERR = 200] = "EC_ACCESS_CMD_INVALID_ERR", e[e.EC_ACCESS_CMD_GET_TOKEN_ERR = 201] = "EC_ACCESS_CMD_GET_TOKEN_ERR", e[e.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE = 202] = "EC_ACCESS_CMD_TOKEN_PRE_EXPIRE", e[e.EC_ACCESS_CMD_INVALID_TOKEN = 203] = "EC_ACCESS_CMD_INVALID_TOKEN", e[e.EC_ACCESS_PUSH_SERIALIZE_ERR = 204] = "EC_ACCESS_PUSH_SERIALIZE_ERR", e[e.EC_ACCESS_LOGIN_BODY_PARSE_ERR = 205] = "EC_ACCESS_LOGIN_BODY_PARSE_ERR", e[e.EC_ACCESS_CONN_ERR = 206] = "EC_ACCESS_CONN_ERR", e[e.EC_ACCESS_GET_RS_IP_ERR = 207] = "EC_ACCESS_GET_RS_IP_ERR", e[e.EC_ACCESS_ADD_COMM_CONN_ERR = 208] = "EC_ACCESS_ADD_COMM_CONN_ERR", e[e.EC_ACCESS_ADD_HEART_CONN_ERR = 209] = "EC_ACCESS_ADD_HEART_CONN_ERR", e[e.EC_ACCESS_ADD_RELAY_CONN_ERR = 210] = "EC_ACCESS_ADD_RELAY_CONN_ERR", e[e.EC_ACCESS_HEART_BODY_PARSE_ERR = 211] = "EC_ACCESS_HEART_BODY_PARSE_ERR", e[e.EC_ACCESS_GET_COMM_CONNECT_ERR = 212] = "EC_ACCESS_GET_COMM_CONNECT_ERR", e[e.EC_ACCESS_GET_RELAY_CONNECT_ERR = 213] = "EC_ACCESS_GET_RELAY_CONNECT_ERR", e[e.EC_ACCESS_ACCESS_INFO_EMPTY = 214] = "EC_ACCESS_ACCESS_INFO_EMPTY", e[e.EC_ACCESS_PLAYER_DUPLICATE_LOGIN = 215] = "EC_ACCESS_PLAYER_DUPLICATE_LOGIN", e[e.EC_PLAYER_GAME_NOT_EXIST = 1e4] = "EC_PLAYER_GAME_NOT_EXIST", e[e.EC_PLAYER_SECRET_KEY_FAIL = 10001] = "EC_PLAYER_SECRET_KEY_FAIL", e[e.EC_PLAYER_SIGN_ERR = 10002] = "EC_PLAYER_SIGN_ERR", e[e.EC_PLAYER_DUPLICATE_REQ = 10003] = "EC_PLAYER_DUPLICATE_REQ", e[e.EC_PLAYER_TIMESTAMP_INVALID = 10004] = "EC_PLAYER_TIMESTAMP_INVALID", e[e.EC_PLAYER_QUERY_PLAYER_FAIL = 10005] = "EC_PLAYER_QUERY_PLAYER_FAIL", e[e.EC_PLAYER_ADD_PLAYER_FAIL = 10006] = "EC_PLAYER_ADD_PLAYER_FAIL", e[e.EC_PLAYER_QUERY_GAME_FAIL = 10007] = "EC_PLAYER_QUERY_GAME_FAIL", e[e.EC_PLAYER_RECORD_NUM_ERR = 10008] = "EC_PLAYER_RECORD_NUM_ERR", e[e.EC_PLAYER_GET_TOKEN_FAIL = 10009] = "EC_PLAYER_GET_TOKEN_FAIL", e[e.EC_PLAYER_TOKEN_NOT_EXIST = 10010] = "EC_PLAYER_TOKEN_NOT_EXIST", e[e.EC_PLAYER_TOKEN_INVALID = 10011] = "EC_PLAYER_TOKEN_INVALID", e[e.EC_PLAYER_CLEAR_TOKEN_FAIL = 10012] = "EC_PLAYER_CLEAR_TOKEN_FAIL", e[e.EC_PLAYER_LOCK_FAIL = 10013] = "EC_PLAYER_LOCK_FAIL", e[e.EC_PLAYER_UNLOCK_FAIL = 10014] = "EC_PLAYER_UNLOCK_FAIL", e[e.EC_PLAYER_SAVE_TOKEN_FAIL = 10015] = "EC_PLAYER_SAVE_TOKEN_FAIL", e[e.EC_ROOM_CREATE_NO_PERMISSION = 2e4] = "EC_ROOM_CREATE_NO_PERMISSION", e[e.EC_ROOM_DESTORY_NO_PERMISSION = 20001] = "EC_ROOM_DESTORY_NO_PERMISSION", e[e.EC_ROOM_JOIN_NO_PERMISSION = 20002] = "EC_ROOM_JOIN_NO_PERMISSION", e[e.EC_ROOM_REMOVE_PLAYER_NO_PERMISSION = 20003] = "EC_ROOM_REMOVE_PLAYER_NO_PERMISSION", e[e.EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION = 20004] = "EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION", e[e.EC_ROOM_DISSMISS_NO_PERMISSION = 20005] = "EC_ROOM_DISSMISS_NO_PERMISSION", e[e.EC_ROOM_REMOVE_SELF_NO_PERMISSION = 20006] = "EC_ROOM_REMOVE_SELF_NO_PERMISSION", e[e.EC_ROOM_CHECK_LOGIN_SESSION_ERR = 20007] = "EC_ROOM_CHECK_LOGIN_SESSION_ERR", e[e.EC_ROOM_PLAYER_ALREADY_IN_ROOM = 20010] = "EC_ROOM_PLAYER_ALREADY_IN_ROOM", e[e.EC_ROOM_PLAYER_NOT_IN_ROOM = 20011] = "EC_ROOM_PLAYER_NOT_IN_ROOM", e[e.EC_ROOM_PLAYERS_EXCEED_LIMIT = 20012] = "EC_ROOM_PLAYERS_EXCEED_LIMIT", e[e.EC_ROOM_JOIN_NOT_ALLOW = 20013] = "EC_ROOM_JOIN_NOT_ALLOW", e[e.EC_ROOM_MAX_PLAYERS_INVALID = 20014] = "EC_ROOM_MAX_PLAYERS_INVALID", e[e.EC_ROOM_CREATE_FAIL = 20015] = "EC_ROOM_CREATE_FAIL", e[e.EC_ROOM_PLAYER_OFFLINE = 20016] = "EC_ROOM_PLAYER_OFFLINE", e[e.EC_ROOM_PARAM_PAGE_INVALID = 20017] = "EC_ROOM_PARAM_PAGE_INVALID", e[e.EC_ROOM_GET_PLAYER_INFO_ERR = 20050] = "EC_ROOM_GET_PLAYER_INFO_ERR", e[e.EC_ROOM_GET_ROOM_INFO_ERR = 20051] = "EC_ROOM_GET_ROOM_INFO_ERR", e[e.EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR = -20052] = "EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR", e[e.EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR = -20053] = "EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR", e[e.EC_ROOM_REDIS_UPDATE_ERR = -20054] = "EC_ROOM_REDIS_UPDATE_ERR", e[e.EC_ROOM_REDIS_GET_LOCK_ERR = -20055] = "EC_ROOM_REDIS_GET_LOCK_ERR", e[e.EC_ROOM_REDIS_CHECK_LOCK_ERR = -20056] = "EC_ROOM_REDIS_CHECK_LOCK_ERR", e[e.EC_ROOM_REDIS_DEL_LOCK_ERR = -20057] = "EC_ROOM_REDIS_DEL_LOCK_ERR", e[e.EC_ROOM_QUERY_PLAYER_ERR = 20060] = "EC_ROOM_QUERY_PLAYER_ERR", e[e.EC_ROOM_QUERY_GAME_ERR = 20061] = "EC_ROOM_QUERY_GAME_ERR", e[e.EC_ROOM_PLAYER_INFO_NOT_EXIST = 20062] = "EC_ROOM_PLAYER_INFO_NOT_EXIST", e[e.EC_ROOM_GAME_INFO_NOT_EXIST = 20063] = "EC_ROOM_GAME_INFO_NOT_EXIST", e[e.EC_ROOM_HISTORY_INFO_INSERT_ERR = -20064] = "EC_ROOM_HISTORY_INFO_INSERT_ERR", e[e.EC_ROOM_REGION_INFO_NOT_EXIST = 20065] = "EC_ROOM_REGION_INFO_NOT_EXIST", e[e.EC_ROOM_QUERY_REGION_ERR = 20066] = "EC_ROOM_QUERY_REGION_ERR", e[e.EC_ROOM_INFO_UNEXIST = 20080] = "EC_ROOM_INFO_UNEXIST", e[e.EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR = 20090] = "EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR", e[e.EC_ROOM_INVALID_PARAMS_TEAM_ID = 20100] = "EC_ROOM_INVALID_PARAMS_TEAM_ID", e[e.EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED = 20101] = "EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED", e[e.EC_MATCH_NO_ROOM = 3e4] = "EC_MATCH_NO_ROOM", e[e.EC_MATCH_TIMEOUT = 30001] = "EC_MATCH_TIMEOUT", e[e.EC_MATCH_LOGIC_ERR = 30002] = "EC_MATCH_LOGIC_ERR", e[e.EC_MATCH_ERR = 30010] = "EC_MATCH_ERR", e[e.EC_MATCH_PLAYER_IS_IN_MATCH = 30011] = "EC_MATCH_PLAYER_IS_IN_MATCH", e[e.EC_MATCH_PLAYER_NOT_IN_MATCH = 30012] = "EC_MATCH_PLAYER_NOT_IN_MATCH", e[e.EC_MATCH_GET_MATCH_INFO_ERR = 30013] = "EC_MATCH_GET_MATCH_INFO_ERR", e[e.EC_MATCH_UPDATE_MATCH_INFO_ERR = 30014] = "EC_MATCH_UPDATE_MATCH_INFO_ERR", e[e.EC_MATCH_CANCEL_FAILED = 30015] = "EC_MATCH_CANCEL_FAILED", e[e.EC_MATCH_GET_PLAYER_LIST_INFO_ERR = 30016] = "EC_MATCH_GET_PLAYER_LIST_INFO_ERR", e[e.EC_MATCH_CREATE_ROOM_ERR = 30041] = "EC_MATCH_CREATE_ROOM_ERR", e[e.EC_MATCH_JOIN_ROOM_ERR = 30042] = "EC_MATCH_JOIN_ROOM_ERR", e[e.EC_MATCH_QUERY_PLAYER_ERR = 30100] = "EC_MATCH_QUERY_PLAYER_ERR", e[e.EC_MATCH_PLAYER_INFO_NOT_EXIST = 30101] = "EC_MATCH_PLAYER_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_GAME_ERR = 30102] = "EC_MATCH_QUERY_GAME_ERR", e[e.EC_MATCH_GAME_INFO_NOT_EXIST = 30103] = "EC_MATCH_GAME_INFO_NOT_EXIST", e[e.EC_MATCH_QUERY_REGION_ERR = 30104] = "EC_MATCH_QUERY_REGION_ERR", e[e.EC_MATCH_REGION_INFO_NOT_EXIST = 30105] = "EC_MATCH_REGION_INFO_NOT_EXIST", e[e.EC_MATCH_TEAM_FAIL = 30106] = "EC_MATCH_TEAM_FAIL", e[e.EC_MATCH_PLAY_RULE_NOT_RUNNING = 30107] = "EC_MATCH_PLAY_RULE_NOT_RUNNING", e[e.EC_MATCH_PLAY_ATTR_NOT_FOUND = 30108] = "EC_MATCH_PLAY_ATTR_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_NOT_FOUND = 30109] = "EC_MATCH_PLAY_RULE_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND = 30110] = "EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND", e[e.EC_MATCH_PLAY_RULE_FUNC_ERR = 30111] = "EC_MATCH_PLAY_RULE_FUNC_ERR", e[e.EC_MATCH_GET_PLAYER_ATTR_FAIL = 30112] = "EC_MATCH_GET_PLAYER_ATTR_FAIL", e[e.EC_MATCH_GET_TEAM_ATTR_FAIL = 30113] = "EC_MATCH_GET_TEAM_ATTR_FAIL", e[e.EC_MATCH_INNER_LOGIC_ERR = -30150] = "EC_MATCH_INNER_LOGIC_ERR", e[e.EC_RELAY_ALREADY_EXISTS = 4e4] = "EC_RELAY_ALREADY_EXISTS", e[e.EC_RELAY_NOT_EXISTS = 40001] = "EC_RELAY_NOT_EXISTS", e[e.EC_RELAY_DATA_EXCEED_LIMITED = 40002] = "EC_RELAY_DATA_EXCEED_LIMITED", e[e.EC_RELAY_MEMBER_ALREADY_EXISTS = 40003] = "EC_RELAY_MEMBER_ALREADY_EXISTS", e[e.EC_RELAY_MEMBER_NOT_EXISTS = 40004] = "EC_RELAY_MEMBER_NOT_EXISTS", e[e.EC_RELAY_STATE_INVALID = 40005] = "EC_RELAY_STATE_INVALID", e[e.EC_RELAY_INVALID_FRAME_RATE = 40006] = "EC_RELAY_INVALID_FRAME_RATE", e[e.EC_RELAY_SET_FRAME_RATE_FORBIDDEN = 40007] = "EC_RELAY_SET_FRAME_RATE_FORBIDDEN", e[e.EC_RELAY_NO_MEMBERS = 40008] = "EC_RELAY_NO_MEMBERS", e[e.EC_RELAY_GAMESVR_SERVICE_NOT_OPEN = 40009] = "EC_RELAY_GAMESVR_SERVICE_NOT_OPEN", e[e.EC_RELAY_REQ_POD_FAIL = 40010] = "EC_RELAY_REQ_POD_FAIL", e[e.EC_RELAY_LOGIC_ERROR = 40014] = "EC_RELAY_LOGIC_ERROR", e[e.EC_RELAY_HKV_CACHE_ERROR = 40015] = "EC_RELAY_HKV_CACHE_ERROR", e[e.EC_RELAY_REDIS_CACHE_ERROR = 40016] = "EC_RELAY_REDIS_CACHE_ERROR", e[e.EC_RELAY_CACHE_ERROR = 40017] = "EC_RELAY_CACHE_ERROR", e[e.EC_RELAY_NOTIFY_RELAYWORKER_FAIL = 40018] = "EC_RELAY_NOTIFY_RELAYWORKER_FAIL", e[e.EC_RELAY_RESET_RELAY_ROOM_FAIL = 40019] = "EC_RELAY_RESET_RELAY_ROOM_FAIL", e[e.EC_RELAY_CLEAN_RELAY_ROOM_FAIL = 40020] = "EC_RELAY_CLEAN_RELAY_ROOM_FAIL", e[e.EC_RELAY_NO_PERMISSION = 40100] = "EC_RELAY_NO_PERMISSION", e[e.EC_RELAY_NOTIFY_GAMESVR_FAIL = 40200] = "EC_RELAY_NOTIFY_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_GAMESVR_FAIL = 40201] = "EC_RELAY_FORWARD_TO_GAMESVR_FAIL", e[e.EC_RELAY_FORWARD_TO_CLIENT_FAIL = 40202] = "EC_RELAY_FORWARD_TO_CLIENT_FAIL", e[e.EC_INVALID_PARAMS = 6e4] = "EC_INVALID_PARAMS", e[e.EC_INVALID_PARAMS_PLAY_MODE_VERSION = 60001] = "EC_INVALID_PARAMS_PLAY_MODE_VERSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_RULETYPE = 60002] = "EC_INVALID_PARAMS_PLAY_MODE_RULETYPE", e[e.EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION = 60003] = "EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION", e[e.EC_INVALID_PARAMS_PLAY_MODE_TEAM = 60004] = "EC_INVALID_PARAMS_PLAY_MODE_TEAM", e[e.EC_INVALID_PARAMS_MSGQ_ENCODE = 60020] = "EC_INVALID_PARAMS_MSGQ_ENCODE", e[e.EC_INVALID_PARAMS_MSGQ_DECODE = 60021] = "EC_INVALID_PARAMS_MSGQ_DECODE", e[e.EC_INVALID_PARAMS_GAME_ID = 61e3] = "EC_INVALID_PARAMS_GAME_ID", e[e.EC_INVALID_PARAMS_PLAYER_INFO = 61001] = "EC_INVALID_PARAMS_PLAYER_INFO", e[e.EC_INVALID_PARAMS_MAX_PLAYERS = 61002] = "EC_INVALID_PARAMS_MAX_PLAYERS", e[e.EC_INVALID_PARAMS_ROOM_TYPE = 61003] = "EC_INVALID_PARAMS_ROOM_TYPE", e[e.EC_INVALID_PARAMS_PLAYER_ID = 61004] = "EC_INVALID_PARAMS_PLAYER_ID", e[e.EC_INVALID_PARAMS_MATCH_TYPE = 61005] = "EC_INVALID_PARAMS_MATCH_TYPE", e[e.EC_INVALID_PARAMS_MATCH_CODE = 61006] = "EC_INVALID_PARAMS_MATCH_CODE", e[e.EC_INVALID_PARAMS_OPEN_ID = 61007] = "EC_INVALID_PARAMS_OPEN_ID", e[e.EC_INVALID_PARAMS_PLATFORM = 61008] = "EC_INVALID_PARAMS_PLATFORM", e[e.EC_INVALID_PARAMS_TIMESTAMP = 61009] = "EC_INVALID_PARAMS_TIMESTAMP", e[e.EC_INVALID_PARAMS_SIGN = 61010] = "EC_INVALID_PARAMS_SIGN", e[e.EC_INVALID_PARAMS_NONCE = 61011] = "EC_INVALID_PARAMS_NONCE", e[e.EC_INVALID_PARAMS_TOKEN = 61012] = "EC_INVALID_PARAMS_TOKEN", e[e.EC_INVALID_PARAMS_NETWORK_STATE = 61013] = "EC_INVALID_PARAMS_NETWORK_STATE", e[e.EC_INVALID_PARAMS_ROOM_NAME = 61014] = "EC_INVALID_PARAMS_ROOM_NAME", e[e.EC_INVALID_PARAMS_CREATE_ROOM_TYPE = 61015] = "EC_INVALID_PARAMS_CREATE_ROOM_TYPE", e[e.EC_INVALID_PARAMS_DEVICE_ID = 61016] = "EC_INVALID_PARAMS_DEVICE_ID", e[e.EC_MYSPP_SYSTEM_ERR = -1e3] = "EC_MYSPP_SYSTEM_ERR", e[e.EC_REDIS_KEY_NOT_EXIST = -66e3] = "EC_REDIS_KEY_NOT_EXIST", e[e.EC_REDIS_SET_OP_ERR = -66001] = "EC_REDIS_SET_OP_ERR", e[e.EC_REDIS_GET_OP_ERR = -66002] = "EC_REDIS_GET_OP_ERR", e[e.EC_REDIS_DEL_OP_ERR = -66003] = "EC_REDIS_DEL_OP_ERR", e[e.EC_REDIS_EXPIRE_OP_ERR = -66004] = "EC_REDIS_EXPIRE_OP_ERR", e[e.EC_REDIS_LOCK_OP_ERR = -66005] = "EC_REDIS_LOCK_OP_ERR", e[e.EC_REDIS_LOCK_ALREADY_EXIST = -66006] = "EC_REDIS_LOCK_ALREADY_EXIST", e[e.EC_REDIS_LIST_OP_ERR = -66020] = "EC_REDIS_LIST_OP_ERR", e[e.EC_REDIS_LIST_POP_EMPTY = -66021] = "EC_REDIS_LIST_POP_EMPTY", e[e.EC_MYSQL_NO_ROW_FOUND = -66100] = "EC_MYSQL_NO_ROW_FOUND", e[e.EC_MYSQL_MULTI_ROW_FOUND = -66101] = "EC_MYSQL_MULTI_ROW_FOUND", e[e.EC_MYSQL_INSERT_FAIL = -66102] = "EC_MYSQL_INSERT_FAIL", e[e.EC_MYSQL_DELETE_FAIL = -66103] = "EC_MYSQL_DELETE_FAIL", e[e.EC_MYSQL_UPDATE_FAIL = -66104] = "EC_MYSQL_UPDATE_FAIL", e[e.EC_MYSQL_QUERYS_FAIL = -66105] = "EC_MYSQL_QUERYS_FAIL", e[e.EC_PB_SERIALIZE_TO_STR_ERR = -66200] = "EC_PB_SERIALIZE_TO_STR_ERR", e[e.EC_PB_PARSE_FROM_STR_ERR = -66201] = "EC_PB_PARSE_FROM_STR_ERR", e[e.EC_DATA_FORMAT_ERR = -66210] = "EC_DATA_FORMAT_ERR", e[e.EC_JSON_FORMAT_ERR = -66211] = "EC_JSON_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_FORMAT_ERR = -66212] = "EC_JSON_PLAY_MODE_FORMAT_ERR", e[e.EC_JSON_PLAY_MODE_PARISE_ERR = -66213] = "EC_JSON_PLAY_MODE_PARISE_ERR", e[e.EC_INVALID_PARAMS_RECORE_ID = -66601] = "EC_INVALID_PARAMS_RECORE_ID", e[e.EC_HASHID_ERR = -66700] = "EC_HASHID_ERR", e[e.EC_HASHID_ENCODE_ERR = -66701] = "EC_HASHID_ENCODE_ERR", e[e.EC_HASHID_DECODE_ERR = -66702] = "EC_HASHID_DECODE_ERR", e[e.EC_CONF_ROOM_ID_BUCKET_ERR = -66801] = "EC_CONF_ROOM_ID_BUCKET_ERR", e[e.EC_SDK_SEND_FAIL = 90001] = "EC_SDK_SEND_FAIL", e[e.EC_SDK_UNINIT = 90002] = "EC_SDK_UNINIT", e[e.EC_SDK_RES_TIMEOUT = 90003] = "EC_SDK_RES_TIMEOUT", e[e.EC_SDK_NO_LOGIN = 90004] = "EC_SDK_NO_LOGIN", e[e.EC_SDK_NO_CHECK_LOGIN = 90005] = "EC_SDK_NO_CHECK_LOGIN", e[e.EC_SDK_SOCKET_ERROR = 90006] = "EC_SDK_SOCKET_ERROR", e[e.EC_SDK_SOCKET_CLOSE = 90007] = "EC_SDK_SOCKET_CLOSE", e[e.EC_SDK_NO_ROOM = 90008] = "EC_SDK_NO_ROOM"
                }(r = e.QAppProtoErrCode || (e.QAppProtoErrCode = {})),
                function(e) {
                    e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE"
                }(_ = e.NetworkState || (e.NetworkState = {})),
                function(e) {
                    e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE"
                }(i = e.CreateRoomType || (e.CreateRoomType = {})),
                function(e) {
                    e[e.STOP = 0] = "STOP", e[e.START = 1] = "START"
                }(s = e.FrameSyncState || (e.FrameSyncState = {})),
                function(e) {
                    e[e.COMMON_JOIN = 0] = "COMMON_JOIN", e[e.MATCH_JOIN = 1] = "MATCH_JOIN"
                }(a = e.JoinRoomType || (e.JoinRoomType = {})),
                function(e) {
                    e[e.PENDING = 0] = "PENDING", e[e.MATCHING = 1] = "MATCHING", e[e.SUCCESS = 3] = "SUCCESS", e[e.TIMEOUT = 4] = "TIMEOUT"
                }(E = e.MatchStatus || (e.MatchStatus = {})),
                function(e) {
                    e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX"
                }(R = e.MatchType || (e.MatchType = {})),
                function(e) {
                    e[e.E_GS_FORWARDTYPE_DEFAULT = 0] = "E_GS_FORWARDTYPE_DEFAULT", e[e.E_GS_FORWARDTYPE_NOTIFY_CONNECTION = 1] = "E_GS_FORWARDTYPE_NOTIFY_CONNECTION", e[e.E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT = 2] = "E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT", e[e.E_GS_FORWARDTYPE_NOTIFY_COM_EVENT = 3] = "E_GS_FORWARDTYPE_NOTIFY_COM_EVENT", e[e.E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR = 4] = "E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR"
                }(c = e.GameSvrForwardType || (e.GameSvrForwardType = {}))
            }(o || (o = {}))
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var o = {
            onPingTime: function(e) {
                return null
            },
            onFitFrameTime: function(e) {
                return null
            },
            onBstFrameRate: function(e) {
                return null
            },
            onRenderFrameRate: function(e) {
                return null
            }
        }
    }, function(e, t, n) {
        "use strict";
        var o, r = n(1).a.QAppProtoErrCode;
        ! function(e) {
            e.EC_SDK_SEND_FAIL = "发送失败", e.EC_SDK_UNINIT = "未初始化", e.EC_SDK_RES_TIMEOUT = "发送超时", e.EC_SDK_NO_LOGIN = "未登录", e.EC_SDK_NO_CHECK_LOGIN = "CheckLogin失败", e.EC_SDK_SOCKET_ERROR = "Socket错误", e.EC_SDK_SOCKET_CLOSE = "Socket断开", e.EC_SDK_NO_ROOM = "无房间信息"
        }(o || (o = {}));
        var _ = {};
        _[r.EC_SDK_SEND_FAIL] = o.EC_SDK_SEND_FAIL, _[r.EC_SDK_UNINIT] = o.EC_SDK_UNINIT, _[r.EC_SDK_RES_TIMEOUT] = o.EC_SDK_RES_TIMEOUT, _[r.EC_SDK_NO_LOGIN] = o.EC_SDK_NO_LOGIN, _[r.EC_SDK_NO_CHECK_LOGIN] = o.EC_SDK_NO_CHECK_LOGIN, _[r.EC_SDK_SOCKET_ERROR] = o.EC_SDK_SOCKET_ERROR, _[r.EC_SDK_SOCKET_CLOSE] = o.EC_SDK_SOCKET_CLOSE, _[r.EC_SDK_NO_ROOM] = o.EC_SDK_NO_ROOM, t.a = r
    }, function(e, t, n) {
        "use strict";
        var o, r = n(1);
        ! function(e) {
            var t, n, o, r, _;
            ! function(e) {
                e[e.ROOM_ALL = 1] = "ROOM_ALL", e[e.ROOM_OTHERS = 2] = "ROOM_OTHERS", e[e.ROOM_SOME = 3] = "ROOM_SOME"
            }(t = e.RecvType || (e.RecvType = {})),
            function(e) {
                e[e.ROOM_SIMPLE = 1] = "ROOM_SIMPLE", e[e.PLAYER_COMPLEX = 2] = "PLAYER_COMPLEX"
            }(n = e.MatchType || (e.MatchType = {})),
            function(e) {
                e[e.COMMON_CREATE = 0] = "COMMON_CREATE", e[e.MATCH_CREATE = 1] = "MATCH_CREATE"
            }(o = e.CreateRoomType || (e.CreateRoomType = {})),
            function(e) {
                e[e.COMMON_OFFLINE = 0] = "COMMON_OFFLINE", e[e.COMMON_ONLINE = 1] = "COMMON_ONLINE", e[e.RELAY_OFFLINE = 2] = "RELAY_OFFLINE", e[e.RELAY_ONLINE = 3] = "RELAY_ONLINE"
            }(r = e.NetworkState || (e.NetworkState = {})),
            function(e) {
                e[e.STOP = 0] = "STOP", e[e.START = 1] = "START"
            }(_ = e.FrameSyncState || (e.FrameSyncState = {}))
        }(o || (o = {}));
        var _ = {
            get CreateRoomType() {
                return r.a.CreateRoomType
            },
            get MatchType() {
                return r.a.MatchType
            },
            get NetworkState() {
                return r.a.NetworkState
            },
            get FrameSyncState() {
                return r.a.FrameSyncState
            },
            get RecvType() {
                return o.RecvType
            }
        };
        t.a = _
    }, function(e, t, n) {
        var o;
        e.exports = o = o || function(e, t) {
            var n = Object.create || function() {
                    function e() {}
                    return function(t) {
                        var n;
                        return e.prototype = t, n = new e, e.prototype = null, n
                    }
                }(),
                o = {},
                r = o.lib = {},
                _ = r.Base = {
                    extend: function(e) {
                        var t = n(this);
                        return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }), t.init.prototype = t, t.$super = this, t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                },
                i = r.WordArray = _.extend({
                    init: function(e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || a).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            o = this.sigBytes,
                            r = e.sigBytes;
                        if (this.clamp(), o % 4)
                            for (var _ = 0; r > _; _++) {
                                var i = n[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
                                t[o + _ >>> 2] |= i << 24 - (o + _) % 4 * 8
                            } else
                                for (var _ = 0; r > _; _ += 4) t[o + _ >>> 2] = n[_ >>> 2];
                        return this.sigBytes += r, this
                    },
                    clamp: function() {
                        var t = this.words,
                            n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = _.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(t) {
                        for (var n, o = [], r = function(t) {
                                var t = t,
                                    n = 987654321,
                                    o = 4294967295;
                                return function() {
                                    var r = ((n = 36969 * (65535 & n) + (n >> 16) & o) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & o) & o;
                                    return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1)
                                }
                            }, _ = 0; t > _; _ += 4) {
                            var s = r(4294967296 * (n || e.random()));
                            n = 987654071 * s(), o.push(4294967296 * s() | 0)
                        }
                        return new i.init(o, t)
                    }
                }),
                s = o.enc = {},
                a = s.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, o = [], r = 0; n > r; r++) {
                            var _ = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            o.push((_ >>> 4).toString(16)), o.push((15 & _).toString(16))
                        }
                        return o.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], o = 0; t > o; o += 2) n[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
                        return new i.init(n, t / 2)
                    }
                },
                E = s.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, o = [], r = 0; n > r; r++) {
                            var _ = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            o.push(String.fromCharCode(_))
                        }
                        return o.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], o = 0; t > o; o++) n[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
                        return new i.init(n, t)
                    }
                },
                R = s.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(E.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return E.parse(unescape(encodeURIComponent(e)))
                    }
                },
                c = r.BufferedBlockAlgorithm = _.extend({
                    reset: function() {
                        this._data = new i.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = R.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data,
                            o = n.words,
                            r = n.sigBytes,
                            _ = this.blockSize,
                            s = 4 * _,
                            a = r / s,
                            E = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * _,
                            R = e.min(4 * E, r);
                        if (E) {
                            for (var c = 0; E > c; c += _) this._doProcessBlock(o, c);
                            var u = o.splice(0, E);
                            n.sigBytes -= R
                        }
                        return new i.init(u, R)
                    },
                    clone: function() {
                        var e = _.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                }),
                u = (r.Hasher = c.extend({
                    cfg: _.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function() {
                        c.reset.call(this), this._doReset()
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this
                    },
                    finalize: function(e) {
                        e && this._append(e);
                        var t = this._doFinalize();
                        return t
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new u.HMAC.init(e, n).finalize(t)
                        }
                    }
                }), o.algo = {});
            return o
        }(Math)
    }, function(e, t, n) {
        "use strict";
        var o = n(8),
            r = function() {
                function e() {}
                return e
            }();
        r.enable = !1, r.exclude = [], r.callback = function(e) {
            return console.log.apply(console, e)
        }, r.log = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (r.enable && !(Array.isArray(r.exclude) && r.exclude.findIndex(function(t) {
                    return t === e[0]
                }) >= 0)) {
                var n = ["DEBUGGER_v" + o.version + "_" + o.sdkType + " " + Date.now()].concat(e);
                "function" == typeof r.callback && r.callback(n)
            }
        }, Object.defineProperty(r, "log", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: r.log
        }), t.a = r
    }, function(e, t, n) {
        "use strict";
        var o = n(0),
            r = {
                get id() {
                    return o.d.getInfo().id
                },
                get openId() {
                    return o.k.openId
                },
                get name() {
                    return o.d.getInfo().name
                },
                get teamId() {
                    return o.d.getInfo().teamId
                },
                get customPlayerStatus() {
                    return o.d.getInfo().customPlayerStatus
                },
                get customProfile() {
                    return o.d.getInfo().customProfile
                },
                get commonNetworkState() {
                    return o.d.getInfo().commonNetworkState
                },
                get relayNetworkState() {
                    return o.d.getInfo().relayNetworkState
                }
            };
        t.a = r
    }, function(e) {
        e.exports = {
            sdkType: 1,
            version: "1.1.1"
        }
    }, function(e, t, n) {
        "use strict";

        function o() {
            if ("undefined" == typeof wx) return !1;
            if (void 0 === wx.onHide) return !1;
            if (void 0 === wx.offHide) return !1;
            if (void 0 === wx.onShow) return !1;
            if (void 0 === wx.offShow) return !1;
            if (void 0 === wx.getSystemInfoSync) return !1;
            try {
                if (!wx.getSystemInfoSync()) return !1
            } catch (e) {
                return !1
            }
            return !0
        }

        function r() {
            var e = Et.encode(ct++);
            return ct >= Number.MAX_SAFE_INTEGER && (ct = 1), e
        }

        function _() {
            for (var e = Date.now().toString(36), t = 0; 6 > t; t++) e += (n = 1e6, Math.ceil((Math.random() + 1) * n)).toString(36);
            var n;
            return e
        }

        function i() {
            var e = $.UNKNOWN;
            return o() && (e = function() {
                if (!o()) return $.UNKNOWN;
                var e = wx.getSystemInfoSync(),
                    t = e ? e.system + "" : "";
                return t.includes("Android") ? $.ANDROID : t.includes("iOS") ? $.IOS : $.UNKNOWN
            }()), e
        }

        function s() {
            var e = 0;
            return o() && (e = 1), e
        }

        function a(e, t) {
            if (c(t >= 32, "无符号左移不能大于32位！", {
                    value: e,
                    offset: t
                }), 0 === e) return 0;
            var n = e << t;
            return 0 >= n && (n = e * Math.pow(2, t)), n
        }

        function E(e, t) {
            if (c(t >= 32, "无符号右移不能大于32位！", {
                    value: e,
                    offset: t
                }), e >= Tt) {
                var n = e >>> 0,
                    o = (e - n) / Tt;
                return n = E(n, t), (o = a(o, 32 - t)) + n
            }
            return e >>> t
        }

        function R(e, t) {
            throw void 0 === t && (t = ""), "object" == typeof t && (t = JSON.stringify(t)), new Error(e + "\n" + t)
        }

        function c(e, t, n) {
            void 0 === n && (n = ""), e && R(t, n)
        }

        function u(e, t) {
            Array.isArray(t) || (t = [t]);
            for (var n = t.length, o = 0; n > o; o++) e.push(t[o])
        }

        function C(e, t) {
            return e ? Array.isArray(e) ? e.forEach(function(n, o) {
                return t(n, o, e)
            }) : d(e) ? Object.keys(e).forEach(function(n) {
                return d(e[n]) || Array.isArray(e[n]) ? t(e[n], n, e) && C(e[n], t) : t(e[n], n, e)
            }) : null : void 0
        }

        function d(e) {
            return "[object Object]" === Object.prototype.toString.apply(e)
        }

        function p(e, t, n) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                value: n
            })
        }

        function l(e, t, n) {
            var o, r, _, i, s;
            for (o = "", r = t; t + n > r;) switch ((_ = e[r++]) >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    o += String.fromCharCode(_);
                    break;
                case 12:
                case 13:
                    i = e[r++], o += String.fromCharCode((31 & _) << 6 | 63 & i);
                    break;
                case 14:
                    i = e[r++], s = e[r++], o += String.fromCharCode((15 & _) << 12 | (63 & i) << 6 | (63 & s) << 0)
            }
            return {
                cursor: t += n,
                value: o
            }
        }

        function O(e, t, n) {
            var o = [].slice.call(e, t, t + n);
            return {
                cursor: t += n,
                value: o
            }
        }

        function S(e, t) {
            var n = m(e, t);
            c(n.value.length > 1, "bool 溢出");
            var o = !!n.value[0];
            return {
                cursor: n.cursor,
                value: o
            }
        }

        function f(e, t) {
            var n = m(e, t),
                o = n.value;
            return c(o.length > 2, "uint64 溢出"), o.length < 2 ? o = n.value[0] : 2 === o.length && (o = o[0] * Tt + o[1]) >= Mt && (o = n.value), {
                cursor: n.cursor,
                value: o
            }
        }

        function A(e, t) {
            var n = m(e, t);
            return c(n.value.length > 1, "uint32 溢出"), {
                cursor: n.cursor,
                value: n.value[0]
            }
        }

        function I(e, t) {
            var n = m(e, t);
            if (c(n.value.length > 2, "int32 溢出"), 2 === n.value.length) {
                if (0 != ~n.value[0]) return R("int32 溢出");
                n.value[0] = n.value[1]
            }
            return n.value[0] > ht && (n.value[0] = -(1 + ~n.value[0])), {
                cursor: n.cursor,
                value: n.value[0]
            }
        }

        function m(e, t) {
            var n = function(e, t) {
                    for (var n = 1; t < e.length && e[t] >= 128;) n++, t++;
                    return n
                }(e, t),
                o = [],
                r = 0,
                _ = 0;
            if (1 === n && 0 === e[t]) return {
                value: [0],
                cursor: t + 1
            };
            for (var i = t; t + n > i; i++)
                for (var s = 127 & e[i], R = 7; R > 0;)
                    if (32 >= _ + R) r += a(s, _), _ += R, R = 0;
                    else {
                        var c = _ + R - 32,
                            u = R - c;
                        r += a(s & Math.pow(2, u) - 1, _), o.unshift(r), s = E(s, u), R = c, _ = 0, r = 0
                    }
            return 0 !== r && o.unshift(r), {
                value: o,
                cursor: t + n
            }
        }

        function T(e, t) {
            var n, o, r = m(e, t);
            c(r.value.length > 1, "key字段长度不能大于32位！");
            var _ = r.value[0];
            return t = r.cursor, o = 7 & _, {
                id: n = E(_, 3),
                writeType: o,
                cursor: t
            }
        }

        function M(e, t, n) {
            return c(!["int32", "uint32", "uint64", "bool"].includes(n), "无法解析 " + n + " 类型"), z["_" + n](e, t)
        }

        function h(e, t, n) {
            var o = m(e, t),
                r = [],
                _ = o;
            if (c(o.value.length > 1, "目前只支持长度为小于 32位 的数据 ！"), "string" === n) return l(e, _.cursor, _.value[0]);
            if ("bytes" === n) return O(e, _.cursor, _.value[0]);
            for (var i = 0; i < o.value[0]; i++) _ = f(e, _.cursor), r.push(_.value);
            return {
                value: r,
                cursor: _.cursor
            }
        }

        function y(e) {
            e += "";
            for (var t = new Array, n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n);
                if (128 > o) t.push(o);
                else if (2048 > o) t.push(o >> 6 | 192), t.push(63 & o | 128);
                else if (65536 > o)
                    if (o >= 55296 && 56319 >= o && n + 1 < e.length) {
                        var r = e.charCodeAt(n + 1);
                        r >= 56320 && 57343 >= r && (o = 1024 * (o - 55296) + r - 56320 + 65536, t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128), n++)
                    } else t.push(o >> 12 | 224), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128)
            }
            var _ = t.length;
            return c(_ >= Math.pow(2, 32), "数组长度过大"), t = D(_).concat(t)
        }

        function N(e) {
            e.forEach(function(e) {
                return e >= 256 && R("byte 溢出")
            });
            for (var t = D(e.length), n = e.length, o = 0; n > o; o++) t.push(e[o]);
            return t
        }

        function L(e) {
            return D(e = e ? 1 : 0)
        }

        function g(e) {
            var t, n;
            return Array.isArray(e) ? (n = (Math.round(Math.abs(Number(e[0]))) || 0) >>> 0, t = (Math.round(Math.abs(Number(e[1]))) || 0) >>> 0) : n = ((e = Math.round(Math.abs(Number(e))) || 0) - (t = e >>> 0)) / Tt, D([n, t])
        }

        function P(e) {
            return (e = Math.round(Math.abs(Number(e))) || 0) >= Tt && (e = Tt - 1), D(e)
        }

        function v(e) {
            return D(e = Math.round(Number(e)) || 0)
        }

        function D(e) {
            Array.isArray(e) || (e = [e]);
            var t = [],
                n = e.length,
                o = 0,
                r = 0;
            return e.reverse().forEach(function(e, _) {
                for (e = Number(e) || 0, r = a(e, o) + r, o += 32; o > 7;) {
                    var i = r - a(E(r, 7), 7);
                    if (t.push(i), r = E(r, 7), o -= 7, 0 === r && _ === n - 1) break
                }
            }), 0 !== r && t.push(r), t = t.map(function(e, n) {
                return n === t.length - 1 ? e : e + 128
            })
        }

        function Y(e, t) {
            return c(e > Math.pow(2, 29) - 1, "key字段长度不能大于32位！"), D([a(e, 3) + t])
        }

        function F(e, t) {
            return Z["_" + t](e)
        }

        function b(e) {
            return yt.findIndex(function(t) {
                return t.includes(e)
            })
        }

        function U(e) {
            return Nt.includes(e)
        }

        function H(e, t) {
            var n;
            return C(e.fields, function(e) {
                e.id === t && (n = e)
            }), c(!n, "无法获取到类型", {
                id: t,
                fields: e.fields
            }), n
        }

        function G(e, t) {
            for (var n = e, o = t.split(Ut), r = null; n !== n[Pt];) {
                if (n.nested && n.nested.hasOwnProperty(o[0])) {
                    r = o.reduce(function(e, t) {
                        return e.nested[t]
                    }, n);
                    break
                }
                n = n[Pt]
            }
            return n !== n[Pt] || r || n.nested && n.nested.hasOwnProperty(o[0]) && (r = o.reduce(function(e, t) {
                return e.nested[t]
            }, n)), c(!r, "没有嵌套类型，无法查询！", {
                message: e,
                paths: o
            }), r
        }

        function k(e) {
            return Kt.getConverter.bind(Kt)(e)
        }

        function w(e) {
            var t = !1;
            return [et.c.EC_ACCESS_CMD_GET_TOKEN_ERR, et.c.EC_ACCESS_CMD_TOKEN_PRE_EXPIRE, et.c.EC_ACCESS_CMD_INVALID_TOKEN, et.c.EC_ACCESS_GET_COMM_CONNECT_ERR].includes(e) && (t = !0), t
        }

        function Q(e) {
            var t = !1;
            return [et.c.EC_ACCESS_GET_RELAY_CONNECT_ERR].includes(e) && (t = !0), t
        }

        function B(e, t, o, r) {
            var _ = ++ln;
            rt.a.log("EventUploader", "validate"),
                function(e, t, o) {
                    void 0 === o && (o = 1e4), pn = o, cn || (cn = n(19)), cn.appLaunch(), cn.setOpenid(e || ""), un = !0
                }(e, 0, o), V(on.initSdk, {}, !0, function(e) {
                    _ === ln && r && r(e)
                })
        }

        function K(e) {
            un && Cn.push(e)
        }

        function x(e) {
            un && (dn.sendRecvTimes.push(e), dn.sendRecvSum += e)
        }

        function V(e, t, n, o) {
            void 0 === n && (n = !1), t.sdkType = Rn.sdkType || "", t.sdkVersion = Rn.version || "", t.playerId = En.a.id || "", t.gameId = et.k.gameId || "", (n || et.h.isInited()) && cn.onEvent(e, t, function(e) {
                o && o(e)
            })
        }

        function q() {
            return o()
        }

        function W() {
            var e, t, n;
            et.h.isUnInit() && (gn && j(), et.h.setStatus(et.h.StatusType.INITING), gn = new mn(bn.responses), vn = new _n(bn.responses), Dn = new In(bn.responses), Pn = new sn(bn.responses), Yn = new An(bn.responses), Sn = new lt(Ot.a.ConnectionType.COMMON), yn = new lt(Ot.a.ConnectionType.RELAY), Nn = new Tn(bn.responses, Ot.a.ConnectionType.COMMON, null), Ln = new Tn(bn.responses, Ot.a.ConnectionType.RELAY, Yn), e = [Nn, gn, Pn, vn, Dn, Yn.netUtil1], t = [Ln, Yn.netUtil2], e.forEach(function(e) {
                return e.bindSocket(Sn)
            }), t.forEach(function(e) {
                return e.bindSocket(yn)
            }), rn.stopQueueLoop(), rn.startQueueLoop(), Sn.url = et.j.url, Sn.on(dt.connect, function() {
                et.i.isStatus(et.i.StatusType.LOGINING) || Fn.login(), Sn.url && bn.responses.onNetwork({
                    code: et.c.EC_OK,
                    data: {
                        type: Sn.id
                    }
                })
            }), yn.on(dt.connect, function() {
                Yn.checkLogin(null, "connect " + !!yn.isConnect()), yn.url && bn.responses.onNetwork({
                    code: et.c.EC_OK,
                    data: {
                        type: yn.id
                    }
                }), Ln.ping()
            }), Sn.on(dt.connectClose, function() {
                X(!1, {
                    code: et.c.EC_SDK_SOCKET_CLOSE
                }), et.h.isInited() && (et.i.setStatus(et.i.StatusType.LOGOUT), Sn.url && bn.responses.onNetwork({
                    code: et.c.EC_SDK_SOCKET_CLOSE,
                    msg: "Socket断开",
                    seq: null
                }))
            }), yn.on(dt.connectClose, function() {
                et.h.isInited() && (et.a.setStatus(et.a.StatusType.OFFLINE), yn.url && bn.responses.onNetwork({
                    code: et.c.EC_SDK_SOCKET_CLOSE,
                    msg: "Socket断开",
                    seq: null
                }), Ln.stop())
            }), Sn.on(dt.connectError, function(e) {
                et.h.isInited() && Sn.url && bn.responses.onNetwork({
                    code: et.c.EC_SDK_SOCKET_ERROR,
                    msg: "Socket错误",
                    seq: null
                })
            }), yn.on(dt.connectError, function(e) {
                et.h.isInited() && yn.url && bn.responses.onNetwork({
                    code: et.c.EC_SDK_SOCKET_ERROR,
                    msg: "Socket错误",
                    seq: null
                })
            }), Sn.on(dt.autoAuth, function() {
                et.h.isInited() && setTimeout(function() {
                    var e = et.i.isStatus(et.i.StatusType.LOGOUT);
                    Sn.url && e && Fn.login()
                }, 1e3)
            }), yn.on(dt.autoAuth, function() {
                et.h.isInited() && setTimeout(function() {
                    yn.url && et.i.isStatus(et.i.StatusType.LOGOUT) && Fn.login(), yn.url && et.a.isOffline() && Yn.checkLogin(function(e) {
                        e.code === et.c.EC_OK && Ln.ping()
                    }, "autoAuth")
                }, 1e3)
            }), Sn.connect("init sdk"), n = bn.instance.onHide, q() && wx.onHide(n), function(e) {
                q() && wx.onShow(e)
            }(bn.instance.onShow))
        }

        function j() {
            var e;
            bn.instance.clearResponses(), Sn && Sn.destory(), yn && yn.destory(),
                function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    e.forEach(function(e) {
                        return e && e.unbindSocket()
                    })
                }(gn, Pn, vn, Dn, Yn.netUtil1, Yn.netUtil2, Nn, Ln), e = bn.instance.onHide, q() && wx.offHide(e),
                function(e) {
                    q() && wx.offShow(e)
                }(bn.instance.onShow), et.h.setStatus(et.h.StatusType.UNINIT), et.i.setStatus(et.i.StatusType.LOGOUT)
        }

        function X(e, t) {
            if (et.h.isIniting()) {
                e && et.h.setStatus(et.h.StatusType.INITED), !e && et.h.setStatus(et.h.StatusType.UNINIT);
                var n = et.h.isInited() ? et.c.EC_OK : et.c.EC_SDK_UNINIT,
                    o = et.h.isInited() ? "初始化成功" : "初始化失败。请确认域名是否正确配置，以及网络是否顺畅。";
                !e && t && t.code !== et.c.EC_OK && (n = t.code), t.code === et.c.EC_ACCESS_PLAYER_DUPLICATE_LOGIN && (o = "用户已在其他客户端登录"), bn.instance.initRsp && bn.instance.initRsp({
                    code: n,
                    msg: o,
                    seq: null
                })
            }
        }
        var J = {};
        n.r(J), n.d(J, "DebuggerLog", function() {
            return rt.a
        }), n.d(J, "getSequenceStr", function() {
            return r
        }), n.d(J, "Base64", function() {
            return it
        }), n.d(J, "HmacSHA1", function() {
            return st
        }), n.d(J, "errCodeConvert", function() {
            return Ct
        }), n.d(J, "getPlatform", function() {
            return i
        }), n.d(J, "getChannel", function() {
            return s
        }), n.d(J, "deviceId", function() {
            return ut
        });
        var z = {};
        n.r(z), n.d(z, "_string", function() {
            return l
        }), n.d(z, "_bytes", function() {
            return O
        }), n.d(z, "_bool", function() {
            return S
        }), n.d(z, "_uint64", function() {
            return f
        }), n.d(z, "_uint32", function() {
            return A
        }), n.d(z, "_int32", function() {
            return I
        }), n.d(z, "_varint", function() {
            return m
        });
        var Z = {};
        n.r(Z), n.d(Z, "_string", function() {
            return y
        }), n.d(Z, "_bytes", function() {
            return N
        }), n.d(Z, "_bool", function() {
            return L
        }), n.d(Z, "_uint64", function() {
            return g
        }), n.d(Z, "_uint32", function() {
            return P
        }), n.d(Z, "_int32", function() {
            return v
        }), n.d(Z, "_varint", function() {
            return D
        });
        var $, et = n(0),
            tt = function() {
                function e(e) {
                    void 0 === e && (e = -1), this.id = e
                }
                return e
            }(),
            nt = function(e, t, n) {
                clearTimeout(e.id), e.id = setTimeout(t, n)
            },
            ot = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                e.forEach(function(e) {
                    return e && clearTimeout(e.id)
                })
            },
            rt = n(6);
        ! function(e) {
            e[e.UNKNOWN = 0] = "UNKNOWN", e[e.ANDROID = 1] = "ANDROID", e[e.IOS = 2] = "IOS"
        }($ || ($ = {}));
        var _t, it = n(14),
            st = n(15),
            at = n(18)["default"],
            Et = new at(_(), 16),
            Rt = new at(_(), 32),
            ct = 1,
            ut = Rt.encode(Date.now()),
            Ct = function(e, t) {
                return 0 > e && (t = "服务器内部错误[" + e + "]", e = et.c.EC_INNER_ERROR), {
                    errCode: e,
                    errMsg: t
                }
            },
            dt = {
                connect: "connect",
                connectClose: "connectClose",
                connectClosing: "connectClosing",
                connectError: "connectError",
                connecting: "connecting",
                message: "message",
                autoAuth: "autoAuth"
            },
            pt = Object.keys(dt),
            lt = function() {
                function e(e, t) {
                    this.isMsgBind = !1, this.forceClose = !1, this.init(t), this.id = e
                }
                return e.prototype.init = function(e) {
                    var t = this;
                    this.url = e, this.eventCallbacks = [], this.eventOnceCallbacks = new Map, this.socketTask = null;
                    var n = new tt,
                        o = 0,
                        r = function() {
                            rt.a.log("SOCKET_OPEN", t.id, t.isConnect()), o = 0, c(), ot(n)
                        },
                        _ = function(e) {
                            rt.a.log("SOCKET_CLOSE", e, t.id), R(), nt(n, function() {
                                return s("close")
                            }, et.j.reconnectInterval), t.forceClose && (o = 0, t.forceClose = !1, ot(n))
                        },
                        i = function(e) {
                            rt.a.log("SOCKET_ERROR", e, t.id, t.socketTask && t.socketTask.readyState), E(dt.connectError, {
                                msg: "socket connectError",
                                data: e
                            }), nt(n, function() {
                                return s("error")
                            }, et.j.reconnectInterval)
                        },
                        s = function(e) {
                            if (!t.url) throw new Error("socket.url = " + t.url);
                            if (!t.isConnect() && !t.isClose()) return nt(n, function() {
                                return s("open")
                            }, et.j.reconnectInterval);
                            if (t.isClose()) {
                                if (rt.a.log("SOCKET_TRY_OPEN", t.id, e, t.socketTask && t.socketTask.readyState, o, et.j.reconnectMaxTimes), ++o > et.j.reconnectMaxTimes) return o = 0, void rt.a.log("SOCKET_RECONNECT_TIMEOUT");
                                var a = "wss://" + t.url.replace("wss://", "").replace("ws://", "");
                                ot(n), t.forceClose = !1, t.socketTask = wx.connectSocket({
                                    url: a,
                                    fail: function() {
                                        return console.error("connectSocket fail")
                                    }
                                }), t.socketTask.onOpen(r.bind(t)), t.socketTask.onClose(_.bind(t)), t.socketTask.onError(i.bind(t)), t.socketTask.onMessage(function(e) {
                                    E(dt.message, {
                                        msg: "socket message",
                                        data: e.data
                                    })
                                }.bind(t))
                            }
                        },
                        a = function(e) {
                            rt.a.log("SOCKET_CONNECT", t.id, e), !t.isConnect() && o > 0 && o < et.j.reconnectMaxTimes || (o = 0, s(e + " connect"))
                        },
                        E = function(e, n) {
                            void 0 === n && (n = {}), n.tag = e, t.eventCallbacks.forEach(function(t) {
                                var o = t[0],
                                    r = t[1];
                                o !== e && "*" !== o || r(n)
                            });
                            var o = t.eventOnceCallbacks.get(e);
                            o && (o(n), t.eventOnceCallbacks["delete"](e))
                        },
                        R = function() {
                            return E(dt.connectClose, {
                                msg: "socket is closed"
                            })
                        },
                        c = function() {
                            return E(dt.connect, {
                                msg: "socket is connected"
                            })
                        };
                    this.connect = a, this.connectNewSocket = function(e) {
                        rt.a.log("SOCKET_CONNECT_NEW", t.id, t.isClose()), t.url = e, o = 0;
                        var n = function() {
                            a("connectNewSocket")
                        };
                        t.close(n, n)
                    }, this.send = function(e, n) {
                        var o = n.fail,
                            r = n.success;
                        return t.isConnect() ? void t.socketTask.send({
                            data: e.buffer,
                            fail: function(n) {
                                rt.a.log("SOCKET_SEND_FAIL", t.id, n), o({
                                    data: e
                                })
                            },
                            success: function() {
                                r({
                                    data: e
                                })
                            }
                        }) : (o({
                            data: e
                        }), void a("send"))
                    }, this.close = function(e, n) {
                        return t.forceClose = !0, t.socketTask ? void t.socketTask.close({
                            success: function(n) {
                                rt.a.log("SOCKET_CLOSE_SUCCESS", t.id, n), t.socketTask = null, e && e()
                            },
                            fail: function(e) {
                                rt.a.log("SOCKET_CLOSE_ERROR", t.id, e), t.socketTask = null, n && n()
                            }
                        }) : (e && e(), R())
                    }, this.destory = function() {
                        ot(n), !t.isClose() && t.close(), t.eventCallbacks = [], t.isMsgBind = !1
                    }, this.isConnect = function() {
                        return t.socketTask && t.socketTask.readyState === t.socketTask.OPEN
                    }, this.isConnecting = function() {
                        return t.socketTask && t.socketTask.readyState === t.socketTask.CONNECTING
                    }, this.isClose = function() {
                        return !t.socketTask || t.socketTask && t.socketTask.readyState === t.socketTask.CLOSED
                    }, this.isClosing = function() {
                        return t.socketTask && t.socketTask.readyState === t.socketTask.CLOSING
                    }, this.on = function(e, n) {
                        (pt.includes(e) || "*" === e) && "function" == typeof n && (t.eventCallbacks.push([e, n]), e === dt.message && (t.isMsgBind = !0))
                    }, this.once = function(e, n) {
                        pt.includes(e) && "function" == typeof n && t.eventOnceCallbacks.set(e, n)
                    }, this.emit = E
                }, e
            }(),
            Ot = n(1),
            St = [et.e.E_CMD_LOGIN_REQ, et.e.E_CMD_LOGOUT_REQ],
            ft = [et.e.E_CMD_RELAY_SEND_FRAME_REQ, et.e.E_CMD_RELAY_REQUEST_FRAME_REQ, et.e.E_CMD_HEART_BEAT_REQ, et.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ],
            At = {
                FAIL: !1,
                SUCCESS: !0
            };
        ! function(e) {
            e[e.CLIENT_PRE = parseInt("0x2", 16)] = "CLIENT_PRE", e[e.CLIENT_END = parseInt("0x3", 16)] = "CLIENT_END", e[e.SERVER_PRE = parseInt("0x28", 16)] = "SERVER_PRE", e[e.SERVER_END = parseInt("0x29", 16)] = "SERVER_END"
        }(_t || (_t = {}));
        var It = function() {
            function e() {
                this.queue = new Set, this.bdHandlers = new Set, this.socket = null
            }
            return e.startQueueLoop = function() {
                nt(e.timer, function() {
                    var t = Date.now();
                    return Array.from(e.sendQueue).forEach(function(e) {
                        var n = (e[0], e[1]);
                        if (t - n.time > et.j.resendTimeout) {
                            var o, r = "";
                            et.i.isStatus(et.i.StatusType.LOGIN) ? o = et.c.EC_SDK_RES_TIMEOUT : et.i.getErrCode() === et.c.EC_OK ? (o = et.c.EC_SDK_NO_LOGIN, r = "登录失败") : (o = et.i.getErrCode(), r = "登录失败，" + et.i.getErrMsg()), n.sendFail(o, r)
                        } else !n.isSocketSend && t - n.time >= et.j.resendInterval && n.resend()
                    }), e.startQueueLoop()
                }, et.j.resendInterval)
            }, e.stopQueueLoop = function() {
                ot(e.timer), Array.from(e.sendQueue).forEach(function(e) {
                    var t = (e[0], e[1]);
                    t.remove()
                }), e.sendQueue.clear()
            }, e.prototype.bindSocket = function(e, t, n) {
                var o = this;
                return this.socket || !e ? !1 : (this.socket = e, !this.socket.isMsgBind && this.socket.on(dt.message, function(e) {
                    if (e.data) {
                        var r = o.unpackBody(new Uint8Array(e.data)),
                            _ = r.body,
                            i = r.pre,
                            s = r.end;
                        i === _t.CLIENT_PRE && s === _t.CLIENT_END && t(_), i === _t.SERVER_PRE && s === _t.SERVER_END && n(_)
                    }
                }.bind(this)), !0)
            }, e.prototype.unbindSocket = function() {
                this.socket = null, this.clearQueue(), this.clearBdHandlers()
            }, e.prototype.clearQueue = function() {
                var e = this;
                Array.from(this.queue).forEach(function(t) {
                    e.deleteSeqQueue(t)
                })
            }, e.prototype.clearBdHandlers = function() {
                var t = this;
                Array.from(this.bdHandlers).forEach(function(n) {
                    e.broadcastHandlers["delete"](n), t.bdHandlers["delete"](n)
                })
            }, e.prototype.deleteSeqQueue = function(t) {
                e.sendQueue["delete"](t), this.queue["delete"](t)
            }, e.prototype.addSeqQueue = function(t, n) {
                e.sendQueue.set(t, n), this.queue.add(t)
            }, e.prototype.setBroadcastHandler = function(t, n) {
                e.broadcastHandlers.set(t, n), this.bdHandlers.add(t)
            }, e.prototype.handleErrCode = function(e) {
                return !1
            }, e.prototype.send = function(t, n, o) {
                var r = this,
                    _ = this.getReadyCode(o);
                return e.sendQueue.size > 10 && rt.a.log("SENDQUEUE_size", e.sendQueue.size), 0 !== _ ? this.handleSendFail(n, _) : this.socket.send(t, {
                    fail: function(e) {
                        return r.handleSendFail(n, e)
                    },
                    success: function() {
                        return r.handleSendSuccess(n)
                    }
                }), n
            }, e.prototype.buildData = function(e, t, n) {
                var o = 5 + t.length + 1,
                    r = new Uint8Array(function(e, t) {
                        for (var n = []; e > 255;) n.push(255 & e), e >>= 8;
                        for (0 !== e && n.push(e), n = n.slice(0, t); n.length < t;) n.push(0);
                        return n.reverse()
                    }(o, 4)),
                    _ = new Uint8Array(o);
                return _.set(e), _.set(r, e.length), _.set(t, e.length + r.length), _.set(n, e.length + r.length + t.length), _
            }, e.prototype.unpackBody = function(e) {
                var t = e.slice(1, 5),
                    n = function(e) {
                        for (var t = 0, n = e.length, o = n - 1; o >= 0; o--) t += e[o] * Math.pow(2, 8 * (n - 1 - o));
                        return t
                    }(Array.from(t)) - 6;
                return {
                    body: e.slice(5, 5 + n),
                    pre: e[0],
                    end: e[e.length - 1]
                }
            }, e.prototype.handleSendFail = function(t, n) {
                var o = e.sendQueue.get(t);
                return o ? Date.now() - o.time > et.j.resendTimeout ? o.sendFail(et.i.getErrCode() || n) : n === et.c.EC_SDK_UNINIT ? o.sendFail(n) : n === et.c.EC_SDK_NO_LOGIN ? this.socket.emit(dt.autoAuth, {}) : n === et.c.EC_SDK_NO_CHECK_LOGIN ? this.socket.emit(dt.autoAuth, {}) : void 0 : void 0
            }, e.prototype.handleSendSuccess = function(t) {
                e.sendQueue.has(t) && e.sendQueue.get(t).sendSuccess()
            }, e.prototype.getReadyCode = function(e) {
                return et.h.isInited() || e === et.e.E_CMD_LOGIN_REQ ? this.socket && this.socket.url ? et.i.isStatus(et.i.StatusType.LOGIN) || St.includes(e) ? this.socket.id === Ot.a.ConnectionType.RELAY && !et.a.isChecked() && ft.includes(e) ? et.c.EC_SDK_NO_CHECK_LOGIN : 0 : et.c.EC_SDK_NO_LOGIN : et.c.EC_SDK_SEND_FAIL : (console.error("MGOBE.Listener 未初始化"), et.d.setInfo({
                    id: ""
                }), et.i.setStatus(et.i.StatusType.LOGOUT), et.c.EC_SDK_UNINIT)
            }, e
        }();
        It.sendQueue = new Map, It.broadcastHandlers = new Map, It.timer = new tt;
        var mt = It,
            Tt = Math.pow(2, 32),
            Mt = Math.pow(2, 53),
            ht = 2147483647,
            yt = [
                ["int32", "int64", "uint32", "uint64", "sint32", "sint64", "bool", "enum"],
                ["fixed64", "sfixed64", "double"],
                ["string", "bytes"],
                ["_deprecated_"],
                ["_deprecated_"],
                ["fixed32", "sfixed32", "float"]
            ],
            Nt = ["int64", "sint32", "sint64", "enum", "fixed64", "sfixed64", "double", "fixed32", "sfixed32", "float"],
            Lt = ["int32", "int64", "uint32", "uint64"],
            gt = "repeated",
            Pt = "__parent",
            vt = "__typeof",
            Dt = "__keyname",
            Yt = "__primitive",
            Ft = "__message",
            bt = "__enum",
            Ut = ".",
            Ht = function(e, t, n) {
                var o = [],
                    r = e.type,
                    _ = e.id,
                    i = e.rule,
                    s = b(r),
                    a = -1 !== s,
                    E = i === gt,
                    d = function(e) {
                        return Lt.findIndex(function(t) {
                            return t === e
                        }) >= 0
                    }(r);
                if (c(U(r), "类型错误： " + r + " 不支持"), c(E && !Array.isArray(t), "repeated 类型值应该为数组", e), !a && E) C(t, function(e) {
                    u(o, Y(_, 2)), u(o, F(Gt(e, r, n), "bytes"))
                });
                else if (a && E && d) {
                    var p = [];
                    u(o, Y(_, 2)), C(t, function(e) {
                        return u(p, F(e, r))
                    }), u(o, F(p, "bytes"))
                } else if (a && E && !d) C(t, function(e) {
                    u(o, Y(_, 2)), u(o, F(e, r))
                });
                else if (a || E) {
                    if (!a || E) return R("字段编码失败", {
                        writeType: s,
                        rule: i
                    });
                    u(o, Y(_, s)), u(o, F(t, r))
                } else e[vt] === bt ? (u(o, Y(_, 0)), u(o, F(t, "uint32"))) : (t = Gt(t, r, n), u(o, Y(_, 2)), u(o, F(t, "bytes")));
                return o
            },
            Gt = function(e, t, n) {
                var o = [],
                    r = G(n, t).fields;
                return C(e, function(e, t, _) {
                    if (null == e || !r[t]) return !1;
                    var i = Ht(r[t], e, n);
                    u(o, i)
                }), o
            },
            kt = function(e, t, n, o, r) {
                for (; t < e.length;) {
                    var _ = T(e, t),
                        i = void 0;
                    t = _.cursor;
                    var s = H(o, _.id),
                        a = s.type,
                        E = 0 === _.writeType,
                        u = s[vt] === bt,
                        C = s[vt] === Yt,
                        d = 2 === _.writeType;
                    if (c(U(a), "类型错误： " + a + " 不支持"), d && C) i = h(e, t, a);
                    else if (d && !C) {
                        var p = (i = M(e, t, "uint32")).cursor,
                            l = i.cursor + i.value,
                            O = n(a, s);
                        i.value = O.decode(e.slice(p, l)), i.cursor = l
                    } else {
                        if (!E) return R("不支持该类型", {
                            keyInfo: _,
                            field: s
                        });
                        u && (a = "uint32"), i = M(e, t, a)
                    }
                    t = i.cursor, wt(s, i.value, r)
                }
            },
            wt = function(e, t, n) {
                var o = e[Dt];
                e.rule === gt && n[o] ? n[o].push(t) : e.rule !== gt || n[o] ? n[o] = t : (n[o] = [], u(n[o], t))
            },
            Qt = function() {
                function e(e, t) {
                    void 0 === t && (t = "");
                    var n;
                    this.proto = (n = function(e, t) {
                        c(!d(e.nested), "没有嵌套类型，无法移除！", {
                            proto: e,
                            packageName: t
                        });
                        var n = t.split(Ut);
                        return "" === t ? e : n.reduce(function(e, t) {
                            return e.nested[t]
                        }, e)
                    }(e, t), JSON.parse(JSON.stringify(n))), p(this.proto, Pt, this.proto), C(this.proto, function(e, t, n) {
                        return !(t === Pt || !d(e) || (p(e, Pt, n), p(e, Dt, t), 0))
                    }), C(this.proto, function(e, t, n) {
                        if (!d(e)) return !1;
                        if ("fields" === t) return !0;
                        if (!e.hasOwnProperty("type")) return !0;
                        var o = Yt;
                        return function(e) {
                            return yt.findIndex(function(t) {
                                return t.includes(e)
                            }) >= 0
                        }(e.type) || (o = Ft, G(e, e.type).values && (o = bt)), p(e, vt, o), p(e, Dt, t), !1
                    })
                }
                return e.prototype.getConverter = function(e, t) {
                    var n = G(t = t || this.proto, e),
                        o = this.getConverter.bind(this);
                    return {
                        decode: function(e) {
                            return function(e, t, n, o) {
                                var r = function(e) {
                                        for (var t = {}, n = Object.keys(e.fields), o = 0, r = n; o < r.length; o++) {
                                            var _ = r[o],
                                                i = e.fields[_];
                                            if (i[vt] !== bt)
                                                if (i.rule !== gt || i[vt] !== Ft) {
                                                    if (i[vt] === Yt) {
                                                        var s = b(i.type);
                                                        switch (0 === s && (t[_] = 0), i.type) {
                                                            case "string":
                                                                t[_] = "";
                                                                break;
                                                            case "bytes":
                                                                t[_] = [];
                                                                break;
                                                            case "bool":
                                                                t[_] = !1
                                                        }
                                                    }
                                                } else t[_] = [];
                                            else t[_] = 0
                                        }
                                        return t
                                    }(e),
                                    _ = new Uint8Array(o);
                                return kt(_, 0, n, e, r), r
                            }(n, 0, o, e)
                        },
                        encode: function(t) {
                            return function(e, t, n, o) {
                                var r = Gt(o, t, e);
                                return new Uint8Array(r)
                            }(n, e, 0, t)
                        }
                    }
                }, e
            }(),
            Bt = J.errCodeConvert,
            Kt = new Qt(n(10)),
            xt = new Map,
            Vt = new Map,
            qt = new Map,
            Wt = k("lagame.ClientSendServerReqWrap1"),
            jt = k("lagame.ClientSendServerReqWrap2"),
            Xt = k("lagame.ClientSendServerRspWrap1"),
            Jt = k("lagame.ClientSendServerRspWrap2"),
            zt = k("lagame.ServerSendClientBstWrap1"),
            Zt = k("lagame.ServerSendClientBstWrap2");
        xt.set(et.e.E_CMD_LOGIN_REQ, k("lagame.LoginReq")), Vt.set(et.e.E_CMD_LOGIN_REQ, k("lagame.LoginRsp")), xt.set(et.e.E_CMD_LOGOUT_REQ, k("lagame.LogoutReq")), Vt.set(et.e.E_CMD_LOGOUT_REQ, k("lagame.LogoutRsp")), xt.set(et.e.E_CMD_CHANGE_PLAYER_STATE_REQ, k("lagame.ChangeCustomPlayerStatusReq")), Vt.set(et.e.E_CMD_CHANGE_PLAYER_STATE_REQ, k("lagame.ChangeCustomPlayerStatusRsp")), xt.set(et.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, k("lagame.SendToGameSvrReq")), Vt.set(et.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ, k("lagame.SendToGameSvrRsp")), xt.set(et.e.E_CMD_RELAY_SEND_FRAME_REQ, k("lagame.SendFrameReq")), Vt.set(et.e.E_CMD_RELAY_SEND_FRAME_REQ, k("lagame.SendFrameRsp")), xt.set(et.e.E_CMD_ROOM_CHAT_REQ, k("lagame.SendToClientReq")), Vt.set(et.e.E_CMD_ROOM_CHAT_REQ, k("lagame.SendToClientRsp")), xt.set(et.e.E_CMD_CHECK_LOGIN_REQ, k("lagame.CheckLoginReq")), Vt.set(et.e.E_CMD_CHECK_LOGIN_REQ, k("lagame.CheckLoginRsp")), xt.set(et.e.E_CMD_RELAY_REQUEST_FRAME_REQ, k("lagame.RequestFrameReq")), Vt.set(et.e.E_CMD_RELAY_REQUEST_FRAME_REQ, k("lagame.RequestFrameRsp")), xt.set(et.e.E_CMD_START_FRAME_SYNC_REQ, k("lagame.StartFrameSyncReq")), Vt.set(et.e.E_CMD_START_FRAME_SYNC_REQ, k("lagame.StartFrameSyncRsp")), xt.set(et.e.E_CMD_STOP_FRAME_SYNC_REQ, k("lagame.StopFrameSyncReq")), Vt.set(et.e.E_CMD_STOP_FRAME_SYNC_REQ, k("lagame.StopFrameSyncRsp")), xt.set(et.e.E_CMD_CREATE_ROOM_REQ, k("lagame.CreateRoomReq")), Vt.set(et.e.E_CMD_CREATE_ROOM_REQ, k("lagame.CreateRoomRsp")), xt.set(et.e.E_CMD_JOIN_ROOM_REQ, k("lagame.JoinRoomReq")), Vt.set(et.e.E_CMD_JOIN_ROOM_REQ, k("lagame.JoinRoomRsp")), xt.set(et.e.E_CMD_QUIT_ROOM_REQ, k("lagame.LeaveRoomReq")), Vt.set(et.e.E_CMD_QUIT_ROOM_REQ, k("lagame.LeaveRoomRsp")), xt.set(et.e.E_CMD_DISSMISS_ROOM_REQ, k("lagame.DismissRoomReq")), Vt.set(et.e.E_CMD_DISSMISS_ROOM_REQ, k("lagame.DismissRoomRsp")), xt.set(et.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, k("lagame.ChangeRoomReq")), Vt.set(et.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ, k("lagame.ChangeRoomRsp")), xt.set(et.e.E_CMD_REMOVE_MEMBER_REQ, k("lagame.RemovePlayerReq")), Vt.set(et.e.E_CMD_REMOVE_MEMBER_REQ, k("lagame.RemovePlayerRsp")), xt.set(et.e.E_CMD_GET_ROOM_DETAIL_REQ, k("lagame.GetRoomByRoomIdReq")), Vt.set(et.e.E_CMD_GET_ROOM_DETAIL_REQ, k("lagame.GetRoomByRoomIdRsp")), xt.set(et.e.E_CMD_GET_ROOM_LIST_REQ, k("lagame.GetRoomListReq")), Vt.set(et.e.E_CMD_GET_ROOM_LIST_REQ, k("lagame.GetRoomListRsp")), xt.set(et.e.E_CMD_HEART_BEAT_REQ, k("lagame.HeartBeatReq")), Vt.set(et.e.E_CMD_HEART_BEAT_REQ, k("lagame.HeartBeatRsp")), xt.set(et.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ, k("lagame.MatchPlayersReq")), Vt.set(et.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ, k("lagame.MatchPlayersRsp")), xt.set(et.e.E_CMD_MATCH_ROOM_SIMPLE_REQ, k("lagame.MatchRoomSimpleReq")), Vt.set(et.e.E_CMD_MATCH_ROOM_SIMPLE_REQ, k("lagame.MatchRoomSimpleRsp")), xt.set(et.e.E_CMD_MATCH_CANCEL_MATCH_REQ, k("lagame.CancelPlayerMatchReq")), Vt.set(et.e.E_CMD_MATCH_CANCEL_MATCH_REQ, k("lagame.CancelPlayerMatchRsp")), qt.set(et.f.E_PUSH_TYPE_GAMESVR, k("lagame.RecvFromGameSvrBst")), qt.set(et.f.E_PUSH_TYPE_ROOM_CHAT, k("lagame.RecvFromClientBst")), qt.set(et.f.E_PUSH_TYPE_START_GAME, k("lagame.StartFrameSyncBst")), qt.set(et.f.E_PUSH_TYPE_STOP_GAME, k("lagame.StopFrameSyncBst")), qt.set(et.f.E_PUSH_TYPE_RELAY, k("lagame.RecvFrameBst")), qt.set(et.f.E_PUSH_TYPE_JOIN_ROOM, k("lagame.JoinRoomBst")), qt.set(et.f.E_PUSH_TYPE_LEAVE_ROOM, k("lagame.LeaveRoomBst")), qt.set(et.f.E_PUSH_TYPE_DISMISS_ROOM, k("lagame.DismissRoomBst")), qt.set(et.f.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, k("lagame.ChangeRoomBst")), qt.set(et.f.E_PUSH_TYPE_REMOVE_PLAYER, k("lagame.RemovePlayerBst")), qt.set(et.f.E_PUSH_TYPE_PLAYER_STATE, k("lagame.ChangeCustomPlayerStatusBst")), qt.set(et.f.E_PUSH_TYPE_NETWORK_STATE, k("lagame.ChangePlayerNetworkStateBst")), qt.set(et.f.E_PUSH_TYPE_MATCH_TIMEOUT, k("lagame.MatchTimeoutBst")), qt.set(et.f.E_PUSH_TYPE_MATCH_SUCCESS, k("lagame.MatchPlayersBst"));
        var $t, en = Math.pow(2, 32) - 1 - 1 - 4 - 1,
            tn = function(e) {
                function t(t) {
                    var n = this;
                    return n = e.call(this) || this, n.responses = t, n
                }
                return __extends(t, e), t.prototype.sendRequest = function(e, t, n, o, _, i) {
                    var s = this;
                    if (void 0 === i && (i = ""), !i) {
                        i = r();
                        var a = {
                            time: Date.now(),
                            isSocketSend: !1,
                            cmd: t,
                            response: function(e) {
                                n(At.SUCCESS, e, o), s.deleteSeqQueue(i)
                            },
                            resend: function() {
                                return s.sendRequest(e, t, n, o, _, i)
                            },
                            sendSuccess: function() {
                                this.isSocketSend = !0
                            },
                            sendFail: function(e, t) {
                                void 0 === t && (t = "");
                                var r = {
                                    seq: i,
                                    body: null,
                                    errCode: e,
                                    errMsg: "消息发送失败，" + t + " [" + e + "]"
                                };
                                n(At.FAIL, {
                                    RspWrap1: r,
                                    RspWrap2: null,
                                    body: null
                                }, o), s.deleteSeqQueue(i)
                            },
                            remove: function() {
                                return s.deleteSeqQueue(i)
                            }
                        };
                        this.addSeqQueue(i, a)
                    }
                    var E = function(e, t, n) {
                        var o = t.cmd,
                            r = xt.get(o);
                        if (!r || !r.encode) throw new Error("找不到该 cmd 编码方法: " + o);
                        var _ = r.encode(n),
                            i = jt.encode(Object.assign({}, t, {
                                body: _
                            }));
                        return Wt.encode(Object.assign({}, e, {
                            body: i
                        }))
                    }(Object.assign({}, et.l, {
                        cmd: _,
                        seq: i,
                        body: null
                    }), {
                        cmd: t,
                        body: null
                    }, e);
                    if (E.length > en) {
                        var R = mt.sendQueue.get(i);
                        return setTimeout(function() {
                            return R && R.sendFail(et.c.EC_SDK_SEND_FAIL, "数据长度超限")
                        }), i
                    }
                    var c = this.buildData(E);
                    return this.send(c, i, t)
                }, t.prototype.buildData = function(t) {
                    var n = new Uint8Array(1),
                        o = new Uint8Array(1);
                    return n[0] = _t.CLIENT_PRE, o[0] = _t.CLIENT_END, e.prototype.buildData.call(this, n, t, o)
                }, t.prototype.handleMessage = function(e) {
                    var t = null,
                        n = function(e, t) {
                            var n = Xt.decode(e),
                                o = Jt.decode(n.body),
                                r = t(n.seq);
                            if (!r) return null;
                            var _ = null,
                                i = Vt.get(r);
                            if (!i || !i.decode) throw new Error("找不到该 cmd 解码方法: " + r);
                            o.body && (_ = i.decode(o.body));
                            var s = Bt(n.errCode, n.errMsg),
                                a = s.errCode,
                                E = s.errMsg;
                            return n.errMsg = E, n.errCode = a, n.body = null, o.body = null, {
                                RspWrap1: n,
                                RspWrap2: o,
                                body: _
                            }
                        }(e, function(e) {
                            return (t = mt.sendQueue.get(e)) ? t.cmd : void 0
                        });
                    return !t || t.cmd !== et.e.E_CMD_HEART_BEAT_REQ && this.handleErrCode(n.RspWrap1) ? void 0 : t.response(n)
                }, t.prototype.handleResponse = function(e) {
                    return this.handleMessage(e)
                }, t.prototype.handleErrCode = function(e) {
                    return w(e.errCode) ? (this.handleTokenErr(), rt.a.log("TOKEN_ERROR", e), !0) : Q(e.errCode) && this.socket.id === Ot.a.ConnectionType.RELAY ? (this.handleRelayConnectErr(), rt.a.log("RELAY_CONNECT_ERROR", e), !0) : (e.errCode !== et.c.EC_OK && this.responses.error({
                        code: e.errCode,
                        msg: e.errMsg,
                        seq: e.seq
                    }), !1)
                }, t.prototype.handleSuccess = function(e, t) {
                    e === et.c.EC_OK && t()
                }, t.prototype.handleTokenErr = function() {
                    et.i.setStatus(et.i.StatusType.LOGOUT), this.socket.emit(dt.autoAuth, {})
                }, t.prototype.handleRelayConnectErr = function() {
                    et.a.setStatus(et.a.StatusType.OFFLINE), this.socket.emit(dt.autoAuth, {})
                }, t
            }(mt),
            nn = function(e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.buildData = function(t) {
                    var n = new Uint8Array(1),
                        o = new Uint8Array(1);
                    return n[0] = _t.SERVER_PRE, o[0] = _t.SERVER_END, e.prototype.buildData.call(this, n, t, o)
                }, t.prototype.handleMessage = function(e) {
                    var t = function(e) {
                            var t = zt.decode(e),
                                n = Zt.decode(t.body),
                                o = null,
                                r = qt.get(n.type);
                            if (!r || !r.decode) throw new Error("找不到该 cmd 解码方法: " + n.type);
                            return n.msg && (o = r.decode(n.msg)), t.body = null, n.msg = null, {
                                BstWrap1: t,
                                BstWrap2: n,
                                body: o
                            }
                        }(e),
                        n = mt.broadcastHandlers.get(t.BstWrap2.type);
                    n && n(t.body, t.BstWrap1.seq)
                }, t.prototype.handleBroadcast = function(e) {
                    return this.handleMessage(e)
                }, t
            }(mt);
        ! function(e) {
            e.comm = "comm_cmd", e.relay = "relay_cmd"
        }($t || ($t = {}));
        var on, rn = function() {
                function e(e) {
                    this.client = new tn(e), this.server = new nn, this.responses = e
                }
                return e.startQueueLoop = function() {
                    mt.startQueueLoop()
                }, e.stopQueueLoop = function() {
                    mt.stopQueueLoop()
                }, e.prototype.bindSocket = function(e) {
                    var t = this.client.handleResponse.bind(this.client),
                        n = this.server.handleBroadcast.bind(this.server);
                    this.client.bindSocket(e, t, n), this.server.bindSocket(e, t, n)
                }, e.prototype.unbindSocket = function() {
                    this.client.unbindSocket(), this.server.unbindSocket()
                }, e.prototype.setBroadcastHandler = function(e, t) {
                    this.server.setBroadcastHandler(e, t)
                }, e.prototype.send = function(e, t, n, o) {
                    var r = $t.comm;
                    return this.client.socket.id === Ot.a.ConnectionType.RELAY && (r = $t.relay), this.client.sendRequest(e, t, n, o, r)
                }, e
            }(),
            _n = function(e) {
                function t(t) {
                    var n = this;
                    return n = e.call(this, t) || this, n.matchTimeoutBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_TIMEOUT, n.matchUsersBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MATCH_SUCCESS, n.setBroadcastHandler(n.matchTimeoutBroadcastType, n.matchUsersTimeoutBroadcast.bind(n)), n.setBroadcastHandler(n.matchUsersBroadcastType, n.matchUsersBroadcast.bind(n)), n
                }
                return __extends(t, e), t.prototype.matchUsersComplex = function(e, t) {
                    var n = et.e.E_CMD_MATCH_PLAYER_COMPLEX_REQ,
                        o = this.send(e, n, this.matchUsersComplexResponse.bind(this), t);
                    return rt.a.log("MATCHUSERSCOMPLEX_Para", e, o), o
                }, t.prototype.matchRoom = function(e, t) {
                    var n = et.e.E_CMD_MATCH_ROOM_SIMPLE_REQ,
                        o = this.send(e, n, this.matchRoomResponse.bind(this), t);
                    return rt.a.log("MATCHROOM_Para", e, o), o
                }, t.prototype.cancelMatch = function(e, t) {
                    var n = et.e.E_CMD_MATCH_CANCEL_MATCH_REQ,
                        o = this.send(e, n, this.cancelMatchResponse.bind(this), t);
                    return rt.a.log("CANCELMATCH_Para", e, o), o
                }, t.prototype.matchUsersComplexResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.matchPlayersRsp(r)
                }, t.prototype.matchRoomResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.matchRoomSimpleRsp(r)
                }, t.prototype.cancelMatchResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.cancelPlayerMatchRsp(r)
                }, t.prototype.matchUsersTimeoutBroadcast = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onMatchTimeout(n)
                }, t.prototype.matchUsersBroadcast = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onMatchPlayers(n)
                }, t
            }(rn),
            sn = function(e) {
                function t(t) {
                    var n = this;
                    return n = e.call(this, t) || this, n.joinRoomBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_JOIN_ROOM, n.leaveRoomBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_LEAVE_ROOM, n.dismissRoomBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_DISMISS_ROOM, n.changeRoomBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_MODIFY_ROOM_PROPERTY, n.removeUserBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_REMOVE_PLAYER, n.changeUserStateBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_PLAYER_STATE, n.roomUserNetworkBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_NETWORK_STATE, n.testBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_TEST, n.setBroadcastHandler(n.joinRoomBroadcastType, n.onJoinRoom.bind(n)), n.setBroadcastHandler(n.leaveRoomBroadcastType, n.onLeaveRoom.bind(n)), n.setBroadcastHandler(n.dismissRoomBroadcastType, n.onDismissRoom.bind(n)), n.setBroadcastHandler(n.changeRoomBroadcastType, n.onChangeRoom.bind(n)), n.setBroadcastHandler(n.removeUserBroadcastType, n.onRemoveUser.bind(n)), n.setBroadcastHandler(n.changeUserStateBroadcastType, n.onChangeUserState.bind(n)), n.setBroadcastHandler(n.roomUserNetworkBroadcastType, n.onChangePlayerNetworkState.bind(n)), n.setBroadcastHandler(n.testBroadcastType, n.testBroadcast.bind(n)), n
                }
                return __extends(t, e), t.prototype.createRoom = function(e, t) {
                    var n = et.e.E_CMD_CREATE_ROOM_REQ,
                        o = this.send(e, n, this.createRoomResponse.bind(this), t);
                    return rt.a.log("CREATEROOM_Para", e, o), o
                }, t.prototype.joinRoom = function(e, t) {
                    var n = et.e.E_CMD_JOIN_ROOM_REQ,
                        o = this.send(e, n, this.joinRoomResponse.bind(this), t);
                    return rt.a.log("JOINROOM_Para", e, o), o
                }, t.prototype.leaveRoom = function(e, t) {
                    var n = et.e.E_CMD_QUIT_ROOM_REQ,
                        o = this.send(e, n, this.leaveRoomResponse.bind(this), t);
                    return rt.a.log("LEAVEROOM_Para", e, o), o
                }, t.prototype.dismissRoom = function(e, t) {
                    var n = et.e.E_CMD_DISSMISS_ROOM_REQ,
                        o = this.send(e, n, this.dismissRoomResponse.bind(this), t);
                    return rt.a.log("DISMISSROOM_Para", e, o), o
                }, t.prototype.changeRoom = function(e, t) {
                    var n = et.e.E_CMD_CHANGE_ROOM_PROPERTIS_REQ,
                        o = this.send(e, n, this.changeRoomResponse.bind(this), t);
                    return rt.a.log("CHANGEROOM_Para", e, o), o
                }, t.prototype.removeUser = function(e, t) {
                    var n = et.e.E_CMD_REMOVE_MEMBER_REQ,
                        o = this.send(e, n, this.removeUserResponse.bind(this), t);
                    return rt.a.log("REMOVEUSER_Para", e, o), o
                }, t.prototype.getRoomByRoomId = function(e, t) {
                    var n = et.e.E_CMD_GET_ROOM_DETAIL_REQ,
                        o = this.send(e, n, this.getRoomByRoomIdRsp().bind(this), t);
                    return rt.a.log("GETROOMBYROOMID_Para", e, o), o
                }, t.prototype.getRoomList = function(e, t) {
                    var n = et.e.E_CMD_GET_ROOM_LIST_REQ,
                        o = this.send(e, n, this.getRoomListResponse.bind(this), t);
                    return rt.a.log("GETROOMLIST_Para", e, o), o
                }, t.prototype.createRoomResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.createRoomRsp(r)
                }, t.prototype.joinRoomResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.joinRoomRsp(r)
                }, t.prototype.leaveRoomResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.leaveRoomRsp(r)
                }, t.prototype.dismissRoomResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.dismissRoomRsp(r)
                }, t.prototype.changeRoomResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.changeRoomRsp(r)
                }, t.prototype.removeUserResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.removePlayerRsp(r)
                }, t.prototype.getRoomByRoomIdRsp = function() {
                    var e = this;
                    return function(t, n, o) {
                        var r = n.RspWrap1,
                            _ = {
                                code: r.errCode,
                                msg: r.errMsg,
                                seq: r.seq,
                                data: n.body
                            };
                        o && o(_), e.responses.getRoomByRoomIdRsp(_)
                    }
                }, t.prototype.getRoomListResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.getRoomListRsp(r)
                }, t.prototype.testBroadcast = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    rt.a.log("test 广播", n)
                }, t.prototype.onJoinRoom = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onJoinRoom(n)
                }, t.prototype.onLeaveRoom = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onLeaveRoom(n)
                }, t.prototype.onDismissRoom = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onDismissRoom(n)
                }, t.prototype.onChangeRoom = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onChangeRoom(n)
                }, t.prototype.onRemoveUser = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onRemovePlayer(n)
                }, t.prototype.onChangeUserState = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onChangeCustomPlayerStatus(n)
                }, t.prototype.onChangePlayerNetworkState = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onChangePlayerNetworkState(n)
                }, t
            }(rn);
        ! function(e) {
            e.initSdk = "init_sdk", e.request = "request", e.ping = "ping", e.recFrame = "recframeInfo"
        }(on || (on = {}));
        var an = n(2),
            En = n(7),
            Rn = n(8),
            cn = null,
            un = !1,
            Cn = [],
            dn = {
                frameTimes: [],
                sendRecvTimes: [],
                sendRecvSum: 0,
                frameSum: 0,
                recFrameSum: 0
            },
            pn = 1e4;
        setInterval(function() {
            if (un) {
                if (0 !== Cn.length) {
                    var e = JSON.stringify(Cn);
                    Cn = [], V(on.request, {
                        requests: e
                    })
                }
                if (0 !== dn.frameTimes.length || 0 !== dn.sendRecvTimes.length) {
                    var t = JSON.stringify(dn.frameTimes),
                        n = JSON.stringify(dn.sendRecvTimes),
                        o = dn.frameTimes.length,
                        r = dn.sendRecvTimes.length,
                        _ = dn.sendRecvSum,
                        i = dn.frameSum,
                        s = dn.recFrameSum,
                        a = dn.sendRecvSum / r || 0,
                        E = dn.frameSum / o || 0,
                        R = dn.recFrameSum / o || 0;
                    V(on.recFrame, {
                        frameTimes: t,
                        sendRecvTimes: n,
                        frameCount: o,
                        sendRecvCount: r,
                        sendRecvSum: _,
                        frameSum: i,
                        recFrameSum: s,
                        sendRecvAvg: a,
                        frameAvg: E,
                        recFrameAvg: R
                    }), dn.frameTimes = [], dn.sendRecvTimes = [], dn.sendRecvSum = 0, dn.frameSum = 0, dn.recFrameSum = 0
                }
            }
        }, pn);
        var ln = 0,
            On = {
                lastTime: 0,
                frameRate: 0,
                callback: function(e) {
                    return null
                },
                run: function(e) {
                    On.callback && On.callback(e), requestAnimationFrame(On.run)
                }
            };
        On.callback = function(e) {
            if (0 === On.lastTime) return void(On.lastTime = e);
            var t = e,
                n = t - On.lastTime,
                o = Math.round(1e3 / (n + 1e-6));
            On.frameRate = o, On.lastTime = t, an.a.onRenderFrameRate && an.a.onRenderFrameRate(n)
        }, On.run(0);
        var Sn, fn = {
                lastFrameTime: 0,
                deltaTime: 0,
                trigger: function() {
                    var e = Date.now();
                    0 !== fn.lastFrameTime ? (fn.deltaTime = e - fn.lastFrameTime, an.a.onBstFrameRate && an.a.onBstFrameRate(fn.deltaTime), fn.lastFrameTime = e) : fn.lastFrameTime = e
                },
                clear: function() {
                    fn.lastFrameTime = 0
                }
            },
            An = function() {
                function e(e) {
                    this.netUtil1 = null, this.netUtil2 = null, this.frameBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_RELAY, this.startGameBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_START_GAME, this.stopGameBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_STOP_GAME, this.sendMessageExtBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_GAMESVR, this.responses = e, this.netUtil1 = new rn(e), this.netUtil2 = new rn(e), this.netUtil1.setBroadcastHandler(this.startGameBroadcastType, this.onStartFrameSync.bind(this)), this.netUtil1.setBroadcastHandler(this.stopGameBroadcastType, this.onStopFrameSync.bind(this)), this.netUtil2.setBroadcastHandler(this.frameBroadcastType, this.onRecvFrame.bind(this)), this.netUtil2.setBroadcastHandler(this.sendMessageExtBroadcastType, this.onRecvFromGameSvr.bind(this))
                }
                return e.prototype.setFrameRoom = function(e) {
                    rt.a.log("SETFRAMEROOM", e);
                    var t = this.getFrameRoom();
                    this.roomInfo = e || {
                        roomId: 0,
                        routeId: ""
                    };
                    var n = t.routeId,
                        o = this.roomInfo.routeId;
                    return o ? n !== o ? (et.a.setStatus(et.a.StatusType.OFFLINE), this.autoCheckLogin()) : n === o ? this.autoCheckLogin() : void 0 : this.netUtil2.client.socket && this.netUtil2.client.socket.close()
                }, e.prototype.getFrameRoom = function() {
                    return this.roomInfo || {
                        id: 0,
                        routeId: ""
                    }
                }, e.prototype.startFrameSync = function(e, t) {
                    if (!this.roomInfo.id) {
                        var n = {
                            RspWrap1: {
                                seq: null,
                                body: null,
                                errCode: et.c.EC_SDK_NO_ROOM,
                                errMsg: "无房间信息"
                            },
                            RspWrap2: null,
                            body: null
                        };
                        return void this.startFrameSyncResponse(!1, n, t)
                    }
                    var o = et.e.E_CMD_START_FRAME_SYNC_REQ,
                        r = this.netUtil1.send(e, o, this.startFrameSyncResponse.bind(this), t);
                    return rt.a.log("STARTFRAMESYNC_Para", e, r), r
                }, e.prototype.stopFrameSync = function(e, t) {
                    if (!this.roomInfo.id) {
                        var n = {
                            RspWrap1: {
                                seq: null,
                                body: null,
                                errCode: et.c.EC_SDK_NO_ROOM,
                                errMsg: "无房间信息"
                            },
                            RspWrap2: null,
                            body: null
                        };
                        return void this.stopFrameSyncResponse(!1, n, t)
                    }
                    var o = et.e.E_CMD_STOP_FRAME_SYNC_REQ,
                        r = this.netUtil1.send(e, o, this.stopFrameSyncResponse.bind(this), t);
                    return rt.a.log("STOPFRAMESYNC_Para", e, r), r
                }, e.prototype.sendFrame = function(e, t) {
                    if (!this.roomInfo.id) {
                        var n = {
                            RspWrap1: {
                                seq: null,
                                body: null,
                                errCode: et.c.EC_SDK_NO_ROOM,
                                errMsg: "无房间信息"
                            },
                            RspWrap2: null,
                            body: null
                        };
                        return void this.sendFrameResponse(!1, n, t)
                    }
                    this.autoCheckLogin();
                    var o = et.e.E_CMD_RELAY_SEND_FRAME_REQ,
                        r = this.netUtil2.send(e, o, this.sendFrameResponse.bind(this), t);
                    return rt.a.log("SENDFRAME_Para", e, r), r
                }, e.prototype.requestFrame = function(e, t) {
                    if (!this.roomInfo.id) {
                        var n = {
                            RspWrap1: {
                                seq: null,
                                body: null,
                                errCode: et.c.EC_SDK_NO_ROOM,
                                errMsg: "无房间信息"
                            },
                            RspWrap2: null,
                            body: null
                        };
                        return void this.requestFrameResponse(!1, n, t)
                    }
                    this.autoCheckLogin();
                    var o = et.e.E_CMD_RELAY_REQUEST_FRAME_REQ,
                        r = this.netUtil2.send(e, o, this.requestFrameResponse.bind(this), t);
                    return rt.a.log("REQUESTFRAME_Para", e, r), r
                }, e.prototype.checkLogin = function(e, t) {
                    if (!this.roomInfo.id) {
                        var n = {
                            RspWrap1: {
                                seq: null,
                                body: null,
                                errCode: et.c.EC_SDK_NO_ROOM,
                                errMsg: "无房间信息"
                            },
                            RspWrap2: null,
                            body: null
                        };
                        return void this.checkLoginResponse(!1, n, e)
                    }
                    et.a.setStatus(et.a.StatusType.CHECKING);
                    var o = et.e.E_CMD_CHECK_LOGIN_REQ,
                        r = {
                            token: et.l.authKey,
                            routeId: this.roomInfo.routeId
                        },
                        _ = this.netUtil2.send(r, o, this.checkLoginResponse.bind(this), e);
                    return rt.a.log("CHECKLOGIN", _, t), _
                }, e.prototype.sendMessageExt = function(e, t) {
                    if (!this.roomInfo.id) {
                        var n = {
                            RspWrap1: {
                                seq: null,
                                body: null,
                                errCode: et.c.EC_SDK_NO_ROOM,
                                errMsg: "无房间信息"
                            },
                            RspWrap2: null,
                            body: null
                        };
                        return void this.sendMessageExtResponse(!1, n, t)
                    }
                    this.autoCheckLogin();
                    var o = et.e.E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ,
                        r = this.netUtil2.send(e, o, this.sendMessageExtResponse.bind(this), t);
                    return rt.a.log("SENDTOGAMESVR_Para", e, r), r
                }, e.prototype.startFrameSyncResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.startFrameSyncRsp(r)
                }, e.prototype.stopFrameSyncResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.stopFrameSyncRsp(r)
                }, e.prototype.autoCheckLogin = function() {
                    this.connect(), this.netUtil2.client.socket.isConnect() && et.a.isOffline() && this.netUtil2.client.socket.emit(dt.autoAuth, {})
                }, e.prototype.connect = function() {
                    !this.netUtil2.client.socket.isConnect() && this.roomInfo && (this.netUtil2.client.socket.url = et.j.url + ":" + et.g, this.netUtil2.client.socket.connect("framesender connect"))
                }, e.prototype.sendFrameResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.sendFrameRsp(r)
                }, e.prototype.checkLoginResponse = function(e, t, n) {
                    et.a.setStatus(et.a.StatusType.OFFLINE);
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return r.code === et.c.EC_OK && et.a.setStatus(et.a.StatusType.CHECKED), rt.a.log("RESPONSE_CheckLoginResponse", r), K({
                        r: "checklogin",
                        s: r.seq,
                        e: r.code
                    }), n && n(r)
                }, e.prototype.requestFrameResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.requestFrameRsp(r)
                }, e.prototype.sendMessageExtResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.sendToGameSvrRsp(r)
                }, e.prototype.onRecvFrame = function(e, t) {
                    var n, o = {
                        data: {
                            frame: Object.assign({}, e.frame, {
                                roomId: this.getFrameRoom().id
                            })
                        },
                        seq: t
                    };
                    fn.trigger(), n = fn.deltaTime, un && (dn.frameTimes.push([n, On.frameRate]), dn.recFrameSum += n, dn.frameSum += On.frameRate);
                    for (var r = 0, _ = e.frame.items; r < _.length; r++) {
                        var i = _[r];
                        i.playerId === et.l.playerId && x(Date.now() - i.timestamp)
                    }
                    return this.responses.onRecvFrame(o)
                }, e.prototype.onStartFrameSync = function(e, t) {
                    var n = {
                        data: Object.assign({}, e),
                        seq: t
                    };
                    return fn.clear(), this.responses.onStartFrameSync(n)
                }, e.prototype.onStopFrameSync = function(e, t) {
                    var n = {
                        data: Object.assign({}, e),
                        seq: t
                    };
                    return this.netUtil2 && this.netUtil2.client.clearQueue(), fn.clear(), this.responses.onStopFrameSync(n)
                }, e.prototype.onRecvFromGameSvr = function(e, t) {
                    var n = {};
                    try {
                        n = JSON.parse(e.data)
                    } catch (t) {
                        n = e.data
                    }
                    var o = {
                        data: Object.assign({}, e, {
                            data: n
                        }, {
                            roomId: e.roomId
                        }),
                        seq: t
                    };
                    return this.responses.onRecvFromGameSvr(o)
                }, e
            }(),
            In = function(e) {
                function t(t) {
                    var n = this;
                    return n = e.call(this, t) || this, n.messageBroadcastType = Ot.a.ServerSendClientBstWrap2Type.E_PUSH_TYPE_ROOM_CHAT, n.setBroadcastHandler(n.messageBroadcastType, n.onRecvFromClient.bind(n)), n
                }
                return __extends(t, e), t.prototype.sendMessage = function(e, t) {
                    var n = et.e.E_CMD_ROOM_CHAT_REQ,
                        o = this.send(e, n, this.sendMessageResponse.bind(this), t);
                    return rt.a.log("SENDMESSAGE_Para", e, o), o
                }, t.prototype.sendMessageResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.sendToClientRsp(r)
                }, t.prototype.onRecvFromClient = function(e, t) {
                    var n = {
                        data: e,
                        seq: t
                    };
                    return this.responses.onRecvFromClient(n)
                }, t
            }(rn),
            mn = function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return __extends(t, e), t.prototype.login = function(e, t, n) {
                    var o = et.e.E_CMD_LOGIN_REQ,
                        r = Math.floor(Date.now() / 1e3),
                        _ = Math.floor(Math.random() * (Math.pow(2, 32) - 1)),
                        a = function(e, t, n, o, r) {
                            var _ = [
                                    ["game_id", t],
                                    ["open_id", n],
                                    ["nonce", r],
                                    ["timestamp", o]
                                ].sort().map(function(e) {
                                    return e.join("=")
                                }).join("&"),
                                i = st(_, e || "");
                            return {
                                sign: it.stringify(i),
                                timestamp: o
                            }
                        }(t, e.gameId, e.openId, r, _).sign,
                        E = i(),
                        R = s(),
                        c = ut,
                        u = Object.assign({}, e, {
                            sign: a,
                            timestamp: r,
                            nonce: _,
                            platform: E,
                            channel: R,
                            deviceId: c,
                            mac: void 0,
                            imei: void 0
                        });
                    et.i.setStatus(et.i.StatusType.LOGINING);
                    var C = this.send(u, o, this.loginResponse.bind(this), n);
                    return rt.a.log("LOGIN_Para", u, C), et.i.setErrCode(0, ""), C
                }, t.prototype.logout = function(e, t) {
                    var n = et.e.E_CMD_LOGOUT_REQ,
                        o = this.send(e, n, this.logoutResponse.bind(this), t);
                    return rt.a.log("LOGOUT_Para", e, o), et.i.setStatus(et.i.StatusType.LOGOUTING), o
                }, t.prototype.changeUserState = function(e, t) {
                    var n = et.e.E_CMD_CHANGE_PLAYER_STATE_REQ,
                        o = this.send(e, n, this.changeUserStateResponse.bind(this), t);
                    return rt.a.log("CHANGEUSERSTATE_Para", e, o), o
                }, t.prototype.loginResponse = function(e, t, n) {
                    e || et.i.setStatus(et.i.StatusType.LOGOUT);
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    this.client.handleSuccess(r.code, function() {
                        et.l.authKey = t.body.token, et.l.playerId = t.body.playerId, et.i.setStatus(et.i.StatusType.LOGIN), et.d.setInfo({
                            id: r.data.playerId
                        })
                    }), et.i.setErrCode(r.code, r.msg), n && n(r), rt.a.log("RESPONSE_LoginResponse", r), K({
                        r: "login",
                        s: r.seq,
                        e: r.code
                    })
                }, t.prototype.logoutResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq
                        };
                    return rt.a.log("RESPONSE_LogoutResponse", r), this.client.handleSuccess(r.code, function() {
                        et.l.authKey = void 0, et.l.playerId = void 0, et.i.setStatus(et.i.StatusType.LOGOUT), et.d.setInfo({
                            id: void 0
                        })
                    }), n && n(r)
                }, t.prototype.changeUserStateResponse = function(e, t, n) {
                    var o = t.RspWrap1,
                        r = {
                            code: o.errCode,
                            msg: o.errMsg,
                            seq: o.seq,
                            data: t.body
                        };
                    return n && n(r), this.responses.changeCustomPlayerStatusRsp(r)
                }, t
            }(rn),
            Tn = function(e) {
                function t(t, n, o) {
                    var r = this;
                    return r = e.call(this, t) || this, r.pingTimer = new tt, r.pongTimer = new tt, r.currentSeq = "", r.id = n, r.frameSender = o, r
                }
                return __extends(t, e), t.prototype.unbindSocket = function() {
                    this.stop(), e.prototype.unbindSocket.call(this)
                }, t.prototype.ping = function(e) {
                    var t = this;
                    if (ot(this.pingTimer), et.l.authKey) {
                        var n = Date.now(),
                            o = this.frameSender && this.frameSender.roomInfo && this.frameSender.roomInfo.routeId ? this.frameSender.roomInfo.routeId : "",
                            r = {
                                conType: this.id,
                                routeId: o
                            },
                            _ = this.send(r, et.e.E_CMD_HEART_BEAT_REQ, function(e, o) {
                                return t.handlePong(e, o, n)
                            }, e);
                        this.currentSeq = _, rt.a.log("PING", this.id, _), nt(this.pongTimer, function() {
                            return t.handlePongTimeout(_)
                        }, et.j.pingTimeout)
                    }
                }, t.prototype.stop = function() {
                    ot(this.pingTimer, this.pongTimer)
                }, t.prototype.handlePong = function(e, t, n) {
                    if (rt.a.log("Pong", this.id, t.RspWrap1, "send", e), K({
                            r: "pong" + this.id,
                            s: t.RspWrap1.seq,
                            e: t.RspWrap1.errCode
                        }), ot(this.pongTimer), !e) return this.handlePongTimeout(t.RspWrap1.seq);
                    this.client.clearQueue();
                    var o, r = t.RspWrap1.errCode;
                    return this.id === Ot.a.ConnectionType.RELAY && r === et.c.EC_OK && (o = {
                        type: this.id,
                        time: Date.now() - n
                    }, un && (an.a.onPingTime && an.a.onPingTime(o.time), V(on.ping, o))), w(r) ? (et.i.setStatus(et.i.StatusType.LOGOUT), this.client.socket.emit(dt.autoAuth, {})) : Q(r) && this.client.socket.id === Ot.a.ConnectionType.RELAY ? (et.a.setStatus(et.a.StatusType.OFFLINE), this.client.socket.emit(dt.autoAuth, {})) : void nt(this.pingTimer, this.ping.bind(this), et.j.pingTimeout)
                }, t.prototype.handlePongTimeout = function(e) {
                    this.client.deleteSeqQueue(e), e === this.currentSeq && this.client.socket && (this.client.socket.connectNewSocket(this.client.socket.url), this.client.clearQueue(), rt.a.log("Pong_Timeout", this.id))
                }, t
            }(rn),
            Mn = function(e, t) {
                return function(n) {
                    if ("error" !== n && rt.a.log(n, e), !n.startsWith("on") && n.includes("Rsp")) {
                        var o = e;
                        K({
                            r: n.replace("Rsp", ""),
                            s: o.seq,
                            e: o.code
                        })
                    }
                    for (var r = t.values(), _ = 0, i = r; _ < i.length; _++) {
                        var s = i[_];
                        s && s[n] && s[n].call(s, e)
                    }
                }
            },
            hn = function() {
                function e() {
                    this.context = null, e.instance = this, this.context = new Set
                }
                return e.bindResponses = function(t) {
                    e.instance.context.add(t)
                }, e.unbindResponses = function(t) {
                    e.instance.context["delete"](t)
                }, e.clearResponses = function() {
                    e.instance.context.clear()
                }, e.prototype.onNetwork = function(t) {
                    Mn(t, e.instance.context)("onNetwork")
                }, e.prototype.createRoomRsp = function(t) {
                    Mn(t, e.instance.context)("createRoomRsp")
                }, e.prototype.joinRoomRsp = function(t) {
                    Mn(t, e.instance.context)("joinRoomRsp")
                }, e.prototype.onJoinRoom = function(t) {
                    Mn(t, e.instance.context)("onJoinRoom")
                }, e.prototype.leaveRoomRsp = function(t) {
                    Mn(t, e.instance.context)("leaveRoomRsp")
                }, e.prototype.onLeaveRoom = function(t) {
                    Mn(t, e.instance.context)("onLeaveRoom")
                }, e.prototype.dismissRoomRsp = function(t) {
                    Mn(t, e.instance.context)("dismissRoomRsp")
                }, e.prototype.onDismissRoom = function(t) {
                    Mn(t, e.instance.context)("onDismissRoom")
                }, e.prototype.changeRoomRsp = function(t) {
                    Mn(t, e.instance.context)("changeRoomRsp")
                }, e.prototype.onChangeRoom = function(t) {
                    Mn(t, e.instance.context)("onChangeRoom")
                }, e.prototype.removePlayerRsp = function(t) {
                    Mn(t, e.instance.context)("removePlayerRsp")
                }, e.prototype.onRemovePlayer = function(t) {
                    Mn(t, e.instance.context)("onRemovePlayer")
                }, e.prototype.getRoomByRoomIdRsp = function(t) {
                    Mn(t, e.instance.context)("getRoomByRoomIdRsp")
                }, e.prototype.getRoomListRsp = function(t) {
                    Mn(t, e.instance.context)("getRoomListRsp")
                }, e.prototype.matchPlayersSimpleRsp = function(t) {
                    Mn(t, e.instance.context)("matchPlayersSimpleRsp")
                }, e.prototype.matchPlayersRsp = function(t) {
                    Mn(t, e.instance.context)("matchPlayersRsp")
                }, e.prototype.matchRoomSimpleRsp = function(t) {
                    Mn(t, e.instance.context)("matchRoomSimpleRsp")
                }, e.prototype.onMatchTimeout = function(t) {
                    Mn(t, e.instance.context)("onMatchTimeout")
                }, e.prototype.onMatchPlayers = function(t) {
                    Mn(t, e.instance.context)("onMatchPlayers")
                }, e.prototype.cancelPlayerMatchRsp = function(t) {
                    Mn(t, e.instance.context)("cancelPlayerMatchRsp")
                }, e.prototype.startFrameSyncRsp = function(t) {
                    Mn(t, e.instance.context)("startFrameSyncRsp")
                }, e.prototype.stopFrameSyncRsp = function(t) {
                    Mn(t, e.instance.context)("stopFrameSyncRsp")
                }, e.prototype.sendFrameRsp = function(t) {
                    Mn(t, e.instance.context)("sendFrameRsp")
                }, e.prototype.sendToClientRsp = function(t) {
                    Mn(t, e.instance.context)("sendToClientRsp")
                }, e.prototype.onRecvFromClient = function(t) {
                    Mn(t, e.instance.context)("onRecvFromClient")
                }, e.prototype.onRecvFromGameSvr = function(t) {
                    Mn(t, e.instance.context)("onRecvFromGameSvr")
                }, e.prototype.onChangePlayerNetworkState = function(t) {
                    Mn(t, e.instance.context)("onChangePlayerNetworkState")
                }, e.prototype.onRecvFrame = function(t) {
                    Mn(t, e.instance.context)("onRecvFrame")
                }, e.prototype.requestFrameRsp = function(t) {
                    Mn(t, e.instance.context)("requestFrameRsp")
                }, e.prototype.sendToGameSvrRsp = function(t) {
                    Mn(t, e.instance.context)("sendToGameSvrRsp")
                }, e.prototype.changeCustomPlayerStatusRsp = function(t) {
                    Mn(t, e.instance.context)("changeCustomPlayerStatusRsp")
                }, e.prototype.onChangeCustomPlayerStatus = function(t) {
                    Mn(t, e.instance.context)("onChangeCustomPlayerStatus")
                }, e.prototype.onStartFrameSync = function(t) {
                    Mn(t, e.instance.context)("onStartFrameSync")
                }, e.prototype.onStopFrameSync = function(t) {
                    Mn(t, e.instance.context)("onStopFrameSync")
                }, e.prototype.error = function(t) {
                    Mn(t, e.instance.context)("error")
                }, e
            }();
        hn.instance = null;
        var yn, Nn = null,
            Ln = null,
            gn = null,
            Pn = null,
            vn = null,
            Dn = null,
            Yn = null,
            Fn = {
                login: function(e) {
                    var t = Object.assign({}, et.k);
                    return gn && gn.login(t, et.k.secretKey, function(t) {
                        e && e(t), Fn.loginRsp(t)
                    })
                },
                loginRsp: function(e) {
                    if (et.h.isIniting()) {
                        if (e.code !== et.c.EC_OK) return X(!1, e);
                        var t = 5e3,
                            n = 1e4;
                        return e.data.sdkConfig && (e.data.sdkConfig.pingInterval && (t = e.data.sdkConfig.pingInterval), e.data.sdkConfig.reportInterval && (n = e.data.sdkConfig.reportInterval)), B(et.k.openId, et.l.playerId, n), et.j.pingTimeout = t, X(!0, {
                            code: et.c.EC_OK
                        }), Nn.ping()
                    }
                    e.code === et.c.EC_OK && Nn.ping()
                },
                logout: function() {
                    return gn && gn.logout({}, Fn.logoutRsp)
                },
                logoutRsp: function(e) {
                    e.code === et.c.EC_OK && Nn.stop()
                }
            },
            bn = function() {
                function e(t, n) {
                    return this.ErrCode = e.ErrCode, this.ENUM = e.ENUM, e.instance instanceof e ? e.instance : (e.instance = this, !t.openId && (t.openId = ""), t.openId = t.openId + "", Object.assign(et.k, t), Object.assign(et.j, n, {
                        pingTimeout: et.j.pingTimeout
                    }), et.l.gameId = et.k.gameId, rt.a.log("CONSTRUCTOR", t, n), void 0)
                }
                return e.prototype.bindResponses = function(e) {
                    hn.bindResponses(e)
                }, e.prototype.unbindResponses = function(e) {
                    hn.unbindResponses(e)
                }, e.prototype.clearResponses = function() {
                    hn.clearResponses()
                }, e.prototype.onHide = function() {
                    et.i.setStatus(et.i.StatusType.LOGOUT), et.a.setStatus(et.a.StatusType.OFFLINE), Nn && Nn.stop(), Ln && Ln.stop(), rt.a.log("SDK_onHide")
                }, e.prototype.onShow = function() {
                    Nn && Nn.stop(), Ln && Ln.stop(), Nn && Nn.client.socket.url && Nn.ping(), Ln && Ln.client.socket.url && Ln.ping(), rt.a.log("SDK_onShow", Nn.client.socket.url, Ln.client.socket.url)
                }, e.prototype.getSocket = function(e) {
                    return e === Ot.a.ConnectionType.COMMON ? Sn : e === Ot.a.ConnectionType.RELAY ? yn : void 0
                }, e.prototype.init = function(e) {
                    this.initRsp = function(t) {
                        e(t)
                    }, W()
                }, e.prototype.initRsp = function(e) {
                    return null
                }, e.prototype.uninit = function() {
                    Fn.logout(), et.i.setStatus(et.i.StatusType.LOGOUT), rn.stopQueueLoop(), j()
                }, e.prototype.isInited = function() {
                    return et.h.isInited()
                }, e.prototype.changeCustomPlayerStatus = function(e, t, n) {
                    var o = Object.assign({}, e);
                    return gn.changeUserState(o, n)
                }, e.prototype.createRoom = function(e, t) {
                    return this.createTeamRoom(Object.assign({}, e, {
                        teamNumber: 1
                    }), t)
                }, e.prototype.createTeamRoom = function(e, t) {
                    "object" != typeof e && (e = {});
                    var n = [],
                        o = (e = JSON.parse(JSON.stringify(e))).maxPlayers || 0,
                        r = e.teamNumber || 0;
                    if (o % r != 0) {
                        var _ = "";
                        return t && t({
                            seq: _,
                            code: et.c.EC_PARAMS_INVALID,
                            msg: "参数错误，最大玩家数无法被队伍数量整除",
                            data: null
                        }), _
                    }
                    var i = Object.assign({
                        commonNetworkState: void 0,
                        relayNetworkState: void 0,
                        teamId: void 0,
                        id: et.l.playerId
                    }, e.playerInfo);
                    if (delete e.teamNumber, !("number" == typeof o && "number" == typeof r && o >= r && r >= 1)) {
                        var s = "";
                        return t && t({
                            seq: "",
                            code: et.c.EC_PARAMS_INVALID,
                            msg: "参数错误，请检查最大玩家数量和队伍数量",
                            data: null
                        }), s
                    }
                    o = Math.floor(o), r = Math.floor(r);
                    for (var a = Math.floor(o / r), E = 0; r > E; E++) {
                        var R = {
                            id: E + "",
                            maxPlayers: a,
                            minPlayers: 1,
                            name: ""
                        };
                        !i.teamId && (i.teamId = R.id), E === r - 1 && (R.maxPlayers = o - (r - 1) * a), n.push(R)
                    }
                    var c = Object.assign({
                        region: void 0,
                        owner: void 0,
                        playerList: void 0
                    }, e, {
                        teamList: n,
                        createType: et.b.CreateRoomType.COMMON_CREATE,
                        playerInfo: i
                    });
                    return Pn.createRoom(c, t)
                }, e.prototype.joinRoom = function(e, t, n) {
                    var o = Object.assign({}, e, {
                        teamId: "0",
                        joinType: Ot.a.JoinRoomType.COMMON_JOIN,
                        roomId: t,
                        playerInfo: Object.assign({
                            commonNetworkState: void 0,
                            relayNetworkState: void 0,
                            teamId: void 0,
                            id: et.l.playerId
                        }, e.playerInfo)
                    });
                    return Pn.joinRoom(o, n)
                }, e.prototype.joinTeamRoom = function(e, t, n) {
                    var o = Object.assign({}, e, {
                        joinType: Ot.a.JoinRoomType.COMMON_JOIN,
                        roomId: t,
                        playerInfo: Object.assign({
                            commonNetworkState: void 0,
                            relayNetworkState: void 0,
                            teamId: void 0,
                            id: et.l.playerId
                        }, e.playerInfo)
                    });
                    return Pn.joinRoom(o, n)
                }, e.prototype.leaveRoom = function(e) {
                    return Pn.leaveRoom({}, e)
                }, e.prototype.dismissRoom = function(e, t, n) {
                    return Pn.dismissRoom({}, n)
                }, e.prototype.changeRoom = function(e, t) {
                    return Pn.changeRoom(e, t)
                }, e.prototype.removePlayer = function(e, t) {
                    var n = Object.assign({}, e);
                    return Pn.removeUser(n, t)
                }, e.prototype.getRoomByRoomId = function(e, t) {
                    var n = Object.assign({}, e);
                    return Pn.getRoomByRoomId(n, t)
                }, e.prototype.getRoomList = function(e, t) {
                    var n = Object.assign({}, e, {
                        gameId: et.k.gameId
                    });
                    return Pn.getRoomList(n, t)
                }, e.prototype.matchPlayers = function(e, t) {
                    var n = Object.assign({}, e, {
                        playerInfo: Object.assign({
                            matchStatus: void 0,
                            id: et.l.playerId,
                            teamId: "",
                            region: "",
                            teamLeader: ""
                        }, e.playerInfo)
                    });
                    return vn.matchUsersComplex(n, t)
                }, e.prototype.matchRoom = function(e, t) {
                    var n = Object.assign({}, e, {
                        playerInfo: Object.assign({
                            commonNetworkState: void 0,
                            relayNetworkState: void 0,
                            teamId: void 0,
                            id: et.l.playerId
                        }, e.playerInfo)
                    });
                    return vn.matchRoom(n, t)
                }, e.prototype.cancelMatch = function(e, t) {
                    var n = Object.assign({}, e);
                    return vn.cancelMatch(n, t)
                }, e.prototype.setFrameRoom = function(e) {
                    return !(!e || !Array.isArray(e.playerList) || e.playerList.findIndex(function(e) {
                        return e.id === et.l.playerId
                    }) < 0 || (Yn.setFrameRoom(e), 0))
                }, e.prototype.startFrameSync = function(t) {
                    function n(n) {
                        t && t(n), e.responses.startFrameSyncRsp(n)
                    }
                    var o = Yn.roomInfo;
                    if (!o) return rt.a.log("STARTFRAMESYNC", "fail at roomInfo === null"), n({
                        code: e.ErrCode.EC_SDK_NO_ROOM,
                        msg: "无房间信息",
                        seq: null
                    });
                    rt.a.log("STARTFRAMESYNC", Yn.roomInfo), rt.a.log("STARTFRAMESYNC", "socket2 isConnect", yn.isConnect(), yn.socketTask);
                    var r = function() {
                        Yn.checkLogin(function(r) {
                            if (r.code === et.c.EC_OK) {
                                rt.a.log("STARTFRAMESYNC", "start");
                                var _ = {
                                    roomId: o.id,
                                    gameId: et.k.gameId
                                };
                                return Yn.startFrameSync(_, t)
                            }
                            return rt.a.log("STARTFRAMESYNC", "fail at CheckLogin, seq=", r.seq, ", code=", r.code, o), n({
                                code: e.ErrCode.EC_SDK_NO_CHECK_LOGIN,
                                msg: "CheckLogin失败, seq=" + r.seq,
                                seq: null
                            })
                        }, "sdk startFrame")
                    };
                    yn.url = et.j.url + ":" + et.g, yn.isConnect() ? r() : (yn.connect("sdk startFrameSync"), yn.eventOnceCallbacks.clear(), yn.once(dt.connect, function() {
                        yn.eventOnceCallbacks.clear(), r()
                    }), yn.once(dt.connectClose, function() {
                        rt.a.log("STARTFRAMESYNC", "fail at SocketEventType.connectClose"), yn.eventOnceCallbacks.clear(), n({
                            code: e.ErrCode.EC_SDK_SOCKET_ERROR,
                            msg: "Socket错误",
                            seq: null
                        })
                    }), yn.once(dt.connectError, function() {
                        rt.a.log("STARTFRAMESYNC", "fail at SocketEventType.connectError"), yn.eventOnceCallbacks.clear(), n({
                            code: e.ErrCode.EC_SDK_SOCKET_ERROR,
                            msg: "Socket错误",
                            seq: null
                        })
                    }))
                }, e.prototype.stopFrameSync = function(e) {
                    var t = {
                        roomId: Yn.roomInfo.id,
                        gameId: et.k.gameId
                    };
                    Yn.stopFrameSync(t, function(t) {
                        t.code === et.c.EC_OK && e && e(t)
                    })
                }, e.prototype.sendFrame = function(e, t) {
                    var n = {
                        roomId: Yn.roomInfo.id,
                        item: {
                            playerId: et.l.playerId,
                            data: JSON.stringify(e.data),
                            timestamp: Date.now()
                        }
                    };
                    return Yn.sendFrame(n, t)
                }, e.prototype.requestFrame = function(e, t) {
                    var n = Yn.roomInfo,
                        o = Object.assign({}, e, {
                            roomId: n.id
                        });
                    return Yn.requestFrame(o, t)
                }, e.prototype.sendToClient = function(e, t, n) {
                    var o = Object.assign({}, e, {
                        roomId: t
                    });
                    return Dn.sendMessage(o, n)
                }, e.prototype.sendToGameSvr = function(e, t, n) {
                    var o = Object.assign({}, e, {
                        playerId: et.l.playerId,
                        roomId: t,
                        data: JSON.stringify(e.data)
                    });
                    return Yn.sendMessageExt(o, n)
                }, e
            }();
        bn.instance = null, bn.responses = new hn, bn.ErrCode = et.c, bn.ENUM = et.b;
        var Un = function() {
                function e(e, t) {
                    this.frameIdFill = 0, this.frameIdSent = 0, this.autoReqFrameErrTimes = 0, this.lastFrameTime = 0, this.beginFrameId = -1, this.endFrameId = -1, this.fillCache = {}, this.timer = new Hn(e), this.callback = t
                }
                return e.prototype.reset = function(e) {
                    void 0 === e && (e = 0), this.timer.init(), this.frameIdSent = e, this.frameIdFill = e, this.lastFrameTime = 0
                }, e.prototype.push = function(e, t) {
                    var n = e.data.frame.id;
                    1 === n && this.reset(), this.timer.push(n, Date.now());
                    var o = this.frameIdSent,
                        r = this.frameIdFill;
                    return this.frameIdFill = n, et.j.isAutoRequestFrame ? o + 1 >= n ? this.send(e) : (this.fillCache[n] = {
                        endFrameId: n,
                        data: [e.data.frame]
                    }, void(n > r + 1 && this.fill(r + 1, n - 1, t))) : this.send(e)
                }, e.prototype.retryFill = function(e) {
                    this.beginFrameId === this.endFrameId && this.beginFrameId < 0 || (this.autoReqFrameErrTimes = 0, this.fill(this.beginFrameId, this.endFrameId, e))
                }, e.prototype.send = function(e) {
                    var t = e.data.frame.id;
                    if (!(t <= this.frameIdSent)) {
                        e.data.frame.time = this.timer.time(t), this.frameIdSent = t, this.callback(e), !this.lastFrameTime && (this.lastFrameTime = e.data.frame.time);
                        var n = e.data.frame.time - this.lastFrameTime;
                        0 !== n && an.a.onFitFrameTime(n), Math.abs(n) > 300 && this.reset(t), this.lastFrameTime = e.data.frame.time
                    }
                }, e.prototype.fillSend = function(e) {
                    var t = this;
                    if (e <= this.frameIdSent + 1 && this.fillCache[e]) {
                        var n = this.fillCache[e];
                        delete this.fillCache[e], n.data.forEach(function(e) {
                            return t.send({
                                data: {
                                    frame: e
                                },
                                seq: ""
                            })
                        }), this.fillSend(n.endFrameId + 1)
                    }
                }, e.prototype.fill = function(e, t, n) {
                    var o = this;
                    n.requestFrame({
                        beginFrameId: e,
                        endFrameId: t
                    }, function(r) {
                        if (o.beginFrameId = e, o.endFrameId = t, r.code !== Ot.a.QAppProtoErrCode.EC_OK) {
                            if (o.autoReqFrameErrTimes++, o.autoReqFrameErrTimes <= 5) return o.fill(e, t, n);
                            n.onAutoRequestFrameError && n.onAutoRequestFrameError({
                                data: r,
                                seq: ""
                            })
                        } else o.beginFrameId = -1, o.endFrameId = -1, o.autoReqFrameErrTimes = 0, o.fillCache[e] = {
                            endFrameId: t,
                            data: r.data.frames.map(function(e) {
                                return Object.assign({}, e, {
                                    roomId: n.roomInfo.id,
                                    isReplay: !0
                                })
                            })
                        }, o.fillSend(e)
                    })
                }, e
            }(),
            Hn = function() {
                function e(e) {
                    this._a1 = e, this.init()
                }
                return e.prototype.init = function() {
                    this.n = 0, this.S_xi = 0, this.S_yi = 0, this.S_xiyi = 0, this.S_xixi = 0
                }, e.prototype.push = function(e, t) {
                    this.n++, this.S_xi += e, this.S_yi += t, this.S_xiyi += e * t, this.S_xixi += e * e
                }, e.prototype.a0 = function(e) {
                    return void 0 === e && (e = this.a1()), this.S_yi / this.n - this.a1() * this.S_xi / this.n
                }, e.prototype.a1 = function() {
                    return (this.n * this.S_xiyi - this.S_xi * this.S_yi) / (this.n * this.S_xixi - this.S_xi * this.S_xi)
                }, e.prototype.ap = function() {
                    var e = this.a1();
                    return {
                        a0: this.a0(e),
                        a1: e
                    }
                }, e.prototype.time = function(e) {
                    if (0 === this.n) return 0;
                    var t = this.n >= 2 ? this.ap() : {
                        a0: this.S_yi - this.S_xi * this._a1,
                        a1: this._a1
                    };
                    return Math.round(t.a0 + e * t.a1)
                }, e
            }(),
            Gn = function() {
                function e(e) {
                    var t = this;
                    this.frameBroadcastFrameId = 0, this.room = e, this.frameBroadcast = new Un(this.room.roomInfo.frameRate ? Math.floor(1e3 / this.room.roomInfo.frameRate) : 66, function(e) {
                        e && e.data && e.data.frame && e.data.frame.items && e.data.frame.items.forEach(function(e) {
                            return e.data = "object" == typeof e.data ? e.data : JSON.parse(e.data)
                        }), t.matchFrameBstAndInvoke("onRecvFrame", e)
                    })
                }
                return e.prototype.onNetwork = function(e) {
                    this.room.onUpdate && this.room.onUpdate(this.room)
                }, e.prototype.onJoinRoom = function(e) {
                    this.saveAndInvoke("onJoinRoom", e)
                }, e.prototype.onLeaveRoom = function(e) {
                    this.saveAndInvoke("onLeaveRoom", e)
                }, e.prototype.onDismissRoom = function(e) {
                    var t = this;
                    this.matchRoomInfoAndInvoke("onDismissRoom", e, function() {
                        return t.room.roomInfo = {}
                    })
                }, e.prototype.onChangeRoom = function(e) {
                    this.saveAndInvoke("onChangeRoom", e)
                }, e.prototype.onRemovePlayer = function(e) {
                    this.saveAndInvoke("onRemovePlayer", e)
                }, e.prototype.onRecvFromClient = function(e) {
                    this.matchIDAndInvoke("onRecvFromClient", e)
                }, e.prototype.onRecvFromGameSvr = function(e) {
                    this.matchIDAndInvoke("onRecvFromGameSvr", e, null)
                }, e.prototype.onMatchPlayers = function(e) {
                    var t;
                    this.room.roomUtil.setRoomInfo(e.data.roomInfo), e.data.roomInfo && e.data.roomInfo.playerList && e.data.roomInfo.playerList.find(function(e) {
                        return xn.isMe(e.id)
                    }) && this.room.roomUtil.activeFrame(), e.data.matchType === Ot.a.MatchType.PLAYER_COMPLEX && (t = kn.TAG.PLAYER_COMPLEX, wn.once(t, {
                        code: Ot.a.QAppProtoErrCode.EC_OK,
                        msg: "",
                        seq: "",
                        data: e.data
                    }))
                }, e.prototype.onMatchTimeout = function(e) {
                    var t;
                    if (e.data.matchType === Ot.a.MatchType.PLAYER_COMPLEX) {
                        t = kn.TAG.PLAYER_COMPLEX;
                        var n = e.data.errCode || Ot.a.QAppProtoErrCode.EC_MATCH_TIMEOUT,
                            o = Ct(n, ""),
                            r = o.errCode,
                            _ = o.errMsg;
                        wn.once(t, {
                            code: r,
                            msg: _,
                            seq: "",
                            data: {}
                        })
                    }
                }, e.prototype.onChangePlayerNetworkState = function(e) {
                    this.saveAndInvoke("onChangePlayerNetworkState", e)
                }, e.prototype.onChangeCustomPlayerStatus = function(e) {
                    this.saveAndInvoke("onChangeCustomPlayerStatus", e)
                }, e.prototype.onStartFrameSync = function(e) {
                    this.saveAndInvoke("onStartFrameSync", e)
                }, e.prototype.onStopFrameSync = function(e) {
                    this.frameBroadcast.reset(), this.saveAndInvoke("onStopFrameSync", e)
                }, e.prototype.onRecvFrame = function(e) {
                    this.room.roomInfo.frameSyncState !== Ot.a.FrameSyncState.STOP && this.frameBroadcast.push(e, this.room)
                }, e.prototype.frameBroadcastFrameIdReset = function(e) {
                    return void 0 === e && (e = 0), this.frameBroadcast.reset(e)
                }, e.prototype.matchRoomInfo = function(e) {
                    return this.room.roomInfo.id === e.data.roomInfo.id
                }, e.prototype.matchID = function(e) {
                    return this.room.roomInfo.id === e.data.roomId
                }, e.prototype.invoke = function(e, t) {
                    this.room[e] && this.room[e].call(this.room, t)
                }, e.prototype.saveAndInvoke = function(e, t) {
                    this.matchRoomInfo(t) && (this.room.roomUtil.setRoomInfo(t.data.roomInfo), this.invoke(e, t))
                }, e.prototype.matchFrameBstAndInvoke = function(e, t, n) {
                    this.matchID({
                        data: t.data.frame,
                        seq: ""
                    }) && (n && n(t), this.invoke(e, t))
                }, e.prototype.matchIDAndInvoke = function(e, t, n) {
                    this.matchID(t) && (n && n(t), this.invoke(e, t))
                }, e.prototype.matchRoomInfoAndInvoke = function(e, t, n) {
                    this.matchRoomInfo(t) && (n && n(t), this.invoke(e, t))
                }, e
            }(),
            kn = function() {
                function e() {
                    this.callbacks = {}
                }
                return e.prototype.push = function(e, t) {
                    !this.callbacks[e] && (this.callbacks[e] = []), this.callbacks[e].push(t)
                }, e.prototype.once = function(e, t) {
                    (this.callbacks[e] || []).forEach(function(e) {
                        return e && e(t)
                    }), this.removeCallbacksByTag(e)
                }, e.prototype.removeCallbacksByTag = function(e) {
                    e && this.callbacks[e] && delete this.callbacks[e]
                }, e
            }();
        kn.TAG = {
            PLAYER_SIMPLE: "PLAYER_SIMPLE",
            PLAYER_COMPLEX: "PLAYER_COMPLEX"
        };
        var wn = new kn,
            Qn = function() {
                function e(e) {
                    this.room = e
                }
                return e.prototype.setRoomInfo = function(e) {
                    !e && (e = {}), this.room.roomInfo = JSON.parse(JSON.stringify(e || {})), this.room.roomInfo.playerList = this.room.roomInfo.playerList || [], this.room.onUpdate && this.room.onUpdate(this.room), this.room.isInRoom() && et.d.setInfo(this.room.roomInfo.playerList.find(function(e) {
                        return e.id === et.l.playerId
                    }))
                }, e.prototype.saveRoomInfo = function(e) {
                    e.code === Ot.a.QAppProtoErrCode.EC_OK && (this.setRoomInfo(e.data.roomInfo), this.room.roomInfo.playerList.find(function(e) {
                        return xn.isMe(e.id)
                    }) && this.activeFrame())
                }, e.prototype.setParam = function(e) {
                    this.room.roomInfo.id && (e.roomId = this.room.roomInfo.id)
                }, e.prototype.addRoomParam = function() {
                    return {
                        roomId: this.room.roomInfo.id || ""
                    }
                }, e.prototype.initBroadcast = function() {
                    this.room.roomBroadcast || (this.room.roomBroadcast = new Gn(this.room))
                }, e.prototype.activeFrame = function() {
                    return bn.instance.setFrameRoom(this.room.roomInfo)
                }, e
            }();
        n.d(t, "b", function() {
            return Kn
        }), n.d(t, "a", function() {
            return xn
        });
        var Bn = function() {
                function e() {}
                return e
            }(),
            Kn = function(e) {
                function t(t) {
                    var n = this;
                    return n = e.call(this) || this, n.roomUtil = new Qn(n), n.roomUtil.setRoomInfo(t || null), n
                }
                return __extends(t, e), t.getRoomList = function(e, t) {
                    bn.instance.getRoomList(e, t)
                }, t.getRoomByRoomId = function(e, t) {
                    bn.instance.getRoomByRoomId(e, t)
                }, t.prototype.isInRoom = function() {
                    return !!this.roomInfo.playerList.find(function(e) {
                        return e.id === et.l.playerId
                    })
                }, t.prototype.initRoom = function(e) {
                    this.roomUtil.setRoomInfo(e);
                    var t = e;
                    t && t.id && t.routeId && Array.isArray(t.playerList) && t.playerList.find(function(e) {
                        return e.id && xn.isMe(e.id)
                    }) && this.roomUtil.activeFrame()
                }, t.prototype.onUpdate = function(e) {}, Object.defineProperty(t.prototype, "networkState", {
                    get: function() {
                        var e = !1,
                            t = !1,
                            n = bn.instance.getSocket(Ot.a.ConnectionType.COMMON),
                            o = bn.instance.getSocket(Ot.a.ConnectionType.RELAY);
                        return {
                            COMMON: e = !(!n || !n.isConnect()),
                            RELAY: t = !(!o || !o.isConnect())
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.createRoom = function(e, t) {
                    var n = this;
                    bn.instance.createRoom(e, function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.createTeamRoom = function(e, t) {
                    var n = this;
                    bn.instance.createTeamRoom(e, function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.joinRoom = function(e, t) {
                    var n = this;
                    bn.instance.joinRoom(Object.assign({}, e), this.roomInfo.id, function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.joinTeamRoom = function(e, t) {
                    var n = this;
                    bn.instance.joinTeamRoom(Object.assign({}, e), this.roomInfo.id, function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.leaveRoom = function(e, t) {
                    var n = this;
                    this.roomUtil.setParam(e), bn.instance.leaveRoom(function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.dismissRoom = function(e, t) {
                    var n = this;
                    bn.instance.dismissRoom(e, this.roomInfo.id, function(e) {
                        e.code === Ot.a.QAppProtoErrCode.EC_OK && n.roomUtil.setRoomInfo(null), t && t(e)
                    })
                }, t.prototype.changeRoom = function(e, t) {
                    var n = this,
                        o = {
                            roomName: this.roomInfo.name,
                            owner: this.roomInfo.owner,
                            customProperties: this.roomInfo.customProperties,
                            isPrivate: this.roomInfo.isPrivate
                        };
                    bn.instance.changeRoom(Object.assign({}, o, e, this.roomUtil.addRoomParam()), function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.changeCustomPlayerStatus = function(e, t) {
                    var n = this;
                    bn.instance.changeCustomPlayerStatus(Object.assign({}, e), this.roomInfo.id, function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.removePlayer = function(e, t) {
                    var n = this;
                    bn.instance.removePlayer(e, function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.getRoomDetail = function(e) {
                    var t = this;
                    bn.instance.getRoomByRoomId(Object.assign({}, this.roomUtil.addRoomParam()), function(n) {
                        t.roomUtil.saveRoomInfo(n), e && e(n)
                    })
                }, t.prototype.matchPlayers = function(e, t) {
                    var n = wn.push(kn.TAG.PLAYER_COMPLEX, t),
                        o = Object.assign(e, {
                            flowId: n
                        });
                    bn.instance.matchPlayers(o, function(e) {
                        return e.code !== Ot.a.QAppProtoErrCode.EC_OK ? (e.data = null, wn.once(kn.TAG.PLAYER_COMPLEX, e)) : void 0
                    })
                }, t.prototype.matchRoom = function(e, t) {
                    var n = this;
                    bn.instance.matchRoom(e, function(e) {
                        n.roomUtil.saveRoomInfo(e), t && t(e)
                    })
                }, t.prototype.cancelPlayerMatch = function(e, t) {
                    bn.instance.cancelMatch(e, function(e) {
                        e.code === et.c.EC_OK && (wn.removeCallbacksByTag(kn.TAG.PLAYER_COMPLEX), wn.removeCallbacksByTag(kn.TAG.PLAYER_SIMPLE)), t && t(e)
                    })
                }, t.prototype.startFrameSync = function(e, t) {
                    this.roomUtil.activeFrame(), bn.instance.startFrameSync(t)
                }, t.prototype.stopFrameSync = function(e, t) {
                    this.roomUtil.activeFrame(), bn.instance.stopFrameSync(t)
                }, t.prototype.sendFrame = function(e, t) {
                    this.roomUtil.activeFrame(), bn.instance.sendFrame(e, t)
                }, t.prototype.requestFrame = function(e, t) {
                    this.roomUtil.activeFrame(), bn.instance.requestFrame(e, function(e) {
                        e.data.frames.forEach(function(e) {
                            e.items.forEach(function(e) {
                                e.data = "object" == typeof e.data ? e.data : JSON.parse(e.data)
                            })
                        }), t && t(e)
                    })
                }, t.prototype.retryAutoRequestFrame = function() {
                    this.roomBroadcast.frameBroadcast.retryFill(this)
                }, t.prototype.sendToClient = function(e, t) {
                    var n = e.recvPlayerList;
                    e.recvType === et.b.RecvType.ROOM_ALL ? n = this.roomInfo.playerList.map(function(e) {
                        return e.id
                    }) : e.recvType === et.b.RecvType.ROOM_OTHERS && (n = this.roomInfo.playerList.filter(function(e) {
                        return e.id !== et.l.playerId
                    }).map(function(e) {
                        return e.id
                    }));
                    var o = {
                        recvType: void 0,
                        recvPlayerList: n,
                        msg: e.msg
                    };
                    bn.instance.sendToClient(o, this.roomInfo.id, t)
                }, t.prototype.sendToGameSvr = function(e, t) {
                    bn.instance.sendToGameSvr(e, this.roomInfo.id, t)
                }, t
            }(Bn),
            xn = function() {
                function e() {}
                return e.isMe = function(e) {
                    return et.l.playerId === e
                }, Object.defineProperty(e, "isInited", {
                    get: function() {
                        return bn.instance.isInited()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.init = function(e, t, n) {
                    bn.instance = new bn(e, t), bn.instance.init(n)
                }, e.add = function(e) {
                    e.roomUtil.initBroadcast(), bn.instance.bindResponses(e.roomBroadcast)
                }, e.remove = function(e) {
                    bn.instance.unbindResponses(e.roomBroadcast)
                }, e.clear = function() {
                    bn.instance.clearResponses()
                }, e
            }()
    }, function(e) {
        e.exports = {
            nested: {
                lagame: {
                    nested: {
                        ClientSendServerReqWrap1: {
                            fields: {
                                version: {
                                    type: "string",
                                    id: 1
                                },
                                appName: {
                                    type: "string",
                                    id: 2
                                },
                                cmd: {
                                    type: "string",
                                    id: 3
                                },
                                seq: {
                                    type: "string",
                                    id: 4
                                },
                                clientIp: {
                                    type: "string",
                                    id: 5
                                },
                                serviceIp: {
                                    type: "string",
                                    id: 6
                                },
                                business: {
                                    type: "string",
                                    id: 7
                                },
                                authKey: {
                                    type: "string",
                                    id: 8
                                },
                                authType: {
                                    type: "uint32",
                                    id: 9
                                },
                                authIp: {
                                    type: "string",
                                    id: 10
                                },
                                gameId: {
                                    type: "string",
                                    id: 11
                                },
                                uid: {
                                    type: "uint64",
                                    id: 12
                                },
                                playerId: {
                                    type: "string",
                                    id: 13
                                },
                                body: {
                                    type: "bytes",
                                    id: 14
                                }
                            }
                        },
                        ServerSendClientBstWrap1: {
                            fields: {
                                version: {
                                    type: "string",
                                    id: 1
                                },
                                appName: {
                                    type: "string",
                                    id: 2
                                },
                                cmd: {
                                    type: "string",
                                    id: 3
                                },
                                seq: {
                                    type: "string",
                                    id: 4
                                },
                                clientIp: {
                                    type: "string",
                                    id: 5
                                },
                                serviceIp: {
                                    type: "string",
                                    id: 6
                                },
                                business: {
                                    type: "string",
                                    id: 7
                                },
                                authKey: {
                                    type: "string",
                                    id: 8
                                },
                                authType: {
                                    type: "uint32",
                                    id: 9
                                },
                                authIp: {
                                    type: "string",
                                    id: 10
                                },
                                gameId: {
                                    type: "string",
                                    id: 11
                                },
                                uid: {
                                    type: "uint64",
                                    id: 12
                                },
                                playerId: {
                                    type: "string",
                                    id: 13
                                },
                                body: {
                                    type: "bytes",
                                    id: 14
                                }
                            }
                        },
                        ClientSendServerRspWrap1: {
                            fields: {
                                seq: {
                                    type: "string",
                                    id: 1
                                },
                                errCode: {
                                    type: "int32",
                                    id: 2
                                },
                                errMsg: {
                                    type: "string",
                                    id: 3
                                },
                                body: {
                                    type: "bytes",
                                    id: 4
                                }
                            }
                        },
                        ClientSendServerReqWrap2: {
                            fields: {
                                cmd: {
                                    type: "ClientSendServerReqWrap2Cmd",
                                    id: 1
                                },
                                body: {
                                    type: "bytes",
                                    id: 2
                                }
                            }
                        },
                        ClientSendServerRspWrap2: {
                            fields: {
                                body: {
                                    type: "bytes",
                                    id: 1
                                }
                            }
                        },
                        ConnectionType: {
                            values: {
                                COMMON: 0,
                                RELAY: 1
                            }
                        },
                        HeartBeatReq: {
                            fields: {
                                conType: {
                                    type: "ConnectionType",
                                    id: 1
                                },
                                routeId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        HeartBeatRsp: {
                            fields: {}
                        },
                        ServerSendClientBstWrap2: {
                            fields: {
                                type: {
                                    type: "ServerSendClientBstWrap2Type",
                                    id: 1
                                },
                                msg: {
                                    type: "bytes",
                                    id: 2
                                }
                            }
                        },
                        NOUSEServerSendClientBstRspWrap2: {
                            fields: {}
                        },
                        CheckLoginReq: {
                            fields: {
                                token: {
                                    type: "string",
                                    id: 1
                                },
                                routeId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        CheckLoginRsp: {
                            fields: {}
                        },
                        ServerSendClientBstWrap2Type: {
                            values: {
                                E_PUSH_TYPE_TEST: 0,
                                E_PUSH_TYPE_RELAY: 1,
                                E_PUSH_TYPE_GAMESVR: 2,
                                E_PUSH_TYPE_JOIN_ROOM: 100,
                                E_PUSH_TYPE_LEAVE_ROOM: 101,
                                E_PUSH_TYPE_DISMISS_ROOM: 102,
                                E_PUSH_TYPE_REMOVE_PLAYER: 103,
                                E_PUSH_TYPE_MODIFY_ROOM_PROPERTY: 104,
                                E_PUSH_TYPE_NETWORK_STATE: 105,
                                E_PUSH_TYPE_ROOM_CHAT: 106,
                                E_PUSH_TYPE_PLAYER_STATE: 107,
                                E_PUSH_TYPE_START_GAME: 108,
                                E_PUSH_TYPE_STOP_GAME: 109,
                                E_PUSH_TYPE_CREATE_ROOM: 110,
                                E_PUSH_TYPE_DESTROY_ROOM: 111,
                                E_PUSH_TYPE_MATCH_SUCCESS: 200,
                                E_PUSH_TYPE_MATCH_TIMEOUT: 201
                            }
                        },
                        PushBodyType: {
                            fields: {
                                pushMsg: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        ClientSendServerReqWrap2Cmd: {
                            values: {
                                E_CMD_INVALID: 0,
                                E_CMD_HEART_BEAT_REQ: 100,
                                E_CMD_CHECK_LOGIN_REQ: 101,
                                E_CMD_LOGIN_TO_ROOM_REQ: 102,
                                E_CMD_FORWARD_TO_RELAY_REQ: 103,
                                E_CMD_LOGIN_REQ: 1e3,
                                E_CMD_LOGOUT_REQ: 1001,
                                E_CMD_AUTH_REQ: 1002,
                                E_CMD_QUERY_BY_PLAYER_ID_REQ: 1003,
                                E_CMD_QUERY_BY_GAME_ID_REQ: 1004,
                                E_CMD_GET_ROOM_DETAIL_REQ: 2001,
                                E_CMD_JOIN_ROOM_REQ: 2002,
                                E_CMD_QUIT_ROOM_REQ: 2003,
                                E_CMD_CREATE_ROOM_REQ: 2004,
                                E_CMD_DESTORY_ROOM_REQ: 2005,
                                E_CMD_REMOVE_MEMBER_REQ: 2006,
                                E_CMD_CHANGE_ROOM_PROPERTIS_REQ: 2007,
                                E_CMD_DISSMISS_ROOM_REQ: 2008,
                                E_CMD_CHANGE_PLAYER_STATE_REQ: 2009,
                                E_CMD_CHANGE_PLAYER_NETWORK_STATE_REQ: 2010,
                                E_CMD_ROOM_CHAT_REQ: 2011,
                                E_CMD_START_FRAME_SYNC_REQ: 2012,
                                E_CMD_STOP_FRAME_SYNC_REQ: 2013,
                                E_CMD_GET_ROOM_LIST_REQ: 2014,
                                E_CMD_MATCH_ROOM_SIMPLE_REQ: 3001,
                                E_CMD_MATCH_USER_SIMPLE_REQ: 3002,
                                E_CMD_MATCH_CANCEL_MATCH_REQ: 3003,
                                E_CMD_MATCH_ROOM_COMPLEX_REQ: 3004,
                                E_CMD_MATCH_PLAYER_COMPLEX_REQ: 3005,
                                E_CMD_RELAY_SEND_FRAME_REQ: 4e3,
                                E_CMD_RELAY_REQUEST_FRAME_REQ: 4001,
                                E_CMD_RELAY_CLIENT_SENDTO_GAMESVR_REQ: 4002,
                                E_CMD_RELAY_CLIENT_RECV_FROM_GAMESVR_REQ: 4003,
                                E_CMD_NOTIFY_JOIN_ROOM: 5e3,
                                E_CMD_NOTIFY_QUIT_ROOM: 5001,
                                E_CMD_NOTIFY_DESTORY_ROOM: 5002,
                                E_CMD_NOTIFY_NET_STATE: 5003,
                                E_CMD_NOTIFY_KICK_MEMBER: 5004,
                                E_CMD_GET_ADDR_BY_ROUTER_ID_REQ: 6e3
                            }
                        },
                        QAppProtoErrCode: {
                            values: {
                                EC_OK: 0,
                                EC_REQ_BAD_PKG: 1,
                                EC_CMD_INVALID: 2,
                                EC_PARAMS_INVALID: 3,
                                EC_INNER_ERROR: 4,
                                EC_TIME_OUT: 5,
                                EC_SERVER_BUSY: 6,
                                EC_NO_RIGHT: 7,
                                EC_ACCESS_CMD_INVALID_ERR: 200,
                                EC_ACCESS_CMD_GET_TOKEN_ERR: 201,
                                EC_ACCESS_CMD_TOKEN_PRE_EXPIRE: 202,
                                EC_ACCESS_CMD_INVALID_TOKEN: 203,
                                EC_ACCESS_PUSH_SERIALIZE_ERR: 204,
                                EC_ACCESS_LOGIN_BODY_PARSE_ERR: 205,
                                EC_ACCESS_CONN_ERR: 206,
                                EC_ACCESS_GET_RS_IP_ERR: 207,
                                EC_ACCESS_ADD_COMM_CONN_ERR: 208,
                                EC_ACCESS_ADD_HEART_CONN_ERR: 209,
                                EC_ACCESS_ADD_RELAY_CONN_ERR: 210,
                                EC_ACCESS_HEART_BODY_PARSE_ERR: 211,
                                EC_ACCESS_GET_COMM_CONNECT_ERR: 212,
                                EC_ACCESS_GET_RELAY_CONNECT_ERR: 213,
                                EC_ACCESS_ACCESS_INFO_EMPTY: 214,
                                EC_ACCESS_PLAYER_DUPLICATE_LOGIN: 215,
                                EC_PLAYER_GAME_NOT_EXIST: 1e4,
                                EC_PLAYER_SECRET_KEY_FAIL: 10001,
                                EC_PLAYER_SIGN_ERR: 10002,
                                EC_PLAYER_DUPLICATE_REQ: 10003,
                                EC_PLAYER_TIMESTAMP_INVALID: 10004,
                                EC_PLAYER_QUERY_PLAYER_FAIL: 10005,
                                EC_PLAYER_ADD_PLAYER_FAIL: 10006,
                                EC_PLAYER_QUERY_GAME_FAIL: 10007,
                                EC_PLAYER_RECORD_NUM_ERR: 10008,
                                EC_PLAYER_GET_TOKEN_FAIL: 10009,
                                EC_PLAYER_TOKEN_NOT_EXIST: 10010,
                                EC_PLAYER_TOKEN_INVALID: 10011,
                                EC_PLAYER_CLEAR_TOKEN_FAIL: 10012,
                                EC_PLAYER_LOCK_FAIL: 10013,
                                EC_PLAYER_UNLOCK_FAIL: 10014,
                                EC_PLAYER_SAVE_TOKEN_FAIL: 10015,
                                EC_ROOM_CREATE_NO_PERMISSION: 2e4,
                                EC_ROOM_DESTORY_NO_PERMISSION: 20001,
                                EC_ROOM_JOIN_NO_PERMISSION: 20002,
                                EC_ROOM_REMOVE_PLAYER_NO_PERMISSION: 20003,
                                EC_ROOM_MODIFY_PROPERTIES_NO_PEMISSION: 20004,
                                EC_ROOM_DISSMISS_NO_PERMISSION: 20005,
                                EC_ROOM_REMOVE_SELF_NO_PERMISSION: 20006,
                                EC_ROOM_CHECK_LOGIN_SESSION_ERR: 20007,
                                EC_ROOM_PLAYER_ALREADY_IN_ROOM: 20010,
                                EC_ROOM_PLAYER_NOT_IN_ROOM: 20011,
                                EC_ROOM_PLAYERS_EXCEED_LIMIT: 20012,
                                EC_ROOM_JOIN_NOT_ALLOW: 20013,
                                EC_ROOM_MAX_PLAYERS_INVALID: 20014,
                                EC_ROOM_CREATE_FAIL: 20015,
                                EC_ROOM_PLAYER_OFFLINE: 20016,
                                EC_ROOM_PARAM_PAGE_INVALID: 20017,
                                EC_ROOM_GET_PLAYER_INFO_ERR: 20050,
                                EC_ROOM_GET_ROOM_INFO_ERR: 20051,
                                EC_ROOM_REMOVE_REDIS_PLAYER_ROOM_MATCH_ERR: -20052,
                                EC_ROOM_REMOVE_REDIS_ROOM_INFO_ERR: -20053,
                                EC_ROOM_REDIS_UPDATE_ERR: -20054,
                                EC_ROOM_REDIS_GET_LOCK_ERR: -20055,
                                EC_ROOM_REDIS_CHECK_LOCK_ERR: -20056,
                                EC_ROOM_REDIS_DEL_LOCK_ERR: -20057,
                                EC_ROOM_QUERY_PLAYER_ERR: 20060,
                                EC_ROOM_QUERY_GAME_ERR: 20061,
                                EC_ROOM_PLAYER_INFO_NOT_EXIST: 20062,
                                EC_ROOM_GAME_INFO_NOT_EXIST: 20063,
                                EC_ROOM_HISTORY_INFO_INSERT_ERR: -20064,
                                EC_ROOM_REGION_INFO_NOT_EXIST: 20065,
                                EC_ROOM_QUERY_REGION_ERR: 20066,
                                EC_ROOM_INFO_UNEXIST: 20080,
                                EC_ROOM_ALLOCATE_RELAYSVR_IP_PORT_ERR: 20090,
                                EC_ROOM_INVALID_PARAMS_TEAM_ID: 20100,
                                EC_ROOM_TEAM_MEMBER_LIMIT_EXCEED: 20101,
                                EC_MATCH_NO_ROOM: 3e4,
                                EC_MATCH_TIMEOUT: 30001,
                                EC_MATCH_LOGIC_ERR: 30002,
                                EC_MATCH_ERR: 30010,
                                EC_MATCH_PLAYER_IS_IN_MATCH: 30011,
                                EC_MATCH_PLAYER_NOT_IN_MATCH: 30012,
                                EC_MATCH_GET_MATCH_INFO_ERR: 30013,
                                EC_MATCH_UPDATE_MATCH_INFO_ERR: 30014,
                                EC_MATCH_CANCEL_FAILED: 30015,
                                EC_MATCH_GET_PLAYER_LIST_INFO_ERR: 30016,
                                EC_MATCH_CREATE_ROOM_ERR: 30041,
                                EC_MATCH_JOIN_ROOM_ERR: 30042,
                                EC_MATCH_QUERY_PLAYER_ERR: 30100,
                                EC_MATCH_PLAYER_INFO_NOT_EXIST: 30101,
                                EC_MATCH_QUERY_GAME_ERR: 30102,
                                EC_MATCH_GAME_INFO_NOT_EXIST: 30103,
                                EC_MATCH_QUERY_REGION_ERR: 30104,
                                EC_MATCH_REGION_INFO_NOT_EXIST: 30105,
                                EC_MATCH_TEAM_FAIL: 30106,
                                EC_MATCH_PLAY_RULE_NOT_RUNNING: 30107,
                                EC_MATCH_PLAY_ATTR_NOT_FOUND: 30108,
                                EC_MATCH_PLAY_RULE_NOT_FOUND: 30109,
                                EC_MATCH_PLAY_RULE_ATTR_SEGMENT_NOT_FOUND: 30110,
                                EC_MATCH_PLAY_RULE_FUNC_ERR: 30111,
                                EC_MATCH_GET_PLAYER_ATTR_FAIL: 30112,
                                EC_MATCH_GET_TEAM_ATTR_FAIL: 30113,
                                EC_MATCH_INNER_LOGIC_ERR: -30150,
                                EC_RELAY_ALREADY_EXISTS: 4e4,
                                EC_RELAY_NOT_EXISTS: 40001,
                                EC_RELAY_DATA_EXCEED_LIMITED: 40002,
                                EC_RELAY_MEMBER_ALREADY_EXISTS: 40003,
                                EC_RELAY_MEMBER_NOT_EXISTS: 40004,
                                EC_RELAY_STATE_INVALID: 40005,
                                EC_RELAY_INVALID_FRAME_RATE: 40006,
                                EC_RELAY_SET_FRAME_RATE_FORBIDDEN: 40007,
                                EC_RELAY_NO_MEMBERS: 40008,
                                EC_RELAY_GAMESVR_SERVICE_NOT_OPEN: 40009,
                                EC_RELAY_REQ_POD_FAIL: 40010,
                                EC_RELAY_LOGIC_ERROR: 40014,
                                EC_RELAY_HKV_CACHE_ERROR: 40015,
                                EC_RELAY_REDIS_CACHE_ERROR: 40016,
                                EC_RELAY_CACHE_ERROR: 40017,
                                EC_RELAY_NOTIFY_RELAYWORKER_FAIL: 40018,
                                EC_RELAY_RESET_RELAY_ROOM_FAIL: 40019,
                                EC_RELAY_CLEAN_RELAY_ROOM_FAIL: 40020,
                                EC_RELAY_NO_PERMISSION: 40100,
                                EC_RELAY_NOTIFY_GAMESVR_FAIL: 40200,
                                EC_RELAY_FORWARD_TO_GAMESVR_FAIL: 40201,
                                EC_RELAY_FORWARD_TO_CLIENT_FAIL: 40202,
                                EC_INVALID_PARAMS: 6e4,
                                EC_INVALID_PARAMS_PLAY_MODE_VERSION: 60001,
                                EC_INVALID_PARAMS_PLAY_MODE_RULETYPE: 60002,
                                EC_INVALID_PARAMS_PLAY_MODE_EXPRESSION: 60003,
                                EC_INVALID_PARAMS_PLAY_MODE_TEAM: 60004,
                                EC_INVALID_PARAMS_MSGQ_ENCODE: 60020,
                                EC_INVALID_PARAMS_MSGQ_DECODE: 60021,
                                EC_INVALID_PARAMS_GAME_ID: 61e3,
                                EC_INVALID_PARAMS_PLAYER_INFO: 61001,
                                EC_INVALID_PARAMS_MAX_PLAYERS: 61002,
                                EC_INVALID_PARAMS_ROOM_TYPE: 61003,
                                EC_INVALID_PARAMS_PLAYER_ID: 61004,
                                EC_INVALID_PARAMS_MATCH_TYPE: 61005,
                                EC_INVALID_PARAMS_MATCH_CODE: 61006,
                                EC_INVALID_PARAMS_OPEN_ID: 61007,
                                EC_INVALID_PARAMS_PLATFORM: 61008,
                                EC_INVALID_PARAMS_TIMESTAMP: 61009,
                                EC_INVALID_PARAMS_SIGN: 61010,
                                EC_INVALID_PARAMS_NONCE: 61011,
                                EC_INVALID_PARAMS_TOKEN: 61012,
                                EC_INVALID_PARAMS_NETWORK_STATE: 61013,
                                EC_INVALID_PARAMS_ROOM_NAME: 61014,
                                EC_INVALID_PARAMS_CREATE_ROOM_TYPE: 61015,
                                EC_INVALID_PARAMS_DEVICE_ID: 61016,
                                EC_MYSPP_SYSTEM_ERR: -1e3,
                                EC_REDIS_KEY_NOT_EXIST: -66e3,
                                EC_REDIS_SET_OP_ERR: -66001,
                                EC_REDIS_GET_OP_ERR: -66002,
                                EC_REDIS_DEL_OP_ERR: -66003,
                                EC_REDIS_EXPIRE_OP_ERR: -66004,
                                EC_REDIS_LOCK_OP_ERR: -66005,
                                EC_REDIS_LOCK_ALREADY_EXIST: -66006,
                                EC_REDIS_LIST_OP_ERR: -66020,
                                EC_REDIS_LIST_POP_EMPTY: -66021,
                                EC_MYSQL_NO_ROW_FOUND: -66100,
                                EC_MYSQL_MULTI_ROW_FOUND: -66101,
                                EC_MYSQL_INSERT_FAIL: -66102,
                                EC_MYSQL_DELETE_FAIL: -66103,
                                EC_MYSQL_UPDATE_FAIL: -66104,
                                EC_MYSQL_QUERYS_FAIL: -66105,
                                EC_PB_SERIALIZE_TO_STR_ERR: -66200,
                                EC_PB_PARSE_FROM_STR_ERR: -66201,
                                EC_DATA_FORMAT_ERR: -66210,
                                EC_JSON_FORMAT_ERR: -66211,
                                EC_JSON_PLAY_MODE_FORMAT_ERR: -66212,
                                EC_JSON_PLAY_MODE_PARISE_ERR: -66213,
                                EC_INVALID_PARAMS_RECORE_ID: -66601,
                                EC_HASHID_ERR: -66700,
                                EC_HASHID_ENCODE_ERR: -66701,
                                EC_HASHID_DECODE_ERR: -66702,
                                EC_CONF_ROOM_ID_BUCKET_ERR: -66801,
                                EC_SDK_SEND_FAIL: 90001,
                                EC_SDK_UNINIT: 90002,
                                EC_SDK_RES_TIMEOUT: 90003,
                                EC_SDK_NO_LOGIN: 90004,
                                EC_SDK_NO_CHECK_LOGIN: 90005,
                                EC_SDK_SOCKET_ERROR: 90006,
                                EC_SDK_SOCKET_CLOSE: 90007,
                                EC_SDK_NO_ROOM: 90008
                            }
                        },
                        LoginReq: {
                            fields: {
                                gameId: {
                                    type: "string",
                                    id: 1
                                },
                                openId: {
                                    type: "string",
                                    id: 2
                                },
                                platform: {
                                    type: "uint64",
                                    id: 3
                                },
                                channel: {
                                    type: "uint64",
                                    id: 4
                                },
                                nonce: {
                                    type: "uint64",
                                    id: 5
                                },
                                timestamp: {
                                    type: "uint64",
                                    id: 6
                                },
                                sign: {
                                    type: "string",
                                    id: 7
                                },
                                deviceId: {
                                    type: "string",
                                    id: 8
                                },
                                mac: {
                                    type: "string",
                                    id: 9
                                },
                                imei: {
                                    type: "string",
                                    id: 10
                                }
                            }
                        },
                        LoginRsp: {
                            fields: {
                                token: {
                                    type: "string",
                                    id: 1
                                },
                                playerId: {
                                    type: "string",
                                    id: 2
                                },
                                expireTime: {
                                    type: "uint64",
                                    id: 3
                                },
                                sdkConfig: {
                                    type: "SdkConfig",
                                    id: 4
                                }
                            }
                        },
                        SdkConfig: {
                            fields: {
                                pingInterval: {
                                    type: "uint32",
                                    id: 1
                                },
                                reportInterval: {
                                    type: "uint32",
                                    id: 2
                                }
                            }
                        },
                        LogoutReq: {
                            fields: {}
                        },
                        LogoutRsp: {
                            fields: {}
                        },
                        StartFrameSyncReq: {
                            fields: {}
                        },
                        StartFrameSyncRsp: {
                            fields: {}
                        },
                        StopFrameSyncReq: {
                            fields: {}
                        },
                        StopFrameSyncRsp: {
                            fields: {}
                        },
                        FrameItem: {
                            fields: {
                                playerId: {
                                    type: "string",
                                    id: 1
                                },
                                data: {
                                    type: "string",
                                    id: 2
                                },
                                timestamp: {
                                    type: "uint64",
                                    id: 3
                                }
                            }
                        },
                        SendFrameReq: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                item: {
                                    type: "FrameItem",
                                    id: 2
                                }
                            }
                        },
                        SendFrameRsp: {
                            fields: {}
                        },
                        FrameExtInfo: {
                            fields: {
                                seed: {
                                    type: "uint64",
                                    id: 1
                                }
                            }
                        },
                        Frame: {
                            fields: {
                                id: {
                                    type: "uint64",
                                    id: 1
                                },
                                items: {
                                    rule: "repeated",
                                    type: "FrameItem",
                                    id: 2
                                },
                                ext: {
                                    type: "FrameExtInfo",
                                    id: 3
                                }
                            }
                        },
                        RequestFrameReq: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                beginFrameId: {
                                    type: "uint64",
                                    id: 2
                                },
                                endFrameId: {
                                    type: "uint64",
                                    id: 3
                                }
                            }
                        },
                        RequestFrameRsp: {
                            fields: {
                                frames: {
                                    rule: "repeated",
                                    type: "Frame",
                                    id: 1
                                }
                            }
                        },
                        NetworkState: {
                            values: {
                                COMMON_OFFLINE: 0,
                                COMMON_ONLINE: 1,
                                RELAY_OFFLINE: 2,
                                RELAY_ONLINE: 3
                            }
                        },
                        PlayerInfo: {
                            fields: {
                                id: {
                                    type: "string",
                                    id: 1
                                },
                                name: {
                                    type: "string",
                                    id: 2
                                },
                                teamId: {
                                    type: "string",
                                    id: 3
                                },
                                customPlayerStatus: {
                                    type: "uint64",
                                    id: 4
                                },
                                customProfile: {
                                    type: "string",
                                    id: 5
                                },
                                commonNetworkState: {
                                    type: "NetworkState",
                                    id: 6
                                },
                                relayNetworkState: {
                                    type: "NetworkState",
                                    id: 7
                                }
                            }
                        },
                        TeamInfo: {
                            fields: {
                                id: {
                                    type: "string",
                                    id: 1
                                },
                                name: {
                                    type: "string",
                                    id: 2
                                },
                                minPlayers: {
                                    type: "uint32",
                                    id: 3
                                },
                                maxPlayers: {
                                    type: "uint32",
                                    id: 4
                                }
                            }
                        },
                        CreateRoomType: {
                            values: {
                                COMMON_CREATE: 0,
                                MATCH_CREATE: 1
                            }
                        },
                        FrameSyncState: {
                            values: {
                                STOP: 0,
                                START: 1
                            }
                        },
                        RoomInfo: {
                            fields: {
                                id: {
                                    type: "string",
                                    id: 1
                                },
                                name: {
                                    type: "string",
                                    id: 2
                                },
                                type: {
                                    type: "string",
                                    id: 3
                                },
                                createType: {
                                    type: "CreateRoomType",
                                    id: 4
                                },
                                maxPlayers: {
                                    type: "uint64",
                                    id: 5
                                },
                                owner: {
                                    type: "string",
                                    id: 6
                                },
                                isPrivate: {
                                    type: "bool",
                                    id: 9
                                },
                                customProperties: {
                                    type: "string",
                                    id: 10
                                },
                                playerList: {
                                    rule: "repeated",
                                    type: "PlayerInfo",
                                    id: 11
                                },
                                teamList: {
                                    rule: "repeated",
                                    type: "TeamInfo",
                                    id: 13
                                },
                                frameSyncState: {
                                    type: "FrameSyncState",
                                    id: 14
                                },
                                frameRate: {
                                    type: "uint32",
                                    id: 15
                                },
                                routeId: {
                                    type: "string",
                                    id: 16
                                },
                                createTime: {
                                    type: "uint64",
                                    id: 17
                                },
                                startGameTime: {
                                    type: "uint64",
                                    id: 18
                                }
                            }
                        },
                        CreateRoomReq: {
                            fields: {
                                roomName: {
                                    type: "string",
                                    id: 1
                                },
                                roomType: {
                                    type: "string",
                                    id: 2
                                },
                                createType: {
                                    type: "CreateRoomType",
                                    id: 3
                                },
                                maxPlayers: {
                                    type: "uint64",
                                    id: 4
                                },
                                isPrivate: {
                                    type: "bool",
                                    id: 7
                                },
                                customProperties: {
                                    type: "string",
                                    id: 8
                                },
                                playerInfo: {
                                    type: "PlayerInfo",
                                    id: 9
                                },
                                region: {
                                    type: "string",
                                    id: 11
                                },
                                owner: {
                                    type: "string",
                                    id: 12
                                },
                                playerList: {
                                    rule: "repeated",
                                    type: "PlayerInfo",
                                    id: 13
                                },
                                teamList: {
                                    rule: "repeated",
                                    type: "TeamInfo",
                                    id: 14
                                }
                            }
                        },
                        CreateRoomRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        JoinRoomType: {
                            values: {
                                COMMON_JOIN: 0,
                                MATCH_JOIN: 1
                            }
                        },
                        JoinRoomReq: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                teamId: {
                                    type: "string",
                                    id: 2
                                },
                                joinType: {
                                    type: "JoinRoomType",
                                    id: 3
                                },
                                playerInfo: {
                                    type: "PlayerInfo",
                                    id: 4
                                }
                            }
                        },
                        JoinRoomRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        LeaveRoomReq: {
                            fields: {}
                        },
                        LeaveRoomRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        DismissRoomReq: {
                            fields: {}
                        },
                        DismissRoomRsp: {
                            fields: {}
                        },
                        ChangeRoomReq: {
                            fields: {
                                roomName: {
                                    type: "string",
                                    id: 1
                                },
                                owner: {
                                    type: "string",
                                    id: 2
                                },
                                isPrivate: {
                                    type: "bool",
                                    id: 5
                                },
                                customProperties: {
                                    type: "string",
                                    id: 6
                                }
                            }
                        },
                        ChangeRoomRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 4
                                }
                            }
                        },
                        RemovePlayerReq: {
                            fields: {
                                removePlayerId: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        },
                        RemovePlayerRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        GetRoomByRoomIdReq: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        GetRoomByRoomIdRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        SendToClientReq: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                recvPlayerList: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 2
                                },
                                msg: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        },
                        SendToClientRsp: {
                            fields: {}
                        },
                        ChangeCustomPlayerStatusReq: {
                            fields: {
                                customPlayerStatus: {
                                    type: "uint64",
                                    id: 1
                                }
                            }
                        },
                        ChangeCustomPlayerStatusRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        ChangePlayerNetworkStateReq: {
                            fields: {
                                networkState: {
                                    type: "NetworkState",
                                    id: 1
                                }
                            }
                        },
                        ChangePlayerNetworkStateRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        GetRoomListReq: {
                            fields: {
                                gameId: {
                                    type: "string",
                                    id: 1
                                },
                                pageNo: {
                                    type: "uint32",
                                    id: 2
                                },
                                pageSize: {
                                    type: "uint32",
                                    id: 3
                                }
                            }
                        },
                        GetRoomListRsp: {
                            fields: {
                                gameId: {
                                    type: "string",
                                    id: 1
                                },
                                roomList: {
                                    rule: "repeated",
                                    type: "RoomInfo",
                                    id: 2
                                },
                                total: {
                                    type: "uint64",
                                    id: 3
                                }
                            }
                        },
                        MatchRoomSimpleReq: {
                            fields: {
                                roomType: {
                                    type: "string",
                                    id: 1
                                },
                                maxPlayers: {
                                    type: "uint64",
                                    id: 2
                                },
                                playerInfo: {
                                    type: "PlayerInfo",
                                    id: 3
                                }
                            }
                        },
                        MatchRoomSimpleRsp: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        MatchRoomComplexReq: {
                            fields: {}
                        },
                        MatchRoomComplexRsp: {
                            fields: {}
                        },
                        MatchPlayersSimpleReq: {
                            fields: {}
                        },
                        MatchPlayersSimpleRsp: {
                            fields: {}
                        },
                        MatchStatus: {
                            values: {
                                PENDING: 0,
                                MATCHING: 1,
                                SUCCESS: 3,
                                TIMEOUT: 4
                            }
                        },
                        MatchAttribute: {
                            fields: {
                                name: {
                                    type: "string",
                                    id: 1
                                },
                                value: {
                                    type: "int32",
                                    id: 2
                                }
                            }
                        },
                        MatchPlayerInfo: {
                            fields: {
                                id: {
                                    type: "string",
                                    id: 1
                                },
                                name: {
                                    type: "string",
                                    id: 2
                                },
                                customPlayerStatus: {
                                    type: "uint64",
                                    id: 3
                                },
                                customProfile: {
                                    type: "string",
                                    id: 4
                                },
                                matchAttributes: {
                                    rule: "repeated",
                                    type: "MatchAttribute",
                                    id: 5
                                },
                                matchStatus: {
                                    type: "MatchStatus",
                                    id: 6
                                },
                                teamId: {
                                    type: "string",
                                    id: 7
                                },
                                region: {
                                    type: "string",
                                    id: 8
                                },
                                teamLeader: {
                                    type: "string",
                                    id: 9
                                }
                            }
                        },
                        MatchTeamInfo: {
                            fields: {
                                teamId: {
                                    type: "string",
                                    id: 1
                                },
                                teamName: {
                                    type: "string",
                                    id: 2
                                },
                                teamLeader: {
                                    type: "string",
                                    id: 3
                                },
                                members: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 4
                                },
                                matchAttributes: {
                                    rule: "repeated",
                                    type: "MatchAttribute",
                                    id: 5
                                }
                            }
                        },
                        MatchPlayersReq: {
                            fields: {
                                matchCode: {
                                    type: "string",
                                    id: 2
                                },
                                playerInfo: {
                                    type: "MatchPlayerInfo",
                                    id: 3
                                }
                            }
                        },
                        MatchPlayersRsp: {
                            fields: {
                                matchCode: {
                                    type: "string",
                                    id: 1
                                }
                            }
                        },
                        MatchType: {
                            values: {
                                ROOM_SIMPLE: 1,
                                PLAYER_COMPLEX: 2
                            }
                        },
                        CancelPlayerMatchReq: {
                            fields: {
                                matchType: {
                                    type: "MatchType",
                                    id: 3
                                }
                            }
                        },
                        CancelPlayerMatchRsp: {
                            fields: {}
                        },
                        CreateRoomBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        DestroyRoomBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        JoinRoomBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                },
                                joinPlayerId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        LeaveRoomBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                },
                                leavePlayerId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        RemovePlayerBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                },
                                removePlayerId: {
                                    type: "string",
                                    id: 2
                                }
                            }
                        },
                        DismissRoomBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        ChangeRoomBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        RecvFromClientBst: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                sendPlayerId: {
                                    type: "string",
                                    id: 2
                                },
                                msg: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        },
                        ChangeCustomPlayerStatusBst: {
                            fields: {
                                changePlayerId: {
                                    type: "string",
                                    id: 1
                                },
                                customPlayerStatus: {
                                    type: "uint64",
                                    id: 2
                                },
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 3
                                }
                            }
                        },
                        ChangePlayerNetworkStateBst: {
                            fields: {
                                changePlayerId: {
                                    type: "string",
                                    id: 1
                                },
                                networkState: {
                                    type: "NetworkState",
                                    id: 2
                                },
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 3
                                }
                            }
                        },
                        MatchTimeoutBst: {
                            fields: {
                                matchType: {
                                    type: "MatchType",
                                    id: 1
                                },
                                errCode: {
                                    type: "int32",
                                    id: 2
                                }
                            }
                        },
                        MatchPlayersBst: {
                            fields: {
                                matchType: {
                                    type: "MatchType",
                                    id: 1
                                },
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 2
                                }
                            }
                        },
                        StartFrameSyncBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        StopFrameSyncBst: {
                            fields: {
                                roomInfo: {
                                    type: "RoomInfo",
                                    id: 1
                                }
                            }
                        },
                        RecvFrameBst: {
                            fields: {
                                frame: {
                                    type: "Frame",
                                    id: 1
                                }
                            }
                        },
                        GameSvrForwardType: {
                            values: {
                                E_GS_FORWARDTYPE_DEFAULT: 0,
                                E_GS_FORWARDTYPE_NOTIFY_CONNECTION: 1,
                                E_GS_FORWARDTYPE_NOTIFY_ROOM_EVENT: 2,
                                E_GS_FORWARDTYPE_NOTIFY_COM_EVENT: 3,
                                E_GS_FORWARDTYPE_CLIENT_SENDTO_GAMESVR: 4
                            }
                        },
                        GameSvrCommunication: {
                            fields: {
                                type: {
                                    type: "GameSvrForwardType",
                                    id: 1
                                },
                                body: {
                                    type: "bytes",
                                    id: 2
                                }
                            }
                        },
                        NotifyRelayConnectionReq: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                ip: {
                                    type: "string",
                                    id: 2
                                },
                                port: {
                                    type: "uint32",
                                    id: 3
                                }
                            }
                        },
                        NotifyRoomEventReq: {
                            fields: {
                                cmd: {
                                    type: "ServerSendClientBstWrap2Type",
                                    id: 1
                                },
                                msg: {
                                    type: "bytes",
                                    id: 2
                                }
                            }
                        },
                        SendToGameSvrReq: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                playerId: {
                                    type: "string",
                                    id: 2
                                },
                                data: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        },
                        SendToGameSvrRsp: {
                            fields: {}
                        },
                        RecvFromGameSvrBst: {
                            fields: {
                                roomId: {
                                    type: "string",
                                    id: 1
                                },
                                playerIdList: {
                                    rule: "repeated",
                                    type: "string",
                                    id: 2
                                },
                                data: {
                                    type: "string",
                                    id: 3
                                }
                            }
                        },
                        ClientRecvFromGameSvrRsp: {
                            fields: {}
                        }
                    }
                }
            }
        }
    }, function(e, t, n) {
        "use strict";
        var o = 0,
            r = Math.pow(2, 32) - 1,
            _ = {
                init: function(e) {
                    o = e
                },
                random: function() {
                    var e = (1103515245 * o + 123456789) % r;
                    return o = e, e / r
                }
            };
        t.a = _
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            function(e) {
                var o = n(9),
                    r = n(4),
                    _ = n(3),
                    i = n(6),
                    s = n(11),
                    a = n(7),
                    E = n(2),
                    R = function() {
                        function e() {}
                        return e
                    }();
                R.Listener = null, R.Room = null, R.ENUM = null, R.ErrCode = null, R.RandomUtil = null, R.DebuggerLog = null, R.Player = null, R.StatCallbacks = null, R.Listener = o.a, R.Room = o.b, R.ENUM = r.a, R.ErrCode = _.a, R.RandomUtil = s.a, R.DebuggerLog = i.a, R.Player = a.a, R.StatCallbacks = E.a, (window || e).MGOBE = R, R.types = r.a, t["default"] = R
            }.call(this, n(13))
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t, n) {
        var o, r, _;
        e.exports = (o = n(5), _ = (r = o).lib.WordArray, r.enc.Base64 = {
            stringify: function(e) {
                var t = e.words,
                    n = e.sigBytes,
                    o = this._map;
                e.clamp();
                for (var r = [], _ = 0; n > _; _ += 3)
                    for (var i = (t[_ >>> 2] >>> 24 - _ % 4 * 8 & 255) << 16 | (t[_ + 1 >>> 2] >>> 24 - (_ + 1) % 4 * 8 & 255) << 8 | t[_ + 2 >>> 2] >>> 24 - (_ + 2) % 4 * 8 & 255, s = 0; 4 > s && n > _ + .75 * s; s++) r.push(o.charAt(i >>> 6 * (3 - s) & 63));
                var a = o.charAt(64);
                if (a)
                    for (; r.length % 4;) r.push(a);
                return r.join("")
            },
            parse: function(e) {
                var t = e.length,
                    n = this._map,
                    o = this._reverseMap;
                if (!o) {
                    o = this._reverseMap = [];
                    for (var r = 0; r < n.length; r++) o[n.charCodeAt(r)] = r
                }
                var i = n.charAt(64);
                if (i) {
                    var s = e.indexOf(i); - 1 !== s && (t = s)
                }
                return function(e, t, n) {
                    for (var o = [], r = 0, i = 0; t > i; i++)
                        if (i % 4) {
                            var s = n[e.charCodeAt(i - 1)] << i % 4 * 2,
                                a = n[e.charCodeAt(i)] >>> 6 - i % 4 * 2;
                            o[r >>> 2] |= (s | a) << 24 - r % 4 * 8, r++
                        }
                    return _.create(o, r)
                }(e, t, o)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, o.enc.Base64)
    }, function(e, t, n) {
        var o;
        e.exports = (o = n(5), n(16), n(17), o.HmacSHA1)
    }, function(e, t, n) {
        var o, r, _, i, s, a, E, R;
        e.exports = (o = n(5), _ = (r = o).lib, i = _.WordArray, s = _.Hasher, a = r.algo, E = [], R = a.SHA1 = s.extend({
            _doReset: function() {
                this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(e, t) {
                for (var n = this._hash.words, o = n[0], r = n[1], _ = n[2], i = n[3], s = n[4], a = 0; 80 > a; a++) {
                    if (16 > a) E[a] = 0 | e[t + a];
                    else {
                        var R = E[a - 3] ^ E[a - 8] ^ E[a - 14] ^ E[a - 16];
                        E[a] = R << 1 | R >>> 31
                    }
                    var c = (o << 5 | o >>> 27) + s + E[a];
                    c += 20 > a ? 1518500249 + (r & _ | ~r & i) : 40 > a ? 1859775393 + (r ^ _ ^ i) : 60 > a ? (r & _ | r & i | _ & i) - 1894007588 : (r ^ _ ^ i) - 899497514, s = i, i = _, _ = r << 30 | r >>> 2, r = o, o = c
                }
                n[0] = n[0] + o | 0, n[1] = n[1] + r | 0, n[2] = n[2] + _ | 0, n[3] = n[3] + i | 0, n[4] = n[4] + s | 0
            },
            _doFinalize: function() {
                var e = this._data,
                    t = e.words,
                    n = 8 * this._nDataBytes,
                    o = 8 * e.sigBytes;
                return t[o >>> 5] |= 128 << 24 - o % 32, t[14 + (o + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (o + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
            },
            clone: function() {
                var e = s.clone.call(this);
                return e._hash = this._hash.clone(), e
            }
        }), r.SHA1 = s._createHelper(R), r.HmacSHA1 = s._createHmacHelper(R), o.SHA1)
    }, function(e, t, n) {
        var o, r, _, i, s, a, E;
        e.exports = (o = n(5), _ = (r = o).lib, i = _.Base, s = r.enc, a = s.Utf8, E = r.algo, void(E.HMAC = i.extend({
            init: function(e, t) {
                e = this._hasher = new e.init, "string" == typeof t && (t = a.parse(t));
                var n = e.blockSize,
                    o = 4 * n;
                t.sigBytes > o && (t = e.finalize(t)), t.clamp();
                for (var r = this._oKey = t.clone(), _ = this._iKey = t.clone(), i = r.words, s = _.words, E = 0; n > E; E++) i[E] ^= 1549556828, s[E] ^= 909522486;
                r.sigBytes = _.sigBytes = o, this.reset()
            },
            reset: function() {
                var e = this._hasher;
                e.reset(), e.update(this._iKey)
            },
            update: function(e) {
                return this._hasher.update(e), this
            },
            finalize: function(e) {
                var t = this._hasher,
                    n = t.finalize(e);
                t.reset();
                var o = t.finalize(this._oKey.clone().concat(n));
                return o
            }
        })))
    }, function(e, t, n) {
        var o, r, _;
        r = [t], void 0 === (_ = "function" == typeof(o = function(e) {
            "use strict";

            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0;
            var n = function() {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r, _, i = "";
                    this.escapeRegExp = function(e) {
                        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                    }, this.parseInt = function(e, t) {
                        return /^(-|\+)?([0-9]+|Infinity)$/.test(e) ? parseInt(e, t) : 0 / 0
                    }, this.seps = "cfhistuCFHISTU", this.minLength = 0 < parseInt(n, 10) ? n : 0, this.salt = "string" == typeof t ? t : "", "string" == typeof o && (this.alphabet = o);
                    for (var s = 0; s !== this.alphabet.length; s++) - 1 === i.indexOf(this.alphabet.charAt(s)) && (i += this.alphabet.charAt(s));
                    if (this.alphabet = i, this.alphabet.length < 16) throw "error: alphabet must contain at least X unique characters".replace("X", 16);
                    if (-1 !== this.alphabet.search(" ")) throw "error: alphabet cannot contain spaces";
                    for (var a = 0; a !== this.seps.length; a++) {
                        var E = this.alphabet.indexOf(this.seps.charAt(a)); - 1 === E ? this.seps = this.seps.substr(0, a) + " " + this.seps.substr(a + 1) : this.alphabet = this.alphabet.substr(0, E) + " " + this.alphabet.substr(E + 1)
                    }
                    this.alphabet = this.alphabet.replace(/ /g, ""), this.seps = this.seps.replace(/ /g, ""), this.seps = this._shuffle(this.seps, this.salt), (!this.seps.length || 3.5 < this.alphabet.length / this.seps.length) && (r = Math.ceil(this.alphabet.length / 3.5)) > this.seps.length && (_ = r - this.seps.length, this.seps += this.alphabet.substr(0, _), this.alphabet = this.alphabet.substr(_)), this.alphabet = this._shuffle(this.alphabet, this.salt);
                    var R = Math.ceil(this.alphabet.length / 12);
                    this.alphabet.length < 3 ? (this.guards = this.seps.substr(0, R), this.seps = this.seps.substr(R)) : (this.guards = this.alphabet.substr(0, R), this.alphabet = this.alphabet.substr(R))
                }
                var n, o;
                return n = e, (o = [{
                    key: "encode",
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                        if (!t.length) return "";
                        if (t[0] && t[0].constructor === Array && !(t = t[0]).length) return "";
                        for (var o = 0; o !== t.length; o++)
                            if (t[o] = this.parseInt(t[o], 10), !(0 <= t[o])) return "";
                        return this._encode(t)
                    }
                }, {
                    key: "decode",
                    value: function(e) {
                        return e && e.length && "string" == typeof e ? this._decode(e, this.alphabet) : []
                    }
                }, {
                    key: "encodeHex",
                    value: function(e) {
                        if (e = e.toString(), !/^[0-9a-fA-F]+$/.test(e)) return "";
                        for (var t = e.match(/[\w\W]{1,12}/g), n = 0; n !== t.length; n++) t[n] = parseInt("1" + t[n], 16);
                        return this.encode.apply(this, t)
                    }
                }, {
                    key: "decodeHex",
                    value: function(e) {
                        for (var t = [], n = this.decode(e), o = 0; o !== n.length; o++) t += n[o].toString(16).substr(1);
                        return t
                    }
                }, {
                    key: "_encode",
                    value: function(e) {
                        for (var t, n = this.alphabet, o = 0, r = 0; r !== e.length; r++) o += e[r] % (r + 100);
                        for (var _ = t = n.charAt(o % n.length), i = 0; i !== e.length; i++) {
                            var s = e[i],
                                a = _ + this.salt + n;
                            n = this._shuffle(n, a.substr(0, n.length));
                            var E = this._toAlphabet(s, n);
                            if (t += E, i + 1 < e.length) {
                                var R = (s %= E.charCodeAt(0) + i) % this.seps.length;
                                t += this.seps.charAt(R)
                            }
                        }
                        if (t.length < this.minLength) {
                            var c = (o + t[0].charCodeAt(0)) % this.guards.length,
                                u = this.guards[c];
                            (t = u + t).length < this.minLength && (c = (o + t[2].charCodeAt(0)) % this.guards.length, t += u = this.guards[c])
                        }
                        for (var C = parseInt(n.length / 2, 10); t.length < this.minLength;) {
                            var d = (t = (n = this._shuffle(n, n)).substr(C) + t + n.substr(0, C)).length - this.minLength;
                            d > 0 && (t = t.substr(d / 2, this.minLength))
                        }
                        return t
                    }
                }, {
                    key: "_decode",
                    value: function(e, t) {
                        var n = [],
                            o = 0,
                            r = new RegExp("[".concat(this.escapeRegExp(this.guards), "]"), "g"),
                            _ = e.replace(r, " "),
                            i = _.split(" ");
                        if (3 !== i.length && 2 !== i.length || (o = 1), void 0 !== (_ = i[o])[0]) {
                            var s = _[0];
                            _ = _.substr(1), r = new RegExp("[".concat(this.escapeRegExp(this.seps), "]"), "g"), i = (_ = _.replace(r, " ")).split(" ");
                            for (var a = 0; a !== i.length; a++) {
                                var E = i[a],
                                    R = s + this.salt + t;
                                t = this._shuffle(t, R.substr(0, t.length)), n.push(this._fromAlphabet(E, t))
                            }
                            this.encode(n) !== e && (n = [])
                        }
                        return n
                    }
                }, {
                    key: "_shuffle",
                    value: function(e, t) {
                        var n;
                        if (!t.length) return e;
                        for (var o = (e = e.split("")).length - 1, r = 0, _ = 0, i = 0; o > 0; o--, r++) {
                            r %= t.length, _ += n = t.charCodeAt(r);
                            var s = e[i = (n + r + _) % o];
                            e[i] = e[o], e[o] = s
                        }
                        return e = e.join("")
                    }
                }, {
                    key: "_toAlphabet",
                    value: function(e, t) {
                        for (var n = ""; n = t.charAt(e % t.length) + n, e = parseInt(e / t.length, 10););
                        return n
                    }
                }, {
                    key: "_fromAlphabet",
                    value: function(e, t) {
                        return e.split("").map(function(e) {
                            return t.indexOf(e)
                        }).reduce(function(e, n) {
                            return e * t.length + n
                        }, 0)
                    }
                }]) && t(n.prototype, o), e
            }();
            e["default"] = n
        }) ? o.apply(t, r) : o) || (e.exports = _)
    }, function(e, t, n) {
        function o() {
            return (new Date).getTime()
        }

        function r(e) {
            return (1e6 * new Date + Math.floor(1e6 * Math.random())).toString(e) || ""
        }

        function _() {
            u.conf.getLocation && wx.getLocation({
                type: u.conf.locationType || "wgs84",
                success: function(e) {
                    wx.setStorageSync(u.prefix + u.lt, JSON.stringify(e))
                }
            })
        }

        function i() {
            u.conf.getUserInfo && wx.getUserInfo({
                withCredentials: !1,
                success: function(e) {
                    var t = e.userInfo;
                    t.nickName = encodeURIComponent(t.nickName), wx.setStorageSync(u.prefix + u.ui, JSON.stringify(t)), console.log("userInfo--->" + JSON.stringify(e.userInfo))
                },
                fail: function(e) {
                    console.log("userInfo fail--->" + e)
                }
            })
        }

        function s() {
            null != u.conf.channelId && "" != u.conf.channelId || null == u.options || void 0 === u.options.query || !u.options.query.hasOwnProperty("bea_channel_id") || (u.conf.channelId = u.options.query.bea_channel_id), u.serverUrl = "https://" + (u.conf.isDebug ? "jrlts" : "report") + ".wxlagame.com/analytics/upload?tp=weapp", _(), i(), wx.getNetworkType({
                success: function(e) {
                    wx.setStorageSync(u.prefix + u.nt, e.networkType)
                }
            }), u.opid = wx.getStorageSync(u.prefix + u.oik), u.unid = wx.getStorageSync(u.prefix + u.uik)
        }

        function a(e, t, n, o) {
            (!t || void 0 === t || 0 >= t) && (t = (new Date).getTime());
            var r = c(),
                _ = 0,
                i = [];
            r && r.length > 0 && (_ = 0 === n ? 0 : t - n, i = [{
                name: r.pop().__route__,
                start: t,
                duration: _,
                refer: ""
            }]), E(e, t, _, i, o)
        }

        function E(e, t, n, o, _, i, s) {
            (!t || void 0 === t || 0 >= t) && (t = (new Date).getTime());
            var a = [{
                    type: 2,
                    data: {
                        id: r(32),
                        start: t,
                        status: e,
                        duration: n || 0,
                        pages: o || [],
                        events: _ || []
                    }
                }],
                E = wx.getSystemInfoSync(),
                R = function() {
                    var e = wx.getStorageSync(u.prefix + u.u);
                    return "" == e && (e = r(36), wx.setStorageSync(u.prefix + u.u, e)), e
                }();
            i && void 0 !== i && "" != i || u.options && (i = u.options.scene);
            var c = {
                deviceId: R,
                appkey: u.conf.appKey,
                versionCode: u.conf.version,
                initTime: t,
                scene: i,
                channelID: u.conf.channelId,
                sdkVersion: u.sdkVersion,
                pixel: E.screenWidth + "*" + E.screenHeight + "*" + E.pixelRatio,
                language: E.language,
                model: encodeURIComponent(E.model),
                wxVersion: E.version,
                networkType: wx.getStorageSync(u.prefix + u.nt) || "4g",
                system: encodeURIComponent(E.system),
                platform: encodeURIComponent(E.platform),
                windowArea: E.windowWidth + "*" + E.windowHeight + "*" + E.pixelRatio,
                query: JSON.stringify(u.options),
                opid: u.opid,
                unid: u.unid,
                userInfo: u.conf.getUserInfo && wx.getStorageSync(u.prefix + u.ui) || "",
                location: u.conf.getLocation && wx.getStorageSync(u.prefix + u.lt) || "",
                msgs: a
            };
            wx.request({
                url: u.serverUrl,
                data: c,
                method: "POST",
                success: function() {
                    return s && s(!0)
                },
                fail: function() {
                    return s && s(!1)
                }
            })
        }
        var R = {};
        if ("undefined" == typeof wx || wx.setStorageSync || (wx.setStorageSync = function(e, t) {
                return R[e] = t
            }), "undefined" == typeof wx || wx.getStorageSync || (wx.getStorageSync = function(e) {
                return R[e] || ""
            }), "undefined" == typeof wx || wx.getSystemInfoSync || (wx.getSystemInfoSync = function() {
                return {}
            }), "undefined" == typeof wx || wx.getNetworkType || (wx.getNetworkType = function(e) {
                var t = e.success;
                return t && t({})
            }), void 0 === c) var c = function() {
            return [{
                __route__: ""
            }]
        };
        var u = {
            options: null,
            serverUrl: null,
            opid: null,
            unid: null,
            conf: n(20),
            prefix: "beacon_",
            sdkVersion: "weapp_v1.0.7",
            u: "u",
            ui: "ui",
            lt: "lt",
            nt: "nt",
            oik: "oik",
            uik: "uik",
            atl: 0,
            ats: 0,
            ptl: 0,
            pts: 0,
            appLaunch: function() {
                arguments.length > 0 && null != arguments[0] && (u.options = arguments[0]), u.conf.beforeLoad(u.options), u.conf.appKey && void 0 !== u.conf.appKey && u.conf.appKey.length > 0 && u.conf.version && void 0 !== u.conf.version && u.conf.version.length > 0 ? (s(), this.atl = o(), a(1, this.atl, 0, [])) : console.log("beacon_error:init data invalid")
            },
            appShow: function() {
                arguments.length > 0 && null != arguments[0] && (u.options = arguments[0]), s(), this.ats = o()
            },
            appHide: function() {},
            pageLoad: function() {
                var e, t = c().pop();
                this.ptl = o(), a(5, this.ptl, 0, []), u.conf.onPullDownRefresh && (e = t.onPullDownRefresh, t.onPullDownRefresh = function() {
                    u.onEvent("beacon_pulldownrefresh"), e.call(this, arguments)
                }), u.conf.onReachBottom && function() {
                    var e = t.onReachBottom;
                    t.onReachBottom = function() {
                        u.onEvent("beacon_reachbottom"), e.call(this, arguments)
                    }
                }()
            },
            pageUnload: function() {
                a(6, 0, this.ptl, [])
            },
            pageShow: function() {
                this.pts = o(), a(2, this.pts, 0, [])
            },
            pageHide: function() {
                a(4, 0, this.pts, [])
            },
            onEvent: function(e, t, n) {
                var o = (new Date).getTime();
                E(4, o, 0, [], [{
                    weappPageName: c().pop().__route__,
                    count: 1,
                    start: o,
                    name: e,
                    params: t || {}
                }], null, n)
            },
            setAppKey: function(e) {
                u.conf.appKey = e
            },
            setChannelId: function(e) {
                u.conf.channelId = e
            },
            setOpenid: function(e) {
                e && e.length > 0 && (u.opid = e, wx.setStorageSync(u.prefix + u.oik, e))
            },
            setUnionid: function(e) {
                e && e.length > 0 && (u.unid = e, wx.setStorageSync(u.prefix + u.uik, e))
            },
            setGetLocation: function(e) {
                u.conf.getLocation = !0 === e, !0 === e && _()
            },
            setGetUserInfo: function(e) {
                u.conf.getUserInfo = !0 === e, !0 === e && i()
            }
        };
        e.exports = u
    }, function(e, t) {
        e.exports = {
            appKey: "MA0NCELB39H5S6",
            version: "1.0.0",
            channelId: "",
            getLocation: !1,
            getUserInfo: !1,
            onPullDownRefresh: !1,
            onReachBottom: !1,
            isDebug: !1,
            beforeLoad: function() {}
        }
    }])["default"]
});
var egret;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            this.frameRate = 0, this.frames = [], this.gameInfo = e, this.config = t, this.clientid = n
        }
        return e.prototype.init = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, n, o = this;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (this.playerid) return [2, null];
                            e = new Promise(function(e, t) {
                                MGOBE.Listener.init(o.gameInfo, o.config, function(n) {
                                    0 == n.code ? (o.playerid = MGOBE.Player.id, o.room = new MGOBE.Room, o.room.initRoom(), MGOBE.Listener.add(o.room), o.room.onJoinRoom = function(e) {}, e(n)) : t(n)
                                })
                            }), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, e];
                        case 2:
                            return t = r.sent(), [2, t];
                        case 3:
                            return n = r.sent(), [2, n];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.createRoom = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t, n, o, r = this;
                return __generator(this, function(_) {
                    switch (_.label) {
                        case 0:
                            t = new Promise(function(t, n) {
                                r.room.createRoom(e, function(e) {
                                    0 === e.code ? (r.frameRate = e.data.roomInfo.frameRate, r.isHost = !0, t(e)) : n(e)
                                })
                            }), _.label = 1;
                        case 1:
                            return _.trys.push([1, 3, , 4]), [4, t];
                        case 2:
                            return n = _.sent(), [2, n];
                        case 3:
                            return o = _.sent(), [2, o];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.getRoomList = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t, n, o;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            t = new Promise(function(t, n) {
                                MGOBE.Room.getRoomList(e, function(e) {
                                    0 === e.code ? t(e) : n(e)
                                })
                            }), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, t];
                        case 2:
                            return n = r.sent(), [2, n];
                        case 3:
                            return o = r.sent(), [2, o];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.joinRoom = function(e, t) {
            return __awaiter(this, void 0, void 0, function() {
                var n, o, r, _ = this;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            n = new Promise(function(n, o) {
                                _.room.initRoom({
                                    id: e
                                }), _.room.joinRoom(t, function(e) {
                                    0 === e.code ? (_.frameRate = e.data.roomInfo.frameRate, n(e)) : o(e)
                                })
                            }), i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, n];
                        case 2:
                            return o = i.sent(), [2, o];
                        case 3:
                            return r = i.sent(), [2, r];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.startFrameSync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var t, n, o, r = this;
                return __generator(this, function(_) {
                    switch (_.label) {
                        case 0:
                            t = new Promise(function(t, n) {
                                r.room.startFrameSync({}, function(o) {
                                    if (0 === o.code) {
                                        r.startFrameSyncSuccess = !0;
                                        var _ = function(t) {
                                            r.frames.push(t.data.frame), e && e(t)
                                        };
                                        r.room.onRecvFrame = _, t(o)
                                    } else n(o)
                                })
                            }), _.label = 1;
                        case 1:
                            return _.trys.push([1, 3, , 4]), [4, t];
                        case 2:
                            return n = _.sent(), [2, n];
                        case 3:
                            return o = _.sent(), [2, o];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.sendFrame = function(e) {
            this.room && this.room.sendFrame({
                data: e
            })
        }, e
    }();
    e.Mgobe = t, __reflect(t.prototype, "egret.Mgobe")
}(egret || (egret = {}));