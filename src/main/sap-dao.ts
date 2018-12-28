export class SapDao
{
	connector() { return (<any>this).getDataSource().connector }

	find(filter, options?) {
		return this.connector().find((<any>this).modelName.toLowerCase(), filter, options)
	}

	findById(id, filter, options?) {
		return this.connector().findById((<any>this).modelName.toLowerCase(), id, filter, options)
	}

	findOne(filter, options?) {
		return this.connector().findOne((<any>this).modelName.toLowerCase(), filter, options)
	}
}