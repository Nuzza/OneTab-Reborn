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
	let r = document.createElement("div");
	Zt(r, "30px");
	r.style.position = "relative";
	r.style.color = "#777";
	let o = document.createElement("img");
	o.src = t ? "images/twister-open.png" : "images/twister-closed" + (Ht() ? "" : "-rtl") + ".png";
	o.style.width = 48 / 2 + "px";
	o.style.height = 50 / 2 + "px";
	o.style.position = "absolute";
	Qt(o, "0px");
	o.style.top = "0px";
	r.textContent = e;
	r.style.fontSize = "16px";
	r.style.cursor = "pointer";
	i.appendChild(r);
	r.appendChild(o);
	let u = document.createElement("div");
	Zt(u, "30px");
	u.style.paddingTop = "10px";
	u.appendChild(n.t);
	u.style.display = t ? "block" : "none";
	i.appendChild(u);
	r.onclick = () => {
		t = !t;
		o.src = t ? "images/twister-open.png" : "images/twister-closed" + (Ht() ? "" : "-rtl") + ".png";
		u.style.display = t ? "block" : "none";
	};
	let c = {
		i: n.t
	};
	Object.assign(c, n);
	c.t = i;
	return c;
}

function v(t, e, n, i) {
	let r = document.createElement("div");
	r.style.fontSize = e + "px";
	r.className = "clickable";
	let o = document.createElement("span");
	if (i) {
		let t = document.createElement("span");
		t.style.color = "#f00";
		t.textContent = Dt("newExclamation") + " ";
		o.appendChild(t);
	}
	if (typeof t === "string") {
		o.appendChild(document.createTextNode(t));
	} else {
		o.appendChild(t);
	}
	o.style.verticalAlign = "middle";
	o.onclick = t => {
		n(o);
	};
	r.appendChild(o);
	return r;
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
	let n = B, i = [], r = 0;
	e = e || n.length;
	t = t || 22;
	for (r = 0; r < t; r++) i[r] = n[0 | Math.random() * e];
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
	let r = {};
	if (n) {
		if (n.style) Object.assign(i.style, n.style);
		for (let t of Object.keys(n)) {
			if (t !== "style" && t !== "children") i[t] = n[t];
		}
		if (n.children) {
			for (const [t, e] of Object.entries(n.children)) {
				r[t] = e;
				i.appendChild(e instanceof HTMLElement ? e : e.t);
			}
		}
		if (n.o) i.appendChild(n.o);
		if (n.init) n.init(i);
	}
	if (e !== undefined && t) t.appendChild(i);
	let o = {
		t: i
	};
	Object.assign(o, r);
	return o;
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

let K, Q, V, Z, _;

let tt, et;

let nt, it;

let rt = "ontouchstart" in window;

function ot({event: t, element: e, u: n, l: i, p: r, m: o}) {
	K = e;
	Q = n;
	V = i;
	Z = r;
	_ = o;
	nt = 0;
	it = 0;
	if (rt && t instanceof TouchEvent) {
		if (t.touches.length > 1) {
			return;
		}
		tt = t.touches.item(0).pageX;
		et = t.touches.item(0).pageY;
		document.addEventListener("touchmove", ut, false);
		document.addEventListener("touchend", ct, false);
		t.preventDefault();
	} else {
		tt = t.clientX + window.scrollX;
		et = t.clientY + window.scrollY;
		document.addEventListener("mousemove", ut, false);
		document.addEventListener("mouseup", ct, false);
		t.preventDefault();
	}
	V({
		h: K,
		g: Q,
		v: tt,
		j: et
	});
}

function ut(t) {
	let e, n, i, r;
	if (rt && t instanceof TouchEvent) {
		if (t.touches.length > 1) {
			i = 0;
			r = 0;
			Z({
				h: K,
				g: Q,
				dx: i,
				dy: r,
				v: tt,
				j: et,
				pageX: e,
				pageY: n
			});
			return ct(t);
		}
		e = t.touches.item(0).pageX;
		n = t.touches.item(0).pageY;
	} else {
		e = t.clientX + window.scrollX;
		n = t.clientY + window.scrollY;
	}
	i = e - tt;
	r = n - et;
	let o = false;
	if (nt !== i || it !== r) o = true;
	nt = i;
	it = r;
	if (o) {
		Z({
			h: K,
			g: Q,
			dx: i,
			dy: r,
			v: tt,
			j: et,
			pageX: e,
			pageY: n
		});
	}
	t.preventDefault();
}

function ct(t) {
	if (rt && t instanceof TouchEvent) {
		document.removeEventListener("touchmove", ut, false);
		document.removeEventListener("touchend", ct, false);
	} else {
		document.removeEventListener("mousemove", ut, false);
		document.removeEventListener("mouseup", ct, false);
	}
	_({
		h: K,
		g: Q,
		A: nt,
		T: it,
		v: tt,
		j: et
	});
}

class lt {
	constructor(t, e) {
		this.x = t;
		this.y = e;
	}
	O(t) {
		return new lt(this.x - t.x, this.y - t.y);
	}
}

class ft {
	constructor(t, e, n, i) {
		this.S = t;
		this.type = e;
		this.listener = n;
		this.k = i;
	}
	remove() {
		this.S.removeEventListener(this.type, this.listener, this.k);
	}
}

function st(t, e) {
	t.onmousemove = n => {
		e(new Ot(t, n));
	};
}

function dt(t, e) {
	t.onmousedown = n => {
		e(new Ot(t, n));
	};
}

function at(t, e) {
	t.onmouseover = n => {
		e(new Ot(t, n));
	};
}

function pt(t, e) {
	t.onmouseup = n => {
		e(new Ot(t, n));
	};
}

function wt(t, e) {
	t.onmouseout = n => {
		e(new Ot(t, n));
	};
}

function mt(t, e) {
	t.onclick = n => {
		e(new Ot(t, n));
	};
}

function xt(t, e) {
	t.ondblclick = n => {
		e(new Ot(t, n));
	};
}

function ht(t, e) {
	St(t, "click", e);
}

function gt(t, e) {
	St(t, "dblclick", e);
}

function yt(t, e) {
	return St(t, "mouseover", e);
}

function vt(t, e) {
	return St(t, "mouseup", e);
}

function jt(t, e) {
	let n;
	n = n => {
		let i, r;
		i = n.currentTarget;
		r = n.relatedTarget;
		if (i === t && i !== r && !Tt(i, r)) {
			e(new Ot(t, n));
		}
	};
	t.addEventListener("mouseout", n, false);
	return new ft(t, "mouseout", n, false);
}

function bt(t, e) {
	t.onmouseout = n => {
		let i, r;
		i = n.currentTarget;
		r = n.relatedTarget;
		if (i === t && i !== r && !Tt(i, r)) {
			e(new Ot(t, n));
		}
	};
}

function At(t, e) {
	for (let n of t) {
		n.onmouseout = Et(n, t, e);
	}
}

function Et(t, e, n) {
	return i => {
		let r, o;
		r = i.currentTarget;
		o = i.relatedTarget;
		if (r === t && r !== o && !Tt(r, o)) {
			for (let t of e) if (o === t) return;
			n(new Ot(t, i));
		}
	};
}

function Tt(t, e) {
	try {
		if (!e) return false;
		while (e.parentNode) if ((e = e.parentNode) === t) return true;
		return false;
	} catch (t) {
		return false;
	}
}

class Ot {
	constructor(t, e) {
		this.element = t;
		this.event = e;
		this.R = null;
		this.C = null;
	}
	B() {
		if (this.R === null) {
			let t = Rt(this.element);
			this.R = t.x;
			this.C = t.y;
		}
		return this.R;
	}
	I() {
		if (this.R === null) {
			this.B();
		}
		return this.C;
	}
}

function St(t, e, n) {
	let i = e => {
		let i = new Ot(t, e);
		n(i);
	};
	t.addEventListener(e, i, false);
	return new ft(t, e, i, false);
}

function kt(t) {
	return Ct(t);
}

function Rt(t, e) {
	return Ct(e).O(Bt(t));
}

function Ct(t) {
	let e, n;
	e = t.clientX + window.scrollX;
	n = t.clientY + window.scrollY;
	return new lt(e, n);
}

function Bt(t) {
	let e = t;
	let n = 0;
	let i = 0;
	while (true) {
		let t = e.offsetParent;
		if (t === null) break;
		n += e.offsetLeft;
		i += e.offsetTop;
		e = t;
	}
	return new lt(n, i);
}

function It() {
	return window.scrollY;
}

function Mt() {
	return window.scrollX;
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

setTimeout((async () => {
	await Lt();
	await ee();
}), 1);

async function ee() {
	let t = Ft.getState();
	ne(t);
}

function ne() {
	let {content: t} = P(document.getElementById("contentAreaDiv"), undefined, {
		style: {
			paddingTop: "0px",
			paddingLeft: "0px",
			paddingBottom: "30px"
		},
		children: {
			X: g(),
			Y: h(Dt("import") + " / " + Dt("export")),
			content: P(undefined, "div", {
				style: {
					paddingTop: "14px",
					["padding" + Gt()]: "36px"
				},
				children: {
					D: y(false, Dt("importUrls"), P(undefined, "div", {
						style: {},
						children: {
							info: P(undefined, "div", {
								style: {
									color: "#777",
									paddingBottom: "10px"
								},
								textContent: Dt("pasteInUrlsInstructions")
							}),
							F: P(undefined, "textArea", {
								style: {
									width: "800px",
									height: "200px"
								}
							}),
							L: v(Dt("import"), 16, (() => {
								(async () => {
									await Ft.U(t.D.F.t.value);
									await Ft.P();
									setTimeout((() => window.close()), 100);
								})();
							}))
						}
					})),
					W: zt(16),
					$: y(true, Dt("exportUrls"), P(undefined, "div", {
						style: {
							paddingBottom: "30px"
						},
						children: {
							H: P(undefined, "div", {
								style: {
									color: "#777",
									paddingBottom: "10px"
								},
								textContent: Dt("exportThenImportNote")
							}),
							N: P(undefined, "textArea", {
								style: {
									width: "800px",
									height: "500px"
								},
								init: t => {
									(async () => {
										let e = await Ft.getState();
										let n = e["tabGroups"];
										if (!n) n = [];
										t.value = n.map((t => t["tabsMeta"].map((t => {
											let e = t["url"];
											if (b($(t["url"])) !== t["title"]) e += " | " + D(t["title"]);
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
