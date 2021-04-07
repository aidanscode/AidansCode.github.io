class Event {

	constructor(heading, timestamp) {
		this.heading = heading;
		this.timestamp = timestamp;
	}

	getHeading() {
		return this.heading;
	}

	getTimestamp() {
		return this.timestamp;
	}

	getHTML() {
		return '<div class="col-md-6"><div class="panel panel-default"><div class="panel-heading">' + this.heading + '</div><div class="panel-body"><label id="' + this.heading + '" class="event">Loading...</label></div></div></div>';
	}

}