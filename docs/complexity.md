# Kompleksitas algoritma dan struktur data

`n` adalah jumlah elemen input. Waktu menunjukkan pertumbuhan pekerjaan ketika input membesar. Auxiliary space adalah memori tambahan di luar input dan hasil; ruang hasil dihitung terpisah.

| Fungsi | Waktu | Auxiliary space | Ruang hasil |
|---|---|---|---|
| `reverseArray` | O(n) | O(1) | O(n) |
| `findMax` | O(n) | O(1) | O(1) |

## reverseArray

Setiap elemen dibaca sekali dari belakang dan dimasukkan ke array baru. Total waktu O(n) dengan biaya push amortized O(1). Array hasil menyimpan n elemen. Object tidak disalin secara mendalam; reference-nya dipertahankan. Input tidak berubah.

## findMax

Elemen pertama menjadi nilai maksimum sementara. Setiap elemen berikutnya dibandingkan sekali, sehingga terdapat n − 1 perbandingan untuk input tidak kosong. Hanya index, nilai saat ini, dan maksimum sementara yang disimpan.

Nilai awal tidak menggunakan nol: untuk `[-5, -2, -8]`, maksimum yang benar adalah `-2`. Input kosong menghasilkan `undefined`. Input diasumsikan berupa array tanpa slot kosong yang berisi angka finite; tidak ada validasi runtime untuk `NaN` atau infinity.

## Stack

Stack menggunakan array internal. Elemen terakhir menjadi puncak stack, sehingga `push` dan `pop` beroperasi di ujung yang sama tanpa menggeser elemen lainnya.

| Operasi | Waktu |
|---|---|
| `push` | O(1) amortized |
| `pop` | O(1) |
| `peek` | O(1) |
| `size`, `isEmpty` | O(1) |

Dalam model dynamic array, beberapa push dapat membutuhkan realokasi O(n); biaya rata-rata per operasi sepanjang rangkaian push tetap O(1). Detail alokasi bergantung pada JavaScript engine. Stack menyimpan n elemen sehingga ruang penyimpanannya O(n), dengan ruang tambahan O(1) per operasi di luar pertumbuhan penyimpanan.

`peek` tidak menghapus elemen. `peek` dan `pop` pada stack kosong mengembalikan `undefined`. Jika tipe elemen mengizinkan `undefined`, gunakan `size` atau `isEmpty()` untuk membedakan stack kosong dengan stack yang menyimpan nilai tersebut. Object disimpan sebagai reference, bukan deep copy.

## Queue

Linked nodes menyimpan value dan reference ke node berikutnya. `head` menunjuk elemen pertama, `tail` menunjuk elemen terakhir. Enqueue menyambungkan node baru ke tail; dequeue memindahkan head ke node berikutnya. Saat elemen terakhir keluar, head dan tail sama-sama menjadi undefined.

Semua operasi `enqueue`, `dequeue`, `peek`, `size`, dan `isEmpty` membutuhkan waktu O(1). Penyimpanan n node membutuhkan O(n) ruang. Enqueue mengalokasikan satu node O(1); dequeue tidak melakukan traversal atau menggeser array. Aturan undefined dan object reference sama seperti stack.

## Searching

| Algoritma | Best case | Worst case | Auxiliary space |
|---|---|---|---|
| Linear search | O(1) | O(n) | O(1) |
| Binary search iteratif | O(1) | O(log n) | O(1) |

Linear search membaca elemen hingga target ditemukan. Binary search memerlukan array ascending: jika target masih mungkin ada, posisinya berada dalam interval inklusif `[left, right]`. Jika nilai tengah terlalu kecil, seluruh bagian sampai tengah dapat diabaikan; jika terlalu besar, bagian mulai tengah dapat diabaikan. Batas bergerak melewati index tengah sehingga interval selalu mengecil. Saat left > right, target tidak ada.

Validasi urutan tidak dilakukan karena membutuhkan O(n). Kedua fungsi tidak mengubah input dan mengembalikan -1 saat tidak ditemukan. Duplikat boleh menghasilkan salah satu index yang cocok.

## Sorting

Semua fungsi membuat hasil baru dan mengurutkan angka ascending.

| Algoritma | Best case | Worst case | Auxiliary space di luar hasil | Ruang hasil |
|---|---|---|---|---|
| Bubble sort | O(n) | O(n²) | O(1) | O(n) |
| Insertion sort | O(n) | O(n²) | O(1) | O(n) |
| Merge sort | O(n log n) | O(n log n) | O(n) | O(n) |

Bubble sort berhenti lebih cepat jika satu putaran tidak menukar elemen. Insertion sort menggeser elemen lebih besar untuk menyisipkan nilai berikutnya; input terbalik menyebabkan jumlah geser kuadratik. Keduanya stabil karena hanya memindahkan elemen yang lebih besar secara ketat.

Merge sort membagi input, mengurutkan masing-masing bagian, lalu menggabungkannya menggunakan pointer. Proses merge mendahulukan bagian kiri pada nilai sama sehingga stabil. Kedalaman rekursi O(log n); array hasil slice dan merge membutuhkan peak live space O(n) di luar hasil akhir, dengan total volume alokasi sepanjang eksekusi O(n log n). Analisis ruang hidup tidak menjamin kapan garbage collector melepaskan memori. Untuk input kosong/satu elemen, waktu merge sort O(1).

Kontrak numerik searching/sorting mengasumsikan angka finite dan array tanpa slot kosong. Tidak ada validasi runtime untuk NaN atau infinity. Stabilitas dijelaskan dari operasi kode; API sorting angka belum mengekspos comparator object untuk pengujian identitas elemen yang bernilai sama.
