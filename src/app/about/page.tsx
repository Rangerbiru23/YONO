'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Building, Users, Award, Target, MapPin, Phone, Mail, Clock, Star, Wrench, Truck, Shield } from 'lucide-react'
import Link from 'next/link'

export default function About() {
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YONO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perdagangan besar suku cadang sepeda motor dan aksesorisnya terpercaya di Indonesia, 
              melayani kebutuhan otomotif dengan kualitas terbaik dan harga bersaing.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Jenis Produk</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-gray-600">Pelanggan Puas</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Pelayanan</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Perusahaan</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>YONO</strong> didirikan pada tahun 2014 dengan visi menjadi distributor 
                  suku cadang sepeda motor terkemuka di Indonesia. Berawal dari toko kecil di Sragen, 
                  kami telah berkembang menjadi perusahaan perdagangan besar yang melayani pelanggan 
                  dari seluruh nusantara.
                </p>
                <p>
                  Dengan komitmen terhadap kualitas dan kepuasan pelanggan, kami terus mengembangkan 
                  jaringan distribusi dan meningkatkan portofolio produk untuk memenuhi kebutuhan 
                  pasar yang terus berkembang.
                </p>
                <p>
                  Hari ini, <strong>YONO</strong> dikenal sebagai mitra terpercaya untuk bengkel, 
                  toko sparepart, dan pengguna motor yang membutuhkan suku cadang berkualitas 
                  dengan harga kompetitif.
                </p>
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-0">
                <h3 className="font-semibold text-xl mb-6">Milestone Kami</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2014
                    </div>
                    <div>
                      <div className="font-medium">Berdiri</div>
                      <div className="text-gray-600 text-sm">Memulai usaha di Sragen</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2018
                    </div>
                    <div>
                      <div className="font-medium">Ekspansi</div>
                      <div className="text-gray-600 text-sm">Memperluas jaringan distribusi</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2022
                    </div>
                    <div>
                      <div className="font-medium">Digitalisasi</div>
                      <div className="text-gray-600 text-sm">Meluncurkan platform online</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2024
                    </div>
                    <div>
                      <div className="font-medium">Inovasi</div>
                      <div className="text-gray-600 text-sm">Sistem layanan terintegrasi</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Panduan kami dalam memberikan layanan terbaik untuk pelanggan
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi distributor suku cadang sepeda motor terdepan di Indonesia yang 
                  terpercaya, inovatif, dan selalu memberikan nilai terbaik bagi pelanggan 
                  serta mitra bisnis.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Menyediakan suku cadang berkualitas dengan harga kompetitif</li>
                  <li>• Memberikan layanan pelanggan yang prima dan responsif</li>
                  <li>• Terus berinovasi dalam sistem distribusi dan layanan</li>
                  <li>• Membangun hubungan jangka panjang dengan pelanggan</li>
                  <li>• Mendukung perkembangan industri otomotif Indonesia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Inti</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integritas</h3>
              <p className="text-gray-600 text-sm">Jujur dan transparan dalam setiap transaksi bisnis</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Kualitas</h3>
              <p className="text-gray-600 text-sm">Hanya menyediakan produk berkualitas terbaik</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pelanggan</h3>
              <p className="text-gray-600 text-sm">Kepuasan pelanggan adalah prioritas utama</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Profesionalisme</h3>
              <p className="text-gray-600 text-sm">Layanan ahli dengan pengetahuan mendalam</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan suku cadang sepeda motor Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Truck className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-lg">Distribusi Nasional</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Pengiriman ke seluruh Indonesia dengan jaringan logistik yang handal
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Wrench className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-lg">Konsultasi Teknis</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Tim ahli siap membantu memilih suku cadang yang tepat untuk kebutuhan Anda
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="font-semibold text-lg">Garansi Resmi</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Semua produk dilengkapi garansi resmi dari pabrikan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Siap melayani kebutuhan suku cadang sepeda motor Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-lg">Alamat</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  RANDUALAS, Desa/Kelurahan Karanganyar<br />
                  Kec. Sambungmacan, Kab. Sragen<br />
                  Provinsi Jawa Tengah
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-lg">Telepon</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  0852-8570-3497<br />
                  <span className="text-xs">Available 24/7</span>
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="font-semibold text-lg">Email</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  info@yono-motorparts.com<br />
                  <span className="text-xs">Response time: 2-4 hours</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bergabung dengan Ribuan Pelanggan Puas
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rasakan pengalaman berbelanja suku cadang motor yang mudah, aman, dan terpercaya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                0852-8570-3497
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                Kirim Email
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 w-fit mx-auto">
            YONO
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Perdagangan besar suku cadang sepeda motor dan aksesorisnya terpercaya sejak 2014
          </p>
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 YONO Motor Parts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}