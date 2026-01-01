'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YONO</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di kebijakan privasi <strong>YONO</strong>. Dokumen ini menjelaskan bagaimana kami mengumpulkan, 
                menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan kami.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>YONO</strong> adalah perusahaan perdagangan besar suku cadang sepeda motor dan aksesorisnya yang 
                berlokasi di RANDUALAS, Desa/Kelurahan Karanganyar, Kec. Sambungmacan, Kab. Sragen, Provinsi Jawa Tengah.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data yang Kami Kumpulkan</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon (0852-8570-3497)</li>
                    <li>Alamat email</li>
                    <li>Alamat pengiriman</li>
                    <li>Data pembelian</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis perangkat</li>
                    <li>Browser yang digunakan</li>
                    <li>Data cookies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>Kami menggunakan data yang Anda berikan untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Memproses dan mengirim pesanan suku cadang motor</li>
                  <li>Memberikan layanan pelanggan yang lebih baik</li>
                  <li>Menginformasikan produk dan promo terbaru</li>
                  <li>Memperbaiki kualitas layanan kami</li>
                  <li>Keperluan administrasi dan keuangan</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>YONO</strong> berkomitmen untuk melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enkripsi data saat transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke data pribadi</li>
                  <li>System keamanan yang terupdate secara berkala</li>
                  <li>Pelatihan staf tentang keamanan data</li>
                  <li>Backup data secara rutin dan aman</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian Data</h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga, 
                  kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Untuk memproses pesanan (ekspedisi, payment gateway)</li>
                  <li>Dengan persetujuan Anda yang eksplisit</li>
                  <li>Untuk kepatuhan hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda</h2>
              <div className="space-y-3 text-gray-600">
                <p>Sebagai pengguna layanan <strong>YONO</strong>, Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mengakses data pribadi yang kami simpan</li>
                  <li>Memperbaiki data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi Anda</li>
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
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                  menggunakan hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p><strong>Nama Perusahaan:</strong> YONO</p>
                  <p><strong>Alamat:</strong> RANDUALAS, Desa/Kelurahan Karanganyar, Kec. Sambungmacan, Kab. Sragen, Prov. Jawa Tengah</p>
                  <p><strong>Telepon:</strong> 0852-8570-3497</p>
                  <p><strong>Email:</strong> privacy@yono-motorparts.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembaruan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kebijakan privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan 
                perubahan dalam praktik kami atau perubahan hukum yang berlaku. Setiap perubahan 
                akan diberitahukan melalui website atau email Anda.
              </p>
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