# Learning notes

Catatan ini menjelaskan keputusan implementasi. Gunakan contoh kecil dan telusuri perubahan state untuk memahami setiap modul.

## Arrays

`reverseArray` membaca input dari belakang dan menulis ke array baru. `findMax` menyimpan nilai terbesar sementara, dimulai dari elemen pertama agar input seluruhnya negatif tetap benar. Array kosong tidak memiliki maksimum sehingga hasilnya undefined.

`readonly` membantu mencegah mutasi melalui TypeScript, tetapi bukan deep freeze runtime. Salinan array tetap menyimpan reference object yang sama. Tanda non-null assertion pada index hanya dipakai ketika batas loop menjamin index valid; prasyaratnya array tanpa slot kosong.

## Stack dan queue

Stack adalah LIFO: push A, push B, pop menghasilkan B. Array cocok karena penambahan dan penghapusan terjadi di ujung terakhir.

Queue adalah FIFO: enqueue A, enqueue B, dequeue menghasilkan A. Linked nodes memungkinkan penambahan lewat tail dan penghapusan lewat head tanpa menggeser semua elemen. Setelah node terakhir dihapus, tail harus direset agar enqueue berikutnya kembali menetapkan head.

State penting: size selalu menunjukkan jumlah elemen, peek tidak mengubah state, dan setiap instance memiliki penyimpanan sendiri. Undefined adalah nilai elemen yang sah jika generic mengizinkannya; gunakan isEmpty untuk mengetahui apakah koleksi kosong.

## Searching

Linear search dapat digunakan pada input tidak terurut. Binary search mengandalkan urutan ascending dan mengurangi interval pencarian setiap langkah. Mengurutkan input terlebih dahulu memiliki biaya tersendiri dan tidak termasuk dalam kompleksitas binary search.

## Sorting

Bubble sort menukar pasangan bersebelahan. Insertion sort mempertahankan prefix terurut lalu menyisipkan elemen berikutnya. Merge sort membagi masalah menjadi bagian kecil dan menggabungkan hasilnya.

Built-in sort digunakan sebagai pembanding pada test, bukan implementasi algoritma. Comparator numerik `(a, b) => a - b` diperlukan untuk membandingkan angka, bukan urutan string. Test memakai kasus eksplisit dan data bervariasi dengan seed tetap agar kegagalan dapat direproduksi.

## Batas project

Project ini ditujukan untuk pembelajaran. Belum ada comparator generic, validasi input runtime, benchmark, iterator, atau paket npm publik. Jangan menganggap algoritma buatan sendiri lebih cepat dari implementasi bawaan tanpa pengukuran. Lihat [analisis kompleksitas](complexity.md) untuk biaya tiap implementasi.

Pertanyaan review: mengapa findMax tidak dimulai dari nol? Mengapa queue perlu head dan tail? Mengapa binary search harus melewati index tengah saat memperbarui batas? Kapan insertion sort melakukan banyak pergeseran?
