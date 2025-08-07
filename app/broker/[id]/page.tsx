'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Shield, DollarSign, TrendingUp, Globe, Star, CheckCircle, AlertTriangle, Info } from 'lucide-react'

interface ForexBroker {
    id: number
    name: string
    logo: string
    url: string
    description: string
    rating: number
    features: string[]
    regulation: string
    minDeposit: string
    spreads: string
    leverage: string
    platforms: string[]
    instruments: string[]
    pros: string[]
    cons: string[]
    founded: string
    headquarters: string
    languages: string[]
    support: string[]
    paymentMethods: string[]
}

const forexBrokers: ForexBroker[] = [
    {
        id: 1,
        name: "XM",
        logo: "https://via.placeholder.com/120x60/2563eb/ffffff?text=XM",
        url: "https://www.xm.com",
        description: "Sàn forex hàng đầu với hơn 10 triệu khách hàng toàn cầu, cung cấp dịch vụ giao dịch forex, CFD và kim loại quý với công nghệ tiên tiến và hỗ trợ khách hàng 24/7.",
        rating: 4.8,
        features: ["Spread thấp", "Nạp rút nhanh", "Hỗ trợ 24/7", "Tài khoản demo", "Giáo dục miễn phí"],
        regulation: "CySEC, ASIC, FCA",
        minDeposit: "$5",
        spreads: "Từ 0.6 pips",
        leverage: "1:888",
        platforms: ["MT4", "MT5", "XM WebTrader", "XM Mobile"],
        instruments: ["Forex", "CFD", "Kim loại quý", "Năng lượng", "Chỉ số"],
        pros: [
            "Spread cực thấp từ 0.6 pips",
            "Hỗ trợ khách hàng 24/7 bằng tiếng Việt",
            "Nạp rút tiền nhanh chóng",
            "Tài khoản demo không giới hạn",
            "Nền tảng giao dịch ổn định"
        ],
        cons: [
            "Phí swap cao hơn một số sàn khác",
            "Không hỗ trợ giao dịch cổ phiếu thực",
            "Giới hạn khối lượng giao dịch"
        ],
        founded: "2009",
        headquarters: "Limassol, Cyprus",
        languages: ["Tiếng Việt", "Tiếng Anh", "Tiếng Trung", "Tiếng Ả Rập"],
        support: ["Live Chat", "Email", "Điện thoại", "WhatsApp"],
        paymentMethods: ["Ngân hàng", "Thẻ tín dụng", "Skrill", "Neteller", "Bitcoin"]
    },
    {
        id: 2,
        name: "FXTM",
        logo: "https://via.placeholder.com/120x60/10b981/ffffff?text=FXTM",
        url: "https://www.forextime.com",
        description: "Sàn forex uy tín với công nghệ tiên tiến, cung cấp dịch vụ giao dịch forex và CFD với nền tảng MT4/MT5 và các công cụ phân tích chuyên nghiệp.",
        rating: 4.7,
        features: ["Nền tảng MT4/MT5", "Tài khoản demo", "Giáo dục miễn phí", "Copy Trading", "Phân tích kỹ thuật"],
        regulation: "FCA, CySEC, FSCA",
        minDeposit: "$10",
        spreads: "Từ 0.4 pips",
        leverage: "1:1000",
        platforms: ["MT4", "MT5", "FXTM Trader", "FXTM Mobile"],
        instruments: ["Forex", "CFD", "Kim loại quý", "Chỉ số", "Crypto"],
        pros: [
            "Spread thấp từ 0.4 pips",
            "Nền tảng MT4/MT5 ổn định",
            "Chương trình giáo dục chất lượng",
            "Hỗ trợ copy trading",
            "Đa dạng loại tài khoản"
        ],
        cons: [
            "Phí nạp rút có thể cao",
            "Không hỗ trợ giao dịch cổ phiếu thực",
            "Giới hạn khối lượng giao dịch"
        ],
        founded: "2011",
        headquarters: "Limassol, Cyprus",
        languages: ["Tiếng Việt", "Tiếng Anh", "Tiếng Trung", "Tiếng Ả Rập"],
        support: ["Live Chat", "Email", "Điện thoại", "Telegram"],
        paymentMethods: ["Ngân hàng", "Thẻ tín dụng", "Skrill", "Neteller", "Perfect Money"]
    },
    {
        id: 3,
        name: "IC Markets",
        logo: "https://via.placeholder.com/120x60/f59e0b/ffffff?text=IC+Markets",
        url: "https://www.icmarkets.com",
        description: "Sàn ECN với spread cực thấp và khối lượng giao dịch lớn, phù hợp cho các trader chuyên nghiệp và scalping.",
        rating: 4.9,
        features: ["ECN True", "Không requotes", "Tốc độ nhanh", "Raw Spread", "Commission thấp"],
        regulation: "ASIC, CySEC, FSA",
        minDeposit: "$200",
        spreads: "Từ 0.0 pips",
        leverage: "1:500",
        platforms: ["MT4", "MT5", "cTrader", "IC Markets Mobile"],
        instruments: ["Forex", "CFD", "Kim loại quý", "Chỉ số", "Crypto"],
        pros: [
            "Spread cực thấp từ 0.0 pips",
            "Không có requotes",
            "Tốc độ thực thi nhanh",
            "Phù hợp cho scalping",
            "Commission thấp"
        ],
        cons: [
            "Số tiền nạp tối thiểu cao",
            "Không có tài khoản demo không giới hạn",
            "Hỗ trợ khách hàng có thể chậm"
        ],
        founded: "2007",
        headquarters: "Sydney, Australia",
        languages: ["Tiếng Anh", "Tiếng Trung", "Tiếng Ả Rập"],
        support: ["Live Chat", "Email", "Điện thoại"],
        paymentMethods: ["Ngân hàng", "Thẻ tín dụng", "Skrill", "Neteller", "Bitcoin"]
    },
    {
        id: 4,
        name: "Pepperstone",
        logo: "https://via.placeholder.com/120x60/ef4444/ffffff?text=Pepperstone",
        url: "https://www.pepperstone.com",
        description: "Sàn forex chuyên nghiệp với công nghệ Razor, cung cấp dịch vụ giao dịch ECN với spread thấp và tốc độ thực thi nhanh.",
        rating: 4.6,
        features: ["Razor Spreads", "Crypto CFD", "Copy Trading", "Social Trading", "API Trading"],
        regulation: "ASIC, FCA, CySEC",
        minDeposit: "$200",
        spreads: "Từ 0.0 pips",
        leverage: "1:400",
        platforms: ["MT4", "MT5", "cTrader", "Pepperstone Mobile"],
        instruments: ["Forex", "CFD", "Crypto", "Chỉ số", "Kim loại quý"],
        pros: [
            "Spread thấp với Razor Spreads",
            "Hỗ trợ giao dịch crypto",
            "Copy trading và social trading",
            "API trading cho các nhà phát triển",
            "Nền tảng ổn định"
        ],
        cons: [
            "Số tiền nạp tối thiểu cao",
            "Không hỗ trợ tiếng Việt",
            "Phí commission có thể cao"
        ],
        founded: "2010",
        headquarters: "Melbourne, Australia",
        languages: ["Tiếng Anh", "Tiếng Trung", "Tiếng Ả Rập"],
        support: ["Live Chat", "Email", "Điện thoại"],
        paymentMethods: ["Ngân hàng", "Thẻ tín dụng", "Skrill", "Neteller", "Bitcoin"]
    },
    {
        id: 5,
        name: "OANDA",
        logo: "https://via.placeholder.com/120x60/8b5cf6/ffffff?text=OANDA",
        url: "https://www.oanda.com",
        description: "Sàn forex lâu đời với uy tín cao, cung cấp dịch vụ giao dịch forex với nền tảng ổn định và công cụ phân tích kỹ thuật chuyên nghiệp.",
        rating: 4.5,
        features: ["Nền tảng ổn định", "Phân tích kỹ thuật", "API Trading", "Tài khoản demo", "Giáo dục"],
        regulation: "FCA, ASIC, IIROC",
        minDeposit: "$1",
        spreads: "Từ 1.0 pips",
        leverage: "1:50",
        platforms: ["OANDA Trade", "MT4", "OANDA Mobile"],
        instruments: ["Forex", "CFD", "Kim loại quý", "Chỉ số"],
        pros: [
            "Uy tín cao với lịch sử lâu đời",
            "Nền tảng giao dịch ổn định",
            "Công cụ phân tích kỹ thuật tốt",
            "API trading mạnh mẽ",
            "Tài khoản demo không giới hạn"
        ],
        cons: [
            "Spread cao hơn các sàn khác",
            "Leverage thấp",
            "Không hỗ trợ crypto"
        ],
        founded: "1996",
        headquarters: "Toronto, Canada",
        languages: ["Tiếng Anh", "Tiếng Trung", "Tiếng Nhật"],
        support: ["Live Chat", "Email", "Điện thoại"],
        paymentMethods: ["Ngân hàng", "Thẻ tín dụng", "PayPal"]
    },
    {
        id: 6,
        name: "AvaTrade",
        logo: "https://via.placeholder.com/120x60/06b6d4/ffffff?text=AvaTrade",
        url: "https://www.avatrade.com",
        description: "Sàn forex đa dạng sản phẩm và nền tảng, cung cấp dịch vụ giao dịch forex, CFD và options với các công cụ giao dịch xã hội.",
        rating: 4.4,
        features: ["AvaOptions", "AvaSocial", "DupliTrade", "Nền tảng đa dạng", "Giáo dục"],
        regulation: "ASIC, FSCA, CySEC",
        minDeposit: "$100",
        spreads: "Từ 0.9 pips",
        leverage: "1:400",
        platforms: ["AvaTradeGO", "MT4", "MT5", "AvaOptions", "AvaSocial"],
        instruments: ["Forex", "CFD", "Options", "Crypto", "Chỉ số"],
        pros: [
            "Đa dạng sản phẩm giao dịch",
            "Hỗ trợ giao dịch options",
            "Social trading với AvaSocial",
            "Copy trading với DupliTrade",
            "Nền tảng giao dịch đa dạng"
        ],
        cons: [
            "Spread cao hơn một số sàn",
            "Phí nạp rút có thể cao",
            "Giao diện có thể phức tạp"
        ],
        founded: "2006",
        headquarters: "Dublin, Ireland",
        languages: ["Tiếng Anh", "Tiếng Trung", "Tiếng Ả Rập"],
        support: ["Live Chat", "Email", "Điện thoại"],
        paymentMethods: ["Ngân hàng", "Thẻ tín dụng", "Skrill", "Neteller", "Bitcoin"]
    }
]

export default function BrokerDetailPage({ params }: { params: { id: string } }) {
    const broker = forexBrokers.find(b => b.id === parseInt(params.id))

    if (!broker) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy sàn forex</h1>
                    <Link href="/" className="text-blue-600 hover:text-blue-700">
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 mr-6">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                Quay lại
                            </Link>
                            <img src={broker.logo} alt={broker.name} className="h-8 object-contain mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900">{broker.name}</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                                <span className="font-semibold text-gray-900">{broker.rating}/5.0</span>
                            </div>
                            <a
                                href={broker.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors"
                            >
                                <Globe className="h-4 w-4 mr-2" />
                                Truy cập
                                <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Description */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Mô tả</h2>
                            <p className="text-gray-700 leading-relaxed">{broker.description}</p>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Tính năng chính</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {broker.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-800">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    Ưu điểm
                                </h3>
                                <ul className="space-y-2">
                                    {broker.pros.map((pro, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800 text-sm">{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                                <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Nhược điểm
                                </h3>
                                <ul className="space-y-2">
                                    {broker.cons.map((con, index) => (
                                        <li key={index} className="flex items-start">
                                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800 text-sm">{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Trading Information */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Thông tin giao dịch</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">Nền tảng giao dịch</h3>
                                    <div className="space-y-2">
                                        {broker.platforms.map((platform, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800">{platform}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">Sản phẩm giao dịch</h3>
                                    <div className="space-y-2">
                                        {broker.instruments.map((instrument, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800">{instrument}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Info */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Thông tin nhanh</h3>
                            <div className="space-y-4">
                                <div className="flex items-center min-w-0">
                                    <Shield className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Quy định</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.regulation}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <DollarSign className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Nạp tối thiểu</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.minDeposit}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <TrendingUp className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Spread</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.spreads}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <Info className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Leverage</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.leverage}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Thông tin công ty</h3>
                            <div className="space-y-3">
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600">Thành lập</p>
                                    <p className="font-medium text-gray-800 truncate">{broker.founded}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600">Trụ sở</p>
                                    <p className="font-medium text-gray-800 truncate">{broker.headquarters}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600">Ngôn ngữ hỗ trợ</p>
                                    <p className="font-medium text-gray-800 truncate">{broker.languages.join(', ')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Support & Payment */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Hỗ trợ & Thanh toán</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Hỗ trợ khách hàng</p>
                                    <div className="space-y-1">
                                        {broker.support.map((method, index) => (
                                            <div key={index} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 truncate">{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Phương thức thanh toán</p>
                                    <div className="space-y-1">
                                        {broker.paymentMethods.map((method, index) => (
                                            <div key={index} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 truncate">{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Action Now</h3>
                        <p className="text-gray-400 mb-6">
                            Cung cấp thông tin chính xác và cập nhật về thị trường forex
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link href="/" className="text-gray-400 hover:text-white">
                                Sàn Forex
                            </Link>
                            <Link href="/news" className="text-gray-400 hover:text-white">
                                Tin Tức
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
} 