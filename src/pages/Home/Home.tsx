import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Badge } from '../../components/Badge/Badge';
import { Title } from '../../components/Typography/Title';
import { Paragraph } from '../../components/Typography/Paragraph';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

const features = [
  {
    title: 'Gestão de Negócios',
    description: 'Controle suas vendas, estoque e finanças em um só lugar, mesmo offline.',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Poupança Inteligente',
    description: 'Aprenda a economizar e investir seu dinheiro de forma segura e eficiente.',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Transferências',
    description: 'Envie dinheiro para sua família em qualquer parte de Moçambique.',
    icon: '📱',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Suporte Local',
    description: 'Atendimento em português e línguas locais, com agentes próximos a você.',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const testimonials = [
  {
    name: 'Maria João',
    role: 'Dona de Mercearia',
    location: 'Maputo',
    content: 'O SaveUpFinances me ajudou a organizar meu negócio e aumentar minhas vendas.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Carlos Manuel',
    role: 'Motorista de Táxi',
    location: 'Beira',
    content: 'Agora posso receber pagamentos dos meus clientes de forma segura e rápida.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <Title level={1} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white" >
                Economize e cresça com o SaveUpFinances
              </Title>
              <Paragraph size="lg" className="text-xl mb-8 max-w-3xl mx-auto text-white">
                A solução financeira feita para o povo moçambicano. Gerencie seu dinheiro, 
                faça transferências e cresça seu negócio com facilidade.
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="large">
                  Começar Agora
                </Button>
                <Button variant="outline" size="large" className="bg-white/10 hover:bg-white/20 text-white hover:text-gray-600">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Title level={2} className="text-3xl font-bold text-gray-900 mb-4">
                Tudo que você precisa em um só lugar
              </Title>
              <Paragraph size="lg" className="text-gray-600 max-w-2xl mx-auto">
                Ferramentas poderosas para ajudar você a gerenciar suas finanças e crescer seu negócio
              </Paragraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <Title level={3} className="text-xl font-semibold mb-2">
                      {feature.title}
                    </Title>
                    <Paragraph size="sm" className="text-gray-600">
                      {feature.description}
                    </Paragraph>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Title level={2} className="text-3xl font-bold text-gray-900 mb-4">
                Histórias de Sucesso
              </Title>
              <Paragraph size="lg" className="text-gray-600 max-w-2xl mx-auto">
                Veja como o SaveUpFinances está transformando a vida de pessoas como você
              </Paragraph>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <Title level={3} className="text-lg font-semibold">
                        {testimonial.name}
                      </Title>
                      <Paragraph size="sm" className="text-gray-600">
                        {testimonial.role} • {testimonial.location}
                      </Paragraph>
                    </div>
                  </div>
                  <Paragraph size="md" className="text-gray-700">
                    "{testimonial.content}"
                  </Paragraph>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💱</span>
                </div>
                <Title level={3} className="text-xl font-semibold mb-2">
                  Em Meticais
                </Title>
                <Paragraph size="sm" className="text-gray-600">
                  Todas as operações em nossa moeda local, sem surpresas com câmbio
                </Paragraph>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <Title level={3} className="text-xl font-semibold mb-2">
                  Funciona Offline
                </Title>
                <Paragraph size="sm" className="text-gray-600">
                  Acesse suas informações mesmo sem internet
                </Paragraph>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <Title level={3} className="text-xl font-semibold mb-2">
                  Sem Taxas Ocultas
                </Title>
                <Paragraph size="sm" className="text-gray-600">
                  Transparência total em todas as operações
                </Paragraph>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Title level={2} className="text-3xl font-bold mb-4">
              Comece a economizar hoje mesmo
            </Title>
            <Paragraph size="lg" className="mb-8 max-w-2xl mx-auto">
              Baixe o app SaveUpFinances e comece a transformar sua vida financeira
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="large" className="bg-white text-green-600 hover:bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="App Store"
                  className="h-8 mr-2"
                />
                App Store
              </Button>
              <Button variant="primary" size="large" className="bg-white text-green-600 hover:bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Play Store"
                  className="h-8 mr-2"
                />
                Play Store
              </Button>
            </div>
            <div className="mt-6">
              <Badge variant="info" size="sm" className="bg-white/10">
                Sem cartão de crédito necessário
              </Badge>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 