// Copyright 2022 OneTab Ltd.  All rights reserved.
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
async function x() {
	return new Promise(((t, e) => {
		if(document.readyState === "complete") {
			t();
		}
		else {
			document.addEventListener("readystatechange", (e => {
				if(document.readyState === "complete") t();
			}));
		}
	}));
}
let Rt = {};
async function Ot() {
	Rt = Mt.O();
}

function St(t) {
	return Rt[t];
}
const Mt = window.chrome.extension.getBackgroundPage().core;
async function jt() {
	It();
	await Ot();
}

function Lt(t) {
	if(typeof t === "string") t = document.getElementById(t);
	if(!t) return;
	while(t.childNodes.length > 0) t.childNodes[0].remove();
}

function $t(t) {
	return J(undefined, "div", {
	}).t;
}
let Ct = navigator["language"] || navigator["userLanguage"];

function Et() {
	let t = ["ar", "he", "fa", "ps", "ur"];
	let e = Ct.split("-", 1)[0];
	return t.indexOf(e) >= 0 ? "rtl" : "ltr";
}
let Pt = Et();

function Bt() {
	return Pt !== "rtl";
}

function It() {
	document.getElementsByTagName("html")[0]["dir"] = Pt;
}

function zt() {
	return Bt() ? "Left" : "Right";
}

function Ft() {
	return Bt() ? "Right" : "Left";
}

function Ut() {
	return Bt() ? "left" : "right";
}

function Wt() {
	return Bt() ? "right" : "left";
}

function Ht(t, e) {
}

function At(t, e) {
}

function Dt(t, e) {
}

function Gt(t, e) {
}

function Jt(t, e) {
}

function m(t) {
	return J(undefined, "div", {
		id: "headerText",
		textContent: t
	}).t;
}

function g(t, e, n) {
	return J(undefined, "picture", {
		...e,
		children: {
			i: J(undefined, "source", {
				srcset: n(true),
				media: "(prefers-color-scheme: light)"
			}),
			o: J(undefined, "source", {
				srcset: n(false),
				media: "(prefers-color-scheme: dark)"
			}),
			u: J(undefined, "img", {
			})
		}
	}).t;
}

// function y() {
// 	return g({
// 		width: 416 / 2 + "px",
// 		height: 114 / 2 + "px",
// 		position: "absolute",
// 		top: "16px",
// 		[`${Ut()}`]: "19px"
// 	}, {}, (t => `images/top-left-logo-${t?"light":"dark"}${Bt()?"":"-rtl"}.png`));
// }

function b(t, e, n) {
	let o = document.createElement("div");
	let i = document.createElement("div");
	Dt(i, "30px");
	i.textContent = e;
	o.appendChild(i);
	// i.appendChild(r);
	let l = document.createElement("div");
	Dt(l, "30px");
	l.appendChild(n.t);
	o.appendChild(l);
	i.onclick = () => {
		t = !t;
		// r.src = t ? "images/twister-open.png" : "images/twister-closed" + (Bt() ? "" : "-rtl") + ".png";
	};
	let u = {
		l: n.t
	};
	Object.assign(u, n);
	u.t = o;
	return u;
}

// function v(t, e, n, o) {
// 	let i = document.createElement("div");
// 	i.className = "clickable";
// 	let r = document.createElement("span");
// 	if(o) {
// 		let t = document.createElement("span");
// 		t.textContent = St("newExclamation") + " ";
// 		r.appendChild(t);
// 	}
// 	if(typeof t === "string") {
// 		r.appendChild(document.createTextNode(t));
// 	}
// 	else {
// 		r.appendChild(t);
// 	}
// 	r.onclick = t => {
// 		n(r);
// 	};
// 	i.appendChild(r);
// 	return i;
// }
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
			let n = "." + M[t];
			if(H(e, n)) {
				e = e.substr(0, e.length - n.length);
				while(e.indexOf(".") !== -1) e = e.substring(e.indexOf(".") + 1);
				e = e + n;
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
	let n = JSON.stringify(e);
	let o = await E(t, n);
	return await o.json();
}
async function E(t, e) {
	let n = {};
	if(e) {
		n.method = "POST";
		n.body = e;
	}
	else {
		n.method = "GET";
	}
	n.headers = new Headers;
	n.headers.append("Content-Type", "text/json");
	let o = await fetch(t, n);
	if(o.status === 200) return o;
	else throw new Error("http response code" + o.status);
}

function P() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
		let e = Math.random() * 16 | 0,
			n = t == "x" ? e : e & 3 | 8;
		return n.toString(16);
	}));
}
const B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");

function I(t, e) {
	let n = B,
		o = [],
		i = 0;
	e = e || n.length;
	t = t || 22;
	for(i = 0; i < t; i++) o[i] = n[0 | Math.random() * e];
	return o.join("");
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

function G(t, e, n) {
	if(t.parentNode) t.remove();
	e.insertBefore(t, n === undefined || n >= e.children.length || e.children.length === 0 ? null : e.children[Math.max(0, n)]);
}

function J(t, e, n) {
	let o = e === undefined ? t : document.createElement(e);
	let i = {};
	if(n) {
		// if(n.style) Object.assign(o.style, n.style);
		for(let t of Object.keys(n)) {
			if(t !== "style" && t !== "children") o[t] = n[t];
		}
		if(n.children) {
			for(const [t, e] of Object.entries(n.children)) {
				i[t] = e;
				o.appendChild(e instanceof HTMLElement ? e : e.t);
			}
		}
		if(n.h) o.appendChild(n.h);
		if(n.init) n.init(o);
	}
	if(e !== undefined && t) t.appendChild(o);
	let r = {
		t: o
	};
	Object.assign(r, i);
	return r;
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
async function V(t, e, n) {
	let o = 0;
	for(let e of Q(t)) {
		if(await n(o)) return;
		else {
			await Y(e);
			o += e;
		}
	}
	throw new Error(`Timeout waiting for condition ${e}`);
}
setTimeout((async () => {
	await jt();
	await re();
}), 1);

function re() {
	oe();
}

function oe() {
	J(document.getElementById("contentAreaDiv"), undefined, {
		children: {
			// F: y(),
			// tn: m(St("options")),
			en: J(undefined, "div", {
				children: {
					nn: tn("restoreWindow", St("optionTabGroupRestoreTitle"), [{
						settingValue: "currentWindow",
						title: St("optionTabGroupRestoreCurrentWindowAlways")
					}, {
						settingValue: "newWindowAlways",
						title: St("optionTabGroupRestoreNewWindowAlways")
					}, {
						settingValue: "newWindow",
						title: St("optionTabGroupRestoreNewWindow")
					}]),

					on: tn("pinnedTabs", St("optionPinnedTabsTitle"), [{
						settingValue: "ignore",
						title: St("optionPinnedTabsDontSend"),
						rn: St("optionPinnedTabsDontSendDesc")
					}, {
						settingValue: "allow",
						title: St("optionPinnedTabsAllow")
					}], St("optionPinnedTabsNote")),

					ln: tn("startupLaunch", St("optionStartupLaunchTitle"), [{
						settingValue: "none",
						title: St("optionStartupLaunchNone"),
						rn: St("optionStartupLaunchNoneDesc")
					}, {
						settingValue: "displayOneTab",
						title: St("optionStartupLaunchDisplay")
					}]),

					un: tn("restoreRemoval", St("optionRestoreRemovalTitle"), [{
						settingValue: "default",
						title: St("optionRestoreRemovalDefault"),
						rn: St("optionRestoreRemovalDefaultDesc")
					}, {
						settingValue: "keep",
						title: St("optionRestoreRemovalKeep"),
						rn: St("optionRestoreRemovalKeepDesc")
					}]),

					an: tn("duplicates", St("optionDuplicatesTitle"), [{
						settingValue: "allow",
						title: St("optionDuplicatesAllow")
					}, {
						settingValue: "reject",
						title: St("optionDuplicatesReject"),
						rn: St("optionDuplicatesRejectDesc")
					}])
				}
			})
		}
	});
}

function tn(t, e, n, o) {
	let i = J(undefined, "div", {
		className: "tabGroup",
		children: {
			heading: J(undefined, "h4", {
				textContent: e
			})
		}
	}).t;
	n.forEach((e => i.appendChild(nn(t, `optionGroup-${t}`, e))));
	if(o) {
		J(i, "div", {
			className: "note",
			textContent: o
		});
	}
	return i;
}
let en = 0;

function nn(t, e, n) {
	let o = "optionId" + en++;
	let i = n.settingValue;
	let r = J(undefined, "div", {
	}).t;
	let l = J(undefined, "input", {
		id: o,
		type: "radio",
		name: e
	}).t;
	Mt.Tt(t).then((t => {
		if(t === i) l.checked = true;
	}));
	l.addEventListener("click", (() => {
		(async () => {
			let e = await Mt.getSettings();
			e[t] = i;
			await Mt.bt(e);
		})();
	}));
	let u = J(undefined, "label", {
		["htmlFor"]: o,
		textContent: " " + n.title
	}).t;
	r.appendChild(l);
	r.appendChild(u);
	Jt(r, "-5px");
	let a = J(undefined, "div", {
	}).t;
	if(n.rn) {
		a.textContent = n.rn;
		a.className = "note";
	}
	r.appendChild(a);
	return r;
}
window["populateWithTestData"] = async () => {
	await Mt.ft();
	console.log("populateWithTestData done");
};
