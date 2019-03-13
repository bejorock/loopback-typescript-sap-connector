"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectorCore = __importStar(require("loopback-connector"));
const sap_dao_1 = require("./sap-dao");
const axios_1 = __importDefault(require("axios"));
var Connector = connectorCore.Connector;
const Dao = function () { };
Object.getOwnPropertyNames(sap_dao_1.SapDao.prototype).forEach(name => {
    Dao[name] = sap_dao_1.SapDao.prototype[name];
});
function initialize(dataSource, cb) {
    const settings = dataSource.settings;
    dataSource.connector = new SapConnector(settings, dataSource);
    dataSource.connector.connect(cb);
}
exports.initialize = initialize;
class SapConnector extends Connector {
    constructor(settings, dataSource) {
        super();
        this.settings = settings;
        this.dataSource = dataSource;
        this.DataAccessObject = Dao;
        Connector.call(this, 'sap-connector', settings);
        this.host = this.settings.host;
        this.port = this.settings.port;
    }
    connect(cb) {
        if (cb)
            cb();
    }
    disconnect(cb) {
        if (cb)
            cb();
    }
    ping(cb) {
        if (cb)
            cb();
    }
    find(modelName, filter, options) {
        let queryParams = JSON.stringify(filter);
        let port = (this.port ? `:${this.port}` : '');
        return axios_1.default.get(`${this.host}${port}/svc-hr/${modelName}?filter=${queryParams}`);
    }
    findById(modelName, id, filter, options) {
        let queryParams = JSON.stringify(filter);
        let port = (this.port ? `:${this.port}` : '');
        return axios_1.default.get(`${this.host}${port}/svc-hr/${modelName}/${id}?filter=${queryParams}`);
    }
    findOne(modelName, filter, options) {
        let queryParams = JSON.stringify(filter);
        let port = (this.port ? `:${this.port}` : '');
        return axios_1.default.get(`${this.host}${port}/svc-hr/${modelName}/findOne?filter=${queryParams}`);
    }
}
exports.SapConnector = SapConnector;
exports._Connector = SapConnector;
//# sourceMappingURL=index.js.map