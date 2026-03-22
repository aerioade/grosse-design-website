

# Grosse - Fashion Catalog Website

Website katalog apparel modern berbasis Next.js untuk menampilkan koleksi produk seperti kaos, hoodie, jaket, dan tote bag dengan visual yang bold, animasi halus, dan halaman detail produk interaktif.

## Highlight

- Tampilan hero dan background neon gradient yang dinamis.
- Grid katalog responsif untuk mobile hingga desktop.
- Halaman detail produk dengan galeri gambar (next/prev + thumbnail).
- Integrasi tombol aksi menuju link marketplace (Shopee).
- Format harga lokal Indonesia (`id-ID`).
- Arsitektur komponen yang rapi dan mudah dikembangkan.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Menjalankan Project Secara Lokal

### 1. Install dependency

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

### 3. Buka di browser

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev    # Menjalankan project pada mode development
npm run build  # Build production
npm run start  # Menjalankan hasil build production
npm run lint   # Menjalankan ESLint
```

## Struktur Folder

```text
app/
	components/
		CategoryFilter.tsx
		FeaturesSection.tsx
		Footer.tsx
		HeroSection.tsx
		Navbar.tsx
		ProductCard.tsx
	data/
		products.ts
	product/
		[id]/
			page.tsx
	globals.css
	layout.tsx
	page.tsx
public/
	products/
```

## Sumber Data Produk

Data katalog saat ini disimpan lokal di `app/data/products.ts`.

Setiap item produk memiliki field berikut:

- `id`
- `name`
- `price`
- `category`
- `images`
- `description`
- `isNew`
- `shopeeLink`

## Rencana Pengembangan

- Menambahkan filter kategori dan pencarian pada halaman utama.
- Integrasi CMS/API agar data produk tidak hardcoded.
- Menambahkan sistem cart/checkout sederhana.
- Optimasi image menggunakan `next/image` untuk performa lebih baik.
- Menambahkan test (unit/integration) untuk komponen penting.

## Deploy

Project ini siap dideploy ke Vercel.

Langkah cepat:

1. Push repo ke GitHub.
2. Import project di Vercel.
3. Deploy otomatis.

## Catatan

Project ini cocok dijadikan starter untuk:

- katalog brand fashion
- landing page koleksi apparel
- showcase produk kreator/desainer lokal

---

Kalau kamu mau, saya juga bisa bikinin versi README dengan gaya lebih "brand-ready" (pakai badge, demo GIF, palet warna, dan section presentasi untuk klien).
