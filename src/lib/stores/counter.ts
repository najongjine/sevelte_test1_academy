// src/lib/stores/counter.ts
import { persistStore } from "./localStore";

export const counter = persistStore<number>("counter", 0);
