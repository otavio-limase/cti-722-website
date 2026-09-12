import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook, 
  FaQuestionCircle, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaUser, 
  FaPhone, 
  FaCalendar 
} from 'react-icons/fa';
import { CHAPTER_INFO, FAQS } from '../data/chapterData';
import '../styles/contact/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    interestType: 'quero-entrar',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha pelo menos seu nome e telefone.');
      return;
    }
    // Simulação de envio com feedback visual
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-badge">Fale Conosco</div>
        <h1 className="contact-title">Entre em Contato & Seja um DeMolay</h1>
        <p className="contact-subtitle">
          Tem interesse em ingressar no Capítulo Templários de Itabira nº 722 ou quer saber mais sobre nossos
          projetos comunitários e filantrópicos em Itabira? Estamos prontos para recebê-lo!
        </p>
      </header>

      <div className="contact-layout-grid">
        {/* Painel Esquerdo: Informações de Contato e Redes */}
        <aside className="contact-info-panel">
          <div className="info-card-box">
            <h3>Informações do Capítulo</h3>
            <p className="chapter-fullname">{CHAPTER_INFO.name} nº {CHAPTER_INFO.number}</p>

            <ul className="info-items-list">
              <li className="info-item">
                <div className="info-icon-wrapper">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <strong>Localização</strong>
                  <p>{CHAPTER_INFO.city} - {CHAPTER_INFO.state}, Brasil</p>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-wrapper">
                  <FaEnvelope />
                </div>
                <div>
                  <strong>E-mail Institucional</strong>
                  <p>{CHAPTER_INFO.email}</p>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon-wrapper">
                  <FaCalendar />
                </div>
                <div>
                  <strong>Reuniões Capitulares</strong>
                  <p>Aos sábados, quinzenalmente no Templo Maçônico</p>
                </div>
              </li>
            </ul>

            <div className="social-channels-box">
              <h4>Acompanhe Nossas Atividades:</h4>
              <div className="social-links-row">
                <a 
                  href={CHAPTER_INFO.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-badge instagram"
                  aria-label="Instagram do Capítulo"
                >
                  <FaInstagram /> @cti722
                </a>
                <a 
                  href={CHAPTER_INFO.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-badge facebook"
                  aria-label="Facebook do Capítulo"
                >
                  <FaFacebook /> Templários 722
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Painel Direito: Formulário Interativo */}
        <main className="contact-form-panel">
          {submitted ? (
            <div className="form-success-card">
              <FaCheckCircle className="success-icon" />
              <h3>Mensagem Enviada com Sucesso!</h3>
              <p>
                Obrigado pelo seu interesse, <strong>{formData.name}</strong>. Nossa comissão de sindicância
                e liderança capitular entrará em contato com você pelo WhatsApp/telefone informado.
              </p>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    age: '',
                    phone: '',
                    email: '',
                    interestType: 'quero-entrar',
                    message: '',
                  });
                }}
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Formulário de Contato e Iniciação</h3>
              <p className="form-description">
                Preencha os campos abaixo. Jovens entre 12 e 21 anos podem manifestar interesse em ingressar.
              </p>

              <div className="form-group">
                <label htmlFor="name">Nome Completo *</label>
                <div className="input-with-icon">
                  <FaUser className="field-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label htmlFor="age">Sua Idade (anos)</label>
                  <div className="input-with-icon">
                    <FaCalendar className="field-icon" />
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="11"
                      max="30"
                      placeholder="Ex: 15"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group flex-2">
                  <label htmlFor="phone">Telefone / WhatsApp *</label>
                  <div className="input-with-icon">
                    <FaPhone className="field-icon" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(31) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <div className="input-with-icon">
                  <FaEnvelope className="field-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="interestType">Motivo do Contato</label>
                <select
                  id="interestType"
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="quero-entrar">Quero ingressar na Ordem DeMolay</option>
                  <option value="pais">Sou pai/mãe e gostaria de informações</option>
                  <option value="parceria">Proposta de projeto social / parceria filantrópica</option>
                  <option value="duvidas">Dúvidas gerais</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem ou Apresentação</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Conte um pouco sobre você, sua escola, interesses ou dúvidas..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-form">
                <FaPaperPlane className="btn-icon" /> Enviar Mensagem
              </button>
            </form>
          )}
        </main>
      </div>

      {/* Seção de Dúvidas Frequentes (FAQ) */}
      <section className="faq-section">
        <div className="faq-header">
          <div className="contact-badge">Perguntas Frequentes</div>
          <h2 className="faq-title">
            <FaQuestionCircle className="inline-icon" /> Dúvidas Comuns sobre a Ordem
          </h2>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${expandedFaq === idx ? 'expanded' : ''}`}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => toggleFaq(idx)}
                aria-expanded={expandedFaq === idx}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle-sign">{expandedFaq === idx ? '−' : '+'}</span>
              </button>
              {expandedFaq === idx && (
                <div className="faq-answer-box">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;

