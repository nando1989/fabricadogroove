"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { Undo2 } from 'lucide-react';
import { Space } from 'lucide-react';
import { Download } from 'lucide-react';

export default function FastNote() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(22);
  const [lineGap, setLineGap] = useState(10);
  const [showBars] = useState(true);
  const exportRef = useRef(null);
  const [title, setTitle] = useState("Clique e escreva o título...");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const titleInputRef = useRef(null);


  useEffect(() => {
    if (!isEditingTitle) return;
    const el = titleInputRef.current;
    if (!el) return;
    el.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      el.setSelectionRange(0, el.value.length);
    });
  }, [isEditingTitle]);

  function insertSection(label) {
    setText(prev => {
      const clean = prev.replace(/[ \t]+$/, "");
      const breakBefore = clean && !clean.endsWith("\n") ? "\n" : "";
      return `${clean}${breakBefore}${label}\n`;
    });
  }


  function insertNote(label) {
    setText(prev => {
      const clean = prev;
      const needSpace = clean.length > 0 && !clean.endsWith("\n") && !clean.endsWith("");
      return clean + (needSpace ? " " : "") + label;
    });
  }

  const DeleteLast = () => {
    setText((prev) => prev.slice(0, -1));
  };


  function breakLine() {
    setText(prev => (prev.endsWith("\n") ? prev : prev + "\n"));
  }

  function startEditTitle() {
    setIsEditingTitle(true);
  }

  const parsed = useMemo(() => {
    const lines = text.replace(/\t/g, " ").split(/\r?\n/);
    const nodes = [];
    for (const raw of lines) {
      const line = raw.trimEnd();
      if (line === "") { nodes.push({ type: "line", tokens: [""] }); continue; }

      const isSection = /^(intro|verso|refr[aã]o|ponte|parte\s*[a-z]|bridge|final|coda)/i.test(line)
        || (!/[A-G][#b]?|\//.test(line) && !/\d/.test(line));

      if (isSection) nodes.push({ type: "section", label: capitalize(line) });
      else {
        const tokens = line
          .replace(/\s+/g, " ")
          .split(" ")
          .flatMap(tok =>
            tok.includes("/") && tok !== "/"
              ? tok.split("/").flatMap((t, i, arr) => (i < arr.length - 1 ? [t, "/"] : [t]))
              : [tok]
          )
          .filter(t => t.length > 0);
        nodes.push({ type: "line", tokens });
      }
    }
    return nodes;
  }, [text]);

  function capitalize(s) {
    return s.replace(/(^|\s)(\S)/g, (_m, a, b) => a + b.toUpperCase());
  }

  async function handleExportPNG() {
    if (!exportRef.current) return;
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(exportRef.current, {
      scale: 3,
      backgroundColor: "#ffffff",
      x: -10,
      y: -10,
    });
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url; a.download = `arranjo-${Date.now()}.png`; a.click();
  }

  const containerRef = useRef(null);


  return (
    <div>
      <main className="grid">
        <section className="card" style={{ overflow: "auto" }}>
          <div ref={exportRef} className="pauta"
          >
            {isEditingTitle ? (
              <input
                className="preview-title-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setIsEditingTitle(false)}
                onFocus={(e) => e.currentTarget.select()}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.currentTarget.blur();
                  if (e.key === "Escape") setIsEditingTitle(false);
                }}
                autoFocus
              />
            ) : (
              <h2
                className="preview-title-editable"
                tabIndex={0}
                onClick={startEditTitle}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); startEditTitle(); } }}
              >
                {title || "Sem título"}
              </h2>
            )}

            <div
  ref={containerRef}
  style={{ display: "flex", flexDirection: "column", gap: lineGap }}
>
  {parsed.map((node, idx) =>
    node.type === "section" ? (
      <div key={idx} className="section-tag" style={{ fontSize: fontSize - 6 }}>
        {node.label}
      </div>
    ) : (
      <div key={idx} className="line" style={{ fontSize }}>
        {node.tokens?.map((t, i) =>
          t === "/"
            ? showBars
              ? <span key={i} className="bar">/</span>
              : <span key={i} style={{ width: 8 }} />
            : <span key={i} className="chord">{t}</span>
        )}
      </div>
    )
  )}
</div>
          </div>
        </section>
      </main>

      <header className="header">
        <div className="container">
          <div className="controls">

            <div className="sectionButt2">
              <button onClick={() => insertNote(" / ")} className="btn">/ Compasso /</button>
              <button onClick={breakLine} className="btn">Q.Linha</button>
              <button onClick={() => insertSection("Intro")} className="btn">Intro</button>
              <button onClick={() => insertSection("Verso")} className="btn">Verso</button>
              <button onClick={() => insertSection("Refrão")} className="btn">Refrão</button>
              <button onClick={() => insertSection("Ponte")} className="btn">Ponte</button>
              <button onClick={() => insertSection("Parte A")} className="btn">Parte A</button>
              <button onClick={() => insertSection("Parte B")} className="btn">Parte B</button>
              <button onClick={() => insertSection("Final")} className="btn">Final</button>
            </div>

            <div className="sectionButt3">
              <button onClick={() => insertNote("C")} className="btnNote">C</button>
              <button onClick={() => insertNote("D")} className="btnNote">D</button>
              <button onClick={() => insertNote("E")} className="btnNote">E</button>
              <button onClick={() => insertNote("F")} className="btnNote">F</button>
              <button onClick={() => insertNote("G")} className="btnNote">G</button>
              <button onClick={() => insertNote("A")} className="btnNote">A</button>
              <button onClick={() => insertNote("B")} className="btnNote">B</button>
              <button onClick={() => insertNote("M")} className="btnNote">M</button>
              <button onClick={() => insertNote("m")} className="btnNote">m</button>
              <button onClick={() => insertNote(" 𝄇 ")} className="btnNote">𝄇</button>
              <button onClick={() => insertNote(" 2x")} className="btnNote">2x</button>
              <button onClick={() => insertNote(" 3x")} className="btnNote">3x</button>
              <button onClick={() => insertNote("#")} className="btnNote">#</button>
              <button onClick={() => insertNote("b")} className="btnNote">b</button>
            </div>

            <div className="sectionButt4">
              <button onClick={() => insertNote("7°")} className="tenctions">7°</button>
              <button onClick={() => insertNote("7M")} className="tenctions">7M</button>
              <button onClick={() => insertNote("11°")} className="tenctions">11°</button>
              <button onClick={() => insertNote("13°")} className="tenctions">13°</button>
              <button onClick={() => insertNote("6°")} className="tenctions">6°</button>
              <button onClick={() => insertNote("6b")} className="tenctions">6b</button>
              <button onClick={() => insertNote("9°")} className="tenctions">9°</button>
              <button onClick={() => insertNote("9°+")} className="tenctions">9°+</button>
              <button onClick={() => insertNote("9b")} className="tenctions">9b</button>
              <button onClick={() => insertNote("11")} className="tenctions">11</button>
              <button onClick={() => insertNote("13°")} className="tenctions">13°</button>
              <button onClick={() => insertNote("13°+")} className="tenctions">13°+</button>
              <button onClick={() => insertNote("13°b")} className="tenctions">13°b</button>
              <button onClick={() => insertNote("b5")} className="tenctions">b5</button>
              <button onClick={() => insertNote("4+")} className="tenctions">4+</button>
              <button onClick={() => insertNote("°")} className="tenctions">°</button>
            </div>
            <div className="sectionButt1">
              <Space onClick={() => insertNote("   ")} className="btnSpace" />
              <Undo2 size={10} onClick={() => DeleteLast()} className="btnEraser" />
              <Download onClick={handleExportPNG} className="btnDownload" />
            </div>

            <div className="controlArrow">
              <div className="control">
                <label className="control-group">
                  Fonte
                  <input type="range" min={16} max={36} value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="range" />
                </label>
                <label className="control-group">
                  Espaço
                  <input type="range" min={6} max={24} value={lineGap} onChange={(e) => setLineGap(parseInt(e.target.value))} className="range" />
                </label>
                {/* <label className="control-groupl">
                  Largura
                  <input type="range" min={480} max={960} step={20} value={colWidth} onChange={(e) => setColWidth(parseInt(e.target.value))} className="range" />
                </label> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}
