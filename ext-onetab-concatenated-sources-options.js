// Copyright 2021 OneTab Ltd.  All rights reserved.

const i = "0.1";

const o = false;

const u = false;

const c = false;

const l = false;

const f = false;

const s = false;

const d = true;

const a = "chrome://";

const p = "chrome://newtab/";

const w = "https://www.one-tab.com";

const m = false;

async function x() {
	return new Promise(((t, e) => {
		if (document.readyState === "complete") {
			t();
		} else {
			document.addEventListener("readystatechange", (e => {
				if (document.readyState === "complete") t();
			}));
		}
	}));
}

let Xt = {};

async function Yt() {
	Xt = Ft.M();
}

function Dt(t) {
	return Xt[t];
}

const Ft = window.chrome.extension.getBackgroundPage().core;

async function Lt() {
	Nt();
	await Yt();
}

function Ut(t) {
	if (typeof t === "string") t = document.getElementById(t);
	if (!t) return;
	while (t.childNodes.length > 0) t.childNodes[0].remove();
}

function zt(t) {
	return P(undefined, "div", {
		style: {
			fontSize: "1px",
			height: t + "px",
			width: 1 + "px"
		}
	}).t;
}

let Pt = navigator["language"] || navigator["userLanguage"];

function Wt() {
	let t = [ "ar", "he", "fa", "ps", "ur" ];
	let e = Pt.split("-", 1)[0];
	return t.indexOf(e) >= 0 ? "rtl" : "ltr";
}

let $t = Wt();

function Ht() {
	return $t !== "rtl";
}

function Nt() {
	document.getElementsByTagName("html")[0]["dir"] = $t;
}

function Gt() {
	return Ht() ? "Left" : "Right";
}

function Jt() {
	return Ht() ? "Right" : "Left";
}

function qt() {
	return Ht() ? "left" : "right";
}

function Kt() {
	return Ht() ? "right" : "left";
}

function Qt(t, e) {
	if (Ht()) t.style.left = e; else t.style.right = e;
}

function Vt(t, e) {
	if (Ht()) t.style.right = e; else t.style.left = e;
}

function Zt(t, e) {
	if (Ht()) t.style.paddingLeft = e; else t.style.paddingRight = e;
}

function _t(t, e) {
	if (Ht()) t.style.paddingRight = e; else t.style.paddingLeft = e;
}

function te(t, e) {
	if (Ht()) t.style.marginLeft = e; else t.style.marginRight = e;
}

function h(t) {
	return P(undefined, "div", {
		id: "headerText",
		style: {
			paddingTop: "40px",
			paddingBottom: "24px",
			[`padding${Gt()}`]: "268px",
			fontSize: "18px",
			color: "#777",
			fontWeight: "300",
			borderBottom: "1px dashed #ddd",
			marginBottom: "10px"
		},
		textContent: t
	}).t;
}

function g() {
	return P(undefined, "img", {
		style: {
			height: 114 / 2 + "px",
			// width: 414 / 2 + "px",
			position: "absolute",
			top: "16px",
			[`${qt()}`]: "22px"
		},
		src: "images/onetab" + (Ht() ? "" : "-rtl") + ".png"
	}).t;
}

function y(t, e, n) {
	let i = document.createElement("div");
	let o = document.createElement("div");
	Zt(o, "30px");
	o.style.position = "relative";
	o.style.color = "#777";
	let r = document.createElement("img");
	r.src = t ? "images/twister-open.png" : "images/twister-closed" + (Ht() ? "" : "-rtl") + ".png";
	r.style.width = 48 / 2 + "px";
	r.style.height = 50 / 2 + "px";
	r.style.position = "absolute";
	Qt(r, "0px");
	r.style.top = "0px";
	o.textContent = e;
	o.style.fontSize = "16px";
	o.style.cursor = "pointer";
	i.appendChild(o);
	o.appendChild(r);
	let u = document.createElement("div");
	Zt(u, "30px");
	u.style.paddingTop = "10px";
	u.appendChild(n.t);
	u.style.display = t ? "block" : "none";
	i.appendChild(u);
	o.onclick = () => {
		t = !t;
		r.src = t ? "images/twister-open.png" : "images/twister-closed" + (Ht() ? "" : "-rtl") + ".png";
		u.style.display = t ? "block" : "none";
	};
	let l = {
		i: n.t
	};
	Object.assign(l, n);
	l.t = i;
	return l;
}

function v(t, e, n, i) {
	let o = document.createElement("div");
	o.style.fontSize = e + "px";
	o.className = "clickable";
	let r = document.createElement("span");
	if (i) {
		let t = document.createElement("span");
		t.style.color = "#f00";
		t.textContent = Dt("newExclamation") + " ";
		r.appendChild(t);
	}
	if (typeof t === "string") {
		r.appendChild(document.createTextNode(t));
	} else {
		r.appendChild(t);
	}
	r.style.verticalAlign = "middle";
	r.onclick = t => {
		n(r);
	};
	o.appendChild(r);
	return o;
}

function j(t) {
	let e = b(t);
	if (e.toLowerCase().startsWith("www.")) return e.substring("www.".length); else return e;
}

function b(t) {
	if (!t) return "undefined";
	if (t.indexOf("//") === 0) t = "http:" + t;
	if (t.indexOf("://") === -1) t = "http://" + t;
	t = t.substring(t.indexOf("://") + "://".length);
	if (t.indexOf("/") !== -1) t = t.substring(0, t.indexOf("/"));
	if (t.indexOf(":") !== -1) t = t.substring(0, t.indexOf(":"));
	if (t.indexOf("?") !== -1) t = t.substring(0, t.indexOf("?"));
	if (t.indexOf("#") !== -1) t = t.substring(0, t.indexOf("#"));
	return t.toLowerCase();
}

function A(t) {
	if (t.indexOf("://") === -1) return "https://";
	t = t.substring(0, t.indexOf("://") + "://".length);
	return t.toLowerCase();
}

let E = [ "com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl" ];

function T(t) {
	let e = b(t);
	try {
		for (let t in E) {
			let n = "." + E[t];
			if (F(e, n)) {
				e = e.substr(0, e.length - n.length);
				while (e.indexOf(".") !== -1) e = e.substring(e.indexOf(".") + 1);
				e = e + n;
				break;
			}
		}
		if (e.indexOf("www.") === 0) e = e.substring("www.".length);
		return e;
	} catch (t) {
		return e;
	}
}

function O(t) {
	t["noCacheRandom"] = S();
}

function S() {
	return (new Date).getTime() + Math.round(Math.random() * 1e4) + "";
}

async function k(t, e) {
	O(e);
	let n = JSON.stringify(e);
	let i = await R(t, n);
	return await i.json();
}

async function R(t, e) {
	let n = {};
	if (e) {
		n.method = "POST";
		n.body = e;
	} else {
		n.method = "GET";
	}
	n.headers = new Headers;
	n.headers.append("Content-Type", "text/json");
	let i = await fetch(t, n);
	if (i.status === 200) return i; else throw new Error("http response code" + i.status);
}

function C() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
		let e = Math.random() * 16 | 0, n = t == "x" ? e : e & 3 | 8;
		return n.toString(16);
	}));
}

const B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");

function I(t, e) {
	let n = B, i = [], o = 0;
	e = e || n.length;
	t = t || 22;
	for (o = 0; o < t; o++) i[o] = n[0 | Math.random() * e];
	return i.join("");
}

function M() {
	return I();
}

function X(t) {
	if (t === null || t === undefined) return "";
	return t.replace(/^\s+/, "").replace(/\s+$/, "");
}

const Y = (t, e) => !!e["starred"] - !!t["starred"] || t["starred"] && e["starred"] && e["starredDate"] - t["starredDate"] || e["createDate"] - t["createDate"];

function D(t) {
	if (!t) t = "";
	return t.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}

function F(t, e) {
	if (!t) return false;
	return t.indexOf(e, t.length - e.length) !== -1;
}

const L = {
	restoreWindow: "newWindow",
	pinnedTabs: "ignore",
	startupLaunch: "displayOneTab",
	restoreRemoval: "default",
	duplicates: "allow"
};

function U(t, e) {
	if (e[t]) return e[t]; else return L[t];
}

function z(t, e, n) {
	if (t.parentNode) t.remove();
	e.insertBefore(t, n === undefined || n >= e.children.length || e.children.length === 0 ? null : e.children[Math.max(0, n)]);
}

function P(t, e, n) {
	let i = e === undefined ? t : document.createElement(e);
	let o = {};
	if (n) {
		if (n.style) Object.assign(i.style, n.style);
		for (let t of Object.keys(n)) {
			if (t !== "style" && t !== "children") i[t] = n[t];
		}
		if (n.children) {
			for (const [t, e] of Object.entries(n.children)) {
				o[t] = e;
				i.appendChild(e instanceof HTMLElement ? e : e.t);
			}
		}
		if (n.o) i.appendChild(n.o);
		if (n.init) n.init(i);
	}
	if (e !== undefined && t) t.appendChild(i);
	let r = {
		t: i
	};
	Object.assign(r, o);
	return r;
}

const W = "about:reader?url=";

function $(t) {
	if (!t) return "";
	if (t.indexOf(":") === -1) return "http://" + t;
	if (t.indexOf(W) === 0) return decodeURIComponent(t.substring(W.length));
	return t;
}

async function H(t) {
	return new Promise((e => setTimeout(e, t)));
}

function N(t) {
	return parseInt(t.match(/\d+/)[0]);
}

const G = [ ...new Array(30) ].map(((t, e) => parseInt(10 + Math.pow(1.6, e))));

function* J(t) {
	let e = 0;
	while (G.slice(0, e).reduce(((t, e) => t + e), 0) < t) {
		yield G[e++];
	}
}

async function q(t, e, n) {
	for (let e of J(t)) {
		if (await n()) return; else {
			await H(e);
		}
	}
	throw new Error(`Timeout waiting for condition ${e}`);
}

setTimeout((async () => {
	await Lt();
	await ee();
}), 1);

function ee() {
	ne();
}

function ne() {
	P(document.getElementById("contentAreaDiv"), undefined, {
		style: {
			paddingTop: "0px",
			[`padding${Gt()}`]: "0px"
		},
		children: {
			X: g(),
			tn: h(Dt("options")),
			en: P(undefined, "div", {
				style: {
					paddingTop: "24px",
					[`padding${Gt()}`]: "36px"
				},
				children: {
					nn: tn("restoreWindow", Dt("optionTabGroupRestoreTitle"), [ {
						settingValue: "newWindow",
						title: Dt("optionTabGroupRestoreNewWindow")
					}, {
						settingValue: "newWindowAlways",
						title: Dt("optionTabGroupRestoreNewWindowAlways")
					}, {
						settingValue: "currentWindow",
						title: Dt("optionTabGroupRestoreCurrentWindowAlways")
					} ]),
					on: tn("pinnedTabs", Dt("optionPinnedTabsTitle"), [ {
						settingValue: "ignore",
						title: Dt("optionPinnedTabsDontSend"),
						rn: Dt("optionPinnedTabsDontSendDesc")
					}, {
						settingValue: "allow",
						title: Dt("optionPinnedTabsAllow")
					} ], Dt("optionPinnedTabsNote")),
					un: tn("startupLaunch", Dt("optionStartupLaunchTitle"), [ {
						settingValue: "displayOneTab",
						title: Dt("optionStartupLaunchDisplay")
					}, {
						settingValue: "none",
						title: Dt("optionStartupLaunchNone"),
						rn: Dt("optionStartupLaunchNoneDesc")
					} ]),
					ln: tn("restoreRemoval", Dt("optionRestoreRemovalTitle"), [ {
						settingValue: "default",
						title: Dt("optionRestoreRemovalDefault"),
						rn: Dt("optionRestoreRemovalDefaultDesc")
					}, {
						settingValue: "keep",
						title: Dt("optionRestoreRemovalKeep"),
						rn: Dt("optionRestoreRemovalKeepDesc")
					} ]),
					an: tn("duplicates", Dt("optionDuplicatesTitle"), [ {
						settingValue: "allow",
						title: Dt("optionDuplicatesAllow")
					}, {
						settingValue: "reject",
						title: Dt("optionDuplicatesReject"),
						rn: Dt("optionDuplicatesRejectDesc")
					} ])
				}
			})
		}
	});
}

function tn(t, e, n, i) {
	let o = P(undefined, "div", {
		style: {
			paddingBottom: "40px",
			maxWidth: "600px"
		},
		children: {
			heading: P(undefined, "div", {
				style: {
					fontSize: "14px",
					paddingBottom: "0px"
				},
				textContent: e
			})
		}
	}).t;
	n.forEach((e => o.appendChild(nn(t, `optionGroup-${t}`, e))));
	if (i) {
		P(o, "div", {
			style: {
				fontSize: "12.25px",
				color: "#666",
				paddingTop: "10px",
				paddingLeft: "0px"
			},
			textContent: i
		});
	}
	return o;
}

let en = 0;

function nn(t, e, n) {
	let i = "optionId" + en++;
	let o = n.settingValue;
	let r = P(undefined, "div", {
		style: {
			paddingBottom: "0px"
		}
	}).t;
	let u = P(undefined, "input", {
		style: {
			cursor: "pointer"
		},
		id: i,
		type: "radio",
		name: e
	}).t;
	Ft.ht(t).then((t => {
		if (t === o) u.checked = true;
	}));
	u.addEventListener("click", (() => {
		(async () => {
			let e = await Ft.getSettings();
			e[t] = o;
			await Ft.wt(e);
		})();
	}));
	let l = P(undefined, "label", {
		style: {
			fontSize: "14px",
			cursor: "pointer"
		},
		["htmlFor"]: i,
		textContent: " " + n.title
	}).t;
	r.appendChild(u);
	r.appendChild(l);
	te(r, "-5px");
	let a = P(undefined, "div", {
		style: {
			color: "#666",
			fontSize: "12.25px",
			paddingTop: "4px",
			[`padding${Gt()}`]: "30px"
		}
	}).t;
	if (n.rn) a.textContent = n.rn;
	r.appendChild(a);
	return r;
}

window["populateWithTestData"] = async () => {
	await Ft.lt();
	console.log("populateWithTestData done");
};
