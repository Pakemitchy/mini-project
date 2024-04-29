$(document).ready(function(){
    $.ajax({
        url: 'toko.buku.json',
        type: 'GET',
        dataType: 'json',
        success: function(tokoBuku) {
            $("#Toko-Buku").html(
                "Nama Toko: " + tokoBuku.nama_toko + "<br>" +
                "Pengarang: " + tokoBuku.pengarang + "<br>" +
                "Alamat: " + tokoBuku.alamat
            );

            $.each(tokoBuku.koleksi_buku, function(i, buku) {
                var row = $("<tr>");
                row.append($("<th>").text(buku.judul));
                row.append($("<th>").text(buku.penulis));                
                row.append($("<th>").text(buku.tahun_terbit));
                $("#tabel-buku").append(row);
            });
        },
        error: function(error) {
            console.log("Error: ", error);
        }
    });
});