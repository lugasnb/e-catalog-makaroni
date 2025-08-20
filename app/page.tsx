import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Phone, MapPin, Clock } from "lucide-react"

const makaroniProducts = [
  {
    id: 1,
    name: "Makaroni Balado",
    price: "Rp 15.000",
    description: "Makaroni dengan bumbu balado pedas khas Padang yang menggugah selera",
    image: "/makaroni-balado.png",
    rating: 4.8,
    isPopular: true,
    spiceLevel: "Pedas",
  },
  {
    id: 2,
    name: "Makaroni Keju",
    price: "Rp 18.000",
    description: "Makaroni creamy dengan keju mozarella yang melimpah dan gurih",
    image: "/creamy-macaroni-cheese.png",
    rating: 4.9,
    isPopular: true,
    spiceLevel: "Tidak Pedas",
  },
  {
    id: 3,
    name: "Makaroni BBQ",
    price: "Rp 16.000",
    description: "Makaroni dengan saus BBQ smoky dan potongan daging sapi",
    image: "/bbq-macaroni-meat.png",
    rating: 4.7,
    isPopular: false,
    spiceLevel: "Sedang",
  },
  {
    id: 4,
    name: "Makaroni Rendang",
    price: "Rp 20.000",
    description: "Makaroni dengan bumbu rendang autentik dan daging empuk",
    image: "/makaroni-rendang.png",
    rating: 4.9,
    isPopular: true,
    spiceLevel: "Pedas",
  },
  {
    id: 5,
    name: "Makaroni Carbonara",
    price: "Rp 17.000",
    description: "Makaroni dengan saus carbonara creamy dan bacon crispy",
    image: "/macaroni-carbonara.png",
    rating: 4.6,
    isPopular: false,
    spiceLevel: "Tidak Pedas",
  },
  {
    id: 6,
    name: "Makaroni Sambal Matah",
    price: "Rp 16.000",
    description: "Makaroni dengan sambal matah khas Bali yang segar dan pedas",
    image: "/makaroni-sambal-matah.png",
    rating: 4.8,
    isPopular: false,
    spiceLevel: "Pedas",
  },
]

const getSpiceLevelColor = (level: string) => {
  switch (level) {
    case "Pedas":
      return "bg-red-100 text-red-800"
    case "Sedang":
      return "bg-yellow-100 text-yellow-800"
    case "Tidak Pedas":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Makaroni Nusantara</h1>
              <p className="text-muted-foreground mt-1">Cita Rasa Autentik Indonesia dalam Setiap Gigitan</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>08:00 - 20:00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Makaroni Premium dengan Cita Rasa Nusantara
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nikmati kelezatan makaroni dengan berbagai varian rasa khas Indonesia. Dibuat dengan bahan-bahan berkualitas
            dan bumbu pilihan.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Pesan Sekarang
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Menu Pilihan Kami</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Setiap varian makaroni kami dibuat dengan resep rahasia dan bumbu pilihan untuk memberikan pengalaman
              kuliner yang tak terlupakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {makaroniProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.isPopular && (
                    <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">Populer</Badge>
                  )}
                  <Badge
                    className={`absolute top-3 right-3 ${getSpiceLevelColor(product.spiceLevel)}`}
                    variant="secondary"
                  >
                    {product.spiceLevel}
                  </Badge>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-4">{product.price}</div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Pesan
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Detail
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Tentang Makaroni Nusantara</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Kami adalah UMKM lokal yang berdedikasi untuk menghadirkan cita rasa autentik Indonesia dalam setiap
              sajian makaroni. Dengan pengalaman lebih dari 5 tahun, kami telah melayani ribuan pelanggan dengan
              kualitas terbaik dan harga yang terjangkau.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Kualitas Terjamin</h4>
                <p className="text-sm text-muted-foreground">Bahan-bahan segar dan berkualitas tinggi</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Pelayanan Cepat</h4>
                <p className="text-sm text-muted-foreground">Pesanan siap dalam 15-20 menit</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Harga Terjangkau</h4>
                <p className="text-sm text-muted-foreground">Kualitas premium dengan harga bersahabat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Makaroni Nusantara</h4>
              <p className="text-sm opacity-80 mb-4">
                Menghadirkan cita rasa autentik Indonesia dalam setiap sajian makaroni premium.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>📞 0812-3456-7890</p>
                <p>📧 info@makaroninusantara.com</p>
                <p>📍 Jakarta Selatan, Indonesia</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Senin - Jumat: 08:00 - 20:00</p>
                <p>Sabtu - Minggu: 09:00 - 21:00</p>
                <p>Delivery tersedia setiap hari</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Makaroni Nusantara. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
