// @codekit-prepend "VMM.Timeline.js";
/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.debug = false;
	VMM.Language = {
		lang: "de",
		api: {
			wikipedia: "de"
		},
		date: {
			month: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
			month_abbr: ["Jän.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
			day: ["Sonntag","Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
			day_abbr: ["So.","Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d. mmm",
			full: "d. mmmm yyyy",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'d. mmmm yyyy'</small>'",
			full_long: "dddd',' d. mmm yyyy 'um' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'dddd',' d. mmm yyyy'</small>'",
		},
		messages: {
			loading_timeline: "Chronologie wird geladen...",
			return_to_title: "Zurück zum Anfang",
			expand_timeline: "Chronologie vergrößern",
			contract_timeline: "Chronologie verkleinern",
			wikipedia: "From Wikipedia, the free encyclopedia",
			loading_content: "Loading Content"
		}
	}
}
