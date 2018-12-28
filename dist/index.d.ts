import * as connectorCore from 'loopback-connector';
import { AxiosPromise } from 'axios';
import Connector = connectorCore.Connector;
export declare function initialize(dataSource: any, cb: any): void;
export declare class SapConnector extends Connector {
    protected settings: any;
    protected dataSource: any;
    DataAccessObject: any;
    private host;
    private port;
    constructor(settings: any, dataSource: any);
    connect(cb?: any): void;
    disconnect(cb?: any): void;
    ping(cb?: any): void;
    find(modelName: any, filter: any, options?: any): AxiosPromise<any>;
    findById(modelName: any, id: any, filter: any, options?: any): AxiosPromise<any>;
    findOne(modelName: any, filter: any, options?: any): AxiosPromise<any>;
}
export declare const _Connector: typeof SapConnector;
