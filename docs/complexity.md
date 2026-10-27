# Kompleksitas arrays

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
