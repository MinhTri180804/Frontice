import React from 'react';
import './TableContents.scss';

interface Subsection {
  title: string;
  href: string;
}

interface Section {
  title: string;
  href: string;
  subsections?: Subsection[];
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  return (
    <div className="toc">
      <h3 id="toc-title">Table of Contents</h3>
      <ul>
        {sections.map((section, index) => (
          <li className="section" key={index}>
            <a href={section.href} className="section-title">
              {section.title}
            </a>
            {section.subsections && section.subsections.length > 0 && (
              <ul>
                {section.subsections.map((sub, subIndex) => (
                  <li className="sub-section" key={subIndex}>
                    <a href={sub.href}>{sub.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableContents;
