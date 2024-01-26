document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("beforeunload", function (event) {
        // Eksekusi logika Anda di sini sebelum halaman ditutup
        alert("Apakah anda yakin?");

        // Anda dapat mengembalikan pesan konfirmasi (opsional)
        event.returnValue = "Pesan konfirmasi";
    });
});
