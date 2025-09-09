import React from "react";
import home from "../imgs/home.png";
import projep from "../imgs/projep.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-backgound">
      <img src={home} alt="home" className="w-full h-96 object-cover" />
      <div className="px-6 md:px-12 mt-4">
        <h1 className="text-3xl font-semibold text-titleText">
          Confira nossos serviços e soluções:
        </h1>
        <div className="overflow-x-auto">
          <ul className="mt-4 space-y-2 text-principalText flex flex-row text-center">
            <li className="px-4">Desenvolvimento de Software Personalizado</li>
            <li className="px-4">Consultoria em Transformação Digital</li>
            <li className="px-4">Integração de Sistemas</li>
            <li className="px-4">Automação de Processos</li>
            <li className="px-4">Desenvolvimento de Aplicações Móveis</li>
            <li className="px-4">Serviços de Nuvem e Infraestrutura</li>
            <li className="px-4">Análise e Visualização de Dados</li>
            <li className="px-4">Suporte e Manutenção de TI</li>
          </ul>
        </div>
        <img
          src={projep}
          alt="projep"
          className="py-10 px-24 lg:px-96 w-auto h-auto object-cover"
        />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.70142303836508!2d-46.69804108571693!3d-23.488484316264522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef9b18f13d50f%3A0x58724b3121d68d80!2sGrupo%20JEP%20Terceiriza%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1757439846617!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{
          border: 0,
          width: "100%",
          height: "350px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Home;
