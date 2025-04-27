document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fbarang").style.display = "block";
    document.getElementById("tampil_data").style.display = "none";
  });
  
  function hitungDiskon() {
    let namaBarang = document.getElementById("namaBarang").value.trim();
    let kodeBarang = document.getElementById("kodeBarang").value.trim();
    let kategoriBarang = document.getElementById("KategoriBarang").value.trim();
    let harga = parseFloat(document.getElementById("Harga").value);
    let diskon = parseFloat(document.getElementById("diskon").value);
  
    // Validasi input: Jika ada kolom kosong atau data tidak valid
    if (!namaBarang) {
      alert("Nama barang tidak boleh kosong!");
      return;
    }
    if (!kodeBarang) {
      alert("Kode barang tidak boleh kosong!");
      return;
    }
    if (!kategoriBarang) {
      alert("Kategori barang harus dipilih!");
      return;
    }
    if (isNaN(harga) || harga <= 0) {
      alert("Harga harus lebih besar dari 0 dan harus berupa angka!");
      return;
    }
    if (isNaN(diskon) || diskon < 0 || diskon > 200) {
      alert("Diskon harus berupa angka antara 0 hingga 200%");
      return;
    }
  
    // Rumus hitung diskon
    let nilaiDiskon = harga * (diskon / 100);
    let totalHarga = harga - nilaiDiskon;
  
    // Menampilkan hasil
    document.getElementById("hasil_kode_barang").textContent = kodeBarang;
    document.getElementById("hasil_nama_barang").textContent = namaBarang;
    document.getElementById("hasil_kategori_barang").textContent = kategoriBarang;
    document.getElementById("hasil_harga_awal").textContent = formatRupiah(harga);
    document.getElementById("hasil_diskon").textContent = formatRupiah(nilaiDiskon);
    document.getElementById("hasil_total_harga").textContent = formatRupiah(totalHarga);
  
    // Menyembunyikan form dan menampilkan hasil
    document.getElementById("fbarang").style.display = "none";
    document.getElementById("tampil_data").style.display = "block";
  
    // Menyimpan histori
    let list = document.getElementById("list_histori");
    let item = document.createElement("li");
    item.textContent = `${namaBarang} (${kodeBarang}) - ${kategoriBarang} | Harga: ${formatRupiah(harga)} | Diskon: ${formatRupiah(nilaiDiskon)} | Total: ${formatRupiah(totalHarga)}`;
    list.prepend(item);
  }
  
  function kembali() {
    document.getElementById("fbarang").reset();
    document.getElementById("fbarang").style.display = "block";
    document.getElementById("tampil_data").style.display = "none";
  }
  
  function bersih() {
    document.getElementById("fbarang").reset();
  }
  
  function hapusHistori() {
    // Menampilkan konfirmasi sebelum menghapus histori
    let confirmHapus = confirm("Yakin mau hapus histori?");
    if (confirmHapus) {
      const historiList = document.getElementById("list_histori");
      historiList.innerHTML = ""; // Menghapus semua item histori
      alert("Histori berhasil dihapus!");
    }
  }
  
  function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  }
  