# ETHER-ALGO

**BUILD IT. BREAK IT. UNDERSTAND IT.**

Struktur data dan algoritma, dibangun dari dasar dengan TypeScript. Tempat membongkar cara kerja kode, menguji asumsi, dan memahami biaya setiap operasi.

`[ TYPESCRIPT // VITEST // LEARNING IN PUBLIC ]`

Bagian pertama dari [Engineering Journey — @etherlyvan](https://github.com/Etherlyvan).

## The mission

Tulis implementasinya. Uji batasnya. Jelaskan cara kerjanya.

Setiap modul di project ini ditujukan untuk melatih tiga hal: logika implementasi, pengujian perilaku, dan analisis kompleksitas waktu serta ruang. Perjalanan dimulai dari array, kemudian berlanjut ke stack, queue, searching, dan sorting.

**Status: pengembangan awal.** Implementasi yang tersedia saat ini adalah `reverseArray`, beserta unit test. Modul lainnya masih direncanakan.

## Boot up

Siapkan Node.js dan npm yang kompatibel dengan dependency di `package-lock.json`.

```bash
git clone https://github.com/Etherlyvan/ether-algo.git
cd ether-algo
npm ci
```

Jalankan pemeriksaan project:

```bash
npm test
npm run typecheck
npm run build
```

Build menghasilkan JavaScript dan deklarasi tipe di `dist/`.

## First cut: reverse array

`reverseArray` membaca array dari belakang dan mengembalikan array baru. Input tetap utuh.

```ts
import { reverseArray } from "./src/arrays/reverse-array.js";

const input = [1, 2, 3];
const result = reverseArray(input);

console.log(result); // [3, 2, 1]
console.log(input);  // [1, 2, 3]
```

Untuk mencoba contoh tersebut, simpan sebagai `demo.ts` di root project, lalu jalankan:

```bash
npx tsx demo.ts
```

Ekstensi `.js` pada import mengikuti konfigurasi TypeScript `NodeNext`; source yang ditulis tetap berupa file `.ts`.

| Perilaku | Hasil |
|---|---|
| `[1, 2, 3]` | `[3, 2, 1]` |
| `[]` | Array kosong baru |
| `["a"]` | `["a"]` dalam array baru |
| Elemen berupa object | Reference object dipertahankan; tidak dilakukan deep clone |

Kompleksitas: **O(n) waktu**, **O(n) ruang hasil**, dan **O(1) ruang tambahan di luar hasil**. Implementasi mengasumsikan array tanpa slot kosong.

## Trust the checks

Test memeriksa urutan hasil, input kosong, satu elemen, serta memastikan input tidak berubah dan hasil memiliki reference array yang berbeda.

```bash
# Seluruh test, sekali jalan
npm test

# Test reverseArray saja
npm test -- tests/arrays/reverse-array.test.ts

# Jalankan ulang test saat kode berubah
npm run test:watch
```

| Command | Fungsi |
|---|---|
| `npm test` | Menjalankan unit test dengan Vitest |
| `npm run test:watch` | Menjalankan test dalam watch mode |
| `npm run typecheck` | Memeriksa tipe tanpa menghasilkan file |
| `npm run build` | Mengompilasi `src/` ke `dist/` |

Script `npm run example` sudah disiapkan untuk `examples/basics.ts`. File contoh tersebut belum tersedia.

## Inside the repo

```text
src/
└── arrays/
    └── reverse-array.ts        # Implementasi utama
tests/
└── arrays/
    └── reverse-array.test.ts   # Pemeriksaan perilaku
tsconfig.json                  # Typecheck source, test, dan contoh
tsconfig.build.json            # Build source ke dist/
```

## Next in the pit

- [x] Reverse array dan unit test
- [ ] Find maximum
- [ ] Stack berbasis array
- [ ] Queue berbasis linked nodes
- [ ] Linear search dan binary search
- [ ] Bubble sort, insertion sort, dan merge sort
- [ ] Contoh penggunaan, dokumentasi kompleksitas, dan CI

Scope awal berfokus pada implementasi dasar yang dapat dipahami dan dijelaskan. Comparator generic untuk sorting, tree, graph, benchmark, dan publikasi npm menjadi pengembangan berikutnya.

## Working rules

- Implementasikan algoritma sendiri; pahami setiap langkahnya.
- Uji kasus normal dan kasus batas.
- Jelaskan kompleksitas berdasarkan kode yang benar-benar berjalan.
- Simpan catatan pembelajaran yang berguna untuk pembaca bersama dokumentasi project.
- Selesaikan satu modul sebelum memperluas scope.

---

**`[ SMALL MODULES. LOUD QUESTIONS. WORKING CODE. ]`**
