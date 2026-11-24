// One Word, One Username, One Reward
// Entry: the entrant's own make.fun handle, one word and nothing else.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters,
// not only white space. The handle below is 20 characters, no spaces.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "cif-tfru-agus-efendi";

// Guard: exactly one word — no spaces, no padding, within the 1-30 gate.
if (
  typeof ENTRY !== "string" ||
  ENTRY.length < 1 ||
  ENTRY.length > 30 ||
  ENTRY.trim() !== ENTRY ||
  /\s/.test(ENTRY) ||
  ENTRY.split(/\s+/).filter(Boolean).length !== 1 ||
  [...ENTRY].length !== 20 // the handle is exactly 20 characters
) {
  throw new Error("entry must be exactly one word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
