(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('query-string'), require('form-data'), require('node-fetch')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios', 'query-string', 'form-data', 'node-fetch'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['joplin-api'] = {}, global.axios, global.queryString, global.FormData, global.fetch));
}(this, (function (exports, axios, queryString, FormData, fetch) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
    var FormData__default = /*#__PURE__*/_interopDefaultLegacy(FormData);
    var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var Config = /** @class */ (function () {
        function Config() {
            this.port = 41184;
            this.token = '';
        }
        return Config;
    }());
    var config = new Config();

    var ApiUtil = /** @class */ (function () {
        function ApiUtil() {
        }
        ApiUtil.baseUrl = function (url, param) {
            var query = queryString.stringify(__assign(__assign({}, param), { token: config.token }), {
                arrayFormat: 'comma',
            });
            return "http://localhost:" + config.port + url + "?" + query;
        };
        return ApiUtil;
    }());

    var defaultConfig = {
        method: 'get',
        data: undefined,
        headers: {},
        responseType: 'json',
    };
    /**
     * 封装 ajax 请求
     * @param config
     */
    function request(config) {
        return __awaiter(this, void 0, void 0, function () {
            var mergeConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mergeConfig = __assign(__assign({}, defaultConfig), config);
                        return [4 /*yield*/, axios__default['default'].request({
                                url: mergeConfig.url,
                                method: mergeConfig.method,
                                data: mergeConfig.data,
                                headers: mergeConfig.headers,
                                responseType: mergeConfig.responseType,
                            })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    }
    var Ajax = /** @class */ (function () {
        function Ajax() {
        }
        Ajax.prototype.get = function (url, data, config) {
            return request(__assign(__assign({ url: ApiUtil.baseUrl(url, data) }, config), { method: 'get' }));
        };
        Ajax.prototype.post = function (url, data, config) {
            return request(__assign(__assign({ url: ApiUtil.baseUrl(url), data: data }, config), { method: 'post' }));
        };
        Ajax.prototype.put = function (url, data, config) {
            return request(__assign(__assign({ url: ApiUtil.baseUrl(url), data: data }, config), { method: 'put' }));
        };
        Ajax.prototype.delete = function (url, data, config) {
            return request(__assign(__assign({ url: ApiUtil.baseUrl(url), data: data }, config), { method: 'delete' }));
        };
        return Ajax;
    }());
    var ajax = new Ajax();

    var PageUtil = /** @class */ (function () {
        function PageUtil() {
        }
        /**
         * 循环获取所有分页的数据
         * 每次都获取最大分页数量，尽可能减少请求次数
         */
        PageUtil.pageToAllList = function (fn, pageParam) {
            return __awaiter(this, void 0, void 0, function () {
                var list, i, hasMore, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            list = [];
                            i = 1, hasMore = true;
                            _a.label = 1;
                        case 1:
                            if (!hasMore) return [3 /*break*/, 4];
                            return [4 /*yield*/, fn(__assign(__assign({}, pageParam), { page: i, limit: this.MaxLimit }))];
                        case 2:
                            res = _a.sent();
                            hasMore = res.has_more;
                            list.push.apply(list, res.items);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, list];
                    }
                });
            });
        };
        /**
         * 最大分页数量
         * @private
         */
        PageUtil.MaxLimit = 100;
        return PageUtil;
    }());

    /**
     * TODO 可以考虑使用 fields() 方法设置然后产生一个新的 Api 实例
     */
    var NoteApi = /** @class */ (function () {
        function NoteApi() {
        }
        NoteApi.prototype.list = function (pageParam) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.get('/notes', pageParam)];
                });
            });
        };
        NoteApi.prototype.get = function (id, fields) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.get("/notes/" + id, { fields: fields })];
                });
            });
        };
        NoteApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.post('/notes', param)];
                });
            });
        };
        NoteApi.prototype.update = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var id, others;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = param.id, others = __rest(param, ["id"]);
                            return [4 /*yield*/, ajax.put("/notes/" + id, others)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        NoteApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.delete("/notes/" + id)];
                });
            });
        };
        NoteApi.prototype.tagsById = function (id) {
            return PageUtil.pageToAllList(function (_a) {
                var id = _a.id, others = __rest(_a, ["id"]);
                return ajax.get("/notes/" + id + "/tags", __assign({}, others));
            }, { id: id });
        };
        /**
         * TODO 目前这里不指定 fields 时会发生错误，这应该是个 bug
         * @link https://discourse.joplinapp.org/t/pre-release-1-4-is-now-available-for-testing/12247/14?u=rxliuli
         * @param id
         */
        NoteApi.prototype.resourcesById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, PageUtil.pageToAllList(function (_a) {
                            var id = _a.id, others = __rest(_a, ["id"]);
                            return ajax.get("/notes/" + id + "/resources", __assign({ fields: ['id', 'title'] }, others));
                        }, { id: id })];
                });
            });
        };
        return NoteApi;
    }());
    var noteApi = new NoteApi();

    var TagApi = /** @class */ (function () {
        function TagApi() {
        }
        TagApi.prototype.list = function (pageParam) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.get('/tags', pageParam)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TagApi.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.get("/tags/" + id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TagApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.post('/tags', param)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TagApi.prototype.update = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var id, others;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = param.id, others = __rest(param, ["id"]);
                            return [4 /*yield*/, ajax.post("/tags/" + id, others)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TagApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.delete("/tags/" + id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TagApi.prototype.notesByTagId = function (_a) {
            var id = _a.id, others = __rest(_a, ["id"]);
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, ajax.get("/tags/" + id + "/notes", others)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        /**
         * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
         * @param tagId
         * @param noteId
         */
        TagApi.prototype.addTagByNoteId = function (tagId, noteId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.post("/tags/" + tagId + "/notes/", {
                                id: noteId,
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TagApi.prototype.removeTagByNoteId = function (tagId, noteId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.delete("/tags/" + tagId + "/notes/" + noteId)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return TagApi;
    }());
    var tagApi = new TagApi();

    (function (TypeEnum) {
        TypeEnum[TypeEnum["Note"] = 1] = "Note";
        TypeEnum[TypeEnum["Folder"] = 2] = "Folder";
        TypeEnum[TypeEnum["Setting"] = 3] = "Setting";
        TypeEnum[TypeEnum["Resource"] = 4] = "Resource";
        TypeEnum[TypeEnum["Tag"] = 5] = "Tag";
        TypeEnum[TypeEnum["NoteTag"] = 6] = "NoteTag";
        TypeEnum[TypeEnum["Search"] = 7] = "Search";
        TypeEnum[TypeEnum["Alarm"] = 8] = "Alarm";
        TypeEnum[TypeEnum["MasterKey"] = 9] = "MasterKey";
        TypeEnum[TypeEnum["ItemChange"] = 10] = "ItemChange";
        TypeEnum[TypeEnum["NoteResource"] = 11] = "NoteResource";
        TypeEnum[TypeEnum["ResourceLocalState"] = 12] = "ResourceLocalState";
        TypeEnum[TypeEnum["Revision"] = 13] = "Revision";
        TypeEnum[TypeEnum["Migration"] = 14] = "Migration";
        TypeEnum[TypeEnum["SmartFilter"] = 15] = "SmartFilter";
    })(exports.TypeEnum || (exports.TypeEnum = {}));

    var _a;
    var SearchApi = /** @class */ (function () {
        function SearchApi() {
        }
        SearchApi.prototype.search = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var type, others;
                return __generator(this, function (_a) {
                    SearchApi.TypeEnumMap['8'] = '';
                    type = param.type, others = __rest(param, ["type"]);
                    return [2 /*return*/, ajax.get('/search', __assign(__assign({}, others), { type: SearchApi.TypeEnumMap[type] }))];
                });
            });
        };
        SearchApi.TypeEnumMap = (_a = {},
            _a[exports.TypeEnum.Note] = 'note',
            _a[exports.TypeEnum.Folder] = 'folder',
            _a[exports.TypeEnum.Setting] = 'setting',
            _a[exports.TypeEnum.Resource] = 'resource',
            _a[exports.TypeEnum.Tag] = 'tag',
            _a[exports.TypeEnum.NoteTag] = 'note_tag',
            _a[exports.TypeEnum.Search] = 'search',
            _a[exports.TypeEnum.Alarm] = 'alarm',
            _a[exports.TypeEnum.MasterKey] = 'master_key',
            _a[exports.TypeEnum.ItemChange] = 'item_change',
            _a[exports.TypeEnum.NoteResource] = 'note_resource',
            _a[exports.TypeEnum.ResourceLocalState] = 'resource_local_state',
            _a[exports.TypeEnum.Revision] = 'revision',
            _a[exports.TypeEnum.Migration] = 'migration',
            _a[exports.TypeEnum.SmartFilter] = 'smart_filter',
            _a);
        return SearchApi;
    }());
    var searchApi = new SearchApi();

    var JoplinApi = /** @class */ (function () {
        function JoplinApi() {
        }
        JoplinApi.pingPort = function (port) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, request({
                                url: "http://localhost:" + port + "/ping",
                                method: 'get',
                                responseType: 'text',
                            })];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res === 'JoplinClipperServer'];
                    }
                });
            });
        };
        JoplinApi.range = function (begin, end) {
            var res = [];
            for (var i = begin; i < end; i++) {
                res.push(i);
            }
            return res;
        };
        JoplinApi.prototype.scan = function () {
            return __awaiter(this, void 0, void 0, function () {
                var list;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.all(JoplinApi.range(41184, 41194 + 1).filter(function (port) { return __awaiter(_this, void 0, void 0, function () {
                                var e_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, JoplinApi.pingPort(port)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                        case 2:
                                            e_1 = _a.sent();
                                            return [2 /*return*/, false];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); }))];
                        case 1:
                            list = _a.sent();
                            if (list.length === 0) {
                                throw new Error("Joplin's port is not scanned");
                            }
                            return [2 /*return*/, list[0]];
                    }
                });
            });
        };
        JoplinApi.prototype.ping = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('config port: ', config.port);
                    return [2 /*return*/, JoplinApi.pingPort(config.port)];
                });
            });
        };
        return JoplinApi;
    }());
    var joplinApi = new JoplinApi();

    /**
     * 目录相关 api
     */
    var FolderApi = /** @class */ (function () {
        function FolderApi() {
        }
        FolderApi.prototype.list = function (pageParam) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.get('/folders', pageParam)];
                });
            });
        };
        /**
         * 使用特殊的 as_tree 参数来恢复旧的行为
         */
        FolderApi.prototype.listAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.get('/folders', {
                            as_tree: 1,
                        })];
                });
            });
        };
        FolderApi.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.get("/folders/" + id)];
                });
            });
        };
        FolderApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.post("/folders", param)];
                });
            });
        };
        FolderApi.prototype.update = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var id, others;
                return __generator(this, function (_a) {
                    id = param.id, others = __rest(param, ["id"]);
                    return [2 /*return*/, ajax.put("/folders/" + id, others)];
                });
            });
        };
        FolderApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.delete("/folders/" + id)];
                });
            });
        };
        FolderApi.prototype.notesByFolderId = function (id, fields) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, PageUtil.pageToAllList(function (_a) {
                                var id = _a.id, others = __rest(_a, ["id"]);
                                return ajax.get("/folders/" + id + "/notes", others);
                            }, { id: id, fields: fields })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return FolderApi;
    }());
    var folderApi = new FolderApi();

    /**
     * 附件资源相关 api
     */
    var ResourceApi = /** @class */ (function () {
        function ResourceApi() {
        }
        ResourceApi.prototype.list = function (pageParam) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.get('/resources', pageParam)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ResourceApi.prototype.get = function (id, fields) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.get("/resources/" + id, { fields: fields })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Creates a new resource
         * Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
         * The "data" field is required, while the "props" one is not. If not specified, default values will be used.
         * @param param
         */
        ResourceApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var fd, resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fd = new FormData__default['default']();
                            fd.append('props', JSON.stringify({ title: param.title }));
                            fd.append('data', param.data);
                            return [4 /*yield*/, fetch__default['default'](ApiUtil.baseUrl('/resources'), {
                                    method: 'post',
                                    body: fd,
                                })];
                        case 1:
                            resp = _a.sent();
                            return [4 /*yield*/, resp.json()];
                        case 2: return [2 /*return*/, (_a.sent())];
                    }
                });
            });
        };
        ResourceApi.prototype.update = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var id, others;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = param.id, others = __rest(param, ["id"]);
                            return [4 /*yield*/, ajax.put("/resources/" + id, others)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * TODO 这个 api 存在 bug
         * @link https://discourse.joplinapp.org/t/pre-release-1-4-is-now-available-for-testing/12247/15?u=rxliuli
         * @param id
         */
        ResourceApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.delete("/resources/" + id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Gets the actual file associated with this resource.
         * @param id
         */
        ResourceApi.prototype.fileByResourceId = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var resp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ajax.get("/resources/" + id + "/file", {}, {
                                responseType: 'arraybuffer',
                            })];
                        case 1:
                            resp = _a.sent();
                            return [2 /*return*/, Buffer.from(resp, 'binary')];
                    }
                });
            });
        };
        return ResourceApi;
    }());
    var resourceApi = new ResourceApi();

    var ActionEnum;
    (function (ActionEnum) {
        ActionEnum["OpenAndWatch"] = "openAndWatch";
        ActionEnum["StopWatching"] = "stopWatching";
        ActionEnum["NoteIsWatched"] = "noteIsWatched";
    })(ActionEnum || (ActionEnum = {}));
    var NoteActionApi = /** @class */ (function () {
        function NoteActionApi() {
        }
        NoteActionApi.prototype.openAndWatch = function (noteId) {
            return NoteActionApi.baseAction(ActionEnum.OpenAndWatch, noteId);
        };
        NoteActionApi.prototype.stopWatching = function (noteId) {
            return NoteActionApi.baseAction(ActionEnum.StopWatching, noteId);
        };
        /**
         * @deprecated 已废弃，请使用 {@link isWatch}
         * @param noteId
         */
        NoteActionApi.prototype.noteIsWatched = function (noteId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.isWatch(noteId)];
                });
            });
        };
        NoteActionApi.prototype.isWatch = function (noteId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, NoteActionApi.baseAction(ActionEnum.NoteIsWatched, noteId)];
                });
            });
        };
        NoteActionApi.baseAction = function (action, noteId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.post('/services/externalEditWatcher', {
                            action: action,
                            noteId: noteId,
                        })];
                });
            });
        };
        return NoteActionApi;
    }());
    /**
     * @deprecated 已废弃，请使用 {@link noteActionApi}
     */
    var actionApi = new NoteActionApi();
    var noteActionApi = new NoteActionApi();

    var ActionEnum$1;
    (function (ActionEnum) {
        ActionEnum["OpenAndWatch"] = "openAndWatch";
        ActionEnum["Watch"] = "watch";
        ActionEnum["StopWatching"] = "stopWatching";
        ActionEnum["NoteIsWatched"] = "isWatched";
    })(ActionEnum$1 || (ActionEnum$1 = {}));
    var ResourceActionApi = /** @class */ (function () {
        function ResourceActionApi() {
        }
        ResourceActionApi.prototype.openAndWatch = function (resourceId) {
            return ResourceActionApi.baseAction(ActionEnum$1.OpenAndWatch, resourceId);
        };
        ResourceActionApi.prototype.watch = function (resourceId) {
            return ResourceActionApi.baseAction(ActionEnum$1.Watch, resourceId);
        };
        ResourceActionApi.prototype.stopWatching = function (resourceId) {
            return ResourceActionApi.baseAction(ActionEnum$1.StopWatching, resourceId);
        };
        ResourceActionApi.prototype.noteIsWatched = function (resourceId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ResourceActionApi.baseAction(ActionEnum$1.NoteIsWatched, resourceId)];
                });
            });
        };
        ResourceActionApi.baseAction = function (action, resourceId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, ajax.post('/services/resourceEditWatcher', {
                            action: action,
                            resourceId: resourceId,
                        })];
                });
            });
        };
        return ResourceActionApi;
    }());
    var resourceActionApi = new ResourceActionApi();

    var NoteExtApi = /** @class */ (function () {
        function NoteExtApi() {
        }
        /**
         * 重命名笔记
         * @param id
         * @param title
         */
        NoteExtApi.prototype.rename = function (id, title) {
            return noteApi.update({ id: id, title: title });
        };
        /**
         * 将笔记移动到指定目录
         * @param id
         * @param parentId
         */
        NoteExtApi.prototype.move = function (id, parentId) {
            return noteApi.update({ id: id, parent_id: parentId });
        };
        /**
         * 切换 to-do 的状态
         * @param id
         * @param completed
         */
        NoteExtApi.prototype.toggleTodo = function (id, completed) {
            return __awaiter(this, void 0, void 0, function () {
                var note;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, noteApi.get(id, ['id', 'is_todo', 'todo_completed'])];
                        case 1:
                            note = _a.sent();
                            if (!note.is_todo) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, noteApi.update({
                                    id: note.id,
                                    todo_completed: completed || (note.todo_completed === 0 ? 1 : 0),
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return NoteExtApi;
    }());
    var noteExtApi = new NoteExtApi();

    var FolderExtApi = /** @class */ (function () {
        function FolderExtApi() {
        }
        /**
         * 重命名目录
         * @param id
         * @param title
         */
        FolderExtApi.prototype.rename = function (id, title) {
            return folderApi.update({ id: id, title: title });
        };
        /**
         * 获取一个目录的路径目录列表
         * @param id
         */
        FolderExtApi.prototype.path = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (id) {
                                return [2 /*return*/, []];
                            }
                            return [4 /*yield*/, folderApi.get(id)];
                        case 1:
                            res = _a.sent();
                            if (!res.parent_id) {
                                return [2 /*return*/, [res]];
                            }
                            return [4 /*yield*/, this.path(res.parent_id)];
                        case 2: return [2 /*return*/, (_a.sent()).concat([res])];
                    }
                });
            });
        };
        /**
         * 将目录移动到另一个目录中
         * @param id
         * @param parentId
         */
        FolderExtApi.prototype.move = function (id, parentId) {
            return __awaiter(this, void 0, void 0, function () {
                var parentPathFolderList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (id === parentId) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.path(parentId)];
                        case 1:
                            parentPathFolderList = _a.sent();
                            if (parentPathFolderList.some(function (folder) { return id === folder.id; })) {
                                throw new Error('Cannot move directory to subdirectory');
                            }
                            return [4 /*yield*/, folderApi.update({ id: id, parent_id: parentId })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return FolderExtApi;
    }());
    var folderExtApi = new FolderExtApi();

    exports.PageUtil = PageUtil;
    exports.actionApi = actionApi;
    exports.config = config;
    exports.folderApi = folderApi;
    exports.folderExtApi = folderExtApi;
    exports.joplinApi = joplinApi;
    exports.noteActionApi = noteActionApi;
    exports.noteApi = noteApi;
    exports.noteExtApi = noteExtApi;
    exports.resourceActionApi = resourceActionApi;
    exports.resourceApi = resourceApi;
    exports.searchApi = searchApi;
    exports.tagApi = tagApi;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
