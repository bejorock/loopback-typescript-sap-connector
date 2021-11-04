export class SapDao
{
	connector() { return (<any>this).getDataSource().connector }

	find(filter, options?, cb?) {
		if(typeof options === 'function') {
			cb = options
			options = undefined
		}

		if(cb) 
			this.connector().find((<any>this).modelName, filter, options).then(response => cb(null, response.data)).catch(err => cb(err))
		else
			return this.connector().find((<any>this).modelName, filter, options)
	}

	findById(id, filter, options?, cb?) {
		if(typeof options === 'function') {
			cb = options
			options = undefined
		}

		if(cb)
			this.connector().findById((<any>this).modelName, id, filter, options).then(response => cb(null, response.data)).catch(err => cb(err))
		else
			return this.connector().findById((<any>this).modelName, id, filter, options)
	}

	findOne(filter, options?, cb?) {
		if(typeof options === 'function') {
			cb = options
			options = undefined
		}

		if(cb)
			this.connector().findOne((<any>this).modelName, filter, options).then(response => cb(null, response.data)).catch(err => cb(err))
		else
			return this.connector().findOne((<any>this).modelName, filter, options)
	}
}