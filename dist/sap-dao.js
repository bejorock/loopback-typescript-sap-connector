"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SapDao {
    connector() { return this.getDataSource().connector; }
    find(filter, options) {
        return this.connector().find(this.modelName, filter, options);
    }
    findById(id, filter, options) {
        return this.connector().findById(this.modelName, id, filter, options);
    }
    findOne(filter, options) {
        return this.connector().findOne(this.modelName, filter, options);
    }
}
exports.SapDao = SapDao;
//# sourceMappingURL=sap-dao.js.map