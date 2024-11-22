// script.js

// Event Listener untuk Form
document.getElementById("peminjamanForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nama = document.getElementById("nama").value;
    const barang = document.getElementById("barang").value;
    const durasi = document.getElementById("durasi").value;
  
    const riwayatList = document.getElementById("riwayatList");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `Nama: ${nama}, Barang: ${barang}, Durasi: ${durasi} hari`;
  
    riwayatList.appendChild(listItem);
  
    alert("Peminjaman berhasil ditambahkan!");
    document.getElementById("peminjamanForm").reset();
  });
  