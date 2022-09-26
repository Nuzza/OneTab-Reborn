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
	let i = document.createElement("div");
	let r = document.createElement("div");
	Dt(r, "30px");
	r.textContent = e;
	i.appendChild(r);
	// r.appendChild(o);
	let u = document.createElement("div");
	Dt(u, "30px");
	u.appendChild(n.t);
	i.appendChild(u);
	r.onclick = () => {
		t = !t;
		// o.src = t ? "images/twister-open.png" : "images/twister-closed" + (Bt() ? "" : "-rtl") + ".png";
	};
	let c = {
		l: n.t
	};
	Object.assign(c, n);
	c.t = i;
	return c;
}

function v(t, e, n, i) {
	let r = document.createElement("div");
	r.className = "clickable";
	r.id = "Import";
	let o = document.createElement("span");
	if(i) {
		let t = document.createElement("span");
		t.textContent = St("newExclamation") + " ";
		o.appendChild(t);
	}
	if(typeof t === "string") {
		o.appendChild(document.createTextNode(t));
	}
	else {
		o.appendChild(t);
	}
	r.onclick = t => {
		n(o);
	};
	r.appendChild(o);
	return r;
}
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
	let i = await E(t, n);
	return await i.json();
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
	let i = await fetch(t, n);
	if(i.status === 200) return i;
	else throw new Error("http response code" + i.status);
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
		i = [],
		r = 0;
	e = e || n.length;
	t = t || 22;
	for(r = 0; r < t; r++) i[r] = n[0 | Math.random() * e];
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
	restoreWindow: "newWindow",
	pinnedTabs: "ignore",
	startupLaunch: "displayOneTab",
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
	let i = e === undefined ? t : document.createElement(e);
	let r = {};
	if(n) {
		for(let t of Object.keys(n)) {
			if(t !== "style" && t !== "children") i[t] = n[t];
		}
		if(n.children) {
			for(const [t, e] of Object.entries(n.children)) {
				r[t] = e;
				i.appendChild(e instanceof HTMLElement ? e : e.t);
			}
		}
		if(n.h) i.appendChild(n.h);
		if(n.init) n.init(i);
	}
	if(e !== undefined && t) t.appendChild(i);
	let o = {
		t: i
	};
	Object.assign(o, r);
	return o;
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
	let i = 0;
	for(let e of Q(t)) {
		if(await n(i)) return;
		else {
			await Y(e);
			i += e;
		}
	}
	throw new Error(`Timeout waiting for condition ${e}`);
}
let Xt, Yt, Nt, qt, Kt;
let Qt, Vt;
let Zt, _t;
let te = "ontouchstart" in window;

function ee({
	event: t,
	element: e,
	j: n,
	A: i,
	S: r,
	C: o
}) {
	Xt = e;
	Yt = n;
	Nt = i;
	qt = r;
	Kt = o;
	Zt = 0;
	_t = 0;
	if(te && t instanceof TouchEvent) {
		if(t.touches.length > 1) {
			return;
		}
		Qt = t.touches.item(0).pageX;
		Vt = t.touches.item(0).pageY;
		document.addEventListener("touchmove", ne, false);
		document.addEventListener("touchend", ie, false);
		t.preventDefault();
	}
	else {
		Qt = t.clientX + window.scrollX;
		Vt = t.clientY + window.scrollY;
		document.addEventListener("mousemove", ne, false);
		document.addEventListener("mouseup", ie, false);
		t.preventDefault();
	}
	Nt({
		B: Xt,
		I: Yt,
		M: Qt,
		X: Vt
	});
}

function ne(t) {
	let e, n, i, r;
	if(te && t instanceof TouchEvent) {
		if(t.touches.length > 1) {
			i = 0;
			r = 0;
			qt({
				B: Xt,
				I: Yt,
				dx: i,
				dy: r,
				M: Qt,
				X: Vt,
				pageX: e,
				pageY: n
			});
			return ie(t);
		}
		e = t.touches.item(0).pageX;
		n = t.touches.item(0).pageY;
	}
	else {
		e = t.clientX + window.scrollX;
		n = t.clientY + window.scrollY;
	}
	i = e - Qt;
	r = n - Vt;
	let o = false;
	if(Zt !== i || _t !== r) o = true;
	Zt = i;
	_t = r;
	if(o) {
		qt({
			B: Xt,
			I: Yt,
			dx: i,
			dy: r,
			M: Qt,
			X: Vt,
			pageX: e,
			pageY: n
		});
	}
	t.preventDefault();
}

function ie(t) {
	if(te && t instanceof TouchEvent) {
		document.removeEventListener("touchmove", ne, false);
		document.removeEventListener("touchend", ie, false);
	}
	else {
		document.removeEventListener("mousemove", ne, false);
		document.removeEventListener("mouseup", ie, false);
	}
	Kt({
		B: Xt,
		I: Yt,
		Y: Zt,
		D: _t,
		M: Qt,
		X: Vt
	});
}
class Z {
	constructor(t, e) {
		this.x = t;
		this.y = e;
	}
	p(t) {
		return new Z(this.x - t.x, this.y - t.y);
	}
}
class _ {
	constructor(t, e, n, i) {
		this.m = t;
		this.type = e;
		this.listener = n;
		this.g = i;
	}
	remove() {
		this.m.removeEventListener(this.type, this.listener, this.g);
	}
}

function tt(t, e) {
	t.onmousemove = n => {
		e(new xt(t, n));
	};
}

function nt(t, e) {
	t.onmousedown = n => {
		e(new xt(t, n));
	};
}

function et(t, e) {
	t.onmouseover = n => {
		e(new xt(t, n));
	};
}

function it(t, e) {
	t.onmouseup = n => {
		e(new xt(t, n));
	};
}

function rt(t, e) {
	t.onmouseout = n => {
		e(new xt(t, n));
	};
}

function ot(t, e) {
	t.onclick = n => {
		e(new xt(t, n));
	};
}

function ut(t, e) {
	t.ondblclick = n => {
		e(new xt(t, n));
	};
}

function ct(t, e) {
	mt(t, "click", e);
}

function ft(t, e) {
	mt(t, "dblclick", e);
}

function lt(t, e) {
	return mt(t, "mouseover", e);
}

function st(t, e) {
	return mt(t, "mouseup", e);
}

function at(t, e) {
	let n;
	n = n => {
		let i, r;
		i = n.currentTarget;
		r = n.relatedTarget;
		if(i === t && i !== r && !pt(i, r)) {
			e(new xt(t, n));
		}
	};
	t.addEventListener("mouseout", n, false);
	return new _(t, "mouseout", n, false);
}

function dt(t, e) {
	t.onmouseout = n => {
		let i, r;
		i = n.currentTarget;
		r = n.relatedTarget;
		if(i === t && i !== r && !pt(i, r)) {
			e(new xt(t, n));
		}
	};
}

function wt(t, e) {
	for(let n of t) {
		n.onmouseout = ht(n, t, e);
	}
}

function ht(t, e, n) {
	return i => {
		let r, o;
		r = i.currentTarget;
		o = i.relatedTarget;
		if(r === t && r !== o && !pt(r, o)) {
			for(let t of e)
				if(o === t) return;
			n(new xt(t, i));
		}
	};
}

function pt(t, e) {
	try {
		if(!e) return false;
		while(e.parentNode)
			if((e = e.parentNode) === t) return true;
		return false;
	}
	catch (t) {
		return false;
	}
}
class xt {
	constructor(t, e) {
		this.element = t;
		this.event = e;
		this.v = null;
		this.k = null;
	}
	T() {
		if(this.v === null) {
			let t = yt(this.element);
			this.v = t.x;
			this.k = t.y;
		}
		return this.v;
	}
	R() {
		if(this.v === null) {
			this.T();
		}
		return this.k;
	}
}

function mt(t, e, n) {
	let i = e => {
		let i = new xt(t, e);
		n(i);
	};
	t.addEventListener(e, i, false);
	return new _(t, e, i, false);
}

function gt(t) {
	return bt(t);
}

function yt(t, e) {
	return bt(e).p(vt(t));
}

function bt(t) {
	let e, n;
	e = t.clientX + window.scrollX;
	n = t.clientY + window.scrollY;
	return new Z(e, n);
}

function vt(t) {
	let e = t;
	let n = 0;
	let i = 0;
	let loop =true;
	while(loop) {
		let t = e.offsetParent;
		if(t === null) loop=false;
		n += e.offsetLeft;
		i += e.offsetTop;
		e = t;
	}
	return new Z(n, i);
}

function kt() {
	return window.scrollY;
}

function Tt() {
	return window.scrollX;
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
setTimeout((async () => {
	await jt();
	await re();
}), 1);
async function re() {
	let t = Mt.getState();
	oe(t);
}

function oe() {
	let {
		content: t
	} = J(document.getElementById("contentAreaDiv"), undefined, {
		children: {
			// L: m(St("import") + " / " + St("export")),
			content: J(undefined, "div", {
				children: {
					$: b(false, "", J(undefined, "div", {
						className: "tabGroup",
						children: {
							import: J(undefined, "h1", {
								textContent: "Import"
							}),
							info: J(undefined, "div", {
								textContent: St("pasteInUrlsInstructions")
							}),
							U: J(undefined, "textArea", {
							}),
							P: v(St("import"), 16, (() => {
								(async () => {
									await Mt.W(t.$.U.t.value);
									await Mt.H();
									setTimeout((() => window.close()), 100);
								})();
							}))
						}
					})),
					N: $t(16),
					G: b(true, "", J(undefined, "div", {
						className: "tabGroup",
						children: {
							export: J(undefined, "h1", {
								textContent: "Export"
							}),
							J: J(undefined, "div", {
								textContent: St("exportThenImportNote")
							}),
							q: J(undefined, "textArea", {
								init: t => {
									(async () => {
										let e = await Mt.getState();
										let n = e["tabGroups"];
										if(!n) n = [];
										t.value = n.map((t => t["tabsMeta"].map((t => {
											let e = t["url"];
											if(O(X(t["url"])) !== t["title"]) e += " | " + W(t["title"]);
											return e + "\n";
										})).join(""))).join("\n");
									})();
								}
							})
						}
					}))
				}
			})
		}
	});
}
