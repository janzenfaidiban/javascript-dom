document.addEventListener('DOMContentLoaded', function() {
    // This line accesses the first child node of the element with the ID 'contoh', which is a text node, and logs its value.
    var teksNode = document.getElementById('contoh').childNodes[0];
    console.log(teksNode.nodeValue); // Output: Ini adalah teks node

    // This line accesses the first attribute node of the element with the ID 'contoh' and logs its name and value.
    var atributNode = document.getElementById('contoh').attributes[0];
    console.log(atributNode.nodeName + ": " + atributNode.nodeValue); // Output: id: contoh

    // This line creates a new comment node with the specified text and appends it to the body of the document.
    // Membuat variabel `komentarNode` yang menyimpan node komentar baru.
    var komentarNode = document.createComment('Ini adalah komentar baru');
    // Menambahkan node komentar yang baru dibuat ke dalam elemen `body` dari dokumen.
    document.body.appendChild(komentarNode);
});
