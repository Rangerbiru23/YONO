'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                  YONO
                </div>
                <span className="ml-3 text-gray-700 font-semibold hidden sm:block">
                  Motor Parts Expert
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YONO</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Syarat dan ketentuan penggunaan layanan perdagangan suku cadang sepeda motor
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di <strong>YONO</strong>. Dengan mengakses dan menggunakan website serta layanan kami, 
                Anda setuju untuk terikat oleh syarat dan ketentuan yang berlaku.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>YONO</strong> adalah perusahaan perdagangan besar suku cadang sepeda motor dan aksesorisnya yang 
                berlokasi di RANDUALAS, Desa/Kelurahan Karanganyar, Kec. Sambungmacan, Kab. Sragen, Provinsi Jawa Tengah.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>YONO</strong> menyediakan layanan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Perdagangan besar suku cadang sepeda motor</li>
                  <li>Penjualan aksesoris motor</li>
                  <li>Konsultasi produk dan kebutuhan suku cadang</li>
                  <li>Pengiriman produk ke seluruh Indonesia</li>
                  <li>Layanan purnajual dan garansi produk</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Kewajiban Pengguna</h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>Sebagai pengguna layanan <strong>YONO</strong>, Anda setuju untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Tidak menggunakan layanan untuk kegiatan ilegal</li>
                  <li>Memastikan spesifikasi produk sesuai kebutuhan</li>
                  <li>Melakukan pembayaran sesuai kesepakatan</li>
                  <li>Mematuhi syarat dan ketentuan pengiriman</li>
                  <li>Memberikan informasi pengiriman yang valid</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pemesanan dan Pembayaran</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proses Pemesanan</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pemesanan dapat dilakukan via telepon, WhatsApp, atau email</li>
                    <li>Konfirmasi stok dan harga akan dilakukan sebelum pembayaran</li>
                    <li>Pesanan akan diproses setelah pembayaran dikonfirmasi</li>
                    <li>Nomor resi akan diberikan setelah pengiriman</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Transfer bank (BCA, Mandiri, BNI, BRI)</li>
                    <li>E-wallet (OVO, GoPay, Dana)</li>
                    <li>COD (Cash on Delivery) untuk area tertentu</li>
                    <li>Pembayaran harus lunas sebelum pengiriman</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping and Delivery */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman dan Pengantaran</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Ketentuan pengiriman <strong>YONO</strong>:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pengiriman menggunakan ekspedisi terpercaya (JNE, TIKI, J&T, Pos Indonesia)</li>
                  <li>Biaya pengiriman ditanggung pembeli</li>
                  <li>Estimasi waktu pengiriman 1-7 hari kerja tergantung lokasi</li>
                  <li>Resiko pengiriman ditanggung bersama sesuai ketentuan ekspedisi</li>
                  <li>Packing aman dan asuransi opsional</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Warranty */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pengembalian dan Garansi</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pengembalian dapat dilakukan dalam 3 hari sejak barang diterima</li>
                    <li>Produk harus dalam kondisi asli dan tidak digunakan</li>
                    <li>Kesalahan pengiriman atau produk cacat dapat ditukar</li>
                    <li>Biaya pengembalian ditanggung pembeli kecuali kesalahan kami</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Garansi Produk</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Garansi resmi sesuai ketentuan pabrikan</li>
                    <li>Klaim garansi disertai dengan nota pembelian</li>
                    <li>Garansi tidak berlaku untuk kesalahan instalasi atau penggunaan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  Semua konten di website <strong>YONO</strong> termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nama "YONO" dan logo merupakan merek dagang terdaftar</li>
                  <li>Foto produk, deskripsi, dan konten lainnya dilindungi hak cipta</li>
                  <li>Dilarang menyalin, mendistribusikan, atau menggunakan tanpa izin</li>
                  <li>Pelanggaran akan dikenakan sanksi hukum yang berlaku</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>YONO</strong> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kerugian langsung atau tidak langsung dari penggunaan produk</li>
                  <li>Keterlambatan pengiriman di luar kendali kami</li>
                  <li>Kesalahan spesifikasi yang tidak dikonfirmasi pembeli</li>
                  <li>Kerusakan akibat instalasi atau penggunaan yang salah</li>
                  <li>Force majeure (bencana alam, huru hara, dll)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Setiap sengketa yang timbul dari penggunaan layanan <strong>YONO</strong> akan diselesaikan melalui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Musyawarah dan mufakat terlebih dahulu</li>
                  <li>Mediasi melalui pihak ketiga yang netral</li>
                  <li>Penyelesaian melalui Pengadilan Negeri Surakarta</li>
                  <li>Hukum yang berlaku adalah hukum Republik Indonesia</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan kami, silakan hubungi:
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p><strong>Nama Perusahaan:</strong> YONO</p>
                  <p><strong>Alamat:</strong> RANDUALAS, Desa/Kelurahan Karanganyar, Kec. Sambungmacan, Kab. Sragen, Prov. Jawa Tengah</p>
                  <p><strong>Telepon:</strong> 0852-8570-3497</p>
                  <p><strong>Email:</strong> legal@yono-motorparts.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perjanjian</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dengan menggunakan layanan <strong>YONO</strong>, Anda menyatakan bahwa:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                <li>Anda berusia minimal 18 tahun atau memiliki izin orang tua/wali</li>
                <li>Anda memiliki kapasitas hukum untuk membuat perjanjian</li>
                <li>Informasi yang Anda berikan adalah benar dan akurat</li>
              </ul>
              <p className="text-gray-600 mt-4">
                <strong>Tanggal berlaku:</strong> 1 Januari 2024<br />
                <strong>Terakhir diperbarui:</strong> 1 Januari 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 w-fit mx-auto">
            YONO
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Perdagangan besar suku cadang sepeda motor dan aksesorisnya terpercaya
          </p>
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 YONO Motor Parts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}