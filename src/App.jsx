import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7ww7xe8", "template_bcform", form.current, "uM1XHE2nEPyMWI-GE")
      .then(() => alert("Mensagem enviada com sucesso!"))
      .catch(() => alert("Erro ao enviar mensagem. Tente novamente mais tarde."));
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#1e3a8a", color: "white", fontFamily: "Arial, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem", backgroundColor: "#1e40af" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="/logo.jpg.jpg" alt="BC Contabilidade Logo" style={{ height: "64px" }} />
          <div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "bold" }}>BC CONTABILIDADE</h1>
            <p style={{ color: "#facc15", fontWeight: "500" }}>Soluções inteligentes para sua tranquilidade fiscal</p>
          </div>
        </div>
        <a href="https://wa.me/5521974094213" style={{ backgroundColor: "#22c55e", padding: "0.5rem 1rem", color: "white", borderRadius: "0.5rem", textDecoration: "none" }}>
          <FaWhatsapp style={{ marginRight: "0.5rem" }} /> Fale conosco
        </a>
      </header>

      <section style={{ padding: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Contabilidade completa para sua empresa</h2>
        <p style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto" }}>
          Atendimento presencial e online em todo o RJ. Conte com uma equipe experiente e comprometida com o sucesso do seu negócio.
        </p>
        <a href="#servicos" style={{ display: "inline-block", marginTop: "1.5rem", backgroundColor: "#facc15", color: "#1e3a8a", fontWeight: "bold", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none" }}>
          Conheça nossos serviços
        </a>
      </section>

      <section id="servicos" style={{ padding: "3rem", backgroundColor: "white", color: "#1e3a8a" }}>
        <h3 style={{ fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>Nossos Serviços</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {["Assessoria Contábil", "Assessoria Fiscal", "Departamento Pessoal", "Planejamento Tributário", "Legalização de Empresas", "Assessoria Pessoa Física", "BPO Financeiro"].map((servico, index) => (
            <div key={index} style={{ borderRadius: "1rem", backgroundColor: "#f0f0f0", padding: "1.5rem", textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h4 style={{ fontWeight: "600" }}>{servico}</h4>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "3rem", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "1rem" }}>Quem somos</h3>
       <p style={{ maxWidth: "600px", margin: "0 auto" }}>
  A BC Contabilidade oferece soluções completas para empresas de todos os portes, profissionais liberais, MEIs e organizações sem fins lucrativos. Atuamos com responsabilidade, proximidade e excelência, unindo agilidade, compliance e planejamento estratégico para impulsionar o sucesso do seu negócio.
</p>
      </section>

      <section style={{ padding: "3rem", backgroundColor: "white", color: "#1e3a8a" }}>
        <h3 style={{ fontSize: "1.875rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>Últimos Artigos do Blog</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {["Como manter sua empresa em dia com o fisco", "MEI: obrigações e vantagens", "Planejamento tributário inteligente"].map((post, index) => (
            <div key={index} style={{ borderRadius: "1rem", backgroundColor: "#f0f0f0", padding: "1.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>{post}</h4>
              <p style={{ fontSize: "0.875rem" }}>Confira dicas e informações úteis para o sucesso da sua gestão contábil.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" style={{ padding: "3rem", backgroundColor: "#1e40af", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Fale Conosco</h3>
        <form ref={form} onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input name="user_name" placeholder="Seu nome" style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }} />
          <input name="user_email" placeholder="Seu e-mail" type="email" style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }} />
          <textarea name="message" placeholder="Sua mensagem" style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none" }} />
          <button type="submit" style={{ backgroundColor: "#facc15", color: "#1e3a8a", fontWeight: "bold", padding: "0.75rem", borderRadius: "0.5rem", border: "none" }}>
            Enviar mensagem
          </button>
        </form>
      </section>

      <section style={{ padding: "3rem", backgroundColor: "#1e40af", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Informações de Contato</h3>
        <p>WhatsApp: <a href="https://wa.me/5521974094213" style={{ color: "#facc15" }}>(21) 97409-4213</a></p>
        <p>Email: <a href="mailto:bc.consultoriacontabil@gmail.com" style={{ color: "#facc15" }}>bc.consultoriacontabil@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/bruno.c.contabilidade" style={{ color: "#facc15" }}>@bruno.c.contabilidade</a></p>
        <p>Endereço: Av. Dr. Albino Imparato, 1122 Sala 07 - São Gonçalo, RJ</p>
      </section>

      <footer style={{ padding: "1.5rem", backgroundColor: "#1e3a8a", textAlign: "center", fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} BC CONTABILIDADE. Todos os direitos reservados.
      </footer>
    </main>
  );
}