document.addEventListener('DOMContentLoaded', () => {
    const initialLink = window.location.href;

    window.addEventListener('beforeunload', function (event) {
        // Eksekusi logika Anda di sini sebelum halaman ditutup
        alert('Apakah anda yakin?');

        // Anda dapat mengembalikan pesan konfirmasi (opsional)
        event.returnValue = 'Pesan konfirmasi';
    });
/*
    window.addEventListener('popstate', function (event) {
        if (window.location.href === initialLink) {
            alert('Keluar dari website');
            window.open(window.location, '_self').close();
        }
    });
    */
});
