# ETHER-ALGO

**BUILD IT. BREAK IT. UNDERSTAND IT.**

Struktur data dan algoritma, dibangun dari dasar dengan TypeScript. Tempat membongkar cara kerja kode, menguji asumsi, dan memahami biaya setiap operasi.

`[ TYPESCRIPT // VITEST // LEARNING IN PUBLIC ]`

Bagian dari perjalanan engineering [@etherlyvan](https://github.com/Etherlyvan).

## The mission

Tulis implementasinya. Uji batasnya. Jelaskan cara kerjanya.

Scope awal telah diimplementasikan: arrays, stack, queue, searching, dan sorting. Project dijalankan melalui terminal dan ditujukan untuk belajar. Workflow CI tersedia; hasil remote mengikuti run GitHub Actions setelah perubahan di-push.

## Boot up

Gunakan **Node.js 24.13.1** dan npm. Versi Node lokal dan CI dicatat di `.nvmrc`. Jika memakai nvm yang mendukung file tersebut, jalankan `nvm use`.

```bash
git clone https://github.com/Etherlyvan/ether-algo.git
cd ether-algo
npm ci
npm run typecheck
npm test
npm run build
npm run example
```

Build menghasilkan JavaScript dan deklarasi tipe di `dist/`. Package ditandai private untuk mencegah publikasi npm yang tidak disengaja.

## Plug in

Semua API tersedia melalui `src/index.ts`. Contoh berikut dapat disimpan sebagai `examples/demo.ts` dan dijalankan dengan `npx tsx examples/demo.ts`.

```ts
import {
  reverseArray, findMax, Stack, Queue,
  linearSearch, binarySearch,
  bubbleSort, insertionSort, mergeSort,
} from "../src/index.js";

reverseArray([1, 2, 3]); // [3, 2, 1]
findMax([-5, -2, -8]);  // -2
findMax([]);            // undefined

const stack = new Stack<string>();
stack.push("first");
stack.push("second");
stack.peek(); // "second", tidak dihapus
stack.pop();  // "second" — LIFO
stack.size;   // 1

const queue = new Queue<string>();
queue.enqueue("first");
queue.enqueue("second");
queue.dequeue(); // "first" — FIFO
queue.isEmpty(); // false

linearSearch([3, 1, 2], 1); // 1
binarySearch([1, 2, 3], 2); // 1; input harus ascending
bubbleSort([3, 1, 2]);      // [1, 2, 3]
insertionSort([3, 1, 2]);   // [1, 2, 3]
mergeSort([3, 1, 2]);       // [1, 2, 3]
```

Ekstensi `.js` pada import mengikuti konfigurasi TypeScript NodeNext; file source tetap `.ts`.

`npm run example` menjalankan contoh lengkap yang sudah tersedia:

```text
Input: [ 3, 1, 2 ]
Reverse: [ 2, 1, 3 ]
Maximum: 3
Stack pop (LIFO): second
Queue dequeue (FIFO): first
Linear search index of 1: 1
Binary search index of 2: 1
Bubble sort: [ 1, 2, 3 ]
Insertion sort: [ 1, 2, 3 ]
Merge sort: [ 1, 2, 3 ]
Original input: [ 3, 1, 2 ]
```

## Know the contract

- Reverse dan sorting mengembalikan array baru tanpa mengubah input; object reference tidak di-deep-copy.
- Fungsi numerik mengasumsikan angka finite dan array tanpa slot kosong; tidak melakukan validasi runtime.
- Stack menyediakan push/pop; queue menyediakan enqueue/dequeue. Keduanya memiliki peek, getter size, dan isEmpty(). Penambahan mengembalikan void.
- Pembacaan/penghapusan koleksi kosong menghasilkan undefined. Jika menyimpan undefined, gunakan size atau isEmpty untuk membedakannya dari koleksi kosong.
- Searching menghasilkan index atau -1. Untuk duplikat, salah satu index yang cocok dapat dikembalikan.
- Binary search memerlukan input ascending tanpa validasi urutan otomatis.
- Sorting angka ascending belum mendukung comparator generic.

## Count the cost

| Modul / operasi | Waktu | Ruang |
|---|---|---|
| Reverse array | O(n) | O(n) hasil, O(1) tambahan |
| Find maximum | O(n) | O(1) |
| Stack push | O(1) amortized | O(n) penyimpanan stack |
| Stack pop / peek / size / isEmpty | O(1) | O(1) tambahan |
| Queue enqueue / dequeue / peek / size / isEmpty | O(1) | O(n) penyimpanan queue |
| Linear search | O(n) worst case | O(1) |
| Binary search | O(log n) worst case | O(1) |
| Bubble / insertion sort | O(n²) worst case, O(n) best case | O(n) hasil, O(1) tambahan |
| Merge sort | O(n log n) | O(n) hasil dan O(n) tambahan |

Baca [analisis kompleksitas](docs/complexity.md) dan [catatan pembelajaran](docs/learning-notes.md) untuk alasan, invariant, stabilitas sorting, dan batas analisis ruang.

## Trust the checks

```bash
npm test
npm test -- tests/data-structures/queue.test.ts
npm run test:watch
```

Test mencakup input kosong, satu elemen, negatif, duplikat, larangan mutasi, object reference, LIFO/FIFO, ukuran, pengisian ulang koleksi, batas pencarian, dan hasil sorting terhadap pembanding numerik. Kasus bervariasi menggunakan seed tetap agar dapat direproduksi.

| Command | Fungsi |
|---|---|
| npm test | Menjalankan seluruh unit test sekali |
| npm run test:watch | Mengulang test saat file berubah |
| npm run typecheck | Memeriksa source, test, dan contoh tanpa emit |
| npm run build | Mengompilasi src ke dist beserta deklarasi tipe |
| npm run example | Menjalankan examples/basics.ts |

GitHub Actions menjalankan instalasi bersih, typecheck, test, build, dan contoh pada push serta pull request.

## Inside the repo

```text
src/
├── arrays/             # reverseArray, findMax
├── data-structures/    # Stack, Queue
├── searching/          # Linear dan binary search
├── sorting/            # Bubble, insertion, merge sort
└── index.ts            # Export publik
 tests/                 # Unit test per kelompok modul
 examples/basics.ts     # Contoh semua API
 docs/                  # Kompleksitas dan pembelajaran
 .github/workflows/     # CI
```

## Working rules

- Implementasikan algoritma sendiri dan pahami setiap langkahnya.
- Uji perilaku dan kasus batas.
- Jelaskan kompleksitas berdasarkan kode yang berjalan.
- Selesaikan satu modul sebelum memperluas scope.

Tree, graph, comparator generic, benchmark, dan publikasi npm berada di luar scope awal. Metadata package saat ini mencantumkan ISC; file LICENSE belum ditambahkan.

---

**`[ SMALL MODULES. LOUD QUESTIONS. WORKING CODE. ]`**
