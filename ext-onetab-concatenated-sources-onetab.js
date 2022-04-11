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
	return new Promise(((e, o) => {
		if (document.readyState === "complete") {
			e();
		} else {
			document.addEventListener("readystatechange", (o => {
				if (document.readyState === "complete") e();
			}));
		}
	}));
}

let Xt = {};

async function Yt() {
	Xt = Ft.M();
}

function Dt(e) {
	return Xt[e];
}

const Ft = window.chrome.extension.getBackgroundPage().core;

async function Lt() {
	Nt();
	await Yt();
}

function Ut(e) {
	if (typeof e === "string") e = document.getElementById(e);
	if (!e) return;
	while (e.childNodes.length > 0) e.childNodes[0].remove();
}

function zt(e) {
	return P(undefined, "div", {
		style: {
			fontSize: "1px",
			height: e + "px",
			width: 1 + "px"
		}
	}).t;
}

let Pt = navigator["language"] || navigator["userLanguage"];

function Wt() {
	let e = [ "ar", "he", "fa", "ps", "ur" ];
	let o = Pt.split("-", 1)[0];
	return e.indexOf(o) >= 0 ? "rtl" : "ltr";
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

function Qt(e, o) {
	if (Ht()) e.style.left = o; else e.style.right = o;
}

function Vt(e, o) {
	if (Ht()) e.style.right = o; else e.style.left = o;
}

function Zt(e, o) {
	if (Ht()) e.style.paddingLeft = o; else e.style.paddingRight = o;
}

function _t(e, o) {
	if (Ht()) e.style.paddingRight = o; else e.style.paddingLeft = o;
}

function te(e, o) {
	if (Ht()) e.style.marginLeft = o; else e.style.marginRight = o;
}

function h(e) {
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
		textContent: e
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

function y(e, o, t) {
	let n = document.createElement("div");
	let i = document.createElement("div");
	Zt(i, "30px");
	i.style.position = "relative";
	i.style.color = "#777";
	let c = document.createElement("img");
	c.src = e ? "images/twister-open.png" : "images/twister-closed" + (Ht() ? "" : "-rtl") + ".png";
	c.style.width = 48 / 2 + "px";
	c.style.height = 50 / 2 + "px";
	c.style.position = "absolute";
	Qt(c, "0px");
	c.style.top = "0px";
	i.textContent = o;
	i.style.fontSize = "16px";
	i.style.cursor = "pointer";
	n.appendChild(i);
	i.appendChild(c);
	let a = document.createElement("div");
	Zt(a, "30px");
	a.style.paddingTop = "10px";
	a.appendChild(t.t);
	a.style.display = e ? "block" : "none";
	n.appendChild(a);
	i.onclick = () => {
		e = !e;
		c.src = e ? "images/twister-open.png" : "images/twister-closed" + (Ht() ? "" : "-rtl") + ".png";
		a.style.display = e ? "block" : "none";
	};
	let s = {
		i: t.t
	};
	Object.assign(s, t);
	s.t = n;
	return s;
}

function v(e, o, t, n) {
	let i = document.createElement("div");
	i.style.fontSize = o + "px";
	i.className = "clickable";
	let c = document.createElement("span");
	if (n) {
		let e = document.createElement("span");
		e.style.color = "#f00";
		e.textContent = Dt("newExclamation") + " ";
		c.appendChild(e);
	}
	if (typeof e === "string") {
		c.appendChild(document.createTextNode(e));
	} else {
		c.appendChild(e);
	}
	c.style.verticalAlign = "middle";
	c.onclick = e => {
		t(c);
	};
	i.appendChild(c);
	return i;
}

class eo {
	constructor() {
		this.eo = null;
		this.oo = null;
		this.no = null;
		this.io = null;
		this.co = null;
		this.ao = null;
		this.so = false;
		this.ro = null;
		this.mo = null;
		this.lo = 3;
		this.do = [];
	}
	uo({po: e, ho: o, fo: t, bo: n, wo: i, xo: c, vo: a, yo: s, ko: r, Ao: m}) {
		e.onmousedown = l => {
			if (!oo(l)) return;
			let d = false;
			ot({
				event: l,
				element: e,
				u: null,
				l: ({h: e, g: o, v: t, j: n}) => {
					d = r && r();
				},
				p: ({h: e, g: c, dx: a, dy: s, v: r, j: l, pageX: u, pageY: p}) => {
					if (!this.so && !d) {
						if (Math.abs(a) > this.lo || Math.abs(s) > this.lo) {
							this.so = true;
							this.eo = o;
							this.no = m.offsetWidth;
							this.io = m.offsetHeight;
							let e = Bt(t);
							this.To = e.x;
							this.jo = e.y;
							this.zo = t.offsetWidth;
							this.ro = t.parentNode;
							this.mo = t.nextSibling;
							t.remove();
							this.oo = t;
							this.co = n;
							this.ao = P(document.body, "div", {
								style: {
									pointerEvents: "none",
									zIndex: "100000",
									position: "absolute",
									width: this.no + 2 + "px",
									height: this.io + 2 + "px",
									cursor: "move"
								},
								o: this.oo
							}).t;
							i();
						}
					}
					if (this.so) {
						let e = this.zo - this.oo.offsetWidth;
						this.ao.style.left = this.To + a + (Wt() === "rtl" ? e : 0) + "px";
						this.ao.style.top = this.jo + s + "px";
						let o = document.elementFromPoint(u - window.scrollX, p - window.scrollY);
						let t = this.do.find((e => e.objectType === this.co && (e.element === o || Tt(e.element, o))));
						if (t) {
							t.Eo.style.display = "block";
							t.Eo.style.width = this.no - 0 + "px";
							t.Eo.style.height = this.io - 0 + "px";
							t.Eo.style.border = "1px dashed #4061a7";
							this.Do = t;
						} else {
							this.Do = undefined;
						}
						this.do.filter((e => e !== t)).forEach((e => e.Eo.style.display = "none"));
					}
				},
				m: ({h: e, g: o, A: t, T: n, v: i, j: r}) => {
					(async () => {
						if (!this.so) {
							c();
						} else {
							this.so = false;
							let e = this.Do;
							if (this.Do) {
								await this.Do.So(this.eo);
							} else {
								a();
							}
							document.body.removeChild(this.ao);
							if (e) {
								e.Eo.style.display = "none";
								this.Do = undefined;
							}
							s();
						}
					})();
				}
			});
		};
	}
	Lo({element: e, objectType: o, Eo: t, So: n}) {
		this.do.push({
			element: e,
			objectType: o,
			Eo: t,
			So: n
		});
	}
	Co() {
		return P(undefined, "div", {
			style: {
				background: "repeating-linear-gradient(\n          -45deg,\n          #f5f9ff,\n          #f5f9ff 10px,\n          #fff 10px,\n          #fff 20px\n        )"
			}
		}).t;
	}
}

function oo(e) {
	if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
		return false;
	} else if ("buttons" in e) {
		return e.buttons === 1;
	} else if ("which" in e) {
		return e.which === 1;
	} else {
		return e.button === 1 || e.type === "click";
	}
}

class to {
	constructor({parentElement: e, Go: o, value: t, Bo: n, fontWeight: i, Oo: c, Ro: a, Wo: s}) {
		this.parentElement = e;
		this.Wo = s;
		this.value = X(t);
		this.Bo = n;
		this.fontWeight = i;
		this.Oo = c;
		this.Ro = a;
		this.Io = false;
		let r = P(e, "div", {
			style: {
				display: "inline-block",
				position: "relative",
				overflow: "hidden"
			},
			children: {
				Po: P(undefined, "div", {
					style: {
						textDecoration: "none",
						display: "block",
						whiteSpace: "nowrap",
						fontSize: this.Bo + "px",
						fontWeight: this.fontWeight,
						overflow: "hidden"
					},
					className: this.Oo
				})
			}
		});
		this.div = r.t;
		this.Po = r.Po.t;
		this.No(this.value, false, true);
		this.Go = o;
		this.Po.onmousedown = e => {};
		this.Po.onmouseup = e => {
			if (this.Io) return true;
			let o = false;
			if (this.Ro) o = this.Ro();
			if (!o) this.$o();
			return false;
		};
	}
	$o() {
		if (this.Io) return;
		if (this.Wo) this.Wo();
		this.Io = true;
		let e = P(undefined, "input", {
			style: {
				[Gt()]: "0px",
				position: "absolute",
				top: "0px",
				width: this.Po.offsetWidth + "px",
				height: this.Po.offsetHeight + "px",
				overflow: "hidden",
				border: "none",
				paddingTop: "0px",
				paddingLeft: "0px",
				paddingRight: "0px",
				paddingBottom: "0px",
				marginTop: "0px",
				marginLeft: "0px",
				marginRight: "0px",
				marginBottom: "0px",
				background: "transparent"
			}
		}).t;
		e.setAttribute("autocomplete", "off");
		e.setAttribute("spellcheck", "false");
		Ut(this.Po);
		this.Po.innerHTML = "&nbsp;";
		this.Po.style.width = "1px";
		e.className = this.Oo;
		e.style.fontSize = this.Bo + "px";
		e.style.fontWeight = this.fontWeight;
		this.div.appendChild(e);
		e.value = this.value;
		this.qo = this.value;
		e.onblur = () => {
			this.div.removeChild(e);
			this.No(this.value, false, false);
			setTimeout((() => {
				this.Io = false;
			}), 300);
			return false;
		};
		e.onkeydown = o => {
			if ((o.key == "Escape" || o.key == "Esc") && !o.isComposing) {
				e.value = this.qo;
				this.value = this.qo;
				e.blur();
			}
			if (o.key == "Enter" && !o.isComposing) {
				e.blur();
			}
		};
		e.oninput = o => {
			this.value = e.value;
			let t = io(this.value, this.Oo, this.Bo, this.fontWeight, false);
			e.style.width = t + 30 + "px";
			this.div.style.width = t + 30 + "px";
			this.Go(e.value, false);
			return false;
		};
		e.oninput(undefined);
		setTimeout((() => {
			e.focus();
		}), 100);
		return false;
	}
	Mo() {
		this.Po.style.width = "auto";
		this.div.style.width = "auto";
	}
	Fo() {
		let e = io(this.value, this.Oo, this.Bo, this.fontWeight, false);
		e = Math.max(e, 20);
		this.Po.style.width = e + "px";
		this.div.style.width = e + "px";
		return e;
	}
	No(e, o, t) {
		this.value = X(e);
		if (X(e) === "") {
			this.Po.innerHTML = "&nbsp;";
		} else {
			this.Po.textContent = this.value;
		}
		if (o) this.Fo(); else this.Mo();
		if (!t) this.Go(this.value, !o);
	}
}

let no;

function io(e, o, t, n, i) {
	if (!n) n = "normal";
	if (n === true) n = "bold";
	if (n === false) n = "normal";
	if (no === undefined) {
		no = P(document.body, "div", {
			style: {
				visibility: "hidden",
				position: "absolute",
				[Gt()]: "-8000px",
				top: "-8000px",
				whiteSpace: "nowrap"
			}
		}).t;
	}
	no.className = o;
	no.style.fontSize = t + "px";
	no.style.fontStyle = i ? "italic" : "normal";
	if (n) no.style.fontWeight = n;
	no.textContent = e;
	let c = no.offsetWidth;
	no.textContent = "";
	return c;
}

function j(e) {
	let o = b(e);
	if (o.toLowerCase().startsWith("www.")) return o.substring("www.".length); else return o;
}

function b(e) {
	if (!e) return "undefined";
	if (e.indexOf("//") === 0) e = "http:" + e;
	if (e.indexOf("://") === -1) e = "http://" + e;
	e = e.substring(e.indexOf("://") + "://".length);
	if (e.indexOf("/") !== -1) e = e.substring(0, e.indexOf("/"));
	if (e.indexOf(":") !== -1) e = e.substring(0, e.indexOf(":"));
	if (e.indexOf("?") !== -1) e = e.substring(0, e.indexOf("?"));
	if (e.indexOf("#") !== -1) e = e.substring(0, e.indexOf("#"));
	return e.toLowerCase();
}

function A(e) {
	if (e.indexOf("://") === -1) return "https://";
	e = e.substring(0, e.indexOf("://") + "://".length);
	return e.toLowerCase();
}

let E = [ "com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl" ];

function T(e) {
	let o = b(e);
	try {
		for (let e in E) {
			let t = "." + E[e];
			if (F(o, t)) {
				o = o.substr(0, o.length - t.length);
				while (o.indexOf(".") !== -1) o = o.substring(o.indexOf(".") + 1);
				o = o + t;
				break;
			}
		}
		if (o.indexOf("www.") === 0) o = o.substring("www.".length);
		return o;
	} catch (e) {
		return o;
	}
}

function O(e) {
	e["noCacheRandom"] = S();
}

function S() {
	return (new Date).getTime() + Math.round(Math.random() * 1e4) + "";
}

async function k(e, o) {
	O(o);
	let t = JSON.stringify(o);
	let n = await R(e, t);
	return await n.json();
}

async function R(e, o) {
	let t = {};
	if (o) {
		t.method = "POST";
		t.body = o;
	} else {
		t.method = "GET";
	}
	t.headers = new Headers;
	t.headers.append("Content-Type", "text/json");
	let n = await fetch(e, t);
	if (n.status === 200) return n; else throw new Error("http response code" + n.status);
}

function C() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
		let o = Math.random() * 16 | 0, t = e == "x" ? o : o & 3 | 8;
		return t.toString(16);
	}));
}

const B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");

function I(e, o) {
	let t = B, n = [], i = 0;
	o = o || t.length;
	e = e || 22;
	for (i = 0; i < e; i++) n[i] = t[0 | Math.random() * o];
	return n.join("");
}

function M() {
	return I();
}

function X(e) {
	if (e === null || e === undefined) return "";
	return e.replace(/^\s+/, "").replace(/\s+$/, "");
}

const Y = (e, o) => !!o["starred"] - !!e["starred"] || e["starred"] && o["starred"] && o["starredDate"] - e["starredDate"] || o["createDate"] - e["createDate"];

function D(e) {
	if (!e) e = "";
	return e.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}

function F(e, o) {
	if (!e) return false;
	return e.indexOf(o, e.length - o.length) !== -1;
}

const L = {
	restoreWindow: "newWindow",
	pinnedTabs: "ignore",
	startupLaunch: "displayOneTab",
	restoreRemoval: "default",
	duplicates: "allow"
};

function U(e, o) {
	if (o[e]) return o[e]; else return L[e];
}

function z(e, o, t) {
	if (e.parentNode) e.remove();
	o.insertBefore(e, t === undefined || t >= o.children.length || o.children.length === 0 ? null : o.children[Math.max(0, t)]);
}

function P(e, o, t) {
	let n = o === undefined ? e : document.createElement(o);
	let i = {};
	if (t) {
		if (t.style) Object.assign(n.style, t.style);
		for (let e of Object.keys(t)) {
			if (e !== "style" && e !== "children") n[e] = t[e];
		}
		if (t.children) {
			for (const [e, o] of Object.entries(t.children)) {
				i[e] = o;
				n.appendChild(o instanceof HTMLElement ? o : o.t);
			}
		}
		if (t.o) n.appendChild(t.o);
		if (t.init) t.init(n);
	}
	if (o !== undefined && e) e.appendChild(n);
	let c = {
		t: n
	};
	Object.assign(c, i);
	return c;
}

const W = "about:reader?url=";

function $(e) {
	if (!e) return "";
	if (e.indexOf(":") === -1) return "http://" + e;
	if (e.indexOf(W) === 0) return decodeURIComponent(e.substring(W.length));
	return e;
}

async function H(e) {
	return new Promise((o => setTimeout(o, e)));
}

function N(e) {
	return parseInt(e.match(/\d+/)[0]);
}

const G = [ ...new Array(30) ].map(((e, o) => parseInt(10 + Math.pow(1.6, o))));

function* J(e) {
	let o = 0;
	while (G.slice(0, o).reduce(((e, o) => e + o), 0) < e) {
		yield G[o++];
	}
}

async function q(e, o, t) {
	for (let o of J(e)) {
		if (await t()) return; else {
			await H(o);
		}
	}
	throw new Error(`Timeout waiting for condition ${o}`);
}

let K, Q, V, Z, _;

let tt, et;

let nt, it;

let rt = "ontouchstart" in window;

function ot({event: e, element: o, u: t, l: n, p: i, m: c}) {
	K = o;
	Q = t;
	V = n;
	Z = i;
	_ = c;
	nt = 0;
	it = 0;
	if (rt && e instanceof TouchEvent) {
		if (e.touches.length > 1) {
			return;
		}
		tt = e.touches.item(0).pageX;
		et = e.touches.item(0).pageY;
		document.addEventListener("touchmove", ut, false);
		document.addEventListener("touchend", ct, false);
		e.preventDefault();
	} else {
		tt = e.clientX + window.scrollX;
		et = e.clientY + window.scrollY;
		document.addEventListener("mousemove", ut, false);
		document.addEventListener("mouseup", ct, false);
		e.preventDefault();
	}
	V({
		h: K,
		g: Q,
		v: tt,
		j: et
	});
}

function ut(e) {
	let o, t, n, i;
	if (rt && e instanceof TouchEvent) {
		if (e.touches.length > 1) {
			n = 0;
			i = 0;
			Z({
				h: K,
				g: Q,
				dx: n,
				dy: i,
				v: tt,
				j: et,
				pageX: o,
				pageY: t
			});
			return ct(e);
		}
		o = e.touches.item(0).pageX;
		t = e.touches.item(0).pageY;
	} else {
		o = e.clientX + window.scrollX;
		t = e.clientY + window.scrollY;
	}
	n = o - tt;
	i = t - et;
	let c = false;
	if (nt !== n || it !== i) c = true;
	nt = n;
	it = i;
	if (c) {
		Z({
			h: K,
			g: Q,
			dx: n,
			dy: i,
			v: tt,
			j: et,
			pageX: o,
			pageY: t
		});
	}
	e.preventDefault();
}

function ct(e) {
	if (rt && e instanceof TouchEvent) {
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
	constructor(e, o) {
		this.x = e;
		this.y = o;
	}
	O(e) {
		return new lt(this.x - e.x, this.y - e.y);
	}
}

class ft {
	constructor(e, o, t, n) {
		this.S = e;
		this.type = o;
		this.listener = t;
		this.k = n;
	}
	remove() {
		this.S.removeEventListener(this.type, this.listener, this.k);
	}
}

function st(e, o) {
	e.onmousemove = t => {
		o(new Ot(e, t));
	};
}

function dt(e, o) {
	e.onmousedown = t => {
		o(new Ot(e, t));
	};
}

function at(e, o) {
	e.onmouseover = t => {
		o(new Ot(e, t));
	};
}

function pt(e, o) {
	e.onmouseup = t => {
		o(new Ot(e, t));
	};
}

function wt(e, o) {
	e.onmouseout = t => {
		o(new Ot(e, t));
	};
}

function mt(e, o) {
	e.onclick = t => {
		o(new Ot(e, t));
	};
}

function xt(e, o) {
	e.ondblclick = t => {
		o(new Ot(e, t));
	};
}

function ht(e, o) {
	St(e, "click", o);
}

function gt(e, o) {
	St(e, "dblclick", o);
}

function yt(e, o) {
	return St(e, "mouseover", o);
}

function vt(e, o) {
	return St(e, "mouseup", o);
}

function jt(e, o) {
	let t;
	t = t => {
		let n, i;
		n = t.currentTarget;
		i = t.relatedTarget;
		if (n === e && n !== i && !Tt(n, i)) {
			o(new Ot(e, t));
		}
	};
	e.addEventListener("mouseout", t, false);
	return new ft(e, "mouseout", t, false);
}

function bt(e, o) {
	e.onmouseout = t => {
		let n, i;
		n = t.currentTarget;
		i = t.relatedTarget;
		if (n === e && n !== i && !Tt(n, i)) {
			o(new Ot(e, t));
		}
	};
}

function At(e, o) {
	for (let t of e) {
		t.onmouseout = Et(t, e, o);
	}
}

function Et(e, o, t) {
	return n => {
		let i, c;
		i = n.currentTarget;
		c = n.relatedTarget;
		if (i === e && i !== c && !Tt(i, c)) {
			for (let e of o) if (c === e) return;
			t(new Ot(e, n));
		}
	};
}

function Tt(e, o) {
	try {
		if (!o) return false;
		while (o.parentNode) if ((o = o.parentNode) === e) return true;
		return false;
	} catch (e) {
		return false;
	}
}

class Ot {
	constructor(e, o) {
		this.element = e;
		this.event = o;
		this.R = null;
		this.C = null;
	}
	B() {
		if (this.R === null) {
			let e = Rt(this.element);
			this.R = e.x;
			this.C = e.y;
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

function St(e, o, t) {
	let n = o => {
		let n = new Ot(e, o);
		t(n);
	};
	e.addEventListener(o, n, false);
	return new ft(e, o, n, false);
}

function kt(e) {
	return Ct(e);
}

function Rt(e, o) {
	return Ct(o).O(Bt(e));
}

function Ct(e) {
	let o, t;
	o = e.clientX + window.scrollX;
	t = e.clientY + window.scrollY;
	return new lt(o, t);
}

function Bt(e) {
	let o = e;
	let t = 0;
	let n = 0;
	while (true) {
		let e = o.offsetParent;
		if (e === null) break;
		t += o.offsetLeft;
		n += o.offsetTop;
		o = e;
	}
	return new lt(t, n);
}

function It() {
	return window.scrollY;
}

function Mt() {
	return window.scrollX;
}

let co = {};

co.Yo = 32;

co.imageWidth = 1024;

co.imageHeight = 1024;

co.Xo = new Map;

{
	let e = co.Xo;
	e.set("drive.google.com", 0);
	e.set("docs.google.com-forms", 1);
	e.set("mail.google.com", 2);
	e.set("meet.google.com", 3);
	e.set("docs.google.com-spreadsheets", 4);
	e.set("docs.google.com-presentation", 5);
	e.set("docs.google.com-document", 6);
	e.set("calendar.google.com", 7);
	e.set("google.com", 8);
	e.set("youtube.com", 9);
	e.set("microsoft.com", 10);
	e.set("twitter.com", 11);
	e.set("tmall.com", 12);
	e.set("instagram.com", 13);
	e.set("netflix.com", 14);
	e.set("baidu.com", 15);
	e.set("linkedin.com", 16);
	e.set("qq.com", 17);
	e.set("wikipedia.org", 18);
	e.set("apple.com", 19);
	e.set("live.com", 20);
	e.set("sohu.com", 21);
	e.set("yahoo.com", 22);
	e.set("amazon.com", 23);
	e.set("taobao.com", 24);
	e.set("adobe.com", 25);
	e.set("pinterest.com", 26);
	e.set("360.cn", 27);
	e.set("vimeo.com", 28);
	e.set("jd.com", 29);
	e.set("reddit.com", 30);
	e.set("office.com", 31);
	e.set("wordpress.com", 32);
	e.set("weibo.com", 33);
	e.set("bing.com", 34);
	e.set("zoom.us", 35);
	e.set("sina.com.cn", 36);
	e.set("goo.gl", 37);
	e.set("github.com", 38);
	e.set("amazonaws.com", 39);
	e.set("bit.ly", 40);
	e.set("blogspot.com", 41);
	e.set("vk.com", 42);
	e.set("wordpress.org", 43);
	e.set("xinhuanet.com", 44);
	e.set("tumblr.com", 45);
	e.set("mozilla.org", 46);
	e.set("msn.com", 47);
	e.set("godaddy.com", 48);
	e.set("nytimes.com", 49);
	e.set("flickr.com", 50);
	e.set("skype.com", 51);
	e.set("okezone.com", 52);
	e.set("dropbox.com", 53);
	e.set("gravatar.com", 54);
	e.set("soundcloud.com", 55);
	e.set("europa.eu", 56);
	e.set("alipay.com", 57);
	e.set("nih.gov", 58);
	e.set("yahoo.co.jp", 59);
	e.set("t.co", 60);
	e.set("cnn.com", 61);
	e.set("ebay.com", 62);
	e.set("apache.org", 63);
	e.set("twitch.tv", 64);
	e.set("w3.org", 65);
	e.set("medium.com", 66);
	e.set("theguardian.com", 67);
	e.set("naver.com", 68);
	e.set("spotify.com", 69);
	e.set("bongacams.com", 70);
	e.set("imdb.com", 71);
	e.set("sourceforge.net", 72);
	e.set("bbc.co.uk", 73);
	e.set("forbes.com", 74);
	e.set("paypal.com", 75);
	e.set("zhanqi.tv", 76);
	e.set("aliexpress.com", 77);
	e.set("bbc.com", 78);
	e.set("archive.org", 79);
	e.set("news.ycombinator.com", 80);
	e.set("zerohedge.com", 81);
	e.set("protopage.com", 82);
	e.set("yandex.ru", 83);
	e.set("weebly.com", 84);
	e.set("stackoverflow.com", 85);
	e.set("china.com.cn", 86);
	e.set("who.int", 87);
	e.set("wixsite.com", 88);
	e.set("creativecommons.org", 89);
	e.set("issuu.com", 90);
	e.set("washingtonpost.com", 91);
	e.set("imgur.com", 92);
	e.set("tribunnews.com", 93);
	e.set("etsy.com", 94);
	e.set("livejasmin.com", 95);
	e.set("chaturbate.com", 96);
	e.set("oracle.com", 97);
	e.set("slideshare.net", 98);
	e.set("mail.ru", 99);
	e.set("reuters.com", 100);
	e.set("icloud.com", 101);
	e.set("cdc.gov", 102);
	e.set("pornhub.com", 103);
	e.set("1688.com", 104);
	e.set("wsj.com", 105);
	e.set("tinyurl.com", 106);
	e.set("wikimedia.org", 107);
	e.set("huanqiu.com", 108);
	e.set("instructure.com", 109);
	e.set("aparat.com", 110);
	e.set("alibaba.com", 111);
	e.set("bloomberg.com", 112);
	e.set("businessinsider.com", 113);
	e.set("cnet.com", 114);
	e.set("yy.com", 115);
	e.set("sciencedirect.com", 116);
	e.set("opera.com", 117);
	e.set("163.com", 118);
	e.set("ok.ru", 119);
	e.set("harvard.edu", 120);
	e.set("sogou.com", 121);
	e.set("mit.edu", 122);
	e.set("gnu.org", 123);
	e.set("espn.com", 124);
	e.set("so.com", 125);
	e.set("dailymail.co.uk", 126);
	e.set("ibm.com", 127);
	e.set("17ok.com", 128);
	e.set("booking.com", 129);
	e.set("researchgate.net", 130);
	e.set("forms.gle", 131);
	e.set("go.com", 132);
	e.set("samsung.com", 133);
	e.set("stanford.edu", 134);
	e.set("wiley.com", 135);
	e.set("list-manage.com", 136);
	e.set("hp.com", 137);
	e.set("usatoday.com", 138);
	e.set("telegraph.co.uk", 139);
	e.set("aol.com", 140);
	e.set("surveymonkey.com", 141);
	e.set("jrj.com.cn", 142);
	e.set("ntp.org", 143);
	e.set("mama.cn", 144);
	e.set("kompas.com", 145);
	e.set("cnbc.com", 146);
	e.set("nginx.org", 147);
	e.set("cpanel.net", 148);
	e.set("fandom.com", 149);
	e.set("eventbrite.com", 150);
	e.set("indeed.com", 151);
	e.set("indiatimes.com", 152);
	e.set("dailymotion.com", 153);
	e.set("nasa.gov", 154);
	e.set("myspace.com", 155);
	e.set("behance.net", 156);
	e.set("ettoday.net", 157);
	e.set("huffingtonpost.com", 158);
	e.set("nature.com", 159);
	e.set("hao123.com", 160);
	e.set("xvideos.com", 161);
	e.set("walmart.com", 162);
	e.set("addthis.com", 163);
	e.set("udemy.com", 164);
	e.set("time.com", 165);
	e.set("t.me", 166);
	e.set("pixnet.net", 167);
	e.set("un.org", 168);
	e.set("npr.org", 169);
	e.set("freepik.com", 170);
	e.set("springer.com", 171);
	e.set("foxnews.com", 172);
	e.set("wendyssubway.com", 173);
	e.set("ted.com", 174);
	e.set("detik.com", 175);
	e.set("www.gov.uk", 176);
	e.set("roblox.com", 177);
	e.set("grid.id", 178);
	e.set("cnblogs.com", 179);
	e.set("flipkart.com", 180);
	e.set("babytree.com", 181);
	e.set("wired.com", 182);
	e.set("ca.gov", 183);
	e.set("bilibili.com", 184);
	e.set("mysql.com", 185);
	e.set("yelp.com", 186);
	e.set("scribd.com", 187);
	e.set("hugedomains.com", 188);
	e.set("thestartmagazine.com", 189);
	e.set("soso.com", 190);
	e.set("salesforce.com", 191);
	e.set("doi.org", 192);
	e.set("goodreads.com", 193);
	e.set("daum.net", 194);
	e.set("gmail.com", 195);
	e.set("intel.com", 196);
	e.set("debian.org", 197);
	e.set("independent.co.uk", 198);
	e.set("wetransfer.com", 199);
	e.set("wikihow.com", 200);
	e.set("opendns.com", 201);
	e.set("force.com", 202);
	e.set("tripadvisor.com", 203);
	e.set("themeforest.net", 204);
	e.set("stackexchange.com", 205);
	e.set("free.fr", 206);
	e.set("zendesk.com", 207);
	e.set("chase.com", 208);
	e.set("techcrunch.com", 209);
	e.set("squarespace.com", 210);
	e.set("android.com", 211);
	e.set("speedtest.net", 212);
	e.set("shutterstock.com", 213);
	e.set("berkeley.edu", 214);
	e.set("line.me", 215);
	e.set("unsplash.com", 216);
	e.set("zillow.com", 217);
	e.set("addtoany.com", 218);
	e.set("livejournal.com", 219);
	e.set("tiktok.com", 220);
	e.set("craigslist.org", 221);
	e.set("latimes.com", 222);
	e.set("grammarly.com", 223);
	e.set("zoho.com", 224);
	e.set("okta.com", 225);
	e.set("healthline.com", 226);
	e.set("xhamster.com", 227);
	e.set("taboola.com", 228);
	e.set("ikea.com", 229);
	e.set("onlinesbi.com", 230);
	e.set("quora.com", 231);
	e.set("weather.com", 232);
	e.set("webmd.com", 233);
	e.set("duckduckgo.com", 234);
	e.set("theverge.com", 235);
	e.set("webex.com", 236);
	e.set("cisco.com", 237);
	e.set("w3schools.com", 238);
	e.set("kickstarter.com", 239);
	e.set("gome.com.cn", 240);
	e.set("jimdo.com", 241);
	e.set("digg.com", 242);
	e.set("nationalgeographic.com", 243);
	e.set("deviantart.com", 244);
	e.set("tradingview.com", 245);
	e.set("6.cn", 246);
	e.set("cornell.edu", 247);
	e.set("ietf.org", 248);
	e.set("zhihu.com", 249);
	e.set("theatlantic.com", 250);
	e.set("padlet.com", 251);
	e.set("giphy.com", 252);
	e.set("loc.gov", 253);
	e.set("shopify.com", 254);
	e.set("washington.edu", 255);
	e.set("buzzfeed.com", 256);
	e.set("dell.com", 257);
	e.set("eastday.com", 258);
	e.set("rubiconproject.com", 259);
	e.set("cbsnews.com", 260);
	e.set("arnebrachhold.de", 261);
	e.set("youm7.com", 262);
	e.set("tandfonline.com", 263);
	e.set("appsflyer.com", 264);
	e.set("academia.edu", 265);
	e.set("liputan6.com", 266);
	e.set("cambridge.org", 267);
	e.set("stumbleupon.com", 268);
	e.set("coursera.org", 269);
	e.set("criteo.com", 270);
	e.set("rednet.cn", 271);
	e.set("marriott.com", 272);
	e.set("marketwatch.com", 273);
	e.set("savefrom.net", 274);
	e.set("investopedia.com", 275);
	e.set("disqus.com", 276);
	e.set("box.com", 277);
	e.set("digikala.com", 278);
	e.set("primevideo.com", 279);
	e.set("bestbuy.com", 280);
	e.set("typepad.com", 281);
	e.set("launchpad.net", 282);
	e.set("iqiyi.com", 283);
	e.set("ilovepdf.com", 284);
	e.set("pubmatic.com", 285);
	e.set("uol.com.br", 286);
	e.set("princeton.edu", 287);
	e.set("discord.com", 288);
	e.set("huffpost.com", 289);
	e.set("fc2.com", 290);
	e.set("prnewswire.com", 291);
	e.set("webs.com", 292);
	e.set("ampproject.org", 293);
	e.set("bet9ja.com", 294);
	e.set("steamcommunity.com", 295);
	e.set("mashable.com", 296);
	e.set("economist.com", 297);
	e.set("evernote.com", 298);
	e.set("fda.gov", 299);
	e.set("bandcamp.com", 300);
	e.set("hubspot.com", 301);
	e.set("investing.com", 302);
	e.set("globo.com", 303);
	e.set("sciencemag.org", 304);
	e.set("worldometers.info", 305);
	e.set("nbcnews.com", 306);
	e.set("airbnb.com", 307);
	e.set("change.org", 308);
	e.set("homedepot.com", 309);
	e.set("hola.org", 310);
	e.set("setn.com", 311);
	e.set("noaa.gov", 312);
	e.set("tistory.com", 313);
	e.set("avast.com", 314);
	e.set("pbs.org", 315);
	e.set("lazada.sg", 316);
	e.set("teamviewer.com", 317);
	e.set("casalemedia.com", 318);
	e.set("plesk.com", 319);
	e.set("oup.com", 320);
	e.set("target.com", 321);
	e.set("trello.com", 322);
	e.set("constantcontact.com", 323);
	e.set("whitehouse.gov", 324);
	e.set("hulu.com", 325);
	e.set("usda.gov", 326);
	e.set("columbia.edu", 327);
	e.set("sindonews.com", 328);
	e.set("arcgis.com", 329);
	e.set("umich.edu", 330);
	e.set("engadget.com", 331);
	e.set("wellsfargo.com", 332);
	e.set("unesco.org", 333);
	e.set("nypost.com", 334);
	e.set("51.la", 335);
	e.set("huawei.com", 336);
	e.set("varzesh3.com", 337);
	e.set("ups.com", 338);
	e.set("metropoles.com", 339);
	e.set("patreon.com", 340);
	e.set("rt.com", 341);
	e.set("nvidia.com", 342);
	e.set("hotstar.com", 343);
	e.set("tripod.com", 344);
	e.set("breitbart.com", 345);
	e.set("fiverr.com", 346);
	e.set("psu.edu", 347);
	e.set("vice.com", 348);
	e.set("bukalapak.com", 349);
	e.set("sagepub.com", 350);
	e.set("zdnet.com", 351);
	e.set("gofundme.com", 352);
	e.set("geocities.com", 353);
	e.set("hbr.org", 354);
	e.set("britannica.com", 355);
	e.set("yale.edu", 356);
	e.set("trustpilot.com", 357);
	e.set("epa.gov", 358);
	e.set("abc.net.au", 359);
	e.set("mayoclinic.org", 360);
	e.set("allaboutcookies.org", 361);
	e.set("statista.com", 362);
	e.set("cbc.ca", 363);
	e.set("smallpdf.com", 364);
	e.set("patch.com", 365);
	e.set("upenn.edu", 366);
	e.set("nike.com", 367);
	e.set("sciencedaily.com", 368);
	e.set("elsevier.com", 369);
	e.set("bidswitch.net", 370);
	e.set("gotowebinar.com", 371);
	e.set("wayfair.com", 372);
	e.set("getpocket.com", 373);
	e.set("hdfcbank.com", 374);
	e.set("redhat.com", 375);
	e.set("vox.com", 376);
	e.set("photobucket.com", 377);
	e.set("dribbble.com", 378);
	e.set("business.site", 379);
	e.set("ask.com", 380);
	e.set("suara.com", 381);
	e.set("pikiran-rakyat.com", 382);
	e.set("xnxx.com", 383);
	e.set("hootsuite.com", 384);
	e.set("blackboard.com", 385);
	e.set("irs.gov", 386);
	e.set("khanacademy.org", 387);
	e.set("worldbank.org", 388);
	e.set("fedex.com", 389);
	e.set("www.gov.cn", 390);
	e.set("newyorker.com", 391);
	e.set("gizmodo.com", 392);
	e.set("talktalk.co.uk", 393);
	e.set("merriam-webster.com", 394);
	e.set("chinadaily.com.cn", 395);
	e.set("ieee.org", 396);
	e.set("iso.org", 397);
	e.set("namnak.com", 398);
	e.set("wpengine.com", 399);
	e.set("fastcompany.com", 400);
	e.set("dw.com", 401);
	e.set("chouftv.ma", 402);
	e.set("softonic.com", 403);
	e.set("ox.ac.uk", 404);
	e.set("mathtag.com", 405);
	e.set("inc.com", 406);
	e.set("oreilly.com", 407);
	e.set("ndtv.com", 408);
	e.set("ltn.com.tw", 409);
	e.set("fortune.com", 410);
	e.set("usps.com", 411);
	e.set("wisc.edu", 412);
	e.set("messenger.com", 413);
	e.set("wiktionary.org", 414);
	e.set("entrepreneur.com", 415);
	e.set("typeform.com", 416);
	e.set("snapchat.com", 417);
	e.set("plos.org", 418);
	e.set("epicgames.com", 419);
	e.set("att.com", 420);
	e.set("jianshu.com", 421);
	e.set("jhu.edu", 422);
	e.set("nist.gov", 423);
	e.set("gmw.cn", 424);
	e.set("ucla.edu", 425);
	e.set("uci.edu", 426);
	e.set("heavy.com", 427);
	e.set("playstation.com", 428);
	e.set("scientificamerican.com", 429);
	e.set("azure.com", 430);
	e.set("chicagotribune.com", 431);
	e.set("theconversation.com", 432);
	e.set("asos.com", 433);
	e.set("deepl.com", 434);
	e.set("deloitte.com", 435);
	e.set("intuit.com", 436);
	e.set("elegantthemes.com", 437);
	e.set("utexas.edu", 438);
	e.set("ameblo.jp", 439);
	e.set("spiegel.de", 440);
	e.set("python.org", 441);
	e.set("gosuslugi.ru", 442);
	e.set("y2mate.com", 443);
	e.set("newrelic.com", 444);
	e.set("feedly.com", 445);
	e.set("cmu.edu", 446);
	e.set("indiegogo.com", 447);
	e.set("sfgate.com", 448);
	e.set("telewebion.com", 449);
	e.set("cam.ac.uk", 450);
	e.set("canada.ca", 451);
	e.set("zerodha.com", 452);
	e.set("slate.com", 453);
	e.set("arxiv.org", 454);
	e.set("uk.com", 455);
	e.set("rambler.ru", 456);
	e.set("newsweek.com", 457);
	e.set("lenovo.com", 458);
	e.set("comodoca.com", 459);
	e.set("qualtrics.com", 460);
	e.set("manoramaonline.com", 461);
	e.set("afternic.com", 462);
	e.set("zaloapp.com", 463);
	e.set("xfinity.com", 464);
	e.set("ubuntu.com", 465);
	e.set("timeanddate.com", 466);
	e.set("ed.gov", 467);
	e.set("elpais.com", 468);
	e.set("realtor.com", 469);
	e.set("bmj.com", 470);
	e.set("hotjar.com", 471);
	e.set("uchicago.edu", 472);
	e.set("nps.gov", 473);
	e.set("oecd.org", 474);
	e.set("icicibank.com", 475);
	e.set("kumparan.com", 476);
	e.set("bootstrapcdn.com", 477);
	e.set("asus.com", 478);
	e.set("bbb.org", 479);
	e.set("mirror.co.uk", 480);
	e.set("over-blog.com", 481);
	e.set("biomedcentral.com", 482);
	e.set("qz.com", 483);
	e.set("weforum.org", 484);
	e.set("howstuffworks.com", 485);
	e.set("nicovideo.jp", 486);
	e.set("mgid.com", 487);
	e.set("thesun.co.uk", 488);
	e.set("arstechnica.com", 489);
	e.set("purdue.edu", 490);
	e.set("uiuc.edu", 491);
	e.set("atlassian.net", 492);
	e.set("cnzz.com", 493);
	e.set("douban.com", 494);
	e.set("medicalnewstoday.com", 495);
	e.set("appcenter.ms", 496);
	e.set("chron.com", 497);
	e.set("sberbank.ru", 498);
	e.set("ny.gov", 499);
	e.set("tencent.com", 500);
	e.set("cbslocal.com", 501);
	e.set("iqoption.com", 502);
	e.set("norton.com", 503);
	e.set("ladbible.com", 504);
	e.set("parallels.com", 505);
	e.set("mercadolivre.com.br", 506);
	e.set("pcmag.com", 507);
	e.set("crwdcntrl.net", 508);
	e.set("tapad.com", 509);
	e.set("dictionary.com", 510);
	e.set("altervista.org", 511);
	e.set("op.gg", 512);
	e.set("unity3d.com", 513);
	e.set("merdeka.com", 514);
	e.set("americanexpress.com", 515);
	e.set("idntimes.com", 516);
	e.set("visualstudio.com", 517);
	e.set("thesaurus.com", 518);
	e.set("apa.org", 519);
	e.set("techradar.com", 520);
	e.set("autodesk.com", 521);
	e.set("gamepedia.com", 522);
	e.set("geeksforgeeks.org", 523);
	e.set("reverso.net", 524);
	e.set("si.edu", 525);
	e.set("ftc.gov", 526);
	e.set("toutiao.com", 527);
	e.set("ign.com", 528);
	e.set("politico.com", 529);
	e.set("fao.org", 530);
	e.set("zol.com.cn", 531);
	e.set("abs-cbn.com", 532);
	e.set("fastly.net", 533);
	e.set("capitalone.com", 534);
	e.set("zend.com", 535);
	e.set("mlb.com", 536);
	e.set("orange.fr", 537);
	e.set("nyu.edu", 538);
	e.set("news.com.au", 539);
	e.set("smh.com.au", 540);
	e.set("chess.com", 541);
	e.set("openstreetmap.org", 542);
	e.set("cctv.com", 543);
	e.set("kakao.com", 544);
	e.set("ow.ly", 545);
	e.set("nydailynews.com", 546);
	e.set("prezi.com", 547);
	e.set("usc.edu", 548);
	e.set("digitaltrends.com", 549);
	e.set("bitnami.com", 550);
	e.set("schoology.com", 551);
	e.set("cnnic.cn", 552);
	e.set("bankofamerica.com", 553);
	e.set("barnesandnoble.com", 554);
	e.set("sectigo.com", 555);
	e.set("inquirer.net", 556);
	e.set("uber.com", 557);
	e.set("ning.com", 558);
	e.set("fontawesome.com", 559);
	e.set("xing.com", 560);
	e.set("house.gov", 561);
	e.set("livescience.com", 562);
	e.set("joomla.org", 563);
	e.set("allegro.pl", 564);
	e.set("moneycontrol.com", 565);
	e.set("dropcatch.com", 566);
	e.set("miit.gov.cn", 567);
	e.set("pnas.org", 568);
	e.set("apnews.com", 569);
	e.set("dedecms.com", 570);
	e.set("kapanlagi.com", 571);
	e.set("duke.edu", 572);
	e.set("sakura.ne.jp", 573);
	e.set("foursquare.com", 574);
	e.set("istockphoto.com", 575);
	e.set("instructables.com", 576);
	e.set("venturebeat.com", 577);
	e.set("census.gov", 578);
	e.set("vmware.com", 579);
	e.set("mercari.com", 580);
	e.set("jstor.org", 581);
	e.set("acs.org", 582);
	e.set("variety.com", 583);
	e.set("lifehacker.com", 584);
	e.set("youdao.com", 585);
	e.set("mckinsey.com", 586);
	e.set("themeisle.com", 587);
	e.set("usgs.gov", 588);
	e.set("pewresearch.org", 589);
	e.set("proiezionidiborsa.it", 590);
	e.set("linktr.ee", 591);
	e.set("umd.edu", 592);
	e.set("angelfire.com", 593);
	e.set("hm.com", 594);
	e.set("ria.ru", 595);
	e.set("teads.tv", 596);
	e.set("ufl.edu", 597);
	e.set("mookie1.com", 598);
	e.set("earthlink.net", 599);
	e.set("videocampaign.co", 600);
	e.set("marca.com", 601);
	e.set("msu.edu", 602);
	e.set("aljazeera.com", 603);
	e.set("jotform.com", 604);
	e.set("imageshack.us", 605);
	e.set("ea.com", 606);
	e.set("jpnn.com", 607);
	e.set("adp.com", 608);
	e.set("express.co.uk", 609);
	e.set("thefreedictionary.com", 610);
	e.set("about.me", 611);
	e.set("senate.gov", 612);
	e.set("fast.com", 613);
	e.set("urbandictionary.com", 614);
	e.set("ucsd.edu", 615);
	e.set("jiameng.com", 616);
	e.set("upwork.com", 617);
	e.set("trendyol.com", 618);
	e.set("mheducation.com", 619);
	e.set("thehill.com", 620);
	e.set("nikkei.com", 621);
	e.set("ouedkniss.com", 622);
	e.set("duolingo.com", 623);
	e.set("redbubble.com", 624);
	e.set("rollingstone.com", 625);
	e.set("doubleverify.com", 626);
	e.set("brilio.net", 627);
	e.set("9gag.com", 628);
	e.set("alexa.com", 629);
	e.set("tutorialspoint.com", 630);
	e.set("wildberries.ru", 631);
	e.set("lijit.com", 632);
	e.set("postgresql.org", 633);
	e.set("hatena.ne.jp", 634);
	e.set("mi.com", 635);
	e.set("gmx.net", 636);
	e.set("unc.edu", 637);
	e.set("gartner.com", 638);
	e.set("in.gr", 639);
	e.set("northwestern.edu", 640);
	e.set("adjust.com", 641);
	e.set("branch.io", 642);
	e.set("81.cn", 643);
	e.set("utoronto.ca", 644);
	e.set("thedailybeast.com", 645);
	e.set("lemonde.fr", 646);
	e.set("wattpad.com", 647);
	e.set("stripe.com", 648);
	e.set("shopee.co.id", 649);
	e.set("sky.com", 650);
	e.set("proofpoint.com", 651);
	e.set("hurriyet.com.tr", 652);
	e.set("bls.gov", 653);
	e.set("gamespot.com", 654);
	e.set("focus.cn", 655);
	e.set("slashdot.org", 656);
	e.set("theglobeandmail.com", 657);
	e.set("fidelity.com", 658);
	e.set("thetimes.co.uk", 659);
	e.set("vnexpress.net", 660);
	e.set("xe.com", 661);
	e.set("ensonhaber.com", 662);
	e.set("qoo10.sg", 663);
	e.set("pearson.com", 664);
	e.set("jamanetwork.com", 665);
	e.set("java.com", 666);
	e.set("gitlab.com", 667);
	e.set("atlassian.com", 668);
	e.set("hatenablog.com", 669);
	e.set("apachefriends.org", 670);
	e.set("scmp.com", 671);
	e.set("elbalad.news", 672);
	e.set("goo.ne.jp", 673);
	e.set("asu.edu", 674);
	e.set("lowes.com", 675);
	e.set("siemens.com", 676);
	e.set("newscientist.com", 677);
	e.set("yts.mx", 678);
	e.set("hhs.gov", 679);
	e.set("wufoo.com", 680);
	e.set("gismeteo.ru", 681);
	e.set("itu.int", 682);
	e.set("repubblica.it", 683);
	e.set("automattic.com", 684);
	e.set("newegg.com", 685);
	e.set("gsmarena.com", 686);
	e.set("today.com", 687);
	e.set("arizona.edu", 688);
	e.set("dbs.com.sg", 689);
	e.set("docker.com", 690);
	e.set("divar.ir", 691);
	e.set("sec.gov", 692);
	e.set("fool.com", 693);
	e.set("td.com", 694);
	e.set("dotomi.com", 695);
	e.set("moodle.org", 696);
	e.set("hollywoodreporter.com", 697);
	e.set("wunderground.com", 698);
	e.set("uspto.gov", 699);
	e.set("albawabhnews.com", 700);
	e.set("mixcloud.com", 701);
	e.set("disneyplus.com", 702);
	e.set("boston.com", 703);
	e.set("colorado.edu", 704);
	e.set("zippyshare.com", 705);
	e.set("indianexpress.com", 706);
	e.set("mitre.org", 707);
	e.set("dcard.tw", 708);
	e.set("cbssports.com", 709);
	e.set("mapquest.com", 710);
	e.set("nejm.org", 711);
	e.set("people.com", 712);
	e.set("indiamart.com", 713);
	e.set("rediff.com", 714);
	e.set("nhk.or.jp", 715);
	e.set("livestream.com", 716);
	e.set("techtarget.com", 717);
	e.set("web.de", 718);
	e.set("youporn.com", 719);
	e.set("www.nhs.uk", 720);
	e.set("biblegateway.com", 721);
	e.set("icann.org", 722);
	e.set("beytoote.com", 723);
	e.set("mega.nz", 724);
	e.set("freebsd.org", 725);
	e.set("ecosia.org", 726);
	e.set("zemanta.com", 727);
	e.set("uptodown.com", 728);
	e.set("wordreference.com", 729);
	e.set("globalsign.com", 730);
	e.set("eff.org", 731);
	e.set("howtogeek.com", 732);
	e.set("metro.co.uk", 733);
	e.set("hindustantimes.com", 734);
	e.set("emofid.com", 735);
	e.set("hexun.com", 736);
	e.set("eba.gov.tr", 737);
	e.set("eastmoney.com", 738);
	e.set("bitbucket.org", 739);
	e.set("kernel.org", 740);
	e.set("sony.com", 741);
	e.set("yumpu.com", 742);
	e.set("alodokter.com", 743);
	e.set("last.fm", 744);
	e.set("livedoor.jp", 745);
	e.set("haofang.net", 746);
	e.set("technologyreview.com", 747);
	e.set("coinmarketcap.com", 748);
	e.set("ucdavis.edu", 749);
	e.set("biobiochile.cl", 750);
	e.set("iana.org", 751);
	e.set("sap.com", 752);
	e.set("businessinsider.de", 753);
	e.set("thoughtco.com", 754);
	e.set("1337x.to", 755);
	e.set("rottentomatoes.com", 756);
	e.set("thenextweb.com", 757);
	e.set("infobae.com", 758);
	e.set("unicef.org", 759);
	e.set("wa.gov", 760);
	e.set("nymag.com", 761);
	e.set("eset.com", 762);
	e.set("chinaz.com", 763);
	e.set("gotomeeting.com", 764);
	e.set("104.com.tw", 765);
	e.set("opensource.org", 766);
	e.set("phys.org", 767);
	e.set("t-online.de", 768);
	e.set("citi.com", 769);
	e.set("amap.com", 770);
	e.set("ubc.ca", 771);
	e.set("onet.pl", 772);
	e.set("lenta.ru", 773);
	e.set("virginia.edu", 774);
	e.set("libsyn.com", 775);
	e.set("gallup.com", 776);
	e.set("broadcom.com", 777);
	e.set("wish.com", 778);
	e.set("moz.com", 779);
	e.set("360doc.com", 780);
	e.set("borna.news", 781);
	e.set("as.com", 782);
	e.set("audible.com", 783);
	e.set("filimo.com", 784);
	e.set("woocommerce.com", 785);
	e.set("nokia.com", 786);
	e.set("iyiou.com", 787);
	e.set("custhelp.com", 788);
	e.set("colorlib.com", 789);
	e.set("garmin.com", 790);
	e.set("spb.ru", 791);
	e.set("libero.it", 792);
	e.set("sputniknews.com", 793);
	e.set("bu.edu", 794);
	e.set("flaticon.com", 795);
	e.set("rs6.net", 796);
	e.set("pastebin.com", 797);
	e.set("osu.edu", 798);
	e.set("sitescout.com", 799);
	e.set("zing.vn", 800);
	e.set("pandora.com", 801);
	e.set("archives.gov", 802);
	e.set("tamu.edu", 803);
	e.set("udn.com", 804);
	e.set("nsw.gov.au", 805);
	e.set("freshdesk.com", 806);
	e.set("acm.org", 807);
	e.set("frontier.com", 808);
	e.set("themegrill.com", 809);
	e.set("wp.pl", 810);
	e.set("usa.gov", 811);
	e.set("lefigaro.fr", 812);
	e.set("ssrn.com", 813);
	e.set("yolasite.com", 814);
	e.set("adweek.com", 815);
	e.set("wondershare.com", 816);
	e.set("58.com", 817);
	e.set("com.com", 818);
	e.set("mopub.com", 819);
	e.set("prweb.com", 820);
	e.set("pcworld.com", 821);
	e.set("is.gd", 822);
	e.set("huaban.com", 823);
	e.set("strava.com", 824);
	e.set("namasha.com", 825);
	e.set("discogs.com", 826);
	e.set("tahiamasr.com", 827);
	e.set("spankbang.com", 828);
	e.set("cuny.edu", 829);
	e.set("truste.com", 830);
	e.set("salon.com", 831);
	e.set("kakaku.com", 832);
	e.set("lg.com", 833);
	e.set("dot.gov", 834);
	e.set("zara.com", 835);
	e.set("bhphotovideo.com", 836);
	e.set("theregister.co.uk", 837);
	e.set("justice.gov", 838);
	e.set("viber.com", 839);
	e.set("phpbb.com", 840);
	e.set("fivethirtyeight.com", 841);
	e.set("weather.gov", 842);
	e.set("foodnetwork.com", 843);
	e.set("mcafee.com", 844);
	e.set("ethz.ch", 845);
	e.set("va.gov", 846);
	e.set("fbi.gov", 847);
	e.set("calendly.com", 848);
	e.set("pwc.com", 849);
	e.set("bostonglobe.com", 850);
	e.set("smugmug.com", 851);
	e.set("lonelyplanet.com", 852);
	e.set("wustl.edu", 853);
	e.set("slickdeals.net", 854);
	e.set("collegeboard.org", 855);
	e.set("onlyfans.com", 856);
	e.set("oschina.net", 857);
	e.set("iqbroker.com", 858);
	e.set("podbean.com", 859);
	e.set("contextweb.com", 860);
	e.set("theepochtimes.com", 861);
	e.set("squareup.com", 862);
	e.set("avg.com", 863);
	e.set("mystrikingly.com", 864);
	e.set("admin.ch", 865);
	e.set("ninisite.com", 866);
	e.set("bigcartel.com", 867);
	e.set("simpli.fi", 868);
	e.set("consumerreports.org", 869);
	e.set("matterport.com", 870);
	e.set("sina.cn", 871);
	e.set("dhs.gov", 872);
	e.set("500px.com", 873);
	e.set("runoob.com", 874);
	e.set("billboard.com", 875);
	e.set("shutterfly.com", 876);
	e.set("kompasiana.com", 877);
	e.set("ey.com", 878);
	e.set("mathrubhumi.com", 879);
	e.set("bluehost.com", 880);
	e.set("smithsonianmag.com", 881);
	e.set("dafont.com", 882);
	e.set("seekingalpha.com", 883);
	e.set("kde.org", 884);
	e.set("mdpi.com", 885);
	e.set("heytapmobi.com", 886);
	e.set("onesignal.com", 887);
	e.set("ap.org", 888);
	e.set("indiana.edu", 889);
	e.set("euronews.com", 890);
	e.set("semanticscholar.org", 891);
	e.set("gusuwang.com", 892);
	e.set("it168.com", 893);
	e.set("rbc.ru", 894);
	e.set("elfagr.com", 895);
	e.set("liansuo.com", 896);
	e.set("boc.cn", 897);
	e.set("bild.de", 898);
	e.set("fedoraproject.org", 899);
	e.set("4shared.com", 900);
	e.set("thawte.com", 901);
	e.set("pixiv.net", 902);
	e.set("elmundo.es", 903);
	e.set("binance.com", 904);
	e.set("banggood.com", 905);
	e.set("gutenberg.org", 906);
	e.set("frontiersin.org", 907);
	e.set("firefox.com", 908);
	e.set("accenture.com", 909);
	e.set("army.mil", 910);
	e.set("udel.edu", 911);
	e.set("sba.gov", 912);
	e.set("seznam.cz", 913);
	e.set("wowhead.com", 914);
	e.set("loom.com", 915);
	e.set("turkiye.gov.tr", 916);
	e.set("get-express-vpn.online", 917);
	e.set("perl.org", 918);
	e.set("faqs.org", 919);
	e.set("imf.org", 920);
	e.set("narod.ru", 921);
	e.set("ucl.ac.uk", 922);
	e.set("premierleague.com", 923);
	e.set("donya-e-eqtesad.com", 924);
	e.set("dmm.co.jp", 925);
	e.set("gettyimages.com", 926);
	e.set("medscape.com", 927);
	e.set("pitt.edu", 928);
	e.set("fcc.gov", 929);
	e.set("iheart.com", 930);
	e.set("vanityfair.com", 931);
	e.set("tiny.cc", 932);
	e.set("utah.edu", 933);
	e.set("secomtrust.net", 934);
	e.set("chsi.com.cn", 935);
	e.set("navy.mil", 936);
	e.set("ultimate-guitar.com", 937);
	e.set("optimizely.com", 938);
	e.set("coursehero.com", 939);
	e.set("voanews.com", 940);
	e.set("lego.com", 941);
	e.set("cancer.org", 942);
	e.set("ovh.net", 943);
	e.set("miui.com", 944);
	e.set("ncsu.edu", 945);
	e.set("tinypic.com", 946);
	e.set("tmz.com", 947);
	e.set("cengage.com", 948);
	e.set("t-mobile.com", 949);
	e.set("remove.bg", 950);
	e.set("thestar.com", 951);
	e.set("readthedocs.io", 952);
	e.set("wikidot.com", 953);
	e.set("elsevierhealth.com", 954);
	e.set("computerworld.com", 955);
	e.set("biglobe.ne.jp", 956);
	e.set("heart.org", 957);
	e.set("cpic.com.cn", 958);
	e.set("mos.ru", 959);
	e.set("mileroticos.com", 960);
	e.set("asahi.com", 961);
	e.set("dol.gov", 962);
	e.set("snopes.com", 963);
	e.set("mofidonline.com", 964);
	e.set("welt.de", 965);
	e.set("cia.gov", 966);
	e.set("dreamstime.com", 967);
	e.set("novell.com", 968);
	e.set("study.com", 969);
	e.set("teachable.com", 970);
	e.set("yandex.com", 971);
	e.set("bund.de", 972);
	e.set("energy.gov", 973);
	e.set("standard.co.uk", 974);
	e.set("viva.co.id", 975);
	e.set("thehindu.com", 976);
	e.set("herokuapp.com", 977);
	e.set("emol.com", 978);
	e.set("mercurynews.com", 979);
	e.set("tufts.edu", 980);
	e.set("sharethrough.com", 981);
	e.set("nyc.gov", 982);
	e.set("emxdgt.com", 983);
	e.set("cnnindonesia.com", 984);
	e.set("nielsen.com", 985);
	e.set("ozon.ru", 986);
	e.set("flurry.com", 987);
	e.set("lifewire.com", 988);
	e.set("brookings.edu", 989);
	e.set("medlineplus.gov", 990);
	e.set("redtube.com", 991);
	e.set("liveinternet.ru", 992);
	e.set("eurekalert.org", 993);
	e.set("japanpost.jp", 994);
	e.set("garena.com", 995);
	e.set("accor.com", 996);
	e.set("lifo.gr", 997);
	e.set("redfin.com", 998);
	e.set("gdanstum.net", 999);
	e.set("battle.net", 1e3);
	e.set("foxbusiness.com", 1001);
	e.set("ytmp3.cc", 1002);
	e.set("hc360.com", 1003);
	e.set("jw.org", 1004);
	e.set("fifa.com", 1005);
	e.set("ibb.co", 1006);
	e.set("ed.ac.uk", 1007);
	e.set("mfisp.com", 1008);
	e.set("rakuten.com", 1009);
	e.set("farfetch.com", 1010);
	e.set("congress.gov", 1011);
	e.set("citrix.com", 1012);
	e.set("answers.com", 1013);
	e.set("gumgum.com", 1014);
	e.set("neilpatel.com", 1015);
	e.set("anchor.fm", 1016);
	e.set("pulzo.com", 1017);
	e.set("rutracker.org", 1018);
	e.set("prestashop.com", 1019);
	e.set("homestead.com", 1020);
	e.set("ekaie.com", 1021);
	e.set("westernjournal.com", 1022);
	e.set("gyazo.com", 1023);
}

class ao {
	constructor({parent: e, label: o, Vo: t, Qo: n, isEnabled: i, Uo: c, className: a}) {
		this.div = P(e, "div", {
			style: {
				[`padding${Jt()}`]: t + "px",
				display: "inline-block",
				fontSize: "11px"
			},
			className: "clickable" + (a ? " " + a : ""),
			textContent: o,
			onclick: e => {
				if (this.isEnabled) n(e, this.div); else if (this.Uo) this.Uo(e);
			}
		}).t;
		this.Yt(i);
		this.Uo = c;
	}
	Yt(e) {
		this.isEnabled = e;
		if (!this.isEnabled) this.div.style.color = "#999"; else {
			this.div.style.color = "";
		}
	}
}

function so(e, o) {
	let t = lo(e);
	let n = document.createElement("div");
	n.style.display = "inline-block";
	n.style.width = "16px";
	n.style.height = "16px";
	n.style.top = "5px";
	n.style.position = "absolute";
	n.style[`${qt()}`] = "25px";
	n.style.cursor = o ? "default" : "move";
	if (Ao && co.Xo.has(t)) {
		let e = co.Xo.get(t);
		let o = 16 * (e % co.Yo);
		let i = 16 * Math.floor(e / co.Yo);
		n.style.backgroundSize = co.imageWidth / 2 + "px " + co.imageHeight / 2 + "px";
		n.style.backgroundRepeat = "none;";
		n.style.backgroundPositionX = -1 * o + "px";
		n.style.backgroundPositionY = -1 * i + "px";
		(async () => {
			await x();
			n.style.backgroundImage = "url(images/iconGrid.webp)";
		})();
	} else {
		let o = "https://s2.googleusercontent.com/s2/favicons?sz=32&domain=" + T(e);
		let t = "images/globe.png";
		let i = document.createElement("img");
		i.style.borderStyle = "none";
		i.style.width = "16px";
		i.style.height = "16px";
		i.src = t;
		n.appendChild(i);
		if (d || c) {
			i.onload = () => {
				if (i.src.endsWith(t)) return;
				if (ko === yo(i)) {
					i.onload = null;
					i.onerror = () => i.src = t;
					i.src = o;
				}
			};
			(async () => {
				await x();
				i.src = a + "favicon/size/16@2x/" + A(e) + b(e);
			})();
		} else {
			(async () => {
				await x();
				i.onerror = () => i.src = t;
				i.src = o;
			})();
		}
	}
	return n;
}

class ro {
	constructor(e, o) {
		this.Ho = o;
		this.url = e["url"];
		this.title = e["title"];
		this.Jo = e["pinned"];
		this.Ko = e["id"];
		let t = X(D(e["title"]));
		if (t === "") t = "Untitled";
		let n = $(this.url);
		const i = P(undefined, "div", {
			className: "tab",
			style: {
				display: "table-row"
			},
			children: {
				Zo: jo.Co(),
				_o: P(undefined, "div", {
					style: {
						display: "inline-block",
						[`padding${Gt()}`]: "55px",
						[`padding${Jt()}`]: "14px",
						paddingTop: "4px",
						paddingBottom: "4px",
						position: "relative",
						fontSize: "13px",
						wordBreak: "break-all"
					},
					children: {
						cn: so(n, this.Ho.locked),
						sn: P(undefined, "a", {
							className: "clickable tabLink",
							style: {
								[`padding${Jt()}`]: "12px",
								textDecoration: "none"
							},
							textContent: t,
							href: n,
							onclick: e => {
								let o = ho(e);
								let t = fo(e);
								(async () => {
									let e = await Ft.ht("restoreRemoval");
									if (o || this.Ho.locked || e === "keep") {
										if (t) {
											await Ft.jt([ {
												url: this.url,
												pinned: this.Jo
											} ]);
										} else {
											let e = u;
											await Ft.qt(n, !!this.Jo, e);
										}
									} else {
										Ft.Ut(this.Ho.mn, this.Ko);
										let e = u;
										await Ft.qt(n, !!this.Jo, e);
										await Ft.it();
									}
								})();
								return false;
							}
						}),
						dn: P(undefined, "img", {
							style: {
								position: "absolute",
								top: "6px",
								[qt()]: "0px",
								width: 28 / 2 + "px",
								height: 26 / 2 + "px",
								verticalAlign: "middle",
								paddingTop: "2px",
								visibility: "hidden",
								cursor: "pointer"
							},
							src: "images/cross.png",
							onmousedown: e => {
								c.parentNode.removeChild(c);
								Ft.Ut(this.Ho.mn, this.Ko);
							}
						}).t
					},
					init: e => {
						yt(e, (e => {
							if (!this.Ho.locked) {
								if (!jo.so) i._o.dn.style.visibility = "visible";
							}
						}));
						jt(e, (e => {
							i._o.dn.style.visibility = "hidden";
						}));
					}
				})
			}
		});
		this.div = i.t;
		const c = i._o.t;
		let a = i.Zo;
		this.cn = i._o.cn;
		jo.uo({
			po: c,
			ho: {
				mn: this.Ho.mn,
				pn: this.Ko,
				hn: this.Ho.hn
			},
			fo: i.t,
			Ao: c,
			bo: "tab",
			wo: () => {
				c.style.boxShadow = "2px 2px 16px #ddd";
				c.style.backgroundColor = "rgba(255, 255, 255, 0.30)";
			},
			xo: () => {},
			vo: () => {
				c.style.boxShadow = "none";
				c.style.backgroundColor = "none";
				jo.ro.insertBefore(jo.oo, jo.mo);
			},
			yo: () => {
				c.style.boxShadow = "none";
				c.style.backgroundColor = "none";
			},
			ko: () => !!this.Ho.locked
		});
		jo.Lo({
			element: i.t,
			objectType: "tab",
			Eo: a,
			So: async e => {
				let o = this.Ko;
				await this.Ho.gn(o, e);
			}
		});
	}
	fn(e) {
		this.cn.style.cursor = e ? "auto" : "move";
	}
}

class mo {
	constructor(e) {
		this.bn = new Map;
		this.ta = !!e["starred"];
		this.wn = e["starredDate"];
		this.xn = e["createDate"];
		this.locked = !!e["locked"];
		this.label = e["label"];
		this.mn = e["id"];
		this.vn = new ao({
			label: Dt("deleteAll"),
			Vo: 30,
			Qo: e => {
				let o = Dt("areYouSureYouWantToDeleteThisTab");
				if (this.yn() >= 2) o = Dt("areYouSureYouWantToDeleteTheseTabs");
				if (To || confirm(o)) {
					Ft.Wt(this.mn, false);
				}
			},
			isEnabled: !this.locked,
			Uo: e => {
				if (!To) alert(Dt("unlockBeforeDeleting"));
			},
			className: "deleteAllButton"
		});
		let o = (e, o, t, n) => {
			let i = P(undefined, "div", {
				style: {
					display: "inline-block",
					paddingBottom: o + "px",
					fontSize: Eo + "px",
					whiteSpace: "pre"
				},
				className: "clickable" + (t ? " " + t : ""),
				textContent: e
			}).t;
			i.addEventListener("mousedown", (e => {
				e.stopPropagation();
				setTimeout((() => Do()), 1);
				setTimeout((() => Do()), 200);
				n(e);
			}), false);
			return i;
		};
		let t = P(undefined, "div", {
			style: {
				boxShadow: "1px 1px 4px #ddd",
				backgroundColor: "#fff",
				paddingTop: "11px",
				paddingBottom: "11px",
				display: "none",
				position: "absolute",
				top: "-11px",
				zIndex: "10000",
				[`padding${Gt()}`]: "18px",
				[`padding${Jt()}`]: "16px",
				[Gt()]: "-18px"
			},
			children: {
				kn: o(Dt("nameThisTabGroup"), 6, "nameThisTabGroupButton", (e => {
					if (this.label === "") {
						this.An.No("", false, true);
					}
					i.style.display = "inline-block";
					this.An.$o();
				})),
				Tn: o(this.locked ? Dt("unlockTabGroup") : Dt("lockTabGroup"), 6, "toggleLockTabGroupButton", (e => {
					this.locked = !this.locked;
					Ft.Bt(this.mn, {
						locked: this.locked
					});
				})),
				jn: o(this.ta ? Dt("unstarTabGroup") : Dt("starTabGroup"), 6, "toggleStarTabGroupButton", (e => {
					this.ta = !this.ta;
					if (this.ta) this.wn = (new Date).getTime();
					Ft.Bt(this.mn, {
						starred: this.ta,
						starredDate: this.wn
					});
				})),
				zn: o(Dt("help"), 0, undefined, "tabGroupHelpButton", (e => {
					(async () => {
						await Ft.qt(w + "/help", false, true);
					})();
				}))
			}
		});
		this.En = t;
		let n = P(undefined, "div", {
			className: "tabGroup",
			style: {
				paddingTop: "15px",
				paddingLeft: "0px"
			},
			children: {
				tn: P(undefined, "div", {
					style: {
						[`padding${Gt()}`]: "20px"
					},
					children: {
						Dn: P(undefined, "div", {
							style: {
								display: "inline-block",
								verticalAlign: "middle",
								[`padding${Gt()}`]: "16px"
							},
							children: {
								Sn: P(undefined, "img", {
									style: {
										display: this.ta ? "inline" : "none",
										verticalAlign: "middle",
										width: "22px",
										height: "21px",
										position: "relative",
										[`padding${Jt()}`]: "11px",
										[qt()]: "-2px"
									},
									className: "starImg",
									src: "images/star.png"
								}).t,
								Ln: P(undefined, "img", {
									style: {
										display: this.locked ? "inline" : "none",
										verticalAlign: "middle",
										width: "14px",
										height: "18px",
										position: "relative",
										[`padding${Jt()}`]: "19px",
										[qt()]: "2px"
									},
									className: "lockImg",
									src: "images/lock.png"
								}).t,
								Cn: P(undefined, "div", {
									style: {
										display: "inline-block",
										fontSize: "0px",
										color: "#444",
										fontWeight: "300",
										verticalAlign: "middle"
									},
									children: {
										Gn: P(undefined, "div", {
											style: {
												fontSize: "0px",
												display: "none",
												[`padding${Jt()}`]: "30px"
											}
										}).t
									}
								}),
								Bn: P(undefined, "div", {
									style: {
										display: "inline-block",
										fontSize: "26px",
										color: "#777",
										fontWeight: "300",
										verticalAlign: "middle"
									},
									className: "tabCount",
									onclick: () => {
										i.style.display = "inline-block";
										this.An.$o();
									}
								}).t,
								On: P(undefined, "div", {
									style: {
										display: "inline-block",
										verticalAlign: "middle",
										fontSize: "0px",
										[`padding${Gt()}`]: "28px"
									},
									children: {
										Rn: P(undefined, "div", {
											style: {
												fontSize: "11px",
												fontWeight: "400",
												color: "#888",
												paddingTop: "0px",
												paddingBottom: "2px"
											},
											textContent: Dt("createdPreceedingDate") + " " + new Date(this.xn).toLocaleString()
										}),
										Wn: new ao({
											label: Dt("restoreAll"),
											Vo: 30,
											Qo: e => {
												let o = ho(e);
												let t = fo(e);
												let n;
												if (o) {
													n = t ? "newWindow" : "currentWindow";
												}
												if (u) n = "currentWindow";
												(async () => {
													let e = await Ft.ht("restoreRemoval");
													if (o || this.locked || e === "keep") {
														await Ft.$t(this.mn, n);
													} else {
														await Ft.Wt(this.mn, true, n);
													}
												})();
											},
											isEnabled: true,
											className: "restoreAllButton"
										}).div,
										In: this.vn.div,
										Ft: new ao({
											label: Dt("shareAsWebPage"),
											Vo: 30,
											Qo: (e, o) => {
												o.textContent = Dt("pleaseWaitTripleDot");
												Ft.Ft([ this.mn ], false).then((() => {
													Ut(o);
													o.textContent = Dt("shareAsWebPage");
												}));
											},
											isEnabled: true,
											className: "shareAsWebPageButton"
										}).div,
										Pn: P(undefined, "div", {
											style: {
												display: "inline-block",
												position: "relative",
												fontSize: Eo + "px"
											},
											className: "clickable moreButton",
											textContent: Dt("moreTripleDot"),
											o: t.t,
											onclick: e => {
												t.t.style.display = "block";
												zo = t.t;
											}
										})
									}
								})
							}
						})
					}
				}),
				Nn: P(undefined, "div", {
					className: "tabList",
					style: {
						[`padding${Gt()}`]: "12px",
						[`padding${Jt()}`]: "20px",
						paddingTop: "12px"
					}
				}).t,
				$n: P(undefined, "div", {
					style: {
						height: "19px",
						[`padding${Gt()}`]: "12px"
					},
					children: {
						qn: jo.Co()
					}
				})
			}
		});
		this.div = n.t;
		this.Sn = n.tn.Dn.Sn;
		this.Ln = n.tn.Dn.Ln;
		let i = n.tn.Dn.Cn.Gn;
		this.An = new to({
			parentElement: i,
			Go: (e, o) => {
				if (o) {
					e = X(e);
					if (e === "") e = undefined;
					i.style.display = e === undefined ? "none" : "inline-block";
					Ft.Bt(this.mn, {
						label: e
					});
				}
			},
			value: this.label,
			Bo: 26,
			fontWeight: "300",
			Oo: "tabGroupTitleText",
			Ro: () => this.locked,
			Wo: undefined
		});
		i.style.display = this.label === "" || this.label === undefined ? "none" : "inline-block";
		this.Bn = n.tn.Dn.Bn;
		this.Nn = n.Nn;
		for (let o of e["tabsMeta"]) this.Mn(o);
		this.Fn();
		this.gn = async (e, o) => {
			let t = o.mn;
			let n = this.mn;
			if (t === n) await Ft.Mt(t, o.pn, e); else await Ft.Lt(t, n, o.pn, e);
		};
		jo.Lo({
			element: n.$n.t,
			objectType: "tab",
			Eo: n.$n.qn,
			So: async e => {
				let o = undefined;
				await this.gn(o, e);
			}
		});
	}
	Yn(e) {
		this.ta = e;
		this.Sn.style.display = this.ta ? "inline" : "none";
		this.En.jn.textContent = this.ta ? Dt("unstarTabGroup") : Dt("starTabGroup");
	}
	fn(e) {
		this.locked = e;
		Array.from(this.bn.values()).forEach((o => o.fn(e)));
		this.Ln.style.display = this.locked ? "inline" : "none";
		this.En.Tn.textContent = this.locked ? Dt("unlockTabGroup") : Dt("lockTabGroup");
		this.vn.Yt(!this.locked);
	}
	Fn() {
		this.Bn.textContent = po(this.yn());
	}
	yn() {
		return this.bn.size;
	}
	Xn(e) {
		let o = 0;
		e.forEach((e => {
			let t = new ro(e, this);
			this.bn.set(e["id"], t);
			z(t.div, this.Nn, o++);
		}));
	}
	Mn(e, o) {
		let t = new ro(e, this);
		this.bn.set(e["id"], t);
		z(t.div, this.Nn, o);
	}
	Vn(e) {
		let o = this.bn.get(e);
		if (o.div.parentElement) o.div.remove();
		this.bn.delete(e);
	}
	Qn(e, o) {
		let t = this.bn.get(e);
		z(t.div, this.Nn, o);
	}
	Un(e) {
		return this.bn.get(e);
	}
	Hn(e) {
		z(this.div, this.div.parentElement, e);
	}
}

function lo(e) {
	if (!e) return "";
	if (e.indexOf("://docs.google.com/spreadsheets/d/") !== -1) return "docs.google.com-spreadsheets";
	if (e.indexOf("://docs.google.com/document/d/") !== -1) return "docs.google.com-document";
	if (e.indexOf("://docs.google.com/presentation/d/") !== -1) return "docs.google.com-presentation";
	if (e.indexOf("://docs.google.com/forms/d/") !== -1) return "docs.google.com-forms";
	let o = j(e);
	if (o.endsWith(".wikipedia.org")) o = "wikipedia.org";
	return o;
}

function uo(e) {
	if (e === 0) return Dt("total0Tabs");
	if (e === 1) return Dt("total1Tab");
	return Dt("total2Tabs").replace("2", e + "");
}

function po(e) {
	return e === 1 ? Dt("1tab") : Dt("2tabs").replace("2", e + "");
}

function ho(e) {
	return e.ctrlKey || e.shiftKey || e.metaKey;
}

function go(e) {
	return e.ctrlKey || e.metaKey;
}

function fo(e) {
	return e.shiftKey;
}

function bo(e) {
	let o = document.createElement("span");
	let t = e.indexOf("OneTab");
	let n = t + "OneTab".length;
	if (t === 0) {
		o.appendChild(wo());
		o.appendChild(document.createTextNode(e.substring(n)));
	} else {
		o.appendChild(document.createTextNode(e.substring(0, t)));
		o.appendChild(wo());
		if (n !== e.length) o.appendChild(document.createTextNode(e.substring(n)));
	}
	return o;
}

function wo() {
	let e = document.createElement("span");
	e.appendChild(document.createTextNode("OneTab Reborn"));
	return e;
}

async function xo(e) {
	return new Promise(((o, t) => {
		if (l) {
			o(true);
			return;
		}
		let n = {
			alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="
		};
		let i = new Image;
		i.onload = () => {
			let e = i.width > 0 && i.height > 0;
			o(e);
		};
		i.onerror = () => {
			t();
		};
		i.src = "data:image/webp;base64," + n[e];
	}));
}

async function vo(e) {
	return new Promise(((o, t) => {
		let n = new Image;
		n.onload = () => {
			o(yo(n));
		};
		n.onerror = e => {
			t(e);
		};
		n.src = e;
	}));
}

function yo(e) {
	let o = document.createElement("canvas");
	o.width = 32;
	o.height = 32;
	let t = o.getContext("2d");
	t.drawImage(e, 0, 0, 32, 32);
	let n = o.toDataURL("image/png");
	return n.replace(/^data:image\/png;base64,/, "");
}

let ko;

let Ao;

setTimeout((async () => {
	let e = d || c;
	try {
		if (e) ko = await vo(a + "favicon/size/16@2x/" + "http://example.com");
	} catch (e) {
		console.log(e);
	}
	Ao = await xo("alpha");
	await Lt();
	await ee();
	Lo();
}), 1);

let To = false;

const jo = new eo;

let zo = undefined;

const Eo = 11;

function Do() {
	if (zo) zo.style.display = "none";
	zo = undefined;
}

function So(e) {
	let o = Array.from(document.getElementsByClassName("tabGroup")).filter((o => {
		let t = Array.from(o.getElementsByClassName("tabLink")).map((e => e.href));
		return t.length > 0 && t[0] === e;
	}));
	if (o.length === 0) throw new Error("No matching tab group");
	if (o.length > 1) throw new Error("More than one matching tab group");
	return o;
}

function Lo() {
	window.chrome.runtime.onMessage.addListener(((e, o, t) => {
		try {
			if (e["type"] === "ping") {
				t({
					pong: true
				});
			} else if (e["type"] === "getVisibleStructure") {
				t({
					sa: N(document.getElementById("headerText").textContent),
					Ze: Array.from(document.getElementsByClassName("tabGroup")).map((e => ({
						na: N(e.getElementsByClassName("tabCount")[0].textContent),
						Jn: e.getElementsByClassName("tabGroupTitleText")[0].textContent,
						ta: e.getElementsByClassName("starImg")[0].style.display !== "none",
						locked: e.getElementsByClassName("lockImg")[0].style.display !== "none",
						tabs: Array.from(e.getElementsByClassName("tabLink")).map((e => e.href))
					})))
				});
			} else if (e["type"] === "clickTab") {
				let o = Array.from(document.getElementsByClassName("tabLink")).find((o => o.href === e.url));
				o.onclick(new MouseEvent("click", e.Le));
				t();
			} else if (e["type"] === "clickTabGroupButton") {
				let o = So(e.He);
				let n = o[0].getElementsByClassName(e.Ke)[0];
				To = true;
				let i = e.fa ? e.fa : "click";
				n.dispatchEvent(new MouseEvent(i, e.Le ? e.Le : {}));
				To = false;
				t();
			} else if (e["type"] === "getTabGroupElementDisplayed") {
				let o = So(e.He);
				let n = o[0].getElementsByClassName(e.ca)[0];
				t({
					ha: n.style.display !== "none"
				});
			} else {
				t();
			}
		} catch (e) {
			t({
				error: String(e)
			});
		}
	}));
}

async function ee() {
	if (u) {
		let e = document.createElement("meta");
		e.name = "viewport";
		e.content = "initial-scale=0.8";
		document.getElementsByTagName("head")[0].appendChild(e);
	}
	let e = new Co;
	await e.Kn();
}

class Co {
	async Kn() {
		await this.Zn();
		this._n();
		document.addEventListener("mousedown", (() => {
			Do();
		}), false);
	}
	async Zn() {
		let e = [];
		Ft.Nt(((o, t) => {
			e.push({
				ei: o,
				oi: t
			});
		}));
		let o = await Ft.getState();
		let t = P(document.getElementById("contentAreaDiv"), undefined, {
			style: {
				paddingTop: "0px",
				paddingBottom: "30px",
				paddingLeft: "0px"
			},
			children: {
				ti: g(),
				Y: h("")
			}
		});
		let n = t.t;
		let i = t.Y;
		let c = o["tabGroups"];
		if (u) {
			P(n, "div", {
				style: {
					paddingLeft: "40px",
					paddingBottom: "10px"
				},
				o: v(P(undefined, "div", {
					o: bo(Dt("bringAllTabsIntoOneTab"))
				}).t, 14, (() => {
					(async () => {
						await Ft.Z(undefined);
					})();
				}))
			});
		}
		let a = document.createElement("div");
		n.appendChild(a);
		let s = new Map;
		let r = () => Array.from(s.values()).map((e => e.bn.size)).reduce(((e, o) => e + o), 0);
		c.forEach((e => {
			let o = new mo(e);
			a.appendChild(o.div);
			s.set(e["id"], o);
		}));
		let m = P(n, "div", {
			style: {
				paddingTop: "30px",
				[`padding${Gt()}`]: "30px",
				width: "500px",
				display: "none"
			},
			textContent: Dt("emptyOneTabInfoMsg")
		}).t;
		let l = e => {
			i.textContent = uo(e);
			m.style.display = e === 0 && !u ? "block" : "none";
		};
		l(r());
		let d = (e, o) => {
			if (e["type"] === "createTabGroup") {
				if (!o) {
					let o = new mo(e["tabGroup"]);
					z(o.div, a, e["index"]);
					s.set(e["tabGroupId"], o);
				} else {
					let o = s.get(e["tabGroupId"]);
					s.delete(e["tabGroupId"]);
					o.div.remove();
				}
				l(r());
			} else if (e["type"] === "createTabs") {
				let t = s.get(e["tabGroupId"]);
				if (!o) {
					t.Xn(e["newTabsMeta"]);
				} else {
					e["newTabsMeta"].forEach((e => t.Vn(e["id"])));
				}
				t.Fn();
				l(r());
			} else if (e["type"] === "deleteTabs") {
				let t = s.get(e["tabGroupId"]);
				if (!o) {
					e["tabMetaIds"].forEach((e => t.Vn(e)));
				} else {
					e["tabsMetaDeleted"].forEach(((o, n) => t.Mn(o, e["tabIndicesDeleted"][n])));
				}
				t.Fn();
				l(r());
			} else if (e["type"] === "deleteTabGroup") {
				if (!o) {
					let o = s.get(e["tabGroupId"]);
					s.delete(e["tabGroupId"]);
					o.div.remove();
				} else {
					let o = new mo(e["tabGroup"]);
					z(o.div, a, e["index"]);
					s.set(e["deletedTabGroup"]["id"], o);
				}
				l(r());
			} else if (e["type"] === "updateTabGroup") {
				let t = o ? "old" : "new";
				let n = e["propChanges"];
				let i = s.get(e["tabGroupId"]);
				if (n["label"]) i.An.No(n["label"][t], false, true);
				if (n["starred"]) i.Yn(n["starred"][t]);
				if (n["locked"]) i.fn(n["locked"][t]);
				if (n["index"]) i.Hn(n["index"][t]);
			} else if (e["type"] === "reorderTab") {
				let t = s.get(e["tabGroupId"]);
				t.Qn(e["tabMetaId"], e[o ? "oldIndex" : "newIndex"]);
			} else if (e["type"] === "moveTabBetweenTabGroups") {
				if (o && e["deletedSourceTabGroup"]) {
					let o = new mo(e["deletedSourceTabGroup"]);
					z(o.div, a, e["sourceTabGroupIndex"]);
					s.set(o.mn, o);
				}
				let t = s.get(e["targetTabGroupId"]);
				if (!o) {
					let o = s.get(e["sourceTabGroupId"]);
					let n = o.Un(e["tabMetaId"]);
					let i = {
						url: n.url,
						title: n.title,
						pinned: n.Jo,
						id: n.Ko
					};
					o.Vn(e["tabMetaId"]);
					t.Mn(i, e["targetTabGroupTabIndex"]);
					if (e["deletedSourceTabGroup"]) {
						s.delete(e["deletedSourceTabGroup"]["id"]);
						o.div.remove();
					} else {
						o.Fn();
					}
				} else {
					t.Vn(e["tabMetaId"]);
				}
				t.Fn();
			}
		};
		while (e.length > 0) {
			let o = e.shift();
			d(o.ei, o.oi);
		}
		Ft.Nt(d);
	}
	_n() {
		if (u) return;
		let e = 12.25;
		P(document.getElementById("settingsDiv"), undefined, {
			style: {
				position: "absolute",
				top: "9px",
				[`${Kt()}`]: "5px",
				paddingTop: "10px",
				paddingBottom: "10px",
				[`padding${Gt()}`]: "20px",
				[`padding${Jt()}`]: "20px"
			},
			children: {
				ni: P(undefined, "div", {
					o: v(P(undefined, "div", {
						o: bo(Dt("bringAllTabsIntoOneTab"))
					}).t, 14, (() => {
						(async () => {
							await Ft.Z(undefined);
						})();
					}))
				}),
				ii: P(undefined, "div", {
					o: v(Dt("shareAllAsWebPage"), e, (e => {
						(async () => {
							e.textContent = Dt("pleaseWaitTripleDot");
							let o = [];
							let t = await Ft.getState();
							let n = t["tabGroups"];
							if (!n) n = [];
							for (let e of n) {
								if (!e["createDate"]) e["createDate"] = (new Date).getTime();
							}
							for (let e of n) {
								for (let t of e["tabsMeta"]) o.push(t);
							}
							if (o.length === 0) {
								alert(Dt("noTabsInOneTabYet"));
							} else {
								await Ft.Ft(undefined, true);
								e.textContent = Dt("shareAllAsWebPage");
							}
						})();
					}))
				}),
				ci: P(undefined, "div", {
					o: v(Dt("exportImportUrls"), e, (() => {
						Ft.et("import-export.html");
					}))
				}),
				options: P(undefined, "div", {
					o: v(Dt("options"), e, (() => {
						Ft.et("options.html");
					}))
				}),
				ai: P(undefined, "div", {
					o: v(Dt("about") + " / " + Dt("feedback"), e, (() => {
						Ft.qt(w, false, true);
					}))
				})
			}
		});
	}
}
