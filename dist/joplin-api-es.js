import axios from 'axios';
import { stringify } from 'query-string';
import FormData from 'form-data';
import fetch from 'node-fetch';

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
        var query = stringify(__assign(__assign({}, param), { token: config.token }), {
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
                    return [4 /*yield*/, axios.request({
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

var NoteApi = /** @class */ (function () {
    function NoteApi() {
    }
    NoteApi.prototype.list = function (fields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ajax.get('/notes', { fields: fields })];
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
    /**
     * @param id
     * @throws Error: Request failed with status code 404
     */
    NoteApi.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ajax.delete("/notes/" + id)];
            });
        });
    };
    NoteApi.prototype.tagsById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ajax.get("/notes/" + id + "/tags")];
            });
        });
    };
    NoteApi.prototype.resourcesById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ajax.get("/notes/" + id + "/resources")];
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
                    case 0: return [4 /*yield*/, ajax.get('/tags')];
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
    TagApi.prototype.notesByTagId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ajax.get("/tags/" + id + "/notes")];
                    case 1: return [2 /*return*/, _a.sent()];
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

var TypeEnum;
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
})(TypeEnum || (TypeEnum = {}));

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
        _a[TypeEnum.Note] = 'note',
        _a[TypeEnum.Folder] = 'folder',
        _a[TypeEnum.Setting] = 'setting',
        _a[TypeEnum.Resource] = 'resource',
        _a[TypeEnum.Tag] = 'tag',
        _a[TypeEnum.NoteTag] = 'note_tag',
        _a[TypeEnum.Search] = 'search',
        _a[TypeEnum.Alarm] = 'alarm',
        _a[TypeEnum.MasterKey] = 'master_key',
        _a[TypeEnum.ItemChange] = 'item_change',
        _a[TypeEnum.NoteResource] = 'note_resource',
        _a[TypeEnum.ResourceLocalState] = 'resource_local_state',
        _a[TypeEnum.Revision] = 'revision',
        _a[TypeEnum.Migration] = 'migration',
        _a[TypeEnum.SmartFilter] = 'smart_filter',
        _a);
    return SearchApi;
}());
var searchApi = new SearchApi();

var FolderApi = /** @class */ (function () {
    function FolderApi() {
    }
    FolderApi.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ajax.get('/folders')];
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
    FolderApi.prototype.notesByFolderId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ajax.get("/folders/" + id + "/notes")];
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
                    case 0: return [4 /*yield*/, ajax.get('/resources')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResourceApi.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ajax.get("/resources/" + id)];
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
                        fd = new FormData();
                        fd.append('props', JSON.stringify({ title: param.title }));
                        fd.append('data', param.data);
                        return [4 /*yield*/, fetch(ApiUtil.baseUrl('/resources'), {
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
var ActionApi = /** @class */ (function () {
    function ActionApi() {
    }
    ActionApi.prototype.openAndWatch = function (noteId) {
        return ActionApi.baseAction(ActionEnum.OpenAndWatch, noteId);
    };
    ActionApi.prototype.stopWatching = function (noteId) {
        return ActionApi.baseAction(ActionEnum.StopWatching, noteId);
    };
    ActionApi.prototype.noteIsWatched = function (noteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ActionApi.baseAction(ActionEnum.NoteIsWatched, noteId)];
            });
        });
    };
    ActionApi.baseAction = function (action, noteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ajax.post('/services/externalEditWatcher', {
                        action: action,
                        noteId: noteId,
                    })];
            });
        });
    };
    return ActionApi;
}());
var actionApi = new ActionApi();

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

export { TypeEnum, actionApi, config, folderApi, joplinApi, noteApi, resourceApi, searchApi, tagApi };
//# sourceMappingURL=joplin-api-es.js.map
