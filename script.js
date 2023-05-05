$(document).ready(function () {
	var url = 'database.sql';

	$.ajax({
		url: url,
		type: 'GET',
		success: function (data) {
			// Menambahkan data ke dalam tabel
			$.each(data, function (index, mahasiswa) {
				var row = '<tr>' + '<td>' + mahasiswa.nama + '</td>' + '<td>' + mahasiswa.nim + '</td>' + '<td>' + mahasiswa.jurusan + '</td>' + '</tr>';
				$('#mahasiswa-table tbody').append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(status + ': ' + error);
		},
	});
});
