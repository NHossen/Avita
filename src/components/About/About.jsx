// src/components/About/About.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaCogs, FaTruck, FaClipboardCheck, FaHandshake } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <motion.section
        className="relative bg-green-600 text-white rounded-lg p-10 flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('aboutHeroTitle', 'About Avita Logistics')}</h1>
          <p className="text-lg md:text-xl">
            {t('aboutHeroDesc', `"Avita" LLC was founded in August 2013. Our goal is to reduce the supply chain time and costs of international cargo transportation through new ideas, a rational, calculated approach to processes, and constant monitoring.`)}
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1581091012184-67dbb0f73b92?auto=format&fit=crop&w=800&q=80"
            alt="Logistics Hero"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </motion.section>

      {/* About Details */}
      <motion.section
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">{t('aboutTitle', 'About Us')}</h2>
        <p className="text-gray-700 mb-6">
          {t('aboutDescription', `"Avita" LLC was founded in August 2013. Number of employees: ≈ 5. Partner and employee satisfaction is a primary concern for the organization. We aim to provide efficient, cost-effective, and reliable logistics solutions for our clients worldwide.`)}
        </p>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Advantage Item */}
        <Advantage
          icon={<FaGlobe className="text-green-600 text-3xl" />}
          title={t('advGeo', 'Global Coverage')}
          desc={t('advGeoDesc', 'Cargo transportation geography: more than 197 countries')}
        />
        <Advantage
          icon={<FaUsers className="text-green-600 text-3xl" />}
          title={t('advExp', 'Experienced Team')}
          desc={t('advExpDesc', 'Experience: more than 5 years in logistics and international cargo')}
        />
        <Advantage
          icon={<FaCogs className="text-green-600 text-3xl" />}
          title={t('advUnique', 'Unique Approach')}
          desc={t('advUniqueDesc', 'A unique approach to each project to ensure optimal results')}
        />
        <Advantage
          icon={<FaTruck className="text-green-600 text-3xl" />}
          title={t('advEff', 'Efficient Logistics')}
          desc={t('advEffDesc', 'We optimize every step of the supply chain to save time and cost')}
        />
        <Advantage
          icon={<FaClipboardCheck className="text-green-600 text-3xl" />}
          title={t('advDoc', 'Proper Documentation')}
          desc={t('advDocDesc', 'Accurate paperwork, customs clearance, and insurance handled professionally')}
        />
        <Advantage
          icon={<FaHandshake className="text-green-600 text-3xl" />}
          title={t('advTrust', 'Trusted by Clients')}
          desc={t('advTrustDesc', 'Every second customer comes with the guarantee of the previous one. We cooperate with individuals and companies')}
        />
      </motion.section>

      {/* Customer Focus Section */}
      <motion.section
        className="mt-12 bg-gray-50 p-10 rounded-lg shadow-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-bold mb-4">{t('customerFocus', 'Customer First')}</h3>
        <p className="text-gray-700 mb-2">
          {t('customerDesc1', 'Our priority is to ensure timely deliveries with zero compromise on safety and quality.')}
        </p>
        <p className="text-gray-700 mb-2">
          {t('customerDesc2', 'We continuously innovate logistics solutions and provide personal attention to every shipment.')}
        </p>
        <p className="text-gray-700">
          {t('customerDesc3', 'Partner satisfaction, transparency, and long-term relationships are the cornerstones of our business.')}
        </p>
      </motion.section>
    </div>
  );
};

// Advantage Component
const Advantage = ({ icon, title, desc }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow hover:shadow-lg flex flex-col items-start gap-3"
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
  >
    {icon}
    <h4 className="text-xl font-bold text-green-700">{title}</h4>
    <p className="text-gray-700">{desc}</p>
  </motion.div>
);

export default About;
