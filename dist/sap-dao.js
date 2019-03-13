"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SapDao {
    connector() { return this.getDataSource().connector; }
    find(filter, options) {
        return this.connector().find(this.modelName.toLowerCase(), filter, options);
    }
    findById(id, filter, options) {
        return this.connector().findById(this.modelName.toLowerCase(), id, filter, options);
    }
    findOne(filter, options) {
        return this.connector().findOne(this.modelName.toLowerCase(), filter, options);
    }
}
exports.SapDao = SapDao;
//# sourceMappingURL=sap-dao.js.map