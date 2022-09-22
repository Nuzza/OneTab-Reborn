// Copyright 2022 OneTab Ltd.  All rights reserved.
const i = "0.3";
const o = false;
const u = false;
const c = false;
const f = false;
const l = false;
const s = false;
const a = true;
const d = "chrome://";
const w = "chrome://newtab/";
const h = "https://www.one-tab.com";
const p = false;
const k = window.chrome.runtime.getURL("onetab.html");
const T = k.substr(0, k.length - "onetab.html".length);

function R(t) {
	let e = O(t);
	if(e.toLowerCase().startsWith("www.")) return e.substring("www.".length);
	else return e;
}

function O(t) {
	if(!t) return "undefined";
	if(t.indexOf("//") === 0) t = "http:" + t;
	if(t.indexOf("://") === -1) t = "http://" + t;
	t = t.substring(t.indexOf("://") + "://".length);
	if(t.indexOf("/") !== -1) t = t.substring(0, t.indexOf("/"));
	if(t.indexOf(":") !== -1) t = t.substring(0, t.indexOf(":"));
	if(t.indexOf("?") !== -1) t = t.substring(0, t.indexOf("?"));
	if(t.indexOf("#") !== -1) t = t.substring(0, t.indexOf("#"));
	return t.toLowerCase();
}

function S(t) {
	if(t.indexOf("://") === -1) return "https://";
	t = t.substring(0, t.indexOf("://") + "://".length);
	return t.toLowerCase();
}
let M = ["com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl"];

function j(t) {
	let e = O(t);
	try {
		for(let t in M) {
			let a = "." + M[t];
			if(H(e, a)) {
				e = e.substr(0, e.length - a.length);
				while(e.indexOf(".") !== -1) e = e.substring(e.indexOf(".") + 1);
				e = e + a;
				break;
			}
		}
		if(e.indexOf("www.") === 0) e = e.substring("www.".length);
		return e;
	}
	catch (t) {
		return e;
	}
}

function L(t) {
	t["noCacheRandom"] = $();
}

function $() {
	return (new Date).getTime() + Math.round(Math.random() * 1e4) + "";
}
async function C(t, e) {
	L(e);
	let a = JSON.stringify(e);
	let i = await E(t, a);
	return await i.json();
}
async function E(t, e) {
	let a = {};
	if(e) {
		a.method = "POST";
		a.body = e;
	}
	else {
		a.method = "GET";
	}
	a.headers = new Headers;
	a.headers.append("Content-Type", "text/json");
	let i = await fetch(t, a);
	if(i.status === 200) return i;
	else throw new Error("http response code" + i.status);
}

function P() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
		let e = Math.random() * 16 | 0,
			a = t == "x" ? e : e & 3 | 8;
		return a.toString(16);
	}));
}
const B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");

function I(t, e) {
	let a = B,
		i = [],
		s = 0;
	e = e || a.length;
	t = t || 22;
	for(s = 0; s < t; s++) i[s] = a[0 | Math.random() * e];
	return i.join("");
}

function z() {
	return I();
}

function F(t) {
	if(t === null || t === undefined) return "";
	return t.replace(/^\s+/, "").replace(/\s+$/, "");
}
const U = (t, e) => !!e["starred"] - !!t["starred"] || t["starred"] && e["starred"] && e["starredDate"] - t["starredDate"] || e["createDate"] - t["createDate"];

function W(t) {
	if(!t) t = "";
	return t.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}

function H(t, e) {
	if(!t) return false;
	return t.indexOf(e, t.length - e.length) !== -1;
}
const A = {
	restoreWindow: "currentWindow",
	pinnedTabs: "ignore",
	startupLaunch: "none",
	restoreRemoval: "default",
	duplicates: "allow"
};

function D(t, e) {
	if(e[t]) return e[t];
	else return A[t];
}

function G(t, e, a) {
	if(t.parentNode) t.remove();
	e.insertBefore(t, a === undefined || a >= e.children.length || e.children.length === 0 ? null : e.children[Math.max(0, a)]);
}

function J(t, e, a) {
	let i = e === undefined ? t : document.createElement(e);
	let s = {};
	if(a) {
		if(a.style) Object.assign(i.style, a.style);
		for(let t of Object.keys(a)) {
			if(t !== "style" && t !== "children") i[t] = a[t];
		}
		if(a.children) {
			for(const [t, e] of Object.entries(a.children)) {
				s[t] = e;
				i.appendChild(e instanceof HTMLElement ? e : e.t);
			}
		}
		if(a.h) i.appendChild(a.h);
		if(a.init) a.init(i);
	}
	if(e !== undefined && t) t.appendChild(i);
	let n = {
		t: i
	};
	Object.assign(n, s);
	return n;
}
const N = "about:reader?url=";

function X(t) {
	if(!t) return "";
	if(t.indexOf(":") === -1) return "https://" + t;
	if(t.indexOf(N) === 0) return decodeURIComponent(t.substring(N.length));
	if(t.startsWith(`${T}placeholder.html?`)) {
		const e = new URLSearchParams(t.substring(t.indexOf("?")));
		return e.get("url");
	}
	return t;
}
async function Y(t) {
	return new Promise((e => setTimeout(e, t)));
}

function q(t) {
	return parseInt(t.match(/\d+/)[0]);
}
const K = [...new Array(30)].map(((t, e) => parseInt(10 + Math.pow(1.6, e))));

function* Q(t) {
	let e = 0;
	while(K.slice(0, e).reduce(((t, e) => t + e), 0) < t) {
		yield K[e++];
	}
}
async function V(t, e, a) {
	let i = 0;
	for(let e of Q(t)) {
		if(await a(i)) return;
		else {
			await Y(e);
			i += e;
		}
	}
	throw new Error(`Timeout waiting for condition ${e}`);
}
class ae {
	constructor() {
		this.V = [];
		this.locked = false;
		this.debug = false;
	}
	async K() {
		if(this.debug) console.log(`begin acquire, queue len: ${this.V.length}`);
		if(this.debug) console.trace();
		if(!this.locked) {
			this.locked = true;
			if(this.debug) console.log(`acquired, queue len: ${this.V.length}`);
		}
		else {
			if(this.debug) console.log(`waiting to acquire, queue len: ${this.V.length}`);
			await new Promise((t => {
				this.V.push(t);
			}));
			if(this.debug) console.log(`acquired after waiting, queue len: ${this.V.length}`);
		}
	}
	release() {
		if(this.debug) console.log(`begin release, queue len: ${this.V.length}`);
		if(this.V.length === 0) {
			this.locked = false;
		}
		else {
			this.V.shift()();
			if(this.debug) console.log(`waiting thread notified. queue len: ${this.V.length}`);
		}
		if(this.debug) console.log(`released. queue len: ${this.V.length}`);
	}
}
class se {
	constructor() {
		this._ = [];
		this.Z = new ae;
		this.tt = new ae;
		this.et = false;
	}
	it(t) {
		let e = o || this.et;
		if(!e) return t;
		if((t || "").toLowerCase().startsWith("file:")) {
			return `${T}placeholder.html?url=${encodeURI(t)}`;
		}
		else return t;
	}
	async st() {
		await this.tt.K();
		try {
			let t = await We().get("extensionKey");
			if(!t) {
				t = P();
				await We().put("extensionKey", t);
			}
			return t;
		}
		finally {
			this.tt.release();
		}
	}
	async nt(t) {
		let e = await be(false);
		for(let a = 0; a < e.length; a++) {
			await this.ot(e[a], true, t, a === 0);
		}
	}
	async lt(t) {
		let e = Ve(t);
		let a = true;
		if(o) {
			try {
				await V(1e3, t + " tabs completed loading", (async () => !(await de()).find((t => t["status"] === "loading" && t["title"] === e.substring(e.indexOf("://") + "://".length)))));
			}
			catch (t) {
				console.log("showOrRefreshAndFocusScriptPage loading wait failed");
			}
		}
		let i = await de();
		let s = i.filter((t => [t["url"], t["pendingUrl"]].some((t => t === e))));
		let n = s.length > 0 ? s[0] : undefined;
		if(s.length > 1 && !f) {
			s.filter((t => t !== n)).forEach((t => pe(t)));
		}
		if(n) {
			if(a) {
				Te(n);
			}
			n = i.find((t => [t["url"], t["pendingUrl"]].some((t => t === e))));
			await Pe(n);
		}
		else {
			await Ge(e, false, true);
		}
	}
	async rt(t, e) {
		t = t.filter((t => !Ye(t["url"])));
		let a = await this.getSettings();
		let i = D("restoreWindow", a);
		if(e === "currentWindow") i = "currentWindow";
		if(e === "newWindow") i = "newWindow";
		let s = (await ue()).tabs;
		let n = s.filter((t => !(t["pinned"] || he(t["url"]) || we(t["url"])))).length;
		if(i === "currentWindow" || i === "newWindow" && e !== "newWindow" && n === 0) {
			let e = !window.chrome.windows ? undefined : await ke(false);
			for(const [a, i] of t.entries()) {
				let t = {
					active: u && a === 0,
					url: this.it(i["url"])
				};
				if(e !== undefined) t["windowId"] = e["id"];
				t["pinned"] = !!i["pinned"];
				try {
					await Oe(t);
				}
				catch (t) {
					console.log(t);
				}
			}
			if(f) {
				if(s.some((t => !t["pinned"]))) s.filter((t => !t["pinned"] && !t["url"])).forEach((t => pe(t)));
			}
		}
		else {
			await ve(t);
		}
		await this.wt();
	}
	async W(t) {
		let e = await this.getState();
		let a = t.split("\n");
		let i = (new Date).getTime();
		let s = () => ({
			createDate: i--,
			tabsMeta: [],
			id: I()
		});
		let n = s();
		let o = [];
		for(let t of a) {
			if(!t) {
				if(n["tabsMeta"].length > 0) {
					o.push(n);
					n = s();
				}
			}
			else {
				let e;
				let a;
				if(t.indexOf(" | ") !== -1) {
					e = X(t.substring(0, t.indexOf(" | ")));
					a = t.substring(t.indexOf(" | ") + " | ".length);
				}
				else {
					e = X(t);
					a = O(e);
				}
				n["tabsMeta"].push({
					id: z(),
					url: e,
					title: W(a)
				});
			}
		}
		if(n["tabsMeta"].length > 0) {
			o.push(n);
		}
		let l = Math.max(0, e["tabGroups"].findIndex((t => !t["starred"])));
		let r = o.map(((t, e) => ({
			type: "createTabGroup",
			tabGroupId: t["id"],
			tabGroup: t,
			index: l + e
		})));
		for(let t of r) await this.ht(t);
	}
	async ht(t, e) {
		await this.Z.K();
		try {
			let a = await this.getState();
			if(t["type"] === "createTabGroup") {
				if(!e) {
					a["tabGroups"].splice(t["index"], 0, t["tabGroup"]);
				}
				else {
					a["tabGroups"].splice(a["tabGroups"].findIndex((e => e["id"] === t["tabGroupId"])), 1);
				}
			}
			else if(t["type"] === "createTabs") {
				let i = a["tabGroups"].find((e => e["id"] === t["tabGroupId"]));
				if(!e) {
					i["tabsMeta"].unshift(...t["newTabsMeta"]);
				}
				else {
					let e = new Set(t["newTabsMeta"].map((t => t["id"])));
					i["tabsMeta"] = i["tabsMeta"].filter((t => !e.has(t["id"])));
				}
			}
			else if(t["type"] === "deleteTabs") {
				let i = a["tabGroups"].find((e => e["id"] === t["tabGroupId"]));
				if(!e) {
					let e = new Set(t["tabMetaIds"]);
					i["tabsMeta"] = i["tabsMeta"].filter((t => !e.has(t["id"])));
				}
				else {
					let e = [];
					t["tabsMetaDeleted"].forEach(((a, i) => e.push([a, t["tabIndicesDeleted"][i]])));
					e.sort(((t, e) => t[1] - e[1]));
					e.forEach((([t, e]) => i["tabsMeta"].splice(e, 0, t)));
				}
			}
			else if(t["type"] === "deleteTabGroup") {
				if(!e) {
					let e = a["tabGroups"].findIndex((e => e["id"] === t["tabGroupId"]));
					a["tabGroups"].splice(e, 1);
				}
				else {
					a["tabGroups"].splice(Math.max(0, t["index"]), 0, t["deletedTabGroup"]);
				}
			}
			else if(t["type"] === "updateTabGroup") {
				let i = e ? "old" : "new";
				let s = e ? "new" : "old";
				let n = a["tabGroups"];
				let o = n.find((e => e["id"] === t["tabGroupId"]));
				let l = t["propChanges"];
				if(l["starred"]) {
					o["starred"] = l["starred"][i];
					o["starredDate"] = l["starredDate"][i];
				}
				if(l["label"]) {
					o["label"] = l["label"][i];
				}
				if(l["locked"]) {
					o["locked"] = l["locked"][i];
				}
				if(l["index"]) {
					n.splice(l["index"][i], 0, ...n.splice(l["index"][s], 1));
				}
			}
			else if(t["type"] === "reorderTab") {
				let i = a["tabGroups"].find((e => e["id"] === t["tabGroupId"]));
				let s = i["tabsMeta"].findIndex((e => e["id"] === t["tabMetaId"]));
				let n = i["tabsMeta"][s];
				let o = t["newIndex"];
				if(e) {
					o = s;
					s = t["newIndex"];
				}
				i["tabsMeta"].splice(s, 1);
				i["tabsMeta"].splice(Math.min(o, i["tabsMeta"].length), 0, n);
			}
			else if(t["type"] === "moveTabBetweenTabGroups") {
				let i = a["tabGroups"].findIndex((e => e["id"] === t["sourceTabGroupId"]));
				let s = a["tabGroups"][i];
				let n = a["tabGroups"].find((e => e["id"] === t["targetTabGroupId"]));
				if(!e) {
					let e = s["tabsMeta"].findIndex((e => e["id"] === t["tabMetaId"]));
					let i = s["tabsMeta"].splice(e, 1)[0];
					n["tabsMeta"].splice(t["targetTabGroupTabIndex"], 0, i);
					if(t["deletedSourceTabGroup"]) {
						a["tabGroups"] = a["tabGroups"].filter((e => e["id"] !== t["deletedSourceTabGroup"]["id"]));
					}
				}
				else {
					let e = n["tabsMeta"].findIndex((e => e["id"] === t["tabMetaId"]));
					let i = n["tabsMeta"].splice(e, 1)[0];
					if(t["deletedSourceTabGroup"]) {
						a["tabGroups"] = a["tabGroups"].splice(t["sourceTabGroupIndex"], 0, t["deletedSourceTabGroup"]);
					}
					else {
						s.splice(t["sourceTabGroupTabIndex"], 0, i);
					}
				}
			}
			await this.ct(a);
			await this.ut(t, e);
		}
		finally {
			this.Z.release();
		}
	}
	O() {
		let t = ["addOneTabNow", "95PctMemoryReduction", "noTabsInOneTabYet", "importUrls", "exportImportUrls", "pleaseWaitTripleDot", "about", "optionTabGroupRestoreNewWindow", "optionPinnedTabsDontSend", "beforeLostInMessBrowserSlow", "sendAllTabsAllWindowsToPlaceholder", "convertTabsIntoAList", "tooManyTabsSpeedUpFirefox", "sendOnlyThisTabToPlaceholder", "emptyOneTabInfoMsg", "OneTabAlsoAvailableForFirefox", "feedback", "optionRestoreRemovalDefault", "features", "unlockBeforeDeleting", "sendRightTabsToOneTab", "tab", "sendAllTabsToPlaceholder", "options", "sendThisWebLinkToOneTab", "namedTabGroups", "export", "excludeDomainFromOneTab", "optionStartupLaunchDisplay", "lockTabGroup", "optionTabGroupRestoreCurrentWindowAlways", "noSignupRegistrationRequired", "optionStartupLaunchNone", "optionDuplicatesRejectDesc", "unstarTabGroup", "shareAllAsWebPage", "nameThisTabGroup", "afterInstantReliefRestoreLater", "languageTitle", "memoryAfter99", "sendThisWebLinkToPlaceholder", "optionRestoreRemovalDefaultDesc", "sendLeftTabsToOneTab", "optionRestoreRemovalKeepDesc", "nowAvailableInLanguage", "moreTripleDot", "sendOnlyThisTabToOneTab", "restoreAll", "optionPinnedTabsDontSendDesc", "optionPinnedTabsAllow", "exportUrls", "optionDuplicatesAllow", "bringAllTabsIntoOneTab", "import", "total0Tabs", "2tabs", "optionPinnedTabsTitle", "manifestDescription", "displayOneTab", "memoryBefore1981", "optionDuplicatesTitle", "sendAllTabsToOneTab", "optionTabGroupRestoreNewWindowAlways", "newExclamation", "userLanguage", "sendCurrentTabToOneTab", "optionDuplicatesReject", "save95PctReduceTabClutterGoogleChrome", "areYouSureYouWantToDeleteThisTab", "pasteInUrlsInstructions", "1tab", "exportThenImportNote", "optionRestoreRemovalTitle", "excludeWebSiteFromOneTab", "optionStartupLaunchNoneDesc", "sendAllTabsAllWindowsToOneTab", "optionRestoreRemovalKeep", "total2Tabs", "deleteAll", "createdPreceedingDate", "sendAllTabsExceptThisTabToPlaceholder", "optionPinnedTabsNote", "starTabGroup", "total1Tab", "unlockTabGroup", "help", "optionTabGroupRestoreTitle", "sendRightTabsToPlaceholder", "areYouSureYouWantToDeleteTheseTabs", "shareAsWebPage", "optionStartupLaunchTitle", "sendLeftTabsToPlaceholder", "reduceMemoryUsageBy95Pct", "sendAllTabsExceptThisToOneTab"];
		let e = {};
		for(const a of t) e[a] = St(a);
		return e;
	}
	async ft() {
		let t = await this.getState();
		let e = [];
		let a = (new Date).getTime();
		for(let t = 0; t < 100; t++) {
			let i = {
				createDate: a--,
				tabsMeta: [],
				label: "tab group " + t,
				id: I()
			};
			e.push(i);
			for(let e = 0; e < 20; e++) {
				i["tabsMeta"].push({
					id: z(),
					url: "https://en.wikipedia.org/wiki/" + (20 * t + e),
					title: "wikipedia " + (20 * t + e)
				});
			}
		}
		let i = Math.max(0, t["tabGroups"].findIndex((t => !t["starred"])));
		let s = e.map(((t, e) => ({
			type: "createTabGroup",
			tabGroupId: t["id"],
			tabGroup: t,
			index: i + e
		})));
		for(let t of s) await this.ht(t);
		await this.H();
	}
	async wt() {
		if(qe["pinned"]) return;
		let t = await this.getState();
		let e = t["tabGroups"].map((t => t["tabsMeta"].length)).reduce(((t, e) => t + e), 0);
		if(e === 0) {
			let t = await de();
			let e = t.find((t => he(t["url"])));
			if(e) await pe(e);
		}
	}
	async getSettings() {
		let t = await We().get("settings");
		if(!t) return {};
		else return JSON.parse(t);
	}
	async dt(t, e) {
		await this.tt.K();
		try {
			let a = await this.getSettings();
			a[t] = e;
			await this.bt(a);
		}
		finally {
			this.tt.release();
		}
	}
	async bt(t) {
		await We().put("settings", JSON.stringify(t));
	}
	async Tt(t) {
		let e = await this.getSettings();
		return D(t, e);
	}
	async getState() {
		let t = await We().get("state");
		if(!t) return {};
		else return JSON.parse(t);
	}
	async ct(t) {
		let e = await We().get("state");
		let a = e;
		await We().put("state", JSON.stringify(t));
		e = await We().get("state");
		try {
			JSON.parse(e);
		}
		catch (t) {
			await We.put("state", a);
			alert("Could not store extension state");
		}
	}
	async yt(t, e, a) {
		let i = {
			id: z(),
			url: X(t),
			title: W(e)
		};
		await this.gt(i, a);
	}
	async xt(t, e) {
		if(he(t["url"])) {
			return;
		}
		let a = {
			id: z(),
			url: X(t["url"]),
			title: W(t["title"])
		};
		["pinned", "incognito"].filter((e => t[e])).forEach((e => a[e] = t[e]));
		await this.gt(a, e);
		await pe(t);
	}
	async gt(t, e) {
		t = {
			...t
		};
		t["url"] = X(t["url"]);
		if(Ye(t["url"])) {
			alert("Cannot import tabs of this type");
			return;
		}
		let a = await this.getState();
		if(typeof e === "undefined") {
			let e = a["tabGroups"].find((t => !t["starred"] && !t["locked"]));
			if(e) {
				await this.ht({
					type: "createTabs",
					tabGroupId: e["id"],
					newTabsMeta: [t]
				});
			}
			else {
				e = {
					id: z(),
					tabsMeta: [t],
					createDate: (new Date).getTime()
				};
				let i = Math.max(0, a["tabGroups"].findIndex((t => !t["starred"])));
				await this.ht({
					type: "createTabGroup",
					tabGroupId: e["id"],
					tabGroup: e,
					index: i
				});
			}
		}
		else {
			await this.ht({
				type: "createTabs",
				tabGroupId: e,
				newTabsMeta: [t]
			});
		}
	}
	Pt(t, e, a) {
		return t["pinned"] && D("pinnedTabs", a) === "ignore" || he(e) || e.indexOf("chrome-devtools://") === 0;
	}
	Ot(t, e, a) {
		return ce(e) && !he(e) || Ye(e) || D("duplicates", a) === "reject" && t["tabGroups"].some((t => t["tabsMeta"].some((t => X(t["url"]) === e))));
	}
	async ot(t, e, a, i) {
		let s = await this.getSettings();
		let n = await this.getState();
		let o = new Set((await de()).map((t => t["id"])));
		let l = t.filter((t => o.has(t["id"]) && (!e || !this.At(X(t["url"]), s))));
		l.sort(((t, e) => t["index"] - e["index"]));
		let r = [];
		let w = [];
		if(l.some((t => t["url"].indexOf("://tabmemfree.appspot.com") !== -1))) {
			alert("The OneTab extension is not compatible with TabMemFree. Please ensure that none of your tabs are parked with TabMemFree, then uninstall the TabMemFree extension and restart your web browser before using OneTab.");
			return;
		}
		for(let t of l) {
			let e = t["url"];
			if(!e && t["pendingUrl"]) e = t["pendingUrl"];
			let a = X(e);
			if(!this.Pt(t, a, s)) {
				w.push(t);
				if(!this.Ot(n, a, s) && !r.some((t => t["url"] === a))) {
					let e = {
						id: z(),
						url: a,
						title: W(t["title"])
					};
					if(t["pinned"]) e["pinned"] = true;
					r.push(e);
				}
			}
		}
		if(r.length > 0) {
			if(typeof a === "undefined") {
				let t = {
					id: z(),
					tabsMeta: r,
					createDate: (new Date).getTime()
				};
				let e = Math.max(0, n["tabGroups"].findIndex((t => !t["starred"])));
				await this.ht({
					type: "createTabGroup",
					tabGroupId: t["id"],
					tabGroup: t,
					index: e
				});
			}
			else {
				await this.ht({
					type: "createTabs",
					tabGroupId: a,
					newTabsMeta: r
				});
			}
		}
		if(w.length === 0) {
			await Mt.H(false, undefined);
		}
		else {
			await xe(w, i);
		}
	}
	At(t, e) {
		return this.St(O(t), e);
	}
	St(t, e) {
		if(e["excludedDomains"]) {
			for(let a of e["excludedDomains"])
				if(a === t) return true;
		}
		return false;
	}
	async Et(t) {
		await this.tt.K();
		try {
			let e = await this.getSettings();
			if(!this.St(t, e)) {
				if(!e["excludedDomains"]) e["excludedDomains"] = [];
				e["excludedDomains"].push(t);
				await this.bt(e);
			}
		}
		finally {
			this.tt.release();
		}
	}
	async kt(t) {
		await this.tt.K();
		try {
			let e = await this.getSettings();
			if(!e["excludedDomains"]) return;
			e["excludedDomains"] = e["excludedDomains"].filter((e => e !== t));
			await this.bt(e);
		}
		finally {
			this.tt.release();
		}
	}
	async Gt() {
		let t = await this.getState();
		if(!t["tabGroups"]) {
			t["tabGroups"] = [];
			await this.ct(t);
		}
		let e = false;
		t["tabGroups"].forEach((t => {
			if(t["tabsMeta"].some((t => t === null))) {
				t["tabsMeta"] = t["tabsMeta"].filter((t => t !== null));
				e = true;
			}
		}));
		if(e) {
			await this.ct(t);
			alert("Null tabsMeta found and fixed");
		}
		if(![...t["tabGroups"]].sort(U).every(((e, a) => e === t["tabGroups"][a]))) {
			console.log("Tabgroups correctly reordered");
			t["tabGroups"].sort(U);
			await this.ct(t);
		}
	}
	async vt() {
		await this.H();
	}
	async It(t) {
		let e = await le();
		await this.xt(e, t);
	}
	async Dt(t, e, a) {
		const i = !o;
		let s = t["linkUrl"];
		let n = t["frameId"];
		let l = t["linkTitle"];
		if(!l) l = t["linkText"];
		if(!l && !i) l = "untitled";
		if(l) {
			await this.yt(s, l, a);
		}
		else {
			await new Promise(((t, a) => {
				window.chrome.tabs.executeScript(e["id"], {
					file: "ext-onetab-concatenated-sources-contentscript.js",
					frameId: n,
					runAt: "document_start"
				}, (() => {
					if(chrome.runtime.lastError) {
						a(chrome.runtime.lastError.message);
					}
					else {
						t();
					}
				}));
			}));
			let t = await new Promise(((t, a) => {
				window.chrome.tabs.sendMessage(e["id"], {
					type: "getLinkTitle",
					url: s
				}, {
					frameId: n
				}, (e => {
					if(chrome.runtime.lastError) {
						a(chrome.runtime.lastError.message);
					}
					else {
						t(e["title"]);
					}
				}));
			}));
			await this.yt(s, t, a);
			let i = "Pbclevtug BarGno Ygq jjj.bar-gno.pbz";
		}
	}
	async Ct(t) {
		let {
			tabs: e,
			Rt: a
		} = await ue();
		await this.ot(e, true, t, true);
	}
	async Ut(t) {
		let {
			tabs: e,
			Rt: a
		} = await ue();
		let i = [];
		if(a) {
			for(let t of e)
				if(parseInt(t["index"]) !== parseInt(a["index"])) i.push(t);
			if(i.length > 0) {
				await this.ot(i, true, t, false);
			}
		}
		else {
			console.log("no active tab");
		}
	}
	async Bt(t) {
		let {
			tabs: e,
			Rt: a
		} = await ue();
		let i = [];
		if(a) {
			for(let t of e)
				if(parseInt(t["index"]) < parseInt(a["index"])) i.push(t);
			if(i.length > 0) {
				await this.ot(i, true, t, false);
			}
		}
	}
	async Wt(t) {
		let {
			tabs: e,
			Rt: a
		} = await ue();
		let i = [];
		if(a) {
			for(let t of e)
				if(parseInt(t["index"]) > parseInt(a["index"])) i.push(t);
			if(i.length > 0) {
				await this.ot(i, true, t, false);
			}
		}
	}
	async Lt() {
		await Promise.all((await de()).filter((t => t["pinned"] && !t["pendingUrl"] && !t["url"])).map((t => pe(t))));
	}
	Mt() {
		return qe.hasOwnProperty("pinned") ? !!qe["pinned"] : true;
	}
	async Nt(t) {
		if(f) return false;
		try {
			let e = await _e(t);
			if(e === undefined) return false;
			let a = (await de()).filter((e => he(e["url"]) && e["id"] !== t));
			if(a.length > 1) {
				await Promise.all(a.slice(1).map((t => me(t["id"]))));
			}
			if(a.length > 0) {
				await Pe(a[0]);
				await me(t);
				return true;
			}
		}
		catch (t) {
			console.log(t);
			return false;
		}
	}
	async H(t, e) {
		if(f) await this.Lt();
		let a = !t;
		let i = await de();
		let s = i.filter((t => he(t["url"]))).slice().sort(((t, a) => (t["windowId"] === e) - (a["windowId"] === e) || !!t["active"] - !!a["active"])).find((t => true));
		if(s) {
			await Promise.all(i.filter((t => !(t["pinned"] && f) && he(t["url"]) && t["id"] !== s["id"])).map((t => pe(t))));
			if(a) await Pe(s);
		}
		else {
			let i = false;
			let s = {
				url: k,
				pinned: this.Mt(),
				active: a
			};
			if(s["pinned"]) s["index"] = 0;
			if(window.chrome.windows) {
				if(e !== undefined) {
					s["windowId"] = e;
				}
				else {
					let t = await ke(false);
					if(t && t["incognito"]) {
						t = (await Ee(false)).find((t => !t["incognito"]));
					}
					if(t) {
						s["windowId"] = t["id"];
					}
					else {
						i = true;
					}
				}
			}
			if(i) {
				let e = await Ae({});
				if(!(this.Ft && (new Date).getTime() - this.Ft < 5e3)) {
					this.Ft = (new Date).getTime();
					await this.H(t, e["id"]);
				}
			}
			else {
				let t = await Oe(s);
				qe = {
					id: t["id"],
					index: t["index"],
					windowId: t["windowId"],
					pinned: t["pinned"],
					active: t["active"],
					updateDate: (new Date).getTime(),
					updateEvent: "showOneTab"
				};
				await this.dt("oneTabTabState", qe);
			}
		}
	}
	static $t(t, e, a, i) {
		t[e] = {
			old: a[e],
			new: i[e]
		};
	}
	async qt(t, e) {
		let a = await this.getState();
		let i = a["tabGroups"];
		let s = i.find((e => e["id"] === t));
		let n = {};
		let o = false;
		if(e.hasOwnProperty("starred")) {
			se.$t(n, "starred", s, e);
			se.$t(n, "starredDate", s, e);
		}
		if(e.hasOwnProperty("label")) {
			se.$t(n, "label", s, e);
			o = true;
		}
		if(e.hasOwnProperty("locked")) {
			se.$t(n, "locked", s, e);
		}
		if(e.hasOwnProperty("starred")) {
			s["starred"] = e["starred"];
			s["starredDate"] = e["starredDate"];
			let a = i.findIndex((e => e["id"] === t));
			let o = [...i].sort(U).findIndex((e => e["id"] === t));
			n["index"] = {
				old: a,
				new: o
			};
		}
		await this.ht({
			type: "updateTabGroup",
			tabGroupId: t,
			propChanges: n
		});
		if(o) {
			la();
		}
	}
	async Jt(t, e) {
		let a = await this.getState();
		let i = a["tabGroups"];
		let s = i.findIndex((e => e["id"] === t));
		let n = i[s];
		let o = JSON.parse(JSON.stringify(n));
		let l = n["tabsMeta"].find((t => t["id"] === e));
		let r = n["tabsMeta"].findIndex((t => t["id"] === e));
		let w = n["tabsMeta"].length === 1 && n["tabsMeta"][0]["id"] === e;
		if(w) {
			await this.ht({
				type: "deleteTabGroup",
				tabGroupId: n["id"],
				deletedTabGroup: o,
				index: s
			});
			la();
		}
		else {
			await this.ht({
				type: "deleteTabs",
				tabGroupId: n["id"],
				tabMetaIds: [e],
				tabsMetaDeleted: [l],
				tabIndicesDeleted: [r]
			});
		}
	}
	async jt(t, e, a) {
		let i = await this.getState();
		let s = i["tabGroups"].findIndex((e => e["id"] === t));
		let n = i["tabGroups"][s];
		await this.ht({
			type: "deleteTabGroup",
			tabGroupId: n["id"],
			deletedTabGroup: n,
			index: s
		});
		if(n["label"]) la();
		if(e) {
			await this.rt(n["tabsMeta"], a);
		}
	}
	async Vt(t, e, a) {
		let i = await this.getState();
		let s = i["tabGroups"].find((e => e["id"] === t));
		let n = s["tabsMeta"].findIndex((t => t["id"] === e));
		let o = s["tabsMeta"][n];
		let l;
		if(a !== undefined) {
			l = s["tabsMeta"].filter((t => t["id"] !== e)).findIndex((t => t["id"] === a));
		}
		else {
			l = Math.max(0, s["tabsMeta"].length - 1);
		}
		await this.ht({
			type: "reorderTab",
			tabMetaId: o["id"],
			tabGroupId: s["id"],
			oldIndex: n,
			newIndex: l
		});
	}
	async Kt(t, e, a, i) {
		let s = await this.getState();
		let n = s["tabGroups"].findIndex((e => e["id"] === t));
		let o = s["tabGroups"][n];
		let l = JSON.parse(JSON.stringify(o));
		let r = o["tabsMeta"].findIndex((t => t["id"] === a));
		let w = s["tabGroups"].find((t => t["id"] === e));
		let h;
		if(i !== undefined) {
			h = w["tabsMeta"].findIndex((t => t["id"] === i));
		}
		else {
			h = w["tabsMeta"].length;
		}
		let c = o["tabsMeta"].length === 1 && o["tabsMeta"][0]["id"] === a;
		let u = {
			type: "moveTabBetweenTabGroups",
			tabMetaId: a,
			sourceTabGroupId: o["id"],
			targetTabGroupId: w["id"],
			sourceTabGroupTabIndex: r,
			targetTabGroupTabIndex: h,
			sourceTabGroupIndex: n
		};
		if(c) u["deletedSourceTabGroup"] = l;
		await this.ht(u);
		if(c) {
			la();
		}
	}
	Ht(t) {
		this._ = [t];
	}
	ut(t, e) {
		this._.forEach((a => {
			try {
				a(t, e);
			}
			catch (t) {
				try {
					if(!String(t).includes("access dead object")) console.log(t);
				}
				catch (t) {console.log(t);}
			}
		}));
	}
	async Yt(t, e) {
		let a = new Set(t || []);
		let i = await C(h + "/api/createPage", {
			key: await Mt.st(),
			tabGroups: (await this.getState())["tabGroups"].filter((t => e || a.has(t["id"])))
		});
		await Ge(i["url"], false, true);
	}
	async zt(t, e) {
		let a = await Mt.getState();
		let i = a["tabGroups"];
		let s = i.find((e => e["id"] === t));
		await Mt.rt(s["tabsMeta"], e);
	}
	async _t() {
		return await Ge(...arguments);
	}
	async Qt() {
		return await Oe(...arguments);
	}
	async Xt() {
		return await ve(...arguments);
	}
	async Zt(t, e) {
		if(!e) e = {};
		let a = (await de()).find((t => he(t["url"])));
		if(!a) throw new Error("OneTab tab not found");
		try {
			return await new Promise(((i, s) => {
				window.chrome.tabs.sendMessage(a["id"], {
					type: t,
					...e
				}, (t => {
					if(chrome.runtime.lastError) {
						if(f) console.trace();
						s(chrome.runtime.lastError.message);
					}
					else {
						if(t && t.error) {
							s(t.error);
						}
						else i(t);
					}
				}));
			}));
		}
		catch (t) {
			throw new Error(t);
		}
	}
}
let Mt = new se;
window.core = Mt;
async function le() {
	return new Promise(((t, e) => {
		window.chrome.tabs.query({
			active: true,
			currentWindow: true
		}, (a => {
			if(chrome.runtime.lastError) {
				e(chrome.runtime.lastError.message);
			}
			else {
				if(a && a.length === 1) t(a[0]);
				else e("No current tab found");
			}
		}));
	}));
}

function we(t) {
	if(t === "") return true;
	if(He.some((e => t.indexOf(e) === 0))) return true;
	return false;
}

function he(t) {
	return t && t.indexOf(k) === 0;
}

function ce(t) {
	return t && t.indexOf(T) === 0;
}
async function ue() {
	return new Promise(((t, e) => {
		(async () => {
			let a = {};
			if(window.chrome.windows) {
				let e = await ke(false);
				if(e === undefined) {
					t(undefined);
					return;
				}
				a = {
					windowId: e["id"]
				};
			}
			window.chrome.tabs.query(a, (a => {
				if(chrome.runtime.lastError) {
					e(chrome.runtime.lastError.message);
				}
				else {
					let e;
					for(let t of a) {
						if(t["active"]) {
							e = t;
							break;
						}
					}
					t({
						tabs: a,
						Rt: e
					});
				}
			}));
		})();
	}));
}
async function fe(t) {
	return new Promise(((e, a) => {
		(async () => {
			window.chrome.tabs.query({
				windowId: t
			}, (t => {
				if(chrome.runtime.lastError) {
					a(chrome.runtime.lastError.message);
				}
				else {
					let a;
					for(let e of t) {
						if(e["active"]) {
							a = e;
							break;
						}
					}
					e({
						tabs: t,
						Rt: a
					});
				}
			}));
		})();
	}));
}
async function de() {
	return new Promise(((t, e) => {
		window.chrome.tabs.query({}, (a => {
			if(chrome.runtime.lastError) {
				e(chrome.runtime.lastError.message);
			}
			else {
				t(a);
			}
		}));
	}));
}
async function be(t) {
	let e = undefined;
	if(window.chrome.windows) {
		e = await ke(false);
	}
	return new Promise(((a, i) => {
		window.chrome.tabs.query({}, (s => {
			if(chrome.runtime.lastError) {
				i(chrome.runtime.lastError.message);
			}
			else {
				let i = new Map;
				for(let a of s) {
					let s = a["windowId"];
					if(t && e && s === e["id"]) continue;
					if(!i.has(s)) i.set(s, []);
					i.get(s).push(a);
				}
				let n = Array.from(i.values());
				a(n);
			}
		}));
	}));
}
async function Te(t) {
	return new Promise(((e, a) => {
		window.chrome.tabs.reload(t["id"], {}, (() => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				e();
			}
		}));
	}));
}
async function pe(t) {
	return await me(t["id"]);
}
async function me(t) {
	return new Promise(((e, a) => {
		window.chrome.tabs.remove(t, (() => {
			if(chrome.runtime.lastError) {
				console.log(chrome.runtime.lastError.message);
				e();
			}
			else {
				e();
			}
		}));
	}));
}
async function ye(t) {
	return new Promise(((e, a) => {
		window.chrome.windows.remove(t, (() => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				e();
			}
		}));
	}));
}

function ge(t, e) {
	let a = new Map;
	t.forEach((t => {
		let i = t[e];
		if(!a.has(i)) a.set(i, []);
		a.get(i).push(t);
	}));
	return a;
}
async function xe(t, e) {
	if(t.length === 0) return;
	if(u) {
		for(let e of t) await pe(e);
		return;
	}
	let a = t.some((t => !t["pinned"])) ? t.find((t => !t["pinned"]))["windowId"] : t[0]["windowId"];
	let i = !!(await Ee(false)).find((t => t["id"] === a))["incognito"];
	let s = await de();
	let n = ge(s, "windowId");
	let o = n.get(a).filter((e => !e["pinned"] && !t.some((t => t["id"] === e["id"])))).length === 0;
	let l = n.get(a).filter((e => !t.some((t => t["id"] === e["id"])))).length > 0;
	let r = (await Ee(true)).filter((t => !t["incognito"] && t["id"] !== a));
	if(r.length > 0) {
		let s = !f && !l || f && o;
		if(s) {
			if(e) {
				await Mt.H(false, r[0]["id"]);
			}
			else {
				await Pe(r[0]["tabs"][0]);
			}
			if(f) {
				await Promise.all(t.filter((t => t["pinned"])).map((t => pe(t))));
			}
			await ye(a);
		}
		else {
			if(e) {
				let t = i ? r[0]["id"] : a;
				await Mt.H(false, t);
			}
			await Promise.all(t.map((t => pe(t))));
		}
	}
	else {
		if(e) {
			await Mt.H(false, i ? undefined : a);
		}
		await Promise.all(t.map((t => pe(t))));
	}
}
async function Pe(t) {
	return new Promise(((e, a) => {
		window.chrome.tabs.update(t["id"], {
			active: true
		}, (() => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				if(window.chrome.windows) {
					window.chrome.windows.update(t["windowId"], {
						focused: true
					}, (() => {
						if(chrome.runtime.lastError) {
							a(chrome.runtime.lastError.message);
						}
						else {
							e();
						}
					}));
				}
				else {
					e();
				}
			}
		}));
	}));
}
async function Oe(t) {
	t = {
		...t
	};
	if(f && t.hasOwnProperty("index")) delete t["index"];
	if(!window.chrome.windows) delete t["windowId"];
	if(u) delete t["pinned"];
	return new Promise(((e, a) => {
		window.chrome.tabs.create(t, (t => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				e(t);
			}
		}));
	}));
}
async function Ae(t) {
	return new Promise(((e, a) => {
		window.chrome.windows.create(t, (t => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				e(t);
			}
		}));
	}));
}
async function Se(t, e) {
	return new Promise(((a, i) => {
		window.chrome.tabs.move(t, {
			index: e
		}, (() => {
			if(chrome.runtime.lastError) {
				i(chrome.runtime.lastError.message);
			}
			else {
				a();
			}
		}));
	}));
}
async function Ee(t) {
	return new Promise(((e, a) => {
		window.chrome.windows.getAll({
			populate: !!t
		}, (t => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				e(t);
			}
		}));
	}));
}
async function ke(t) {
	return new Promise(((e, a) => {
		window.chrome.windows.getLastFocused({
			populate: !!t
		}, (t => {
			if(chrome.runtime.lastError) {
				console.log(`windows.getLastFocused error: ${chrome.runtime.lastError}`);
				e(undefined);
			}
			else {
				e(t);
			}
		}));
	}));
}
async function Ge(t, e, a, i = {}) {
	i["url"] = t;
	i["pinned"] = !!e;
	i["active"] = !!a;
	if(window.chrome.windows) {
		let t = await ke(false);
		if(t) i["windowId"] = t["id"];
	}
	return await Oe(i);
}
async function ve(t) {
	return new Promise(((e, a) => {
		let i = {
			url: Mt.it(t[0]["url"])
		};
		if(!o) i["focused"] = true;
		window.chrome.windows.create(i, (i => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				window.chrome.tabs.query({
					windowId: i["id"]
				}, (s => {
					if(chrome.runtime.lastError) {
						a(chrome.runtime.lastError.message);
					}
					else {
						window.chrome.tabs.update(s[s.length - 1]["id"], {
							pinned: !!t[0]["pinned"]
						}, (() => {
							(async () => {
								for(let e of t.slice(1)) {
									await Oe({
										url: Mt.it(e["url"]),
										pinned: !!e["pinned"],
										windowId: i["id"]
									});
								}
								e(i);
							})();
						}));
					}
				}));
			}
		}));
	}));
}
async function Ie(t, e) {
	return new Promise(((a, i) => {
		if(t) e["parentId"] = t.te;
		let s = {};
		s.te = window.chrome.contextMenus.create(e, (() => {
			if(chrome.runtime.lastError) {
				i(chrome.runtime.lastError.message);
			}
			else {
				a(s);
			}
		}));
	}));
}
async function De(t, e) {
	return new Promise(((a, i) => {
		if(t) e["parentId"] = t.te;
		let s = {
			title: e["title"],
			ee: !!e["checked"],
			isEnabled: !!e["enabled"]
		};
		s.ae = t => {
			window.chrome.contextMenus.update(s.te, {
				enabled: t
			}, (() => {}));
			s.isEnabled = t;
		};
		s.ie = t => {
			window.chrome.contextMenus.update(s.te, {
				type: "checkbox",
				checked: t
			}, (() => {}));
			s.ee = t;
		};
		s.se = t => {
			window.chrome.contextMenus.update(s.te, {
				title: t
			}, (() => {}));
			s.title = t;
		};
		s.te = window.chrome.contextMenus.create(e, (() => {
			if(chrome.runtime.lastError) {
				i(chrome.runtime.lastError.message);
			}
			else {
				a(s);
			}
		}));
	}));
}
async function Ce(t) {
	return new Promise(((e, a) => {
		if(t) {
			window.chrome.contextMenus.removeAll((() => {
				if(chrome.runtime.lastError) {
					a(chrome.runtime.lastError.message);
				}
				else {
					e();
				}
			}));
		}
		else e();
	}));
}

function Re(t) {
	let e = {
		type: "separator",
		contexts: ["all"]
	};
	if(t) e["parentId"] = t.te;
	window.chrome.contextMenus.create(e);
}
class Ue {
	async put(t, e) {
		return new Promise(((a, i) => {
			let s = {};
			s[t] = e;
			window.chrome["storage"]["local"]["set"](s, (() => {
				if(chrome.runtime.lastError) i(chrome.runtime.lastError.message);
				else a();
			}));
		}));
	}
	async ne(t) {
		return new Promise(((e, a) => {
			window.chrome.storage.local.set(t, (() => {
				if(chrome.runtime.lastError) a(chrome.runtime.lastError.message);
				else e();
			}));
		}));
	}
	async get(t) {
		return new Promise(((e, a) => {
			window.chrome.storage.local.get(t, (i => {
				if(chrome.runtime.lastError) a(chrome.runtime.lastError.message);
				else e(i[t]);
			}));
		}));
	}
	async getAll(t) {
		return new Promise(((e, a) => {
			window.chrome.storage.local.get(t, (t => {
				if(chrome.runtime.lastError) a(chrome.runtime.lastError.message);
				else e(t);
			}));
		}));
	}
	async oe() {
		return new Promise(((t, e) => {
			window.chrome.storage.local.clear((() => {
				if(chrome.runtime.lastError) e(chrome.runtime.lastError.message);
				else t();
			}));
		}));
	}
}
const Be = new Ue;

function We() {
	return Be;
}

function Le(t) {
	window.chrome.browserAction.onClicked.addListener((() => {
		t();
	}));
}

function Me() {
	if(!u) {
		window.chrome.commands.onCommand.addListener((t => {
			(async () => {
				if(t === "display-onetab") {
					await Mt.H();
				}
				if(t === "send-current-tab-to-onetab") {
					await Mt.It();
				}
				if(t === "send-all-tabs-in-current-window-to-onetab") {
					await Mt.Ct();
				}
				if(t === "send-all-tabs-in-all-windows-to-onetab") {
					await Mt.nt(undefined);
				}
				if(t === "send-all-tabs-except-this-to-onetab") {
					await Mt.Ut(undefined, undefined);
				}
			})();
		}));
	}
}
let Ne = {};

function Fe(t, e, a, i) {
	if(i) {
		delete Ne[t];
		a();
	}
	else {
		if(!Ne[t]) {
			Ne[t] = true;
			setTimeout((() => Fe(t, e, a, true)), e);
		}
	}
}

function $e(t) {
	const e = () => Fe("contextMenuUpdate", 50, t);
	window.chrome.tabs.onCreated.addListener((t => e()));
	window.chrome.tabs.onUpdated.addListener(((t, a, i) => e()));
	window.chrome.tabs.onMoved.addListener(((t, a) => e()));
	window.chrome.tabs.onRemoved.addListener(((t, a) => e()));
	window.chrome.tabs.onReplaced.addListener(((t, a) => e()));
	window.chrome.tabs.onDetached.addListener(((t, a) => e()));
	window.chrome.tabs.onAttached.addListener(((t, a) => e()));
	window.chrome.tabs.onActivated.addListener((t => e()));
	window.chrome.windows.onFocusChanged.addListener((t => e()));
	window.chrome.windows.onCreated.addListener((t => e()));
	window.chrome.windows.onRemoved.addListener((t => e()));
}
let qe = {};

function Je(t) {
	if(qe["id"]) {
		(async () => {
			let e = (await de()).find((t => he(t["url"])));
			if(e) {
				if(qe["index"] !== e["index"]) {
					qe["index"] = e["index"];
					qe["updateDate"] = (new Date).getTime();
					qe["updateEvent"] = "otherTab-" + t;
					await Mt.dt("oneTabTabState", qe);
				}
			}
		})();
	}
}

function je() {
	window.chrome.tabs.onCreated.addListener((t => {
		if([t["url"], t["pendingUrl"]].some((t => he(t)))) {
			qe = {
				id: t["id"],
				index: t["index"],
				windowId: t["windowId"],
				pinned: t["pinned"],
				active: t["active"],
				updateDate: (new Date).getTime(),
				updateEvent: "onCreated"
			};
			Mt.dt("oneTabTabState", qe);
		}
		else {
			Je("onCreated");
		}
	}));
	window.chrome.tabs.onUpdated.addListener(((t, e, a) => {
		(async () => {
			if([a["url"], a["pendingUrl"]].some((t => he(t)))) {
				let e = qe["id"] !== undefined ? await _e(qe["id"]) : undefined;
				if(e !== undefined && e["id"] === t || e === undefined) {
					if(e === undefined && qe["updateEvent"] !== "onUpdated") {
						await ta(t, {
							pinned: qe["pinned"]
						});
						qe["id"] = a["id"];
					}
					else {
						qe["pinned"] = a["pinned"];
					} ["index", "windowId", "active"].forEach((t => qe[t] = a[t]));
					qe["updateDate"] = (new Date).getTime();
					qe["updateEvent"] = "onUpdated";
					await Mt.dt("oneTabTabState", qe);
				}
			}
			else if(qe["id"] === t) {
				if(a["pinned"]) {
					await ta(t, {
						pinned: false
					});
				}
				delete qe["id"];
				delete qe["windowId"];
				qe["updateDate"] = (new Date).getTime();
				qe["updateEvent"] = "onUpdated-navigatedAway";
				await Mt.dt("oneTabTabState", qe);
			}
		})();
	}));
	window.chrome.tabs.onMoved.addListener(((t, e) => {
		if(qe["id"] === t) {
			qe["windowId"] = e["windowId"];
			qe["index"] = e["toIndex"];
			qe["updateDate"] = (new Date).getTime();
			qe["updateEvent"] = "onMoved";
			Mt.dt("oneTabTabState", qe);
		}
		else {
			Je("onMoved");
		}
	}));
	window.chrome.tabs.onActivated.addListener((t => {
		if(qe["id"] === t["tabId"]) {
			qe["active"] = true;
			qe["updateDate"] = (new Date).getTime();
			qe["updateEvent"] = "onActivated";
			Mt.dt("oneTabTabState", qe);
		}
		else {
			if(t["windowId"] === qe["windowId"] && qe["active"]) {
				qe["active"] = false;
				qe["updateDate"] = (new Date).getTime();
				qe["updateEvent"] = "otherTab-onActivated";
				Mt.dt("oneTabTabState", qe);
			}
		}
	}));
	window.chrome.tabs.onAttached.addListener(((t, e) => {
		if(qe["id"] === t) {
			qe["windowId"] = e["newWindowId"];
			qe["index"] = e["newPosition"];
			qe["updateDate"] = (new Date).getTime();
			qe["updateEvent"] = "onAttached";
			Mt.dt("oneTabTabState", qe);
		}
		else {
			Je("onAttached");
		}
	}));
	window.chrome.tabs.onRemoved.addListener(((t, e) => {
		if(qe["id"] === t) {
			delete qe["id"];
			delete qe["windowId"];
			qe["updateDate"] = (new Date).getTime();
			qe["updateEvent"] = "onRemoved";
			Mt.dt("oneTabTabState", qe);
		}
		else {
			Je("onAttached");
		}
	}));
	window.chrome.tabs.onDetached.addListener(((t, e) => {
		Je("onDetached");
	}));
}

function Ve(t) {
	return window.chrome.runtime.getURL(t);
}

function St(t) {
	return window.chrome.i18n.getMessage(t);
}
if(chrome.runtime.onUpdateAvailable) chrome.runtime.onUpdateAvailable.addListener((() => {
	(async () => {
		await Ke("onUpdateAvailable");
	})();
}));
async function Ke(t) {
	qe["updateDate"] = (new Date).getTime();
	qe["updateEvent"] = t;
	await Mt.dt("oneTabTabState", qe);
	chrome.runtime.reload();
}
const He = [...["newtab", "home", "welcome", "welcomeback"].map((t => "about:" + t)), ...["newtab", "new-tab-page"].map((t => d + t + "/"))];

function Ye(t) {
	for(let e of ze)
		if(t.startsWith(e)) return true;
	if(!t || t === "" || t.startsWith("chrome-devtools:")) return true;
	return false;
}
const ze = ["javascript:", "about:", ...["chrome://", "edge://", "data:"].filter((t => o)), ...["edge://", "chrome://"].map((t => ["newtab", "new-tab-page", "print", "network-error", "badcastcrash", "inducebrowsercrashforrealz", "crash", "crashdump", "kill", "hang", "shorthang", "gpuclean", "gpucrash", "gpuhang", "memory-exhaust", "memory-pressure-critical", "memory-pressure-moderate", "ppapiflashcrash", "ppapiflashhang", "quit", "restart"].map((e => `${t}${e}/`)))).flat()];
async function _e(t) {
	return new Promise(((e, a) => {
		chrome.tabs.get(t, (t => {
			if(chrome.runtime.lastError) {
				e(undefined);
			}
			else {
				e(t);
			}
		}));
	}));
}
async function Qe() {
	return new Promise(((t, e) => {
		chrome.tabs.getCurrent((a => {
			if(chrome.runtime.lastError) {
				e(chrome.runtime.lastError.message);
			}
			else {
				t(a);
			}
		}));
	}));
}
async function Xe(t) {
	return new Promise(((e, a) => {
		window.chrome.tabs.query({}, (i => {
			if(chrome.runtime.lastError) {
				a(chrome.runtime.lastError.message);
			}
			else {
				e(i.filter((e => e["url"] === t)));
			}
		}));
	}));
}
async function Ze(t) {
	let e = await Xe(t);
	if(e.length === 0) throw new Error("No tab found with URL: " + t);
	else if(e.length > 1) throw new Error("More than one tab found with URL: " + t);
	else return e[0];
}
async function ta(t, e) {
	return new Promise(((a, i) => {
		window.chrome.tabs.update(t, e, (() => {
			if(chrome.runtime.lastError) {
				i(chrome.runtime.lastError.message);
			}
			else {
				a();
			}
		}));
	}));
}
let ea = {};

function aa() {
	ea.le = undefined;
	ea.re = undefined;
	ea.we = undefined;
	ea.he = [];
	ea.ce = [];
	ea.ue = [];
	ea.fe = [];
	ea.de = [];
	ea.be = [];
	ea.Te = [];
	ea.pe = undefined;
}

function ia(t, e) {
	for(let a of t) {
		for(let t of a) {
			t.ae(e);
		}
	}
}
let sa = "";
async function na() {
	try {
		if(oa) return;
		if(await ke(false) === undefined) return;
		let t = await Mt.getSettings();
		let e = await be(true);
		let {
			tabs: a,
			Rt: i
		} = await ue();
		let s = he(i["url"]);
		ea.re.ae(!s);
		let n = X(i["url"]);
		sa = n;
		ea.pe.ae(!s);
		if(n && n.toLowerCase().indexOf("http") === 0) {
			ea.pe.se(St("excludeDomainFromOneTab").replace("DOMAIN.COM", O(n)));
		}
		else {
			ea.pe.se(St("excludeWebSiteFromOneTab"));
		}
		ea.pe.ie(Mt.At(n, t));
		ia([ea.he, ea.ce, ea.ue, ea.fe, ea.de, ea.be], true);
		let o = false;
		let l = false;
		let r = false;
		let w = false;
		let h = false;
		if(i) {
			let e = parseInt(i["index"]);
			o = a.some((a => parseInt(a["index"]) < e && a["url"] && !Mt.Pt(a, X(a["url"]), t)));
			l = a.some((a => parseInt(a["index"]) > e && a["url"] && !Mt.Pt(a, X(a["url"]), t)));
			w = a.some((e => e["url"] && !Mt.Pt(e, X(e["url"]), t)));
			r = a.some((e => e["id"] !== i["id"] && e["url"] && !Mt.Pt(e, X(e["url"]), t)));
		}
		h = e.some((e => e.some((e => e["url"] && !Mt.Pt(e, X(e["url"]), t)))));
		if(!w) ia([ea.he], false);
		if(s || !w) ia([ea.ce], false);
		if(!o) ia([ea.ue], false);
		if(!l) ia([ea.fe], false);
		if(!h) ia([ea.de], false);
		if(!r) ia([ea.be], false);
	}
	catch (t) {
		console.log(`updateContextMenuState warning: ${t}`);
	}
}
let oa = false;
async function la() {
	if(!window.chrome.contextMenus) {
		return;
	}
	oa = true;
	try {
		await Ce(ea.le);
		aa();
		await ra();
	}
	finally {
		oa = false;
	}
	await na();
}
async function ra() {
	ea.le = await Ie(undefined, {
		type: "normal",
		contexts: ["all"],
		title: "OneTab"
	});
	ea.re = await De(ea.le, {
		type: "normal",
		title: St("displayOneTab"),
		contexts: ["all"],
		onclick: (t, e) => {
			Mt.vt();
		}
	});
	let t = await De(ea.le, {
		type: "normal",
		title: St("sendAllTabsToOneTab"),
		contexts: ["all"],
		onclick: (t, e) => {
			Mt.Ct(undefined);
		}
	});
	ea.he.push(t);
	let e = await De(ea.le, {
		type: "normal",
		title: St("sendThisWebLinkToOneTab"),
		contexts: ["link"],
		onclick: (t, e) => {
			Mt.Dt(t, e, undefined);
		}
	});
	ea.Te.push(e);
	Re(ea.le);
	let a = await De(ea.le, {
		type: "normal",
		title: St("sendOnlyThisTabToOneTab"),
		contexts: ["all"],
		onclick: (t, e) => {
			Mt.It(undefined, undefined);
		}
	});
	ea.ce.push(a);
	let s = await De(ea.le, {
		type: "normal",
		title: St("sendAllTabsExceptThisToOneTab"),
		contexts: ["all"],
		onclick: (t, e) => {
			Mt.Ut(undefined, undefined);
		}
	});
	ea.be.push(s);
	let n = await De(ea.le, {
		type: "normal",
		title: St("sendLeftTabsToOneTab"),
		contexts: ["all"],
		onclick: (t, e) => {
			Mt.Bt(undefined);
		}
	});
	ea.ue.push(n);
	let o = await De(ea.le, {
		type: "normal",
		title: St("sendRightTabsToOneTab"),
		contexts: ["all"],
		onclick: (t, e) => {
			Mt.Wt(undefined);
		}
	});
	ea.fe.push(o);
	let l = await De(ea.le, {
		type: "normal",
		title: St("sendAllTabsAllWindowsToOneTab"),
		contexts: ["all"],
		onclick: (t, e) => {
			Mt.nt(undefined);
		}
	});
	ea.de.push(l);
	Re(ea.le);
	ea.pe = await De(ea.le, {
		type: "checkbox",
		checked: false,
		contexts: ["all"],
		title: St("excludeWebSiteFromOneTab"),
		onclick: (t, e) => {
			(async () => {
				let t = await Mt.getSettings();
				let e = O(sa);
				let a = Mt.St(e, t);
				if(a) {
					await Mt.kt(e);
					await na();
				}
				else {
					await Mt.Et(e);
					await na();
				}
			})();
		}
	});
	let r = false;
	let w = await Mt.getState();
	let c = w["tabGroups"];
	if(!c) c = [];
	for(let t of c) {
		if(t["label"] && F(t["label"]) !== "") {
			r = true;
			break;
		}
	}
	if(r) {
		Re(ea.le);
		ea.we = await Ie(ea.le, {
			type: "normal",
			contexts: ["all"],
			title: St("namedTabGroups")
		});
		for(let t of c) {
			if(t["label"] && F(t["label"]) !== "") {
				await (async t => {
					let e = await Ie(ea.we, {
						type: "normal",
						contexts: ["all"],
						title: t["label"]
					});
					ea.he.push(await De(e, {
						type: "normal",
						title: St("sendAllTabsToPlaceholder").replace("PLACEHOLDER", t["label"]),
						contexts: ["all"],
						onclick: (e, a) => {
							Mt.Ct(t["id"]);
						}
					}));
					ea.Te.push(await De(e, {
						type: "normal",
						title: St("sendThisWebLinkToPlaceholder").replace("PLACEHOLDER", t["label"]),
						contexts: ["link"],
						onclick: (e, a) => {
							Mt.Dt(e, a, t["id"]);
						}
					}));
					ea.ce.push(await De(e, {
						type: "normal",
						title: St("sendOnlyThisTabToPlaceholder").replace("PLACEHOLDER", t["label"]),
						contexts: ["all"],
						onclick: (e, a) => {
							Mt.It(t["id"], undefined);
						}
					}));
					ea.be.push(await De(e, {
						type: "normal",
						title: St("sendAllTabsExceptThisTabToPlaceholder").replace("PLACEHOLDER", t["label"]),
						contexts: ["all"],
						onclick: (e, a) => {
							Mt.Ut(t["id"], undefined);
						}
					}));
					ea.ue.push(await De(e, {
						type: "normal",
						title: St("sendLeftTabsToPlaceholder").replace("PLACEHOLDER", t["label"]),
						contexts: ["all"],
						onclick: (e, a) => {
							Mt.Bt(t["id"]);
						}
					}));
					ea.fe.push(await De(e, {
						type: "normal",
						title: St("sendRightTabsToPlaceholder").replace("PLACEHOLDER", t["label"]),
						contexts: ["all"],
						onclick: (e, a) => {
							Mt.Wt(t["id"]);
						}
					}));
					ea.de.push(await De(e, {
						type: "normal",
						title: St("sendAllTabsAllWindowsToPlaceholder").replace("PLACEHOLDER", t["label"]),
						contexts: ["all"],
						onclick: (e, a) => {
							Mt.nt(t["id"]);
						}
					}));
				})(t);
			}
		}
	}
	Re(ea.le);
	let u = await De(ea.le, {
		type: "normal",
		title: St("help"),
		contexts: ["all"],
		onclick: (t, e) => {
			Ge(h + "/help", false, true);
		}
	});
	if(p) {
		let t = De(await ea.le, {
			type: "normal",
			title: "debug",
			contexts: ["all"],
			onclick: (t, e) => {
				(async () => {
					let t = await Mt.getState();
					console.log(JSON.stringify(t));
					let e = await Mt.st();
					console.log(JSON.stringify(e));
					let a = await Mt.getSettings();
					console.log(a);
					let s = await We().get("installDate");
					console.log("installDate", s);
					let n = await We().get("lastSeenVersion");
					console.log("currentVersion", i);
					console.log("lastSeenVersion", n);
				})();
			}
		});
	}
}
async function wa() {
	if(!window.localStorage["state"]) return;
	if(window.localStorage["stateMigrateDate"]) return;
	let t = async t => {
		let e = await We().get(t);
		if(window.localStorage[t] && !e) {
			await We().put(t, window.localStorage[t]);
			window.localStorage.removeItem(t);
		}
	};
	await t("extensionKey");
	await t("lastSeenVersion");
	await t("settings");
	let e = await We().get("installDate");
	if(window.localStorage["installDate"]) {
		if(!e || parseInt(e) > parseInt(window.localStorage["installDate"])) {
			await We().put("installDate", parseInt(window.localStorage["installDate"]));
		}
		window.localStorage.removeItem("installDate");
	}
	let a = await Mt.getState();
	if(!a) a = {};
	if(!a["tabGroups"]) a["tabGroups"] = [];
	let i = a["tabGroups"];
	if(window.localStorage["state"]) {
		let t = window.localStorage["state"];
		let e = JSON.parse(t);
		let s = e["tabGroups"];
		if(s) {
			for(let t of s) {
				i.push(t);
			}
			await Mt.ct(a);
			window.localStorage.removeItem("state");
			window.localStorage["oldState"] = t;
			window.localStorage["stateMigrateDate"] = (new Date).getTime();
			window.localStorage.removeItem("topSites");
		}
	}
}
async function ha() {
	if(o || a) await wa();
	await Mt.Gt();
	let t = await We().get("installDate");
	if(!t) {
		await We().put("installDate", (new Date).getTime());
	}
	Le((() => {
		if(u) {
			Mt.vt();
		}
		else {
			Mt.Ct(undefined);
		}
	}));
	if(f) {
		await Promise.all((await de()).filter((t => [t["url"], t["pendingUrl"]].some((t => ce(t))))).map((t => pe(t))));
		await Promise.all((await de()).filter((t => t["pinned"] && !t["pendingUrl"] && !t["url"])).map((t => pe(t))));
	}
	let e = await We().get("lastSeenVersion");
	let s = await Mt.getSettings();
	let n = await Mt.getState();
	let l = n["tabGroups"].map((t => t["tabsMeta"].length)).reduce(((t, e) => t + e), 0);
	qe = D("oneTabTabState", s) || {};
	if(f) {
		window.chrome.windows.onCreated.addListener((t => {
			(async () => {
				let t = (await Ee(false)).filter((t => !t["incognito"]));
				if(t.length === 1) {
					if(qe["pinned"]) {
						await Promise.all((await de()).filter((t => [t["url"], t["pendingUrl"]].some((t => he(t))) && t["status"] === "loading")).map((t => pe(t))));
						await Mt.H(true);
					}
				}
			})();
		}));
	}
	if(!u) {
		if(String(i) !== String(e)) {
			await We().put("lastSeenVersion", i);
			if((await Ee(false)).some((t => !t["incognito"])) && qe["id"] && (new Date).getTime() - (qe["updateDate"] || 0) < 1e3 * 30) {
				await Promise.all((await de()).filter((t => he(t["url"]))).map((t => pe(t))));
				let t = await Ee(false);
				let e = t.find((t => !t["incognito"] && t["id"] === qe["windowId"]));
				if(e) {
					let t = await Mt.Qt({
						windowId: qe["windowId"],
						index: qe["index"],
						url: k,
						active: !!qe["active"],
						pinned: !!qe["pinned"]
					});
					qe["id"] = t["id"];
				}
			}
			else {
				delete qe["id"];
				delete qe["windowId"];
			}
		}
		else {
			if(l > 0 && D("startupLaunch", s) === "displayOneTab") {
				if((await Ee(false)).find((t => !t["incognito"]))) {
					await Mt.H(true);
				}
				else {
					let t = false;
					window.chrome.windows.onCreated.addListener((e => {
						if(!t) {
							(async () => {
								if((await Ee(false)).find((t => !t["incognito"]))) {
									if(!t) {
										t = true;
										await Mt.H(true);
									}
								}
							})();
						}
					}));
				}
			}
		}
	}
	await la();
	Me();
	if(!u) {
		$e((() => na()));
		je();
	}
	else {
		setTimeout((async () => {
			await We().put("lastSeenVersion", "restoreTest");
			await Ke("restoreTest");
		}), 5e3);
	}
}
class ca {
	async me(t) {
		try {
			for(let e = 0; e < 2; e++) {
				await this.ye(w);
				qe["pinned"] = e === 0;
				console.log(`begin tests with pinned: ${qe["pinned"]}`);
				await this.ge(t["pdfFileUrl"]);
				await this.xe();
				if(a) await this.Pe(t["pdfFileUrl"]);
				if(f && qe["pinned"]) await this.Oe();
				await this.Ae();
				if(!f) await this.Se();
				if(!f) await this.Ee();
				if(!f) await this.ke();
				await this.Ge();
				await this.ve();
				if(!f && qe["pinned"]) await this.Ie();
				await this.De();
				await this.Ce();
				await this.Re();
				await this.Ue();
				await this.Be({
					ctrlKey: true
				});
				await this.Be({
					metaKey: true
				});
				await this.We();
				await this.Le();
				await this.Me();
				await this.Ne();
				if(!f) await this.Fe();
				if(!f) await this.$e();
				await this.qe();
				await this.Je();
				await this.je();
				await this.Ve();
				await this.Ke();
				await this.He();
				console.log(`tests completed with pinned: ${qe["pinned"]}`);
			}
			console.log("all tests completed");
		}
		finally {
			let e = d + "extensions/";
			if(o || f) e = w;
			Mt.et = false;
			await this.ye(e);
			let a = await Mt.getState();
			a["tabGroups"] = a["tabGroups"].filter((e => e["tabsMeta"].every((e => !(e["title"].startsWith("t---") || e["title"].startsWith("PIN::t---") || e["url"].startsWith("http://localhost") || e["url"] === t["pdfFileUrl"])))));
			await Mt.ct(a);
			console.log("done.");
		}
	}
	async Se() {
		let t = qe["pinned"];
		console.log("begin testAutoUnPinRePin");
		let e = {
			Ye: [this.ze(), this.ze(), this.ze()]
		};
		await this._e(e, true);
		await Mt.H();
		await this.Qe();
		let a = await Ze(k);
		this.assert((await _e(a["id"]))["pinned"] === t);
		await ta(a["id"], {
			url: this.ze()
		});
		await Y(200);
		this.assert(!(await _e(a["id"]))["pinned"]);
		await ta(a["id"], {
			url: k
		});
		await Y(200);
		this.assert((await _e(a["id"]))["pinned"] === t);
		await this.Xe(k);
		let i = await Ze(e.Ye[1]);
		await ta(i["id"], {
			url: k
		});
		await Y(200);
		let s = await Ze(k);
		this.assert(s["pinned"] === t);
		this.assert(s["id"] === i["id"]);
		qe["pinned"] = t;
	}
	async Ee() {
		console.log("begin testDuplicateOneTabTabAdded");
		let t = {
			Ye: [this.ze(), this.ze(), this.ze()]
		};
		await this._e(t, true);
		await Mt.H();
		await this.Qe();
		let e = await Ze(k);
		let a = e["id"];
		await Oe({
			url: k
		});
		await Oe({
			url: k
		});
		await Y(500);
		this.assert((await Xe(k)).length === 1);
		await this.Ze(k);
		this.assert((await le())["id"] === a);
	}
	async Re() {
		console.log("begin testSimulateRestoreClick");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze(), this.ze(), this.ze()]
		};
		await this._e(t, true);
		await Mt.H();
		await this.Qe();
		await Mt.Ct();
		await Mt.Zt("clickTab", {
			url: t.Ye[0],
			ta: {}
		});
		await this.ea({
			Ye: [k, t.Ye[0]]
		});
		await this.Ze(k);
		await Mt.Zt("clickTab", {
			url: t.Ye[1],
			ta: {
				shiftKey: true
			}
		});
		await this.aa(t.Ye[1]);
		if(f) {
			await ye((await de()).find((e => e["url"] === t.Ye[1]))["windowId"]);
		}
		else {
			await this.Xe(t.Ye[1]);
		}
		if(!f) {
			await Mt.Zt("clickTab", {
				url: t.Ye[2],
				ta: {
					ctrlKey: true
				}
			});
			await Y(300);
			await this.Ze(k);
			await this.ia({
				Ye: [k, t.Ye[0], t.Ye[2]]
			});
		}
		await Mt.Zt("clickTab", {
			url: t.Ye[3],
			ta: {
				metaKey: true
			}
		});
		await Y(300);
		await this.Ze(k);
		await this.ia({
			Ye: f ? [k, t.Ye[0], t.Ye[3]] : [k, t.Ye[0], t.Ye[2], t.Ye[3]]
		});
		await this.sa(0, [t.Ye[1], t.Ye[2], t.Ye[3]]);
	}
	async Me() {
		console.log("begin testTabsAddedToExistingGroup");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze(), this.ze()]
		};
		await this._e(t, true);
		await Mt.H();
		await this.Qe();
		await this.ea({
			Ye: qe["pinned"] ? [k, ...t.Ye] : [...t.Ye, k]
		});
		await Mt.Ct();
		await this.sa(0, [...t.Ye]);
		await this.ea({
			Ye: [k]
		});
		let e = {
			Ye: [this.ze()]
		};
		await this._e(e, false);
		await this.ea({
			Ye: [k, e.Ye[0]]
		});
		await this.na(e.Ye[0]);
		await Mt.It();
		await this.sa(0, [e.Ye[0], ...t.Ye]);
	}
	async Ue() {
		console.log("begin testSimulateRestoreTabGroupClick");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze(), this.ze()]
		};
		await this._e(t, true);
		await Mt.H();
		await this.Qe();
		await Mt.Ct();
		await this.sa(0, [...t.Ye]);
		await this.ea({
			Ye: [k]
		});
		await this.Qe();
		await Mt.Zt("clickTabGroupButton", {
			oa: "restoreAllButton",
			la: t.Ye[0],
			ta: {}
		});
		await this.ra(0, t.Ye[0]);
		await this.ea({
			Ye: [k, ...t.Ye]
		});
		await this.Ze(k);
	}
	async Be(t) {
		console.log("begin testSimulateRestoreTabGroupCtrlOrMetaClick");
		await this.ye(w);
		let e = {
			Ye: [this.ze(), this.ze(), this.ze()]
		};
		await this._e(e, true);
		await Mt.H();
		await this.Qe();
		await Mt.Ct();
		await this.sa(0, [...e.Ye]);
		await this.ea({
			Ye: [k]
		});
		await this.Qe();
		await Mt.Zt("clickTabGroupButton", {
			oa: "restoreAllButton",
			la: e.Ye[0],
			ta: t
		});
		await this.sa(0, [...e.Ye]);
		await this.ea({
			Ye: [k, ...e.Ye]
		});
		await this.Ze(k);
	}
	async We() {
		console.log("begin testSimulateRestoreTabGroupShiftClick");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze(), this.ze()]
		};
		await this._e(t, true);
		await Mt.H();
		await this.Qe();
		await Mt.Ct();
		await this.sa(0, [...t.Ye]);
		await this.ea({
			Ye: [k]
		});
		await this.Qe();
		await Mt.Zt("clickTabGroupButton", {
			oa: "restoreAllButton",
			la: t.Ye[0],
			ta: {
				shiftKey: true
			}
		});
		await this.sa(0, [...t.Ye]);
		await this.ea({
			Ye: [...t.Ye],
			wa: [
				[k]
			]
		});
	}
	async Le() {
		console.log("begin testSimulateDeleteTabGroupClick");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze(), this.ze()]
		};
		await this._e(t, true);
		await Mt.H();
		await this.Qe();
		await Mt.Ct();
		await this.sa(0, [...t.Ye]);
		await this.ha(t.Ye, 0, true);
		await this.ca(t.Ye[0]);
		await this.Qe();
		await Mt.Zt("clickTabGroupButton", {
			oa: "deleteAllButton",
			la: t.Ye[0]
		});
		await this.ra(0, t.Ye[0]);
		await Y(200);
		await this.ua(t.Ye[0]);
	}
	async ra(t) {
		let e = await Mt.Zt("getVisibleStructure");
		this.assert(e.fa.every((e => !e.tabs.some((e => e === t)))));
	}
	async sa(t, e) {
		let a = await Mt.Zt("getVisibleStructure");
		let i = a.fa.findIndex((t => !t.da));
		this.assert(this.ba([e], a.fa.slice(i + t, i + t + 1).map((t => t.tabs))), `assertUnstarredTabGroup fail: expected: ${e}`);
	}
	async Ce() {
		console.log("begin testOneTabTabUpdated");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze()],
			Ta: [
				[this.ze(), this.ze()],
				[this.ze(), this.ze()]
			]
		};
		await this._e(t, true);
		await Mt.H(false);
		await this.Qe();
		await this.ia({
			Ye: qe["pinned"] ? [k, ...t.Ta[1]] : [...t.Ta[1], k],
			wa: [t.Ye, ...t.Ta.slice(0, -1)]
		});
		await Mt.nt();
		await this.Qe();
		let e = await Mt.Zt("getVisibleStructure");
		this.pa(e.ma, e.fa.reduce(((t, e) => t + e.ya), 0), "visible total tab count === summed visible tabgroup counts");
		this.pa(e.ma, e.fa.reduce(((t, e) => t + e.tabs.length), 0), "visible total tab count === summed visible tabs");
		this.assert(e.fa.every((t => t.ya === t.tabs.length)));
		let a = e.fa.findIndex((t => !t.da));
		this.assert(e.fa.every(((t, e) => e < a && t.da || e >= a && !t.da)));
		this.assert(this.ba([t.Ye, ...t.Ta], e.fa.slice(a, a + 3).map((t => t.tabs))));
	}
	ba(t, e) {
		return t.map((t => t.join(" "))).sort().join("\n") === e.map((t => t.join(" "))).sort().join("\n");
	}
	async De() {
		console.log("begin testOneTabTabComms");
		await Mt.H(false);
		await this.Qe();
		let t = await Mt.Zt("ping");
		if(!t["pong"]) throw new Error("comms test failed");
	}
	async Ae() {
		console.log("begin testBrowserActionClick");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze()],
			Ta: [
				[this.ze(), this.ze()]
			]
		};
		await this._e(t, true);
		await this.ia({
			Ye: t.Ta[0],
			wa: [t.Ye]
		});
		await this.ga();
		await this.ia({
			xa: qe["pinned"] ? [k, ...t.Ta[0]] : [...t.Ta[0], k],
			wa: []
		});
	}
	async ke() {
		console.log("begin testContextMenus");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze()],
			Ta: [
				[this.ze(), this.ze()],
				[this.Pa(), this.ze(), this.ze()]
			]
		};
		await this._e(t, true);
		await this.ia({
			Ye: t.Ta[1],
			wa: [t.Ye, t.Ta[0]]
		});
		let e = 500;
		await this.na(t.Ye[0]);
		await Y(e);
		this.assert(ea.ue.length > 0 && ea.ue.every((t => !t.isEnabled)));
		this.assert(ea.fe.length > 0 && ea.fe.every((t => t.isEnabled)));
		this.assert(ea.de.length > 0 && ea.de.every((t => t.isEnabled)));
		this.assert(ea.be.length > 0 && ea.be.every((t => t.isEnabled)));
		this.assert(ea.he.length > 0 && ea.he.every((t => t.isEnabled)));
		this.assert(ea.re.isEnabled);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.assert(ea.pe.title === "Exclude localhost from OneTab");
		await this.na(t.Ye[1]);
		await Y(e);
		this.assert(ea.ue.length > 0 && ea.ue.every((t => t.isEnabled)));
		this.assert(ea.fe.length > 0 && ea.fe.every((t => !t.isEnabled)));
		this.assert(ea.de.length > 0 && ea.de.every((t => t.isEnabled)));
		this.assert(ea.be.length > 0 && ea.be.every((t => t.isEnabled)));
		this.assert(ea.he.length > 0 && ea.he.every((t => t.isEnabled)));
		this.assert(ea.ce.length > 0 && ea.ce.every((t => t.isEnabled)));
		this.assert(ea.re.isEnabled);
		this.assert(ea.re.isEnabled);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.assert(ea.pe.title === "Exclude localhost from OneTab");
		await this.na(t.Ta[0][0]);
		await Y(e);
		this.assert(ea.ue.length > 0 && ea.ue.every((t => !t.isEnabled)));
		this.assert(ea.fe.length > 0 && ea.fe.every((t => t.isEnabled)));
		this.assert(ea.de.length > 0 && ea.de.every((t => t.isEnabled)));
		this.assert(ea.be.length > 0 && ea.be.every((t => t.isEnabled)));
		this.assert(ea.he.length > 0 && ea.he.every((t => t.isEnabled)));
		this.assert(ea.ce.length > 0 && ea.ce.every((t => t.isEnabled)));
		this.assert(ea.re.isEnabled);
		this.assert(ea.re.isEnabled);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.assert(ea.pe.title === "Exclude localhost from OneTab");
		await this.na(t.Ta[1][1]);
		await Y(e);
		this.assert(ea.ue.length > 0 && ea.ue.every((t => !t.isEnabled)));
		this.assert(ea.fe.length > 0 && ea.fe.every((t => t.isEnabled)));
		this.assert(ea.de.length > 0 && ea.de.every((t => t.isEnabled)));
		this.assert(ea.be.length > 0 && ea.be.every((t => t.isEnabled)));
		this.assert(ea.he.length > 0 && ea.he.every((t => t.isEnabled)));
		this.assert(ea.ce.length > 0 && ea.ce.every((t => t.isEnabled)));
		this.assert(ea.re.isEnabled);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.assert(ea.pe.title === "Exclude localhost from OneTab");
		await Mt.H();
		if(o) await Y(100);
		let a = await this.Oa();
		if(o) await Se(a["id"], 0);
		await this.ia({
			Ye: qe["pinned"] ? [k, ...t.Ta[1]] : [...t.Ta[1], k],
			wa: [t.Ye, t.Ta[0]]
		});
		await this.Ze(k);
		await this.Qe();
		await Y(5 * e);
		if(qe["pinned"]) {
			this.assert(ea.ue.length > 0 && ea.ue.every((t => !t.isEnabled)));
			this.assert(ea.fe.length > 0 && ea.fe.every((t => t.isEnabled)));
		}
		else {
			this.assert(ea.ue.length > 0 && ea.ue.every((t => t.isEnabled)));
			this.assert(ea.fe.length > 0 && ea.fe.every((t => !t.isEnabled)));
		}
		this.assert(ea.de.length > 0 && ea.de.every((t => t.isEnabled)));
		this.assert(ea.be.length > 0 && ea.be.every((t => t.isEnabled)));
		this.assert(ea.he.length > 0 && ea.he.every((t => t.isEnabled)));
		this.assert(ea.ce.length > 0 && ea.ce.every((t => !t.isEnabled)));
		this.assert(!ea.re.isEnabled);
		this.assert(!ea.pe.isEnabled);
		await this.na(t.Ta[1][0]);
		await Y(e);
		this.assert(ea.ue.length > 0 && ea.ue.every((t => !t.isEnabled)));
		this.assert(ea.fe.length > 0 && ea.fe.every((t => t.isEnabled)));
		this.assert(ea.de.length > 0 && ea.de.every((t => t.isEnabled)));
		this.assert(ea.be.length > 0 && ea.be.every((t => t.isEnabled)));
		this.assert(ea.he.length > 0 && ea.he.every((t => t.isEnabled)));
		this.assert(ea.ce.length > 0 && ea.ce.every((t => t.isEnabled)));
		this.assert(ea.re.isEnabled);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.assert(ea.pe.title === "Exclude localhost from OneTab");
		await this.na(t.Ta[0][0]);
		await this.Ze(t.Ta[0][0]);
		await Mt.H();
		await this.Ze(k);
		await this.na(t.Ta[1][0]);
		await this.Ze(t.Ta[1][0]);
		await this.Xe(t.Ta[1][1]);
		await this.Xe(t.Ta[1][2]);
		await Y(e);
		this.assert(ea.ue.length > 0 && ea.ue.every((t => !t.isEnabled)));
		this.assert(ea.fe.length > 0 && ea.fe.every((t => !t.isEnabled)));
		this.assert(ea.de.length > 0 && ea.de.every((t => t.isEnabled)));
		this.assert(ea.be.length > 0 && ea.be.every((t => !t.isEnabled)));
		this.assert(ea.he.length > 0 && ea.he.every((t => !t.isEnabled)));
		this.assert(ea.ce.length > 0 && ea.ce.every((t => !t.isEnabled)));
		this.assert(ea.re.isEnabled);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.assert(ea.pe.title === "Exclude localhost from OneTab");
		await this.Xe(t.Ta[1][0]);
		await Y(e);
		this.assert(ea.he.length > 0 && ea.he.every((t => !t.isEnabled)));
		await Promise.all((await de()).filter((e => e["url"] !== k && e["url"] !== t.Ye[0])).map((t => pe(t))));
		await this.na(t.Ye[0]);
		await Y(e);
		this.assert(ea.de.length > 0 && ea.de.every((t => !t.isEnabled)));
	}
	async Ge() {
		console.log("begin testExcludeWebSiteContextMenu");
		await this.ye(w);
		await Mt.kt("127.0.0.1");
		let t = {
			Ye: [this.ze("127.0.0.1"), this.ze()],
			Ta: [
				[this.ze(), this.ze()],
				[this.ze(), this.ze("127.0.0.1"), this.ze()]
			]
		};
		await this._e(t, true);
		await this.ia({
			Ye: t.Ta[1],
			wa: [t.Ye, ...t.Ta.slice(0, -1)]
		});
		await Y(200);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.pa(ea.pe.title, "Exclude localhost from OneTab");
		await this.na(t.Ta[1][1]);
		await Y(200);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.pa(ea.pe.title, "Exclude 127.0.0.1 from OneTab");
		await Mt.Et("127.0.0.1"); {
			let t = await Mt.getSettings();
			let e = Mt.St("127.0.0.1", t);
			this.assert(e);
		}
		await this.na(t.Ye[1]);
		await Y(200);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.pa(ea.pe.title, "Exclude localhost from OneTab");
		await this.na(t.Ye[0]);
		await Y(200);
		this.assert(ea.pe.isEnabled);
		this.assert(ea.pe.ee);
		this.pa(ea.pe.title, "Exclude 127.0.0.1 from OneTab");
		await Mt.kt("127.0.0.1");
		await na();
		await Y(200);
		this.assert(ea.pe.isEnabled);
		this.assert(!ea.pe.ee);
		this.pa(ea.pe.title, "Exclude 127.0.0.1 from OneTab");
	}
	async ve() {
		console.log("begin testIgnoreOneTabContentPages");
		let t = {
			Ye: [this.ze(), this.ze()]
		};
		await this._e(t, true);
		await Mt.lt("import-export.html");
		await Mt.lt("options.html");
		await Mt.lt("import-export.html");
		await Mt.lt("options.html");
		let e = {
			Ta: [
				[this.ze(), this.ze()]
			]
		};
		await this._e(e, false);
		await Mt.lt("import-export.html");
		await Mt.lt("options.html");
		await this.Xe(e.Ta[0][0]);
		await this.Xe(e.Ta[0][1]);
		await this.ia({
			Ye: [...t.Ye, T + "import-export.html", T + "options.html"]
		});
		await this.ga();
		await this.ia({
			Ye: [k]
		});
	}
	async Ie() {
		console.log("begin testExistingOneTabSwitchedTo");
		let t = {
			Ye: [this.ze()],
			Ta: [
				[this.ze(), this.ze()],
				[this.ze(), this.ze(), this.ze()]
			]
		};
		await this._e(t, true);
		await this.ia({
			Ye: t.Ta[1],
			wa: [t.Ye, ...t.Ta.slice(0, -1)]
		});
		await Mt.H();
		await this.ia({
			Ye: qe["pinned"] ? [k, ...t.Ta[1]] : [...t.Ta[1], k],
			wa: [t.Ye, ...t.Ta.slice(0, -1)]
		});
		await this.na(t.Ye[0]);
		await this.Ze(t.Ye[0]);
		await Mt.H(true);
		await this.Ze(t.Ye[0]);
		await Mt.H();
		await this.Ze(k);
		await this.ia({
			Ye: qe["pinned"] ? [k, ...t.Ta[1]] : [...t.Ta[1], k],
			wa: [t.Ye, ...t.Ta.slice(0, -1)]
		});
	}
	async Oe() {
		console.log("begin safariPinnedTabsTest");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze()],
			Ta: [
				[this.ze(), this.ze()]
			]
		};
		await this._e(t, true);
		await this.ia({
			Ye: t.Ta[0],
			wa: [t.Ye]
		});
		let e = await Ee(true);
		let a = e.find((t => t["focused"]));
		let i = e.find((t => !t["focused"]));
		let s = 200;
		await Y(s);
		await Mt.H();
		await this.Qe();
		await Y(s);
		this.pa((await Ee(true)).find((t => t["focused"]))["id"], a["id"]);
		await Pe(a["tabs"][1]);
		await Y(s);
		await Mt.H();
		await Y(s);
		this.pa((await Ee(true)).find((t => t["focused"]))["id"], a["id"]);
		await Pe(i["tabs"][1]);
		await Y(s);
		await Mt.H();
		await Y(s);
		this.pa((await Ee(true)).find((t => t["focused"]))["id"], i["id"]);
	}
	async Ne() {
		console.log("begin testPinnedTabsOption");
		await this.ye(w);
		let t = await Mt.getSettings();
		let e = D("pinnedTabs", t);
		try {
			await Mt.dt("pinnedTabs", "ignore");
			let t = {
				Ye: [this.Pa(), this.ze()]
			};
			await this._e(t, true);
			await this.ia({
				Ye: t.Ye
			});
			await this.ga();
			await Y(100);
			if(!qe["pinned"]) {
				await this.ia({
					Ye: [t.Ye[0], k]
				});
			}
			else {
				await this.ia({
					Ye: f || o ? [t.Ye[0], k] : [k, t.Ye[0]]
				}, true);
			}
			await this.Xe(t.Ye[0]);
			await this.ia({
				Ye: [k]
			});
			await Mt.dt("pinnedTabs", "allow");
			await this._e(t, true);
			await this.ia({
				Ye: t.Ye
			});
			await this.ga();
			await Y(100);
			await this.ia({
				Ye: [k]
			});
			await this.ha(t.Ye, 0, true);
			await Mt.Zt("clickTab", {
				url: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: qe["pinned"] ? [k, t.Ye[0]] : [t.Ye[0], k]
			});
			await this.Aa(t.Ye[0]);
		}
		finally {
			await Mt.dt("pinnedTabs", e);
		}
	}
	async Fe() {
		console.log("begin testPinnedTabsOption2");
		await this.ye(w);
		let t = await Mt.getSettings();
		let e = D("pinnedTabs", t);
		try {
			await Mt.dt("pinnedTabs", "allow");
			let t = {
				Ye: [this.Pa(), this.Pa()]
			};
			await this._e(t, true);
			await this.ia({
				Ye: t.Ye
			});
			await this.ga();
			await this.ia({
				Ye: [k]
			});
			let a = {
				Ye: [this.ze()]
			};
			await this._e(a, false);
			await this.ia({
				Ye: [k, ...a.Ye]
			});
			await this.Qe();
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [...t.Ye],
				wa: [
					[k, ...a.Ye]
				]
			});
			await this.ga();
			await this.sa(0, [...t.Ye]);
			await this.Xe(a.Ye[0]);
			await this.ia({
				Ye: [k]
			});
			await this.Qe();
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: qe["pinned"] ? [k, ...t.Ye] : [...t.Ye, k]
			});
		}
		finally {
			await Mt.dt("pinnedTabs", e);
		}
	}
	async $e() {
		console.log("begin testPinnedTabsOption3");
		await this.ye(w);
		let t = await Mt.getSettings();
		let e = D("pinnedTabs", t);
		try {
			await Mt.dt("pinnedTabs", "allow");
			let t = {
				Ye: [this.Pa()]
			};
			await this._e(t, true);
			await this.ia({
				Ye: t.Ye
			});
			await this.ga();
			await this.ia({
				Ye: [k]
			});
			let a = {
				Ye: [this.ze()]
			};
			await this._e(a, false);
			await this.ia({
				Ye: [k, ...a.Ye]
			});
			await this.Qe();
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [...t.Ye],
				wa: [
					[k, ...a.Ye]
				]
			});
			await this.ga();
			await this.sa(0, [...t.Ye]);
			await this.Xe(a.Ye[0]);
			await this.ia({
				Ye: [k]
			});
			await this.Qe();
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: qe["pinned"] ? [k, ...t.Ye] : [...t.Ye, k]
			});
		}
		finally {
			await Mt.dt("pinnedTabs", e);
		}
	}
	async qe() {
		console.log("begin testRestoreRemovalOption");
		await this.ye(w);
		let t = await Mt.getSettings();
		let e = D("restoreRemoval", t);
		try {
			await Mt.dt("restoreRemoval", "default");
			let t = {
				Ye: [this.ze(), this.ze()]
			};
			await this._e(t, true);
			await this.ga();
			await this.Qe();
			await Y(200);
			await this.sa(0, [...t.Ye]);
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [k, ...t.Ye]
			});
			await this.ra(t.Ye[0]);
			await Mt.dt("restoreRemoval", "keep");
			await this.ga();
			await this.Qe();
			await this.sa(0, [...t.Ye]);
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [k, ...t.Ye]
			});
			await this.sa(0, [...t.Ye]);
		}
		finally {
			await Mt.dt("restoreRemoval", e);
		}
	}
	async Je() {
		console.log("begin testDuplicatesOption");
		await this.ye(w);
		let t = await Mt.getSettings();
		let e = D("restoreRemoval", t);
		try {
			await Mt.dt("restoreRemoval", "default");
			let t = {
				Ye: [this.ze(), this.ze()]
			};
			await this._e(t, true);
			await this.ga();
			await this.Qe();
			await this.sa(0, [...t.Ye]);
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [k, ...t.Ye]
			});
			await this.ra(t.Ye[0]);
			await Mt.dt("restoreRemoval", "keep");
			await this.ga();
			await this.Qe();
			await this.sa(0, [...t.Ye]);
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [k, ...t.Ye]
			});
			await this.sa(0, [...t.Ye]);
		}
		finally {
			await Mt.dt("restoreRemoval", e);
		}
	}
	async je() {
		console.log("begin testRestoreWindowOption");
		await this.ye(w);
		let t = await Mt.getSettings();
		let e = D("restoreWindow", t);
		try {
			await Mt.dt("restoreWindow", "newWindow");
			let t = {
				Ye: [this.ze(), this.ze()]
			};
			await this._e(t, true);
			await this.ga();
			await this.Qe();
			await this.ea({
				Ye: [k]
			});
			await this.sa(0, [...t.Ye]);
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [k, ...t.Ye]
			});
			await this.ga();
			await this.ea({
				Ye: [k]
			});
			await this.sa(0, [...t.Ye]);
			let a = {
				Ye: [this.ze()]
			};
			await this._e(a, false);
			await Mt.H();
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [...t.Ye],
				wa: [
					[k, ...a.Ye]
				]
			});
			await Mt.dt("restoreWindow", "newWindowAlways");
			await this.ga();
			await this.Qe();
			await this.Xe(a.Ye[0]);
			await this.ea({
				Ye: [k]
			});
			await this.sa(0, [...t.Ye]);
			await Mt.H();
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [...t.Ye],
				wa: [
					[k]
				]
			});
			await this.ga();
			await this.Qe();
			await this.ea({
				Ye: [k]
			});
			await this.sa(0, [...t.Ye]);
			await Mt.dt("restoreWindow", "currentWindow");
			await Mt.H();
			await this._e(a, false);
			await Mt.Zt("clickTabGroupButton", {
				oa: "restoreAllButton",
				la: t.Ye[0],
				ta: {}
			});
			await this.ea({
				Ye: [k, a.Ye[0], ...t.Ye]
			});
		}
		finally {
			await Mt.dt("restoreWindow", e);
		}
	}
	async Ve() {
		console.log("begin testLockUnlock");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze()]
		};
		await this._e(t, true);
		await this.ga();
		await this.Qe();
		await this.ea({
			Ye: [k]
		});
		await this.sa(0, [...t.Ye]);
		await Y(150);
		this.assert(!(await Mt.Zt("getTabGroupElementDisplayed", {
			Ea: "lockImg",
			la: t.Ye[0]
		})).Sa);
		this.assert(!(await this.ka(t.Ye[0]))["starred"]);
		await Mt.Zt("clickTabGroupButton", {
			oa: "moreButton",
			la: t.Ye[0],
			ta: {}
		});
		await Mt.Zt("clickTabGroupButton", {
			oa: "toggleLockTabGroupButton",
			la: t.Ye[0],
			Ga: "mousedown",
			ta: {}
		});
		await Mt.Zt("clickTabGroupButton", {
			oa: "toggleHideTabGroupButton",
			la: t.Ye[0],
			Ga: "mousedown",
			ta: {}
		});
		await Y(150);
		this.assert((await this.ka(t.Ye[0]))["locked"]);
		await Mt.Zt("clickTabGroupButton", {
			oa: "restoreAllButton",
			la: t.Ye[0],
			ta: {}
		});
		await Y(200);
		await this.ea({
			Ye: [k, ...t.Ye]
		});
		await this.sa(0, [...t.Ye]);
		await Mt.Zt("clickTabGroupButton", {
			oa: "deleteAllButton",
			la: t.Ye[0]
		});
		await Y(200);
		await this.sa(0, [...t.Ye]);
		await Mt.Zt("clickTab", {
			url: t.Ye[0],
			ta: {}
		});
		await Y(200);
		await this.sa(0, [...t.Ye]);
		this.assert((await Mt.Zt("getTabGroupElementDisplayed", {
			Ea: "lockImg",
			la: t.Ye[0]
		})).Sa);
	}
	async Ke() {
		console.log("begin testStarUnstar");
		await this.ye(w);
		let t = {
			Ye: [this.ze(), this.ze()]
		};
		await this._e(t, true);
		await this.ga();
		await this.Qe();
		await this.ea({
			Ye: [k]
		});
		await this.sa(0, [...t.Ye]);
		let e = {
			Ye: [this.ze(), this.ze()]
		};
		await this._e(e, true);
		await this.ga();
		await this.Qe();
		await this.ea({
			Ye: [k]
		});
		await this.sa(0, [...e.Ye]);
		let a = await Mt.Zt("getVisibleStructure");
		let i = a.fa.findIndex((e => e.tabs.some((e => e === t.Ye[0]))));
		let s = a.fa.findIndex((t => t.tabs.some((t => t === e.Ye[0]))));
		this.assert(i > 0);
		this.assert(!(await Mt.Zt("getTabGroupElementDisplayed", {
			Ea: "starImg",
			la: t.Ye[0]
		})).Sa);
		await Mt.Zt("clickTabGroupButton", {
			oa: "moreButton",
			la: t.Ye[0],
			ta: {}
		});
		await Mt.Zt("clickTabGroupButton", {
			oa: "toggleStarTabGroupButton",
			la: t.Ye[0],
			Ga: "mousedown",
			ta: {}
		});
		await Y(600);
		this.assert((await Mt.Zt("getTabGroupElementDisplayed", {
			Ea: "starImg",
			la: t.Ye[0]
		})).Sa);
		a = await Mt.Zt("getVisibleStructure");
		let n = a.fa.findIndex((e => e.tabs.some((e => e === t.Ye[0]))));
		this.assert(n === 0);
		this.assert(n === await this.va(t.Ye[0]));
		this.assert((await this.ka(t.Ye[0]))["starred"]);
		await Mt.Zt("clickTabGroupButton", {
			oa: "moreButton",
			la: t.Ye[0],
			ta: {}
		});
		await Mt.Zt("clickTabGroupButton", {
			oa: "toggleStarTabGroupButton",
			la: t.Ye[0],
			Ga: "mousedown",
			ta: {}
		});
		await Y(600);
		a = await Mt.Zt("getVisibleStructure");
		let o = a.fa.findIndex((e => e.tabs.some((e => e === t.Ye[0]))));
		this.assert(i === o);
		this.assert(i === await this.va(t.Ye[0]));
		this.assert(!(await this.ka(t.Ye[0]))["starred"]);
		this.assert(!(await Mt.Zt("getTabGroupElementDisplayed", {
			Ea: "starImg",
			la: t.Ye[0]
		})).Sa);
	}
	async ge(t) {
		console.log("begin testFileUrls");
		let e = undefined;
		try {
			await this.ye(w);
			let e = {
				Ye: [t]
			};
			await this._e(e, true);
			await this.ia({
				Ye: [t]
			});
			await this.ga();
			await this.Qe();
			await this.ha([t], 0, true);
			let a = Mt.it(t);
			await Mt.Zt("clickTab", {
				url: a,
				ta: {}
			});
		}
		catch (t) {
			e = String(t);
		}
		if(o) {
			this.assert((() => e.includes("Illegal URL")));
		}
		else if(f) {
			this.assert((() => e.includes("No lastFocusedWindow found")));
		}
		else this.pa(e, undefined);
	}
	async Pe(t) {
		console.log("begin testPdfPlaceholders");
		await this.ye(w);
		Mt.et = true;
		let e = Mt.it(t);
		this.assert(t !== e && !e.startsWith("file://"), "pdfFilePlaceholderUrl not determined correctly");
		let a = {
			Ye: [t]
		};
		await this._e(a, true);
		await this.ia({
			Ye: [t]
		});
		await this.ga();
		await this.ia({
			Ye: [k]
		});
		await Mt.H();
		await this.Qe();
		await this.ha([t], 0, true);
		await Mt.Zt("clickTab", {
			url: e,
			ta: {}
		});
		await this.ia({
			Ye: [k, e]
		});
		await this.ga();
		await this.ha([t], 0, true);
		await Mt.Zt("clickTabGroupButton", {
			oa: "restoreAllButton",
			la: e,
			ta: {}
		});
		await this.ra(0, e);
		await this.ra(0, t);
		await this.ea({
			Ye: [k, e]
		});
	}
	async He() {
		await Mt.H();
		await this.Qe();
		let t = await Mt.Zt("testExtFavIconLoad");
		this.assert(t.Ia);
	}
	async Oa() {
		let t = (await de()).filter((t => he(t["url"])));
		this.Da(t.length, 0);
		let e = t[0];
		if(!(f && e["pinned"])) {
			this.pa(t.length, 1, "there should only be exactly one onetab tab");
		}
		return e;
	}
	async xe() {
		console.log("begin testPreserveLastOneTabTabPinnedState");
		await Mt.H();
		await this.Qe();
		let t = await this.Oa();
		let e = t["pinned"];
		let a = 200;
		if(!e) {
			await ta(t["id"], {
				pinned: true
			});
			if(f) await Y(a);
			await pe(t);
			if(f) await Y(a);
			await Mt.H();
			await this.Qe();
			t = await this.Oa();
			if(f) await Y(a);
			this.assert(t["pinned"]);
		}
		if(e) {
			await ta(t["id"], {
				pinned: false
			});
			if(f) await Y(a);
			await pe(t);
			if(f) await Y(a);
			await Mt.H();
			await this.Qe();
			t = await this.Oa();
			this.assert(!t["pinned"]);
			await ta(t["id"], {
				pinned: true
			});
			if(f) await Y(a);
			await pe(t);
			if(f) await Y(a);
			await Mt.H();
			await this.Qe();
			t = await this.Oa();
			if(f) await Y(a);
			this.assert(t["pinned"]);
		}
	}
	async ha(t, e, a) {
		let i = await Mt.getState();
		if(a) e += i["tabGroups"].findIndex((t => !t["starred"]));
		let s = i["tabGroups"].some(((a, i) => {
			if(e !== undefined && e !== i) return false;
			return a["tabsMeta"].every(((e, a) => {
				let i = t[a];
				if(i.includes(":3000/?title=")) {
					let t = this.Ca(i, "title") === e["title"];
					if(this.Ca(i, "title").startsWith("PIN::") && !e["pinned"]) t = false;
					if(!t) console.log(`assertStoredTabGroup mismatch: ${this.Ca(i,"title")} vs ${e["title"]}`);
					return t;
				}
				else {
					return i === e["url"];
				}
			}));
		}));
		this.assert(s, `assertStoredTabGroup fail, expected: ${t} at index ${e}`);
	}
	async ca(t) {
		let e = await Mt.getState();
		this.assert(e["tabGroups"].some((e => e["tabsMeta"].some((e => e["url"] === t)))));
	}
	async ua(t) {
		let e = await Mt.getState();
		this.assert(!e["tabGroups"].some((e => e["tabsMeta"].some((e => e["url"] === t)))));
	}
	async va(t) {
		return (await Mt.getState())["tabGroups"].findIndex((e => e["tabsMeta"][0]["url"] === t));
	}
	async ka(t) {
		return (await Mt.getState())["tabGroups"].find((e => e["tabsMeta"][0]["url"] === t));
	}
	Ca(t, e) {
		t = t.substring(t.indexOf("?") + 1);
		let a = t.split("&");
		for(let t in a) {
			let i = a[t].split("=");
			if(i[0] === e) {
				return decodeURIComponent(i[1]);
			}
		}
		return undefined;
	}
	async ye(t) {
		let e = await de();
		let a = e.filter((t => t["url"] && !(t["title"] && t["title"].startsWith("t---") || t["title"] && t["title"].startsWith("PIN::t---") || t["title"] && t["title"].startsWith("localhost:")) && ![t["url"], t["pendingUrl"]].some((t => [T, d, "file://"].some((e => t && t.startsWith(e)))))));
		a = a.filter((t => !t["url"].startsWith("http://localhost")));
		if(a.length > 0) {
			console.log(a);
			throw new Error(`Non-empty tabs found, aborting browser reset. ${a.map((t=>t["url"])).join(",")}`);
		}
		let i = await Ee(true);
		if(i.length === 0) {
			console.log("resetToSingleEmptyTabOpen: no open windows");
			await Ae({
				url: t
			});
		}
		else {
			i.slice(1).forEach((t => ye(t["id"])));
			let e = i[0];
			let {
				tabs: a,
				Rt: s
			} = await fe(e["id"]);
			await Oe({
				windowId: e["id"],
				url: t
			});
			await Promise.all(a.map((t => pe(t))));
		}
		await this.Ra();
	}
	async Ra() {
		if(o)
			if((await de()).some((t => t["url"] === "about:blank"))) await Y(200);
		await V(1e4, "waitForAllTabsLoaded", (async () => !(await de()).some((t => t["status"] === "loading"))));
	}
	async _e(t, e) {
		let a = [];
		if(e) a = await de();
		if(t.Ye) {
			for(let e = 0; e < t.Ye.length; e++) await this.Ua(t.Ye[e]);
		}
		if(t.Ta) {
			for(let e = 0; e < t.Ta.length; e++) {
				await this.Ba(t.Ta[e]);
			}
		}
		await Promise.all(a.map((t => pe(t))));
		await this.Ra();
		if(f) await Promise.all((await de()).filter((t => !t["url"] && !t["pendingUrl"])).map((t => pe(t))));
		if(f) await Y(100);
	}
	async ea(t) {
		await this.Ra();
		await V(1e4, "waitForAndAssertTabStructure", (async e => {
			try {
				await this.ia(t);
				return true;
			}
			catch (t) {
				if(e > 3e3) console.log(t);
				return false;
			}
		}));
	}
	async Aa(t) {
		let e = await be();
		this.assert(e.some((e => e.some((e => [e["url"], e["pendingUrl"]].some((e => e === t)) && e["pinned"])))));
	}
	async ia(t, e) {
		if(f && !e) {
			if((await de()).some((t => he(t["url"]) && t["pinned"]))) {
				t = JSON.parse(JSON.stringify(t));
				if(t.Ye && t.Ye[0] !== k) t.Ye.unshift(k);
				if(t.wa) t.wa.forEach((t => {
					if(t[0] !== k) t.unshift(k);
				}));
			}
		}
		await this.Ra();
		let a = await be(true);
		if(f) {
			a.forEach(((t, e) => {
				let i = t.filter((t => !t["pinned"]));
				if(t.some((t => t["pinned"]))) {
					a[e] = t.filter((t => t["url"]));
				}
			}));
		}
		let i = await ue();
		if(!i) throw new Error("No lastFocusedWindow found");
		let s = (await ue()).tabs;
		if(f) {
			let t = s.filter((t => !t["pinned"]));
			if(s.some((t => t["pinned"]))) {
				s = s.filter((t => t["url"]));
			}
		}
		if(t.Ye) {
			let e = s.map((t => [t["url"], t["pendingUrl"]].find((t => t)))).join(" , ");
			let a = t.Ye.join(" , ");
			if(e !== a) {
				if(f) console.trace();
				let t = `No match for tabs in last focused window (actual, expected): \n${e}\n\n${a}`;
				if(f) console.log(t);
				throw new Error(t);
			}
		}
		if(t.wa) {
			let e = a.map((t => t.map((t => [t["url"], t["pendingUrl"]].find((t => t)))).join(" , "))).sort().join("\n");
			let i = t.wa.map((t => t.join(" , "))).sort().join("\n");
			if(e !== i) {
				if(f) console.trace();
				let t = `No match for tabs in non focused windows (actual, expected):\n${e}\n\n${i}`;
				if(f) console.log(t);
				throw new Error(t);
			}
		}
	}
	async aa(t) {
		for(let e of Q(5e3)) {
			try {
				await this.Ze(t);
				return;
			}
			catch (t) {
				await Y(e);
			}
		}
		throw new Error("waitForAndAssertActiveTab failed after time-out");
	}
	async Qe() {
		for(let t of Q(1e4)) {
			try {
				if((await de()).some((t => he(t["url"])))) {
					try {
						await Mt.Zt("ping");
						return;
					}
					catch (t) {
						console.log(t);
					}
				}
			}
			catch (e) {
				await Y(t);
			}
		}
		throw new Error("waitForOneTabTabExistsAndRespondsToRpc failed after time-out");
	}
	async Ze(t) {
		let e = (await le())["url"];
		if(e !== t) {
			throw new Error(`active tab not as expected (actual, expected): "${e}", "${t}"`);
		}
	}
	async Ua(t) {
		await Mt._t(t, t.includes("?title=" + encodeURIComponent("PIN::")));
	}
	async Ba(t) {
		return (await ve(t.map((t => ({
			url: t,
			pinned: t.includes("?title=" + encodeURIComponent("PIN::"))
		})))))["id"];
	}
	async ga() {
		await Mt.Ct(undefined);
	}
	async na(t) {
		await Pe((await de()).find((e => e["url"] === t)));
	}
	async Xe(t) {
		let e = (await de()).find((e => e["url"] === t));
		if(!e) {
			throw new Error("Could not find tab with URL: " + t);
		}
		await pe(e);
	}
	Wa(t, e) {
		if(!e) e = "localhost";
		return `http://${e}:3000/?title=${encodeURIComponent(t)}`;
	}
	ze(t) {
		return this.Wa(this.uuid(), t);
	}
	Pa(t) {
		return this.Wa("PIN::" + this.uuid(), t);
	}
	uuid() {
		return "t---" + I(6, 16).toLowerCase();
	}
	assert(t, e) {
		if(!t) {
			if(f) console.trace();
			throw new Error("Assertion failed" + (e ? " " + e : ""));
		}
	}
	pa(t, e, a) {
		if(t !== e) {
			if(f) console.trace();
			throw new Error(`Assertion failed, ${t} !== ${e}, ${a}`);
		}
	}
	Da(t, e, a) {
		if(!(t > e)) {
			if(f) console.trace();
			throw new Error(`Assertion failed, ! (${t} > ${e}), ${a}`);
		}
	}
}
window["runTestSuite"] = t => {
	(async () => await (new ca).me(t))();
};
window["loopTestSuite"] = (t, e) => {
	(async () => {
		for(let a = 0; a < t; a++) await (new ca).me(e);
	})();
};
(async () => {
	await ha();
})();
