// Data Sosial Media
const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/jbparelaxzstore', color: 'btn-danger' },
    { name: 'Instagram', url: 'https://instagram.com/parelaxz27', color: 'btn-danger' },
    { name: 'YouTube', url: 'https://youtube.com/@Zavier666', color: 'btn-dark' },
    { name: 'YouTube', url: 'https://youtube.com/@parelaxz27', color: 'btn-dark' },
    { name: 'TikTok', url: 'https://tiktok.com/@jbparelaxzreal', color: 'btn-info' },
    { name: 'Grup WhatsApp', url: 'https://chat.whatsapp.com/DjkXAMNU6XC3LGlEXdqqAU', color: 'btn-success' }
    //{ name: 'Channel WhatsApp', url: '#', color: 'btn-warning' }
];

const akunData = [
    {
        gambar: ['assets/img/stokff1.jpg', ''],
        deskripsi: 'NEW STOK BOSKU || SPEK POLOSAN || VAULT 103 || EVO ON 2 || SG MAMBA || LOG GOOGLE BIND KOSONG || OP 25 FREE CEEIN || NEGO? BOLEH BOSKU',
        beli: 'https://wa.me/6282227804587',
        seller: 'https://wa.me/6282227804587'
    },
    {
        gambar: ['assets/img/stokff1.jpg', ''],
        deskripsi: 'NEW STOK BOSKU || SPEK POLOSAN || VAULT 103 || EVO ON 2 || SG MAMBA || LOG GOOGLE BIND KOSONG || OP 25 FREE CEEIN || NEGO? BOLEH BOSKU',
        beli: 'https://wa.me/6282227804587',
        seller: 'https://wa.me/6282227804587'
    }
];

const produkData = [
    { nama: 'Nokos (WA +62)', harga: 'Rp 10.000', beli: 'https://wa.me/6282227804587' },
    { nama: 'Nokos (WA +62)', harga: 'Rp 10.000', beli: 'https://wa.me/6282227804587' }
];

const testimoniData = [
    { gambar: 'assets/img/testi1.jpg', deskripsi: 'DONE TRX MC 1JT || NEXT TRX' },
    { gambar: 'assets/img/testi1.jpg', deskripsi: 'DONE TRX MC 1JT || NEXT TRX' }
];

// Render Sosial Media
const socialContainer = document.getElementById('socialLinks');
if (socialContainer) {
    socialLinks.forEach(link => {
        socialContainer.innerHTML += `<a href="${link.url}" class="btn ${link.color} mb-2">${link.name}</a>`;
    });
}

// Render Akun Game
const akunContainer = document.getElementById('akunList');
if (akunContainer) {
    akunData.forEach(akun => {
        const carouselId = `carousel-${Math.random().toString(36).substring(2)}`;
        const gambarHtml = akun.gambar.map((img, idx) =>
            `<div class="carousel-item ${idx === 0 ? 'active' : ''}"><img src="${img}" class="d-block w-100"></div>`
        ).join('');

        akunContainer.innerHTML += `
            <div class="card mt-3">
                <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">${gambarHtml}</div>
                </div>
                <div class="card-body">
                    <p>${akun.deskripsi}</p>
                    <a href="${akun.beli}" class="btn btn-primary">Beli</a>
                    <a href="${akun.seller}" class="btn btn-secondary">Hubungi Seller</a>
                </div>
            </div>`;
    });
}

// Render Produk Lainnya
const produkContainer = document.getElementById('produkList');
if (produkContainer) {
    produkData.forEach(produk => {
        produkContainer.innerHTML += `<p>${produk.nama} - ${produk.harga} <a href="https://wa.me/6282227804587" class="btn btn-primary">Beli</a></p>`;
    });
}

// Render Testimoni
const testimoniContainer = document.getElementById('testimoniList');
if (testimoniContainer) {
    testimoniData.forEach(testi => {
        testimoniContainer.innerHTML += `<img src="${testi.gambar}" class="img-fluid watermark"><p>${testi.deskripsi}</p>`;
    });
}