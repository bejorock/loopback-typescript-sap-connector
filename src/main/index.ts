import * as connectorCore from 'loopback-connector';
import { Observable } from 'rxjs'
import * as _ from 'lodash'
import { SapDao } from './sap-dao';
import Axios from 'axios';
import { AxiosPromise } from 'axios';

import Connector = connectorCore.Connector
const Dao:any = function() {}

Object.getOwnPropertyNames(SapDao.prototype).forEach(name => {
	Dao[name] = SapDao.prototype[name]
});

export function initialize(dataSource, cb) {
	const settings = dataSource.settings

	dataSource.connector = new SapConnector(settings, dataSource);

	dataSource.connector.connect(cb)
}

export class SapConnector extends Connector {
	
	DataAccessObject = Dao

	private host
	private port
	
	constructor(protected settings, protected dataSource) {
		super()
		Connector.call(this, 'sap-connector', settings)

		this.host = this.settings.host
		this.port = this.settings.port
	}

	connect(cb?) {
		if(cb) cb()
	}

	disconnect(cb?) {
		if(cb) cb()
	}

	ping(cb?) {
		if(cb) cb()
	}

	find(modelName, filter, options?) {
		let queryParams = JSON.stringify(filter)
		return Axios.get(`${this.host}:${this.port}/sap/${modelName}?filter=${queryParams}`)
	}

	findById(modelName, id, filter, options?) {
		let queryParams = JSON.stringify(filter)
		return Axios.get(`${this.host}:${this.port}/sap/${modelName}/${id}?filter=${queryParams}`)
	}

	findOne(modelName, filter, options?) {
		let queryParams = JSON.stringify(filter)
		return Axios.get(`${this.host}:${this.port}/sap/${modelName}/findOne?filter=${queryParams}`)
	}

}

export const _Connector = SapConnector