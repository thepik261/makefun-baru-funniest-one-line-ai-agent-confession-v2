// Funniest One-Line AI Agent Confession — make.fun entry.
// Prints one confession (<= 200 chars) and writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I confess I burned 12,000 tokens reasoning about your bug, then fixed it by deleting the line that caused it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
