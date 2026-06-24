"""
lib/tokens.py — Cargador y resolutor de la fuente de verdad (Python).

Espejo de lib/tokens.js para los generadores Python (xlsx) y el verificador
check_fucai.py. Lee 03_tokens/tokens.json, resuelve las referencias {a.b.c} y
expone los valores de marca para que NINGÚN script Python tenga colores ni
familias quemados.

    import sys, os
    sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "lib"))
    from tokens import C, FONT, PT, raw

- C: colores en HEX sin '#' (openpyxl), mismas claves que el skill.
- FONT: {"heading": "Space Grotesk", "body": "Calibri"}.
- PT: tamaños tipográficos en puntos (escala Word/PDF).
- raw(path): valor resuelto de cualquier token.
"""
import json, os, re

_TOKENS_PATH = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", "..", "03_tokens", "tokens.json"))
with open(_TOKENS_PATH, encoding="utf-8") as _f:
    _tokens = json.load(_f)

_leaves = {}
def _walk(node, prefix):
    if isinstance(node, dict):
        if "$value" in node:
            _leaves[".".join(prefix)] = node["$value"]; return
        for k, v in node.items():
            if k.startswith("$"):
                continue
            _walk(v, prefix + [k])
_walk(_tokens, [])

_REF = re.compile(r"^\{([^}]+)\}$")
def _resolve(value, seen=None):
    seen = seen or []
    if isinstance(value, str):
        m = _REF.match(value.strip())
        if m:
            target = m.group(1)
            if target in seen:
                raise ValueError("ciclo de referencia: " + " -> ".join(seen + [target]))
            if target not in _leaves:
                raise KeyError("referencia rota: {%s}" % target)
            return _resolve(_leaves[target], seen + [target])
    return value

def raw(path):
    return _resolve(_leaves[path])

def _hex(path):
    return str(raw(path)).lstrip("#")

C = {
    "primary":     _hex("color.naranja"),
    "arena":       _hex("color.arena"),
    "green":       _hex("color.verde"),
    "black":       _hex("color.negro"),
    "white":       _hex("color.blanco"),
    "grayText":    _hex("color.gris-texto"),
    "grayMedium":  _hex("color.gris-borde"),
    "grayLight":   _hex("color.gris-linea"),
    "lightOrange": _hex("color.durazno"),
    "lightSand":   _hex("color.arena-claro"),
    "lightGreen":  _hex("color.verde-claro"),
}

FONT = {"heading": raw("font.family.heading")[0], "body": raw("font.family.body")[0]}

PT = {k: raw("font.size.%s" % k)["value"] for k in
      ("coverTitle", "h1", "h2", "h3", "body", "caption", "footer")}

TOKENS_PATH = _TOKENS_PATH
