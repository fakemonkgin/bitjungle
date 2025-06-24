import Link from 'next/link';

const trainings = [
  { 
    id: 1, 
    title: "公司业务介绍", 
    description: "了解公司核心业务、发展历程和未来规划",
    duration: "45分钟",
    level: "入门",
    // 临时使用测试视频，替换为你的实际视频路径
    video: "/videos/video1.mp4", 
    // 如果你有本地视频，使用下面这行替换上面的
    // video: "/videos/video1.mp4", 
    ppt: "/ppt/video1.pptx"
  },
  // 可以添加更多培训内容
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#120a8f_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_#15803d_0%,_transparent_50%)] opacity-20"></div>
      
      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-semibold">返回首页</span>
            </Link>
            
            <div className="text-sm text-gray-400">
              培训课程总数: {trainings.length}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            培训中心
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            系统化的学习路径，助您快速掌握区块链安全知识
          </p>
        </div>

        {/* Training Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {trainings.map((training) => (
            <div 
              key={training.id} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              {/* Video Section */}
              <div className="relative aspect-video bg-gray-900">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={training.video} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-medium">
                    {training.level}
                  </span>
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-xs font-medium">
                    {training.duration}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {training.title}
                </h2>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {training.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <a
                    href={training.ppt}
                    download
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    下载资料
                  </a>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    观看视频
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for More Content */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">更多内容即将推出</h3>
            <p className="text-gray-400">我们正在准备更多精彩的培训内容，敬请期待！</p>
          </div>
        </div>
      </main>
    </div>
  );
}