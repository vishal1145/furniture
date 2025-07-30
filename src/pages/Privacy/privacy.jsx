import React from 'react';
import privacyData from '../../data/privacy.json';
import furnitureData from '../../data/furnitureData.json';
import Navbar from '../../components/Navbar';
import HeaderFile from '../../components/Header';
import Footer from '../../components/Footer';
import Features from '../../components/Features';

const Privacy = () => {
  const { title, breadcrumb, sections } = privacyData;
  const storeName = "AlgoFurnish"; // ✅ Replace with your real store name

  // Helper to render section content
  const renderContent = (section) => {
    if (section.title === 'Introduction') {
      const html = section.content.replace(
        'AlgoFurnish',
        '<strong>AlgoFurnish</strong>'
      );
      return (
        <p
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    return <p className="text-gray-700 leading-relaxed">{section.content}</p>;
  };

  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <HeaderFile data={privacyData} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Title (optional since HeaderFile already has title) */}
        {/* <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">{title}</h1> */}

        {/* Breadcrumb (optional visual enhancement) */}
        {/* <div className="text-sm text-gray-600 mb-8 text-center">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              <a href={item.href} className="text-green-700 hover:underline">
                {item.label}
              </a>
              {index < breadcrumb.length - 1 && ' / '}
            </span>
          ))}
        </div> */}

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl md:text-2xl font-semibold text-green-900 mb-2">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                renderContent(section)
              )}
            </div>
          ))}
        </div>
      </div>

      <Features data={furnitureData.features} />
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default Privacy;
