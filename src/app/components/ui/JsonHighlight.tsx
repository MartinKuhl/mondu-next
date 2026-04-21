"use client";

const TOKEN_REGEX =
  /"(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g;

function colorFor(match: string): string {
  if (/^"/.test(match)) {
    return /:$/.test(match) ? "#0550ae" : "#116329";
  }
  if (/true|false/.test(match)) return "#8250df";
  if (/null/.test(match)) return "#6e7781";
  return "#953800";
}

export default function JsonHighlight({ data }: { data: unknown }) {
  const json = JSON.stringify(data, null, 2);
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  TOKEN_REGEX.lastIndex = 0;
  while ((match = TOKEN_REGEX.exec(json)) !== null) {
    if (match.index > last) {
      parts.push(json.slice(last, match.index));
    }
    parts.push(
      <span key={match.index} style={{ color: colorFor(match[0]) }}>
        {match[0]}
      </span>
    );
    last = match.index + match[0].length;
  }
  if (last < json.length) {
    parts.push(json.slice(last));
  }

  return (
    <pre style={{ fontSize: "0.75rem", lineHeight: 1.6, margin: 0 }}>
      {parts}
    </pre>
  );
}
