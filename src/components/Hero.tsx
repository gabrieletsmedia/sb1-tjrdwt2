import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#010529]/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-[#369ACA] rounded-full blur-3xl opacity-10 -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#369ACA] rounded-full blur-3xl opacity-10 bottom-0 right-0"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Atuação do direito bancário tradicional até o futuro das
            <span className="text-[#369ACA]"> inovações financeiras</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Escritório boutique focado em direito bancário, pagamentos, fintechs e criptoativos.
          </p>
        </div>
      </div>
    </div>
  );
}