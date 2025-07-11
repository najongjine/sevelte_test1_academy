// src/lib/stores/localStore.ts
import { writable, type Writable } from "svelte/store";

export function persistStore<T>(key: string, initialValue: T): Writable<T> {
  // 브라우저 환경에서 localStorage에서 초기값 읽기
  const storedValue =
    typeof localStorage !== "undefined" && localStorage.getItem(key);
  const parsed = storedValue ? JSON.parse(storedValue) : initialValue;

  const store = writable<T>(parsed);

  // store 변경될 때마다 localStorage에 저장
  store.subscribe((value) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  });

  return store;
}
