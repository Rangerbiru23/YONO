'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram,
  ChevronRight,
  Star,
  Shield,
  Truck,
  Wrench,
  Search,
  ShoppingBag
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                  YONO
                </div>
                <span className="ml-3 text-gray-700 font-semibold hidden sm:block">
                  Motor Parts Expert
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Produk</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kontak</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Pesan Sekarang
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Beranda</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Produk</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Kontak</a>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-2">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Pesan Sekarang
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                🏆 Trusted Supplier
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  YONO
                </span>
                <br />
                Sparepart Motor Terlengkap
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Perdagangan besar suku cadang sepeda motor dan aksesorisnya. 
                Kualitas terjamin, harga bersaing, dan pengiriman cepat ke seluruh Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Search className="w-5 h-5 mr-2" />
                  Cari Produk
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Jenis Produk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Pelayanan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm opacity-90">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Kepuasan Pelanggan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih YONO?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan solusi lengkap untuk kebutuhan suku cadang sepeda motor Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600 text-sm">Semua produk berkualitas tinggi dan original</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">Pengiriman ke seluruh Indonesia tepat waktu</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Produk Lengkap</h3>
              <p className="text-gray-600 text-sm">Semua jenis suku cadang tersedia</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Harga Bersaing</h3>
              <p className="text-gray-600 text-sm">Harga terbaik untuk kualitas terbaik</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Produk</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai jenis suku cadang dan aksesoris sepeda motor
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Mesin & Engine', desc: 'Piston, ring, klep, dan komponen mesin lainnya', icon: '⚙️' },
              { name: 'Sistem Listrik', desc: 'Aki, lampu, spark plug, kabel', icon: '💡' },
              { name: 'Rem & Cakram', desc: 'Kampas rem, cakram, master rem', icon: '🛑' },
              { name: 'Ban & Velg', desc: 'Berbagai ukuran ban dan velg motor', icon: '🛞' },
              { name: 'Body & Fairing', desc: 'Body kit, spion, windshield', icon: '🏍️' },
              { name: 'Aksesoris', desc: 'Helm, jas hujan, cover motor', icon: '🎒' }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.desc}</p>
                  <Button variant="outline" className="w-full">
                    Lihat Produk
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YONO</span>
              </h2>
              <p className="text-gray-600 mb-6">
                YONO adalah perusahaan perdagangan besar suku cadang sepeda motor dan aksesorisnya yang telah berpengalaman selama lebih dari 10 tahun. Kami berkomitmen untuk menyediakan produk berkualitas tinggi dengan harga yang kompetitif.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan lokasi strategis di Sragen, Jawa Tengah, kami melayani pelanggan dari seluruh Indonesia dengan sistem distribusi yang efisien dan handal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Sragen, Jawa Tengah</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">0852-8570-3497</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="font-semibold text-xl mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Alamat</div>
                    <div className="text-gray-600 text-sm">
                      RANDUALAS, Desa/Kelurahan Karanganyar, Kec. Sambungmacan, 
                      Kab. Sragen, Prov. Jawa Tengah
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium">Telepon</div>
                    <div className="text-gray-600 text-sm">0852-8570-3497</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600 text-sm">info@yono-motorparts.com</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Butuh Suku Cadang Motor?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Hubungi kami sekarang untuk mendapatkan produk berkualitas dengan harga terbaik
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
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 w-fit">
                YONO
              </div>
              <p className="text-gray-400 text-sm">
                Perdagangan besar suku cadang sepeda motor dan aksesorisnya terpercaya sejak 2014.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Suku Cadang Mesin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aksesoris Motor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ban & Velg</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sistem Listrik</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 YONO Motor Parts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}