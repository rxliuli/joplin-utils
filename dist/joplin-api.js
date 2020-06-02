(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios'), require('query-string')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios', 'query-string'], factory) :
    (global = global || self, factory(global['joplin-api'] = {}, global.axios, global.queryString));
}(this, (function (exports, axios, queryString) { 'use strict';

    axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            var query = queryString.stringify(__assign(__assign({}, param), { token: config.token }));
            return "http://localhost:" + config.port + url + "?" + query;
        };
        return ApiUtil;
    }());

    var NoteApi = /** @class */ (function () {
        function NoteApi() {
        }
        NoteApi.prototype.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl('/notes'))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        NoteApi.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/notes/" + id))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        NoteApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.post(ApiUtil.baseUrl("/notes"), param)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        NoteApi.prototype.update = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var id, others, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = param.id, others = __rest(param, ["id"]);
                            return [4 /*yield*/, axios.put(ApiUtil.baseUrl("/notes/" + id), others)];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        /**
         * @param id
         * @throws Error: Request failed with status code 404
         */
        NoteApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.delete(ApiUtil.baseUrl("/notes/" + id))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        NoteApi.prototype.tagsById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/notes/" + id + "/tags"))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        NoteApi.prototype.resourcesById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/notes/" + id + "/resources"))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        return NoteApi;
    }());
    var noteApi = new NoteApi();

    var TagApi = /** @class */ (function () {
        function TagApi() {
        }
        TagApi.prototype.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl('/tags'))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        TagApi.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/tags/" + id))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        TagApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.post(ApiUtil.baseUrl('/tags'), param)];
                        case 1: return [2 /*return*/, (_a.sent()).data];
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
                            return [4 /*yield*/, axios.post(ApiUtil.baseUrl("/tags/" + id), others)];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        TagApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.delete(ApiUtil.baseUrl("/tags/" + id))];
                        case 1: return [2 /*return*/, (_a.sent())
                                .data];
                    }
                });
            });
        };
        TagApi.prototype.notesByTagId = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/tags/" + id + "/notes"))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        /**
         * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
         * @param id
         */
        TagApi.prototype.updateNotesByTagId = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.post(ApiUtil.baseUrl("/tags/" + id + "/notes"))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        TagApi.prototype.removeNotesByNoteId = function (tagId, noteId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.delete(ApiUtil.baseUrl("/tags/" + tagId + "/notes/" + noteId))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        return TagApi;
    }());
    var tagApi = new TagApi();

    var SearchApi = /** @class */ (function () {
        function SearchApi() {
        }
        SearchApi.prototype.search = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl('/search', options))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        return SearchApi;
    }());
    var searchApi = new SearchApi();

    var JoplinApi = /** @class */ (function () {
        function JoplinApi() {
        }
        JoplinApi.prototype.scan = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    throw new Error('no impl');
                });
            });
        };
        JoplinApi.prototype.ping = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl('/ping'))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data === 'JoplinClipperServer'];
                    }
                });
            });
        };
        return JoplinApi;
    }());
    var joplinApi = new JoplinApi();

    var FolderApi = /** @class */ (function () {
        function FolderApi() {
        }
        FolderApi.prototype.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl('/folders'))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        FolderApi.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/folders/" + id))];
                        case 1: return [2 /*return*/, (_a.sent())
                                .data];
                    }
                });
            });
        };
        FolderApi.prototype.notesByFolderId = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/folders/" + id + "/notes"))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        FolderApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.post(ApiUtil.baseUrl("/folders"), param)];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        FolderApi.prototype.update = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                var id, others;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = param.id, others = __rest(param, ["id"]);
                            return [4 /*yield*/, axios.put(ApiUtil.baseUrl("/folders/" + id), others)];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        FolderApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.delete(ApiUtil.baseUrl("/folders/" + id))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        return FolderApi;
    }());
    var folderApi = new FolderApi();

    var ResourceApi = /** @class */ (function () {
        function ResourceApi() {
        }
        ResourceApi.prototype.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl('/resources'))];
                        case 1: return [2 /*return*/, (_a.sent())
                                .data];
                    }
                });
            });
        };
        ResourceApi.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/resources/" + id))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        /**
         * Creates a new resource
         * Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
         * The "data" field is required, while the "props" one is not. If not specified, default values will be used.
         * @param param
         * TODO
         */
        ResourceApi.prototype.create = function (param) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.post(ApiUtil.baseUrl('/resources'), param)];
                        case 1: return [2 /*return*/, (_a.sent()).data];
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
                            return [4 /*yield*/, axios.post(ApiUtil.baseUrl("/resources/" + id), others)];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        ResourceApi.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.delete(ApiUtil.baseUrl("/resources/" + id))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        ResourceApi.prototype.fileByResourceId = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios.get(ApiUtil.baseUrl("/resources/" + id + "/file"))];
                        case 1: return [2 /*return*/, (_a.sent()).data];
                    }
                });
            });
        };
        return ResourceApi;
    }());
    var resourceApi = new ResourceApi();

    exports.config = config;
    exports.folderApi = folderApi;
    exports.joplinApi = joplinApi;
    exports.noteApi = noteApi;
    exports.resourceApi = resourceApi;
    exports.searchApi = searchApi;
    exports.tagApi = tagApi;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=joplin-api.js.map
